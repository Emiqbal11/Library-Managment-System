
import React,{useState} from 'react'
import PageLayout from '../../components/PageLayout'
import {Container,Row,Col,Button,Alert,Form} from 'react-bootstrap';
import * as FiIcons from "react-icons/fi";
import InputField from '../../components/common/InputField';
import Dropdown from '../../components/common/Dropdown';
import {studentDepartment,studentGender } from '../Book/dummyData';
import { useNavigate } from 'react-router-dom';
import { createData } from '../../lib/services';

const AddNewStudent = () => {
    const navigate=useNavigate();
    const [classNo, setClassNo] = useState('')
    const [studentName, setStudentName] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [cnic, setCnic] = useState('')
    const [gender,setGender]=useState('Male')
    const [department,setDepartment]=useState('Computer Science')
    const [mobileNumber, setMobileNumber] = useState('')
    const [district,setDistrict]=useState('')
   const handleCreate = () =>{
     let temp={
       classNo,
       studentName,
       fatherName,
       cnic,
       mobileNumber,
       district,
       department,
       gender
     };
     createData('students',temp);
     navigate('/ViewStudents')

   }
    return (
        <PageLayout><hr/>
          <div className="titleStyle">
    <i ><FiIcons.FiArrowRightCircle/></i> {"Add New Student Here" }
</div><hr/>
            <Container style={{margin:"auto" ,width:"800px"}}>
                <Form style={{}}>
                <Row>
                <Col>
               <InputField value={classNo}setValue={setClassNo} label='Class No' type='number' placeholder={"class no"} /></Col>
                <Col>
                <InputField value={studentName}setValue={setStudentName} label='Student Name' type='text' placeholder={"student name "} />
                </Col>
                </Row><br/>
                <Row>
                    <Col>
                    <InputField value={fatherName}setValue={setFatherName} label='Father Name' type='text' placeholder={"father name"} />
                  </Col>
                    <Col>
                    <InputField value={cnic}setValue={setCnic} label='C N I C' type='number' placeholder={"national identity card number"} />
               </Col>
               </Row><br/>
                <Row>
                    <Col>
                    <Dropdown label={'Select Gender'} value={gender} setValue={setGender}  options={studentGender}/>
        </Col>
         <Col>
         <Dropdown label={'Department' } value={department} setValue={setDepartment} options={studentDepartment}/>
          </Col>
        </Row><br/>
                <Row>
                  <Col>
                  <InputField value={mobileNumber}setValue={setMobileNumber} label='Mobile Number' type='number' placeholder={"mobile number"} />
                  </Col>
                  <Col>
                  <InputField value={district} setValue={setDistrict} label='District' type='text' placeholder={"district"} />
                  </Col>
                   </Row><br/>
                <Button style={{background:"#11283F" ,width:"200px",borderRadius:50,}} onClick={handleCreate}>Save </Button>
                </Form>
            </Container>
        </PageLayout>
    )
}

export default AddNewStudent;

