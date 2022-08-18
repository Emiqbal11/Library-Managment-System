import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Dashboard/Home";
import AddBook from "./pages/Book/AddBook";
import Editbook from "./pages/Book/Editbook";
import Viewbook from "./pages/Book/ViewBook";
import ReturnBook from "./pages/Book/ReturnBook";
import AddNewStudent from "./pages/Students/AddNewStudent";
import EditStudent from "./pages/Students/EditStudent";
import ViewStudents from "./pages/Students/ViewStudents";
import IssueBook from "./pages/Issue/IssueBook";
import ViewIssued from "./pages/Issue/ViewIssued";
import Login from "./pages/login/Login";
import Signup from "./pages/login/Signup";
import Admin from "./pages/Admin/Admin";
import { firestore } from "./lib/firebase";
import {AuthContext, useAuthContext} from './context/AuthContext'


function App() {
 const {currentAuth}=useAuthContext();
  
  return (
   
    <>
      <Router>
        <Routes>
        
        {currentAuth && currentAuth?<Route path="/" element={<Home />} />: <Route path="/Login" element={<Login/>}/>}
          <Route path="/AddBook" element={<AddBook />} />
          <Route path='/Editbook' element={<Editbook/>}/>
          <Route path="/Viewbook" element={<Viewbook />} />
          <Route path="/AddNewStudent" element={<AddNewStudent />}/>
          <Route path='/EditStudent' element={<EditStudent/>}/>
          <Route path="/ViewStudents" element={<ViewStudents />}/>
          <Route path="/IssueBook" element={<IssueBook/>}/>
          <Route path="/ViewIssued" element={<ViewIssued/>}/>
          <Route path="/ReturnBook" element={<ReturnBook/>}/>  
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Admin" element={<Admin/>}/>




           </Routes>
      </Router>
    </>
  );
}

export default App;
