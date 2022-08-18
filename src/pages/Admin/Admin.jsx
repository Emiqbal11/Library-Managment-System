import React from 'react';
import { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import * as FiIcons from "react-icons/fi";
import InputField from '../../components/common/InputField';
import PageLayout from '../../components/PageLayout';
const Admin =()=> {
  const [userName,setuserName]=useState('')
  const [email,setemail]=useState('')

  return (
  
    <PageLayout>
      <hr/>
    <div className="titleStyle">
    <i ><FiIcons.FiArrowRightCircle/></i> {"View Admin Details" }
</div><hr/>
<Container style={{width:"500px"}}>
  <Form>
    <Row>
      <Col>
      <InputField value={userName} setValue={setuserName} label={"User Name"} placeholder={"iqbal"}/>
      </Col> 
    </Row><br/>
    <Row>
      <Col>
      <InputField value={email} setValue={setemail} label="Your Email" placeholder={"iqbalislamian007@gmail.com "}/>
      </Col>
    </Row>
  </Form>
</Container>
    </PageLayout>
  )}

export default Admin;
