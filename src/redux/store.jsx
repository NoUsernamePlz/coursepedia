import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './courseSlice';
import studentsReducer from './studentSlice';

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    students: studentsReducer,  
  },
  devTools: true,
});