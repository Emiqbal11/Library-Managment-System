import React,{useState} from 'react'
import PageLayout from '../../components/PageLayout'
import {Container,Row,Col,Button,Alert,Form} from 'react-bootstrap';
import * as FiIcons from "react-icons/fi";
import { useNavigate } from 'react-router-dom'
import Dropdown from '../../components/common/Dropdown';
import { bookcategory } from './dummyData'
import InputField from '../../components/common/InputField';
import { createData } from '../../lib/services';
const AddBook = () => {
    const navigate=useNavigate();
    const [bookName, setBookName] = useState('')
    const [authorName, setAuthorName] = useState('')
    const [publicationName,setpublicationname]=useState('')
    const [isbn, setisbn] = useState('')
    const [quantity, setquantity] = useState('')
    const [category,setcatgory]=useState('')

    const handleCreate=()=>{
        console.log('category kfjsf kds jfl',category.label)
        let temp={
            bookName:bookName,
            authorName:authorName,
            isbn:isbn,
            publicationName:publicationName,
            quantity:quantity,
            bookCategory:category

        };
        createData('books',temp);
        navigate('/ViewBook')
    }
    return (
        <PageLayout><hr/>
             <div className="titleStyle">
    <i><FiIcons.FiArrowRightCircle/></i> {"Add New Book Here" }
</div><hr/>
            <Container style={{margin:"auto" ,width:"800px"}}>
                <Form style={{}}>
                <Row>
                    <Col>
                    <InputField value={bookName}setValue={setBookName} label='Book Name' type='text' placeholder={"Book Name"} required="required" />
                    </Col>
                    <Col>
                    <InputField value={authorName}setValue={setAuthorName} label='Author Name' type='text' placeholder={"Author Name"} />
                    </Col>
                </Row><br/>
                <Row>
                    <Col>
                <InputField value={publicationName} setValue={setpublicationname} label='Publication Name' type='text' placeholder={" Publication name "}/>

                    </Col>
                    <Col>
                    <InputField value={isbn} setValue={setisbn} label='I S B N' type='number' placeholder={"International Standard Book Number"}/>

                    </Col>
                </Row><br/>
                <Row>
                <Col>
                <InputField value={quantity} setValue={setquantity} label='Book Quantity' type='number' placeholder={" Book quantity "}/>
                 </Col>
                 <Col>
                 <Dropdown label='Select Category'  value={category} setValue={setcatgory} options={bookcategory}/>
                    </Col>  
                </Row><br/><br/>
                <Button style={{background:"#11283F" ,width:"200px",borderRadius:50,}} onClick={handleCreate}>Save </Button>
                 </Form>
            </Container>
            </PageLayout>
         )
    }
export default AddBook;

