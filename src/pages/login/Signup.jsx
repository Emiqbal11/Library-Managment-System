import React,{useState} from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const Signup =()=> {
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [createpassword, setcreatepassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");

    return (
        <div>
           <Container className='signup' >
               <h2> Signup</h2>
               <Form className='signupForm'>
               <Row ><Col>
        <Form.Group size="lg" controlId="username">
          <Form.Label>User Name</Form.Label>
          <Form.Control
           required
            autoFocus
            type="text"
            value={username}
            placeholder='user name'
            onChange={(e) => setusername(e.target.value)} />
        </Form.Group></Col><br/>
        <Col>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder='example@123.com'
            onChange={(e) => setemail(e.target.value)}
          />
        </Form.Group></Col></Row><br/>
                   <Row><Col>
        <Form.Group size="lg" controlId="createpassword">
          <Form.Label>Create Password</Form.Label>
          <Form.Control
           required
            type="password"
            value={createpassword}
            placeholder='************'
            onChange={(e) => setcreatepassword(e.target.value)} />
        </Form.Group></Col><br/>
        <Col>
        <Form.Group size="lg" controlId="confirmpassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={confirmpassword}
            placeholder='**************'
            onChange={(e) => setconfirmpassword(e.target.value)}
          />
        </Form.Group></Col></Row><br/>
        <div className="signupbtn">
        <Button  block size="sm" type="submit" style={{width:"200px",  backgroundColor:'#11283F' ,borderColor:"#11283F"}}>
          Add User
        </Button>
        </div>
      </Form>
           </Container>
        </div>
    )
}

export default Signup
