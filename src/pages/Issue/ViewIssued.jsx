import React, { useEffect, useState } from 'react'
import PageLayout from '../../components/PageLayout'
import * as FiIcons from "react-icons/fi";
import { Table } from 'react-bootstrap';
import { deleteData, getData, getSpecfic, updateData } from '../../lib/services';
import CommonButton from '../../components/common/CommonButton';
import InputField from '../../components/common/InputField';


const ViewIssued =()=> {
  const [IssuedBookData, setIssuedBookData] = useState([1])
  const [spBook,setSpecficBook]=useState([]);
  const [search,setSearch] =useState([]);
  useEffect(()=>{
    getData('issuedBooks',setIssuedBookData)
    
   
  },[])
   
const calcFine=async record=>{
  
  
  try{
    let totalTime=new Date().getTime()-new Date(record.fromDate).getTime();
    let totalDaysRough=totalTime/(1000*3600*24)
    let totalDaysPure= Math.trunc(totalDaysRough);
    let fine=totalDaysPure*5;
     
    let issudedData={fine,isReturn:true}
    updateData("issuedBooks",record.id,issudedData);
    let updateBooks =  {quantity:0};
     getSpecfic('books',record.bookId,setSpecficBook).then(async (res)=>{
       console.log(res.quantity)
       updateBooks.quantity = res.quantity+1
        await updateData('books',record.bookId,updateBooks);
       
     });
    
  //  getSpecfic('books',record.bookId,setSpecficBook);

   
    }

         catch(error){
console.log('Error in in return fun',error.message)
  }
  
}
    return (
        <div>
            <PageLayout><hr/>
           <div className="titleStyle">
    <i><FiIcons.FiArrowRightCircle/></i> {"View Issued Books" }
</div><hr/>
<div  className="search">
        <InputField type='text'  placeholder="search by classno,studentName,bookName..." value={search} setValue={setSearch}/>
        
      </div><br/>
<div className="container">
        <Table
         striped bordered hover size="sm" responsive="lg">
          <thead>
          <tr>
            <th>Class No</th>
            <th>Student Name</th>
            <th>Book Name</th>
            <th>Book Author</th>
            <th>Issue Date</th>
            <th>Expiry Date</th>
            <th>Fine</th>
            <th>Option</th>
          </tr>
          </thead>
          <tbody>
          {IssuedBookData && IssuedBookData.filter((a)=>`${a.classNo}  ${a.studentName} ${a.bookName} `.toLowerCase(search).includes(search)).map((book,i) => (
            <tr key={i}>
              <td>{book?.classNo}</td>
              <td>{book?.studentName}</td>
              <td>{book?.bookName}</td>
              <td>{book?.authorName}</td>
              <td>{book?.toDate}</td>
              <td>{book?.fromDate}</td>
              <td>{book?.fine}</td>
              <td>
                {
            book.isReturn===false?<CommonButton title='Return'style={editButton} onClick={()=>calcFine(book)} />:
            <CommonButton title='Delete' onClick={()=>deleteData('issuedBooks',book.id)}  style={deleteButton}/>

             
                }
              </td>
            </tr>
          ))}
           </tbody>
        </Table>
      </div> 
            </PageLayout>
            
        </div>
    )
}

export default ViewIssued
const editButton={
  margin:"2px",
  padding:"1px",background:"green", color:"white",fontFamily:"Arial",

}
const deleteButton={
  margin:"2px",padding:"1px",background:"red", color:"white",fontFamily:"Arial",


}
