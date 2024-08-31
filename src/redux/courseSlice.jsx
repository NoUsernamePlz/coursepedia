/* eslint-disable no-unused-vars */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fireDB } from "@/firebase/FirebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

const initialState = {
  courses: [],
  status: "idle",
  error: null,
};

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    return new Promise((resolve, reject) => {
      const q = collection(fireDB, "courses");
      onSnapshot(
        q,
        (QuerySnapshot) => {
          let data = [];
          QuerySnapshot.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id });
          });
          console.log(data);
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
);


const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
     
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});


export default coursesSlice.reducer;
