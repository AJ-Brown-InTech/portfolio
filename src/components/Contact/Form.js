import React from 'react'
import './form.css'
import emailjs from 'emailjs-com'
import { useHistory } from 'react-router-dom'

export default function Form() {
  const history = useHistory()
  function sendEmail(e){
    e.preventDefault()

    emailjs.sendForm("service_1zp7fwl", "template_t8y93ng", e.target, "user_WdlUgKrpkvH0pr8r2m8PR" ).then(res=>{
      console.log(res)
      history.push("/home")
    }).catch(err=> console.log(err))
    
  }

  return (
    <div className="form" >
     
      <form className="input" onSubmit={sendEmail} >
  <label> Name:</label>
    <input type="text" name="name" />

  <label> Phone: (optional)</label> 
    <input type="tel" name="phone" />
  
  <label> Email:</label> 
    <input type="email" name="email" />
  
  <label> Message:</label> 
    <textarea name="message" rows='5' />
    <input type="submit" value="Send" className="btn"  />
     
     </form>

    </div>
  )
}

