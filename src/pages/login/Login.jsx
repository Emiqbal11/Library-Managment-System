import React,{useState} from 'react'
import "./Login.css";
import icon from './icon.png';
import {Col, Container, Form, Row ,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../lib/services';
const Login = () => {
    const navigate=useNavigate();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const handleLogin=async(e)=>{
      e.preventDefault()
      try {
        await loginUser(email,password);
      navigate('/');
      } catch (error) {
        console.log('erorr in sigin',error.message)
      }
      
    }
 return (
    <Container fluid className='cont'>
  <Row>
    <Col xs={6} md={8} className='col1'></Col>
    <Col xs={6} md={4} className='col2'>
    <div className='icc'> 
      <img src={icon} alt=" Icon" />
      </div><br/>
      <h3 className='h2'>Library Managment</h3><br/>
      <div className="Login">
      <Form>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
           required
            autoFocus
            type="email"
            value={email}
            placeholder='example@123.com'
            onChange={(e) => setemail(e.target.value)}
          />
        </Form.Group><br/>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder='**************'
            onChange={(e) => setpassword(e.target.value)}
          />
        </Form.Group><br/>
        <div className="d-grid gap-2">
        <Button onClick={handleLogin} block size="sm" type="submit" style={{backgroundColor:'#11283F' ,borderColor:"#11283F"}}>
          Login
        </Button>
        </div>
      </Form>
      </div>
    </Col>
</Row>
  </Container>

 )}

export default Login