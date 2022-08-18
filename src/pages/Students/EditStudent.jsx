import React,{useState} from 'react'
import PageLayout from '../../components/PageLayout'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import InputField from '../../components/common/InputField';
import {Container,Row,Col,Form} from 'react-bootstrap';
import * as FiIcons from "react-icons/fi";
import Dropdown from '../../components/common/Dropdown';
import CommonButton from '../../components/common/CommonButton';
import { updateData } from '../../lib/services';
import {studentDepartment, studentGender } from '../Book/dummyData';

const EditStudent = () => {
    const navigate=useNavigate();
    const locataion=useLocation();
    const studentData=locataion.state.data;

    console.log('student data',studentData);

    const [classNo, setClassNo] = useState(studentData.classNo)
    const [studentName, setstudentName] = useState(studentData.studentName)
    const [fatherName, setfatherName] = useState(studentData.fatherName)
    const [cnic,setCnic] = useState(studentData.cnic)
    const [gender,setGender] = useState(studentData.gender)
    const [department,setDepartmen] = useState(studentData.department)
    const [mobileNumber,setMobileNumber] = useState(studentData.mobileNumber)
    const [district,setDistrict] = useState(studentData.district)
    
    console.log('gender',gender)
    const handleUpdate =()=>{
        let temp={
         classNo,
         studentName,
         fatherName,
         cnic:cnic,
         mobileNumber,
         gender,
         department,
         district,
     };
  updateData('students',studentData.id,temp)
  navigate('/ViewStudents')
     }
  return (
        <PageLayout>
            <hr/>
          <div className="titleStyle">
    <i ><FiIcons.FiArrowRightCircle/></i> {"Edit Student Info" }
</div><hr/>
            <Container style={{margin:"auto" ,width:"800px"}}>
                <Form style={{}}>
                <Row>
                <Col>
               <InputField value={classNo} setValue={setClassNo} label='Class No' type='number' placeholder={"class no "} />
               </Col>
                <Col>
               <InputField value={studentName} setValue={setstudentName} label='Student Name' type='text' placeholder={"student name"} />
               </Col>
                </Row><br/>
                <Row>
                <Col>
               <InputField value={fatherName} setValue={setfatherName} label='Father Name' type='text' placeholder={"father  name"} />
               </Col>
                <Col>
               <InputField value={cnic} setValue={setCnic} label='C N I C' type='number' placeholder={"National identity card number"} />
               </Col>
               </Row><br/>
                <Row>
                <Col>
               <Dropdown label={'Select Gender'}   value={gender}  setValue={setGender}  options={studentGender}/>
               </Col>
               <Col>

               <Dropdown label={'Select Department'} value={department} setValue={setDepartmen}  options={studentDepartment}/>
</Col> </Row><br/>
     <Row>
             <Col>
               <InputField value={mobileNumber} setValue={setMobileNumber} label='Mobile Number' type='number' placeholder={"Mobile Number"} />
               </Col>
               <Col>
               <InputField value={district} setValue={setDistrict} label='District' type='text' placeholder={"district"} />
               </Col>
               </Row><br/>
                <CommonButton title='Update' onClick={handleUpdate}style={updateButton}/>

                </Form>
                </Container>
                </PageLayout>
    )
}

export default EditStudent
const updateButton={
    margin:"4px",
    padding:"2px",background:"green", color:"white",fontFamily:"Arial",
    fontweight:"bolder",
    width:"200px",
    height:"40px",
    borderRadius:200,
    borderWidth:1,
    borderColor:'white',


}