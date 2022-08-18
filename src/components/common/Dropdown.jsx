
import React from 'react'
import {Form} from 'react-bootstrap';
import Select from 'react-select';
// const Dropdown = ({label,value,defaultValue,options,placeholder,onChange}) => {
//     return (
//         <Form.Group>
//        {label && <Form.Label style={{fontWeight:"bolder" ,color:"#11283F",fontSize:"18px"}}>{label&&label}</Form.Label>}
//         <Select defaultValue={defaultValue}  options={options} placeholder={placeholder&&placeholder} value={value} onChange={onChange}/>
//     </Form.Group>
            
        
//     )
// }

// export default Dropdown




const Dropdown = ({label,value,setValue,options}) => {
  return (<Form.Group>
       {label && <Form.Label style={{fontWeight:"bolder" ,color:"#11283F",fontSize:"18px"}}>{label&&label}</Form.Label>}
<select
  className='form-control'
  value={value}
  onChange={({target})=>setValue(target.value)}
  >
  {
      options.map((el,index)=>(
          <option value={el.label} key={index}>
              {el.label}
          </option>
      ))
  }
  
  </select>
  </Form.Group>);
};
export default Dropdown

export const DropdownFirebaseData = ({label,value,setValue,options}) => {
  return (<Form.Group>
       {label && <Form.Label style={{fontWeight:"bolder" ,color:"#11283F",fontSize:"18px"}}>{label&&label}</Form.Label>}
<select
  className='form-control'
  value={value}
  onChange={({target})=>setValue(target.value)}
  >
  {
      options.map((el,index)=>(
          <option value={el.id} key={index}>
              {el.bookName?el.bookName:el.classNo}
          </option>
      ))
  }
  
  </select>
  </Form.Group>);
};