import React,{useState}  from 'react';
import PageLayout from '../../components/PageLayout';
import * as FiIcons from "react-icons/fi";
import { Col, Container, Row } from 'react-bootstrap';
import InputField from '../../components/common/InputField';
import CommonButton from '../../components/common/CommonButton';

const ReturnBook =()=> {
    const [isbn, setisbn] = useState('')
    const [classno,setclassno]=useState('')

  return (
      <div>
<PageLayout><hr/>
<div className="titleStyle" >
    <i ><FiIcons.FiArrowRightCircle/></i> {"Return Book" }
</div><hr/>
<Container style={{margin:"auto" ,width:'500px'}}>
    <Row>
        <Col>
        <InputField value={classno} setValue={setclassno} type='number' label='Enter Student Class No' placeholder={'enter class number'}/>
        </Col>
    </Row>
    <Row>
    <Col>
         <InputField value={isbn} setValue={setisbn} label='Book ISBN' type='number' placeholder={"International Standard Book Number"}/>
         </Col>
    </Row><br/>
    <Row>
        <Col>
        <CommonButton title={'Return'} style={returnn}/>
        </Col>
    </Row>
</Container>
</PageLayout>
</div>

  )
}

export default ReturnBook;
const returnn={
    margin:"4px",
    padding:"2px",background:"green", color:"white",fontFamily:"Arial",
    fontweight:"bolder",
    width:"200px",
    height:"40px",
    borderRadius:200,
    borderWidth:1,
    borderColor:'white',


}

