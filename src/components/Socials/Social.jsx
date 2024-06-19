import React, { useState } from 'react';
import './Social.css';

const Social = () => {

  const[action,setAction] = useState(' ');

  const handleChange =(e)=>{
    setAction(e.target.value);
  }

  return (
    <div className='right'>
      <h2 >Looking Forward</h2>
      <p>Thank you for reaching out to us! <br />
      Whether you have a question about our products, need assistance with an order, or have a general inquiry, we're here to help.</p>
      <label htmlFor="contact-method">Preferred Contact Method:</label><br/>
      <select id="contact-method" name="contact-method" value={action} onChange={handleChange}>
      <option value="">Select Below...</option>
        <option value="email">Email</option>
        <option value="phone">Phone</option>
      </select>
      
      {action === 'email' &&(
          <p>sam123@gmail.com</p>
        )
      };
      {action === 'phone' &&(
          <p>112-4567-8322</p>
        )
      };
      
    </div>
  );
}

export default Social;
