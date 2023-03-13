import React from 'react'
import LoginPage from '../../sample project/src/components/LoginPage'
import axios from 'axios'
import { useState } from 'react'



function Validation() {
    const [email,setemail]=useState("")
    async  function checkEmail(){

    
    let response=await axios.get('https://api.apilayer.com/email_verification/'+email,{headers:{apikey:'lMNpFiFt9p5r4xV2iRBMdTqvmH5CagLQ'}})

    if(response.data.can_connect_smtp==true){
      alert("valid")
    }else{
      alert("invalid")
    }
    console.log(response)
  }
  return (
    <div>
        <label>Email: </label>
        <input type="Email" spaceholder="Email" id='email' onChange={(e)=>{setemail(e.target.value);}} /><br /><br />
        <button onClick={checkEmail}>Submit</button><br /><br />
    
    </div>
  )
}

export default Validation