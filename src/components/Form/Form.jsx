import React, { useState, useRef  } from 'react';
import './Form.css';

const Form = () => {

  const[action,setAction] = useState(' ');
//useRef is also a hook like useState
  const formRef = useRef(null);

  const handleChange =(e)=>{
    setAction(e.target.value);
  }

  const handleClick = (e) =>{
    e.preventDefault();
    //formRef.current.checkValidity() to check if the form is valid.
    if (formRef.current.checkValidity()) {
      alert("Thank you for submitting");
    } else {
      alert("Please fill out all required fields.");
      formRef.current.reportValidity();
    }
  }

  return (
    <div className='form'>
      <form ref={formRef} action="/submit_contact_form" method="post">
      <div className="first">
        <input type="text" id="first_name" name="first_name" placeholder='First name' required />

        <input type="text" id="last_name" name="last_name" placeholder='Last name' required /><br /><br />
    </div>
    <div className="two">
        <input type="email" id="email" name="email" placeholder='Mail' required />
        <input type="tel" id="phone" name="phone" placeholder='Phone' /><br /><br />
    </div>
    <p className='question'>part of any organization?</p>
   <div className="three">
   
    <select id="selection" name="selection" value={action} onChange={handleChange}>
      <option value="">Select Below...</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      {
        action === 'yes' && (
          <input type="text" id="first_name" name="first_name" placeholder='Name of org' required />
        )
      };
      </div>

    <div className="msg">
        <textarea id="message" name="message" rows="4" cols="50" placeholder='Message' required></textarea><br /><br />
    </div>
    <div className="btn">
        <button onClick={handleClick} >Submit</button>
    </div>   
      </form>
    </div>
  )
}

export default Form;
