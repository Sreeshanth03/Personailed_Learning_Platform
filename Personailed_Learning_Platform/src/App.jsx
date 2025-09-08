import React from "react";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import Student from "./Components/DashBoard/StudentDashBoard/Student";
import Instructor from "./Components/DashBoard/Instructor/Instructor";
import Manager from "./Components/DashBoard/Admin/Admin";
export const url = "https://personalied-learning-platform.onrender.com/";
// https://personalied-learning-platform.onrender.com
import Home from "./Home/Home";
import Tutors from "./Home/Tutors/Tutors";
import Enroll from "./Components/DashBoard/StudentDashBoard/Enroll/Enroll";
import StudentDetails from "./Components/DashBoard/StudentDashBoard/StudentDetails/StudentDetails";
import Quiz from "./Components/DashBoard/StudentDashBoard/Quiz/Quiz";
import React1 from "./Components/DashBoard/StudentDashBoard/Quiz/AllQuiz/React1";
import Python1 from "./Components/DashBoard/StudentDashBoard/Quiz/AllQuiz/Python1"
import Sap1 from "./Components/DashBoard/StudentDashBoard/Quiz/AllQuiz/Sap"
import Java1 from "./Components/DashBoard/StudentDashBoard/Quiz/AllQuiz/Java1"
import C1 from "./Components/DashBoard/StudentDashBoard/Quiz/AllQuiz/C1"
import Certificate from "./Components/DashBoard/StudentDashBoard/Quiz/Certificate/Certificate";
import Post from "./Components/DashBoard/Instructor/Post/Post";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tutors" element={<Tutors />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Student" element={<Student />}></Route>
        <Route path="/enroll" element={<Enroll />}></Route>
        <Route path="/StudentDetails" element={<StudentDetails />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/react" element={<React1 />}></Route>

          <Route path="/python" element={<Python1/>}></Route>
          <Route path="/sap" element={<Sap1/>}/>
<Route path="/java" element={<Java1/>}></Route>
<Route path="/c" element={<C1/>}></Route>

        <Route path="/Instructor" element={<Instructor />}></Route>
        <Route path="/post"element={<Post/>}></Route>
        <Route path="/Admin" element={<Manager />}></Route>
        <Route path="/certificate" element={<Certificate/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
