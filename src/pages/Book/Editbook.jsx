import React,{useState} from 'react'
import PageLayout from '../../components/PageLayout'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import InputField from '../../components/common/InputField';
import {Container,Row,Col,Button,Alert,Form} from 'react-bootstrap';
import { bookcategory } from './dummyData'
import * as FiIcons from "react-icons/fi";
import CommonButton from '../../components/common/CommonButton';
import Dropdown from '../../components/common/Dropdown';
import { updateData } from '../../lib/services';


const Editbook = () => {
    const navigate=useNavigate();
    const locataion=useLocation();
    const bookData=locataion.state.book;
    const [bookName, setbookName] = useState(bookData.bookName)
    const [authorName, setauthorName] = useState(bookData.authorName)
     const [isbn, setisbn] = useState(bookData.isbn)
    const [publicationName, setpublicationName] = useState(bookData.publicationName)
    const [quantity, setquantity] = useState(bookData.quantity)
    const [category,setcatgory]=useState(bookData.bookCategory)

    const handleUpdate=()=>{
       let temp={bookName:bookName,
        authorName:authorName,
        isbn:isbn,
        publicationName:publicationName,
        quantity:quantity,
        bookCategory:category
        
    };
    updateData('books',bookData.id,temp)
        navigate('/Viewbook')
        
    }
  return (
        <PageLayout>
            <hr/>
          <div className="titleStyle">
    <i ><FiIcons.FiArrowRightCircle/></i> {"Edit Book Details" }
</div><hr/>
            <Container style={{margin:"auto" ,width:"800px"}}>
                <Form style={{}}>
                <Row>
                <Col>
               <InputField value={bookName} setValue={setbookName} label='Book Name' type='text' placeholder={"book name"} />
               </Col>
                <Col>
               <InputField value={authorName} setValue={setauthorName} label='Author Name' type='text' placeholder={"author  name"} />
               </Col>
                </Row><br/>

                <Row>
                <Col>
               <InputField value={publicationName} setValue={setpublicationName} label='Publication Name' type='text' placeholder={"publication name"} />
               </Col>
                <Col>
               <InputField value={isbn} setValue={setisbn} label='I S B N' type='number' placeholder={"International standard book number "} />
               </Col>
                </Row><br/>
                <Row>
                <Col>
               <InputField value={quantity} setValue={setquantity} label='Book Quantity' type=' number' placeholder={"book quantity"} />
               </Col>
                <Col>
                {/* <Dropdown label='Select Category' placeholder={'Select Category'} defaultvalue={category.label} onChange={setcatgory} options={bookcategory}/> */}

<Dropdown label='select Category' value={category} setValue={setcatgory} options={bookcategory}/>



                </Col>
              </Row>

                <CommonButton title='Update' onClick={handleUpdate}style={updateButton}/>

                </Form>
                </Container>
                </PageLayout>
    )
}

export default Editbook
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