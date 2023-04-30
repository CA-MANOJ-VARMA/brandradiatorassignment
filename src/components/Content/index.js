import React, { useEffect, useState } from 'react'
import {ImLocation} from 'react-icons/im'
import {MdEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {CgWebsite} from 'react-icons/cg'
import './index.css'
import axios from 'axios'

const Content = () => {
  const [formInput,setForminput] = useState({
    name:'',
    email:'',
    phonenumber:''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [aboutDetails , setAboutDetails] = useState('')

  const fetchUsers = ()=>   {
    return axios.get('https://jsonplaceholder.typicode.com/users').then(response=>setAboutDetails(response.data[0])).catch(error=>console.log(error))
}

  // console.log(aboutDetails)

  useEffect(()=>{
    fetchUsers()
  },[])


  const onChangeFunction = (event) =>{
    if (event.target.name==='Name'){
      setForminput({...formInput,name:event.target.value})
    }
    if (event.target.name==='Email'){
      setForminput({...formInput,email:event.target.value})
    }
    if(event.target.name==='Mobile'){
      setForminput({...formInput,phonenumber:event.target.value})
    }
  }

  const formSubmitFunction = (event) =>{
    event.preventDefault()
    if(formInput.name==='' || formInput.email==='' || formInput.phonenumber===''){
      alert('Please Fill All Details')
    }else {
      setFormSubmitted(true)
      formInput.name=''
      formInput.email=''
      formInput.phonenumber=''
    }
  }

  console.log(formInput)




  return (
    <div className='css-content-property'>
      <section className='css-landingpage-container' id="idLandingPage">
        <h1>Brand Radiator Assignment</h1>
        <h2>Project By Manoj Varma</h2>
        </section>
        <section className='css-about-container' id="idAbout">
          <div>
          <h2 className='css-aboutus-heading parallaxEffect' id='aboutustext'>ABOUT US</h2>
          </div>
          <div className='css-aboutus-details'>
            <div className='css-company-details'>
              <p>{aboutDetails.company?.name}, {aboutDetails?.name}</p>
              <p><BsFillTelephoneFill/> &nbsp; {aboutDetails?.phone}</p>
              <p><MdEmail/> &nbsp; { aboutDetails?.email}</p>
              <p><CgWebsite /> &nbsp; { aboutDetails?.website}</p>
            </div>
            <div className='css-company-details'>
              <p><ImLocation/>{aboutDetails.address?.suite}, {aboutDetails.address?.street}</p><p> &nbsp;  &nbsp;{aboutDetails.address?.city}</p>
              <p> &nbsp; &nbsp;{aboutDetails.address?.zipcode}</p>
            </div>
            
          
          </div>
        </section>
        <section className='css-form-section-container' id="idContactus">
        <h2 className='css-aboutus-heading parallaxEffect' id='contactusText'>CONTACT US</h2>
        {!formSubmitted ? (<form className='css-form-container' onSubmit={formSubmitFunction}>
          <div className='css-input-container'>
            <label htmlFor='Name'><p>Name</p></label>
            <input id='Name' className='css-input-itself' name="Name" onChange={onChangeFunction} value={formInput.name}/>
          </div>
          <div className='css-input-container'>
            <label htmlFor='email'><p>Email</p></label>
            <input id='email' className='css-input-itself'  name="Email" onChange={onChangeFunction}  value={formInput.email}/>
          </div>
          <div className='css-input-container'>
            <label htmlFor='phonenumber'><p>Phone Number</p></label>
            <input id='phonenumber' className='css-input-itself'  name="Mobile" onChange={onChangeFunction}  value={formInput.phonenumber}/>
          </div>
          <button type='submit' className='css-submit-button'>Submit</button>

        </form>):(
        <div className='css-successful-container'>
        <h1>Form Submitted Successfully</h1>
        </div>)}
        </section>
    </div>
  )
}


window.addEventListener('scroll',function(){
  let value = window.scrollY
  let aboutusText = document.getElementById('aboutustext')
  let contactusText = document.getElementById('contactusText')
  console.log(contactusText)
  console.log('innerwidth',window.innerWidth)
  let minVal = Math.min(window.innerHeight,window.innerWidth)
  console.log('minVal',minVal)
  
  // console.log(value)

  if (value<=minVal && aboutusText!==null){
    aboutusText.style.marginLeft = (value/100)*minVal/10+'px'
    // console.log((value/100)*window.innerWidth)
    
  }
  if (contactusText!==null){
    contactusText.style.marginLeft = (value/10)*2+'px'
  }

    // console.log((value/100)*window.innerWidth)


}
)

export default Content