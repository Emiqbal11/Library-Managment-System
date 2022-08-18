
import React, { useState,useEffect } from "react";
import PageLayout from '../../components/PageLayout'
import * as FiIcons from "react-icons/fi";
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom'
import CommonButton from '../../components/common/CommonButton';
import InputField from "../../components/common/InputField";
import { deleteData, getData } from "../../lib/services";

const ViewStudents = () => {
    let navigate=useNavigate();
    const [search, setSearch] = useState('')
    const [studentData,setstudentData] =useState('')
    useEffect(()=>{getData('students',setstudentData)},[])
    return (
        <PageLayout><hr/>
           <div className="titleStyle">
    <i><FiIcons.FiArrowRightCircle/></i> {"View All Students Here" }
</div><hr/>
          <div className="search">
        <InputField type='text'  placeholder="search by classno,name,department..." value={search} setValue={setSearch}/>
        </div><br/>


        <div className="container">
        <Table striped bordered hover size="sm" responsive="lg">
          <thead>
          <tr>
            <th>Class No</th>
            <th>Name</th>
            <th>Father Name</th>
            <th>CNIC</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Mobile No</th>
            <th>District</th>
            <th>Option</th>
          </tr>
          </thead>
          <tbody>
          {studentData && studentData.filter((a)=>`${a.classNo}  ${a.studentName} ${a.fatherName} ${a.department}`.toLowerCase(search).includes(search)).map((data, i) => (
            <tr key={i}>
              <td>{data.classNo}</td>
              <td>{data.studentName}</td>
              <td>{data.fatherName}</td>
              <td>{data.cnic}</td>
              <td>{data.gender}</td>
              <td>{data.department}</td>
              <td>{data.mobileNumber}</td>
              <td>{data.district}</td>
              <td>
                <CommonButton title='Edit' onClick={()=>navigate('/EditStudent',{state:{data}})}style={editButton}/>
                 <CommonButton title='Delete' onClick={()=>deleteData('students',data.id)}  style={deleteButton}/>
              </td>
            </tr>
           ) )}
           </tbody>
        </Table>
      </div> 
        </PageLayout>
    )
}

export default ViewStudents

const editButton={
  margin:"4px",
  padding:"2px",background:"green", color:"white",fontFamily:"Arial",

}
const deleteButton={
  margin:"4px",padding:"2px",background:"red", color:"white",fontFamily:"Arial",


}