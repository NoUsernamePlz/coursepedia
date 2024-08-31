
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import CourseDetails from './pages/course-detail/CourseDetails'
import Dashboard from './pages/dashboard/Dashboard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchCourses } from './redux/courseSlice'

function App() {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.courses);
  const status = useSelector(state => state.courses.status);
  useEffect(() => {
   if(status ==='idle'){
    dispatch(fetchCourses());
   }
      
  }, [status,dispatch]);

  console.log(courses)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:id" element={<CourseDetails/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        
      </Routes>
    </Router>
  )
}

export default App
