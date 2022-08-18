import React, { useState, useEffect } from "react";
import "./Viewbook.css";
import * as FiIcons from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import PageLayout from "../../components/PageLayout";
import CommonButton from '../../components/common/CommonButton';
import InputField from "../../components/common/InputField";
import { deleteData, getData } from "../../lib/services";
function ViewBook() {
  
  const navigate = useNavigate();
  const [search, setSearch] = useState('')
  const [bookData, setBookData] = useState([])
  useEffect(()=>{getData('books',setBookData)},[])
  return (
    <PageLayout><hr/>
    <div className="titleStyle">
    <i ><FiIcons.FiArrowRightCircle/></i> {"View  All Book Here " }
</div><hr/>
      <div  className="search">
        <InputField type='text'  placeholder="search by Book,author Name,ISBN..." value={search} setValue={setSearch}/>
        
      </div><br/>
      <div className="container">  
        <Table striped bordered hover size="sm" responsive>
          <thead>
          <tr>
            <th>Book Name</th>
            <th>Author Name</th>
            <th >Publication Name </th>
            <th> I S B N</th>
            <th>Book Quantity</th>
            <th>Book Category</th>
            <th>Option</th>
          </tr>
          </thead>
          <tbody>
          {bookData && bookData.filter((a)=>`${a.bookName} ${a.bookCategory}    ${a.authorName} ${a.isbn} `.toLowerCase(search).includes(search)).map((book, i) => (
             <tr key={i}>
             <td>{book.bookName}</td>
              <td>{book.authorName}</td>
              <td>{book.publicationName}</td>
              <td>{book.isbn}</td>
              <td>{book.quantity}</td>
              <td>{book.bookCategory}</td>
              <td>
                <CommonButton title='Edit' onClick={()=>navigate('/Editbook',{state:{book}})}style={editButton}/>
                <CommonButton title='Delete' onClick={()=>deleteData('books',book.id)} style={deleteButton}/>
              </td>
            </tr>
          ))
          }
         
          </tbody>
        </Table>
      </div>
    </PageLayout>
  );
}

export default ViewBook;
const editButton={
  margin:"4px",
  padding:"2px",background:"green", color:"white",fontFamily:"Arial",

}
const deleteButton={
  margin:"4px",padding:"2px",background:"red", color:"white",fontFamily:"Arial",


}
