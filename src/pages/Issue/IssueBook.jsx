import React, { useEffect, useState } from 'react'
import PageLayout from '../../components/PageLayout'
import { useNavigate } from 'react-router-dom'
import CommonButton from '../../components/common/CommonButton';
import * as FiIcons from "react-icons/fi";
import { Container,Row,Col } from 'react-bootstrap';
import { createData, getAll, updateData } from '../../lib/services';
import { DropdownFirebaseData } from '../../components/common/Dropdown'
import './issue.css'

const  IssueBook = () => {
const navigate=useNavigate();
    const [allBooks, setAllBooks] = useState([]);
    const [allStudents, setAllStudents] = useState([]);
    const [book, setBook] = useState();
    const [fromDate, setFromDate] = useState();
    const [toDate, setToDate] = useState()
    const [student, setStudent] = useState();
    
    useEffect(() => {
 getAll('books',setAllBooks);
 getAll('students',setAllStudents)
    }, []);
    
const handleIssueBook=()=>{
    let bookTemp;
    let studenttemp;
allBooks.filter((el,index)=>{
    if(el.id===book) {
         bookTemp={
             bookId:el.id,
            bookName:el.bookName,
            authorName:el.authorName,
            quantity:el.quantity-1,          
        };
    }
})
allStudents.filter((el,index)=>{
    if(el.id===student) {
         studenttemp={
             studentId:el.id,
            classNo:el.classNo,
            studentName:el.studentName
         };
    }
})

    
        let temp={...bookTemp,...studenttemp,fromDate:fromDate,toDate:toDate,isReturn:false,fine:0}
        console.log('outside loop temp is=',temp)
      createData('issuedBooks',temp);
       updateData('books',bookTemp.bookId,{quantity:bookTemp.quantity})
    // console.log(`book id${bookTemp.bookId}.... qauntity${allBooks.quantity}`)
    
         navigate('/ViewIssued')
    }
    return (
        <div>
            <PageLayout><hr/>
            <div className="titleStyle">
    <i ><FiIcons.FiArrowRightCircle/></i> {"Issue New Book Here" }
</div><hr/>
<Container style={{margin:"auto" ,width:"500px"}}>
    <Row>
        <Col>
     <DropdownFirebaseData label='Student ID' value={student} setValue={setStudent} options={allStudents}/>
     </Col>
     </Row><br/>
     <Row>
         <Col>
         <DropdownFirebaseData label='Select Book' value={book} setValue={setBook} options={allBooks}/>

         </Col>
     </Row><br/>
<Row><Col>
<h5 className='timedate'>Issue Date</h5>
<input type={'date'} value={toDate} onChange={({target})=>setToDate(target.value)}/>
</Col>
<br/>
<Col>
<h5 className='timedate'>Expiry Date</h5>
<input type={'date'} value={fromDate} onChange={({target})=>setFromDate(target.value)}/>
</Col>
</Row><br/>
 <Row>
     <Col>
     <CommonButton title='Issue Book  ' onClick={handleIssueBook} style={kogin}/></Col>
     </Row>
     </Container>
            </PageLayout> 
        </div>
         
    )
}

export default IssueBook
const kogin={
    margin:"4px",
    padding:"2px",background:"green", color:"white",fontFamily:"Arial",
    fontweight:'Bolder',
    width:"200px",
    height:"40px",
    borderRadius:200,
    borderWidth:1,
    borderColor:'white',


}

