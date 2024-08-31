/* eslint-disable no-unused-vars */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fireDB } from '@/firebase/FirebaseConfig';
import { arrayRemove, arrayUnion, collection, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { toast } from 'sonner';

const initialState = {
  students: [],
  status: 'idle',
  error: null,
};

export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
  return new Promise((resolve, reject) => {
    const q = collection(fireDB, 'students');
    onSnapshot(q, (QuerySnapshot) => {
      let data = [];
      QuerySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      console.log(data);
      resolve(data);
    }, (error) => {
      reject(error);
    });
  });
});

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    markAsCompleted: (state, action) => {
      console.log(action)
      const student = state.students.find(student => 
        student.enrolledCourses.some(course => course.id === action.payload)
      );
    
      if (student) {
        const course = student.enrolledCourses.find(course => course.id === action.payload);
        if (course) {
          if (course.complete) {
            toast.error("This course is already completed!!");
          } else {
            
            const updatedCourse = {
              ...course,
              complete: true,
              progress: "100"
            };
    
            const studentDocRef = doc(fireDB, 'students', student.id);
            updateDoc(studentDocRef, {
              enrolledCourses: arrayRemove(course)
            })
            .then(() => {
              return updateDoc(studentDocRef, {
                enrolledCourses: arrayUnion(updatedCourse)
              });
            })
            .then(() => {
              console.log("Course marked as completed in Firebase");
              toast.success("Congratulations! You Successfully Completed The Course");
            })
            .catch((error) => {
              console.error("Error updating document: ", error);
              toast.error("Failed to update the course in the database.");
            });

            course.complete = true;
            course.progress = "100";
          }
        }
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { markAsCompleted } = studentsSlice.actions;
export default studentsSlice.reducer;
