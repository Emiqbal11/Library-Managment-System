import React,{useState,useEffect} from 'react'
import "./home.css"
import { Col, Container, Row } from 'react-bootstrap'
import * as FiIcons from "react-icons/fi";
import * as ImIcons from "react-icons/im";
import * as HiIcons from "react-icons/hi";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import PageLayout from '../../components/PageLayout'
import { getData } from '../../lib/services';

const  Home=()=> {
  const [allStudents, setAllStudents] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [allIssuedBooks, setAllIssuedBooks] = useState([]);
  const [allReturn,setAllReturn]=useState(0);
  const [allFine,setAllFine]=useState(0);




  useEffect(()=>{getData('students',setAllStudents);
                  getData ('books',setAllBooks);
             getData ('issuedBooks',setAllIssuedBooks)
                },[])
  useEffect(()=>{
    const retu = allIssuedBooks.reduce((acc,item)=>{
      item.isReturn && acc++
      return acc
    },0)
    setAllReturn(retu)
  },[allIssuedBooks])

  useEffect(()=>{
    const retu = allIssuedBooks.reduce((acc,item)=>{
      item.fine && acc++
      return acc
    },0)
    setAllFine(retu)
  },[allIssuedBooks])

    return (
       <PageLayout>
         <hr/>
          <div className="titleStyle">
    <i ><FiIcons.FiArrowRightCircle/></i> {"  Dashboard" }
</div><hr/>
        <Container className='dash'>
          <Row >
            <Col className='div1'>
              <div className='box'>
              <div className='box-containt'> 
              <h3 style={{fontWeight:"bold", color:" rgb(186, 121, 203)", fontsize:"30px"}}>{allBooks&&allBooks.length}</h3>
              <span style={{fontweight:" 700", color:" rgb(186, 121, 203)",fontFamily:"sans-serif" ,fontSize:"18px"}}>All Books</span>
              </div>
              <i className='box1'aria-hidden="true" style={{color:" rgb(186, 121, 203)"}} ><ImIcons.ImBooks /></i>
               </div>
               
            </Col>
            <Col className='div1'>
              <div className='box'>
              <div className='box-containt'> 
              <h3 style={{fontWeight:"bold", color:" rgb(255, 168, 18)", fontsize:"30px"}}>{allStudents&&allStudents.length}</h3>
              <span style={{fontweight:" 700", color:" rgb(255, 168, 18)",fontFamily:"sans-serif" ,fontSize:"18px"}}>All Students</span>
              </div>
              <i className='box1'aria-hidden="true" style={{color:" rgb(255, 168, 18)"}}><HiIcons.HiUserGroup/></i>
               </div>
            </Col>
            <Col className='div1'>
            <div className='box'>
              <div className='box-containt'> 
              <h3 style={{fontWeight:"bold", color:" rgb(0, 192, 239)", fontsize:"30px"}}>{allIssuedBooks&&allIssuedBooks.length}</h3>
              <span style={{fontweight:" 700", color:" rgb(0, 192, 239)",fontFamily:"sans-serif" ,fontSize:"18px"}}>Issued Books</span>
              </div>
              <i className='box1'aria-hidden="true" style={{color:"rgb(0, 192, 239) "}} ><IoIcons.IoIosShare/></i>
               </div>
            </Col>
          </Row>
          <Row>
          <Col className='div1'>
          <div className='box'>
              <div className='box-containt'> 
              <h3 style={{fontWeight:"bold", color:" rgb(0, 166, 90)", fontsize:"30px"}}>{allReturn}</h3>
              <span style={{color:" rgb(0, 166, 90)",fontFamily:"sans-serif" ,fontSize:"17px"}}>Return</span>
              </div>
              <i className='box1'aria-hidden="true" style={{color:" rgb(0, 166, 90)"}}><MdIcons.MdAssignmentReturn/></i>
               </div>
            </Col>
            <Col className='div1'>
            <div className='box'>
              <div className='box-containt'> 
              <h3 style={{fontWeight:"bold", color:"rgb(245, 105, 84)", fontsize:"30px"}}>{allFine}</h3>
              <span style={{color:" rgb(245, 105, 84)",fontFamily:"sans-serif" ,fontSize:"18px"}}>Fine</span>
              </div>
              <i className='box1'aria-hidden="true" style={{color:" rgb(245, 105, 84)"}}><HiIcons.HiCurrencyDollar/></i>
               </div>
          
            </Col>
            <Col className='div1'>
            <div className='box'>
              <div className='box-containt'> 
              <h3 style={{fontWeight:"bold", color:"rgb(245, 105, 84)", fontsize:"30px"}}>1</h3>
              <span style={{color:" rgb(245, 105, 84)",fontFamily:"sans-serif" ,fontSize:"18px"}}>Manage User</span>
              </div>
              <i className='box1'aria-hidden="true" style={{color:" rgb(245, 105, 84)"}}><FaIcons.FaUserAlt/></i>
               </div>
              
            </Col>
          </Row>
         
        </Container>
       </PageLayout>
    )
}

export default Home
