import React, { useEffect, useState } from 'react'
import avatar from '../images/avatar-edit.png'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Profile() {
  const [isMobile] = useState(window.innerWidth<1000?true:false)
  const[gender,setGender] = useState("dummy")
  const[married,setMarried] = useState("dummy")
  const[first,setFirst]=useState("Thejus")
  const[second,setSecond]=useState("Mathew")
  const[birthday,setBirthday] = useState("1999-09-13")
  const[phone,setPhone]=useState("1234567899")
  const[profilePic,setProfilePic] = useState("")
  const[preview,setPreview]=useState("")


  useEffect(()=>{
    if(!profilePic){
      setPreview("")
    }else{
      setPreview(URL.createObjectURL(profilePic))
    }
  },[profilePic])
  

  return (
    <div className='px-1'>
        <Header/>
        <div className={`container p-0 shadow mt-5 ${isMobile?"":"w-50"} rounded`} style={{backgroundColor:"rgb(240,240,240)",overflow:"hidden"}}>
          <div className="top p-3 d-flex align-items-center gap-5">
            <div className="profile position-relative bg-light ms-3" style={{borderRadius:"50%",height:"60px",width:"60px"}}>
              <label htmlFor="avatar">
                <input id='avatar' type="file" style={{display:"none"}} accept="image/png, image/jpeg, image/jpg" onChange={(e)=>setProfilePic(e.target.files[0])}/>
                <img src={preview?preview:avatar} width={"60px"} height={"60px"} alt="" style={{borderRadius:"50%"}}/>
              </label>
            </div>
            <h4>Hi, {first}</h4>
          </div>
          <h5 className='px-2 pt-2'>Account Details</h5>
          <div className="row p-2">
            <div className="col-4">
              <p className=''>Email</p>
            </div>
            <div className="col-8">
              <p className='form-control'>thejus@gmail.com</p>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-4">
              <p className=''>Phone Number</p>
            </div>
            <div className="col-8">
              <input type="text" className='form-control' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            </div>
          </div>
        </div>
        <div className={`container p-0 shadow mt-5 mb-3 ${isMobile?"":"w-50"} rounded`} style={{backgroundColor:"rgb(240,240,240)",overflow:"hidden"}}>
          <h5 className='px-2 pt-2'>Personal Details</h5>
          <div className="row p-2">
            <div className="col-4">
              <p className=''>First Name</p>
            </div>
            <div className="col-8">
              <input type="text" className='form-control' value={first} onChange={(e)=>setFirst(e.target.value)}/>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-4">
              <p className=''>Last Name</p>
            </div>
            <div className="col-8">
              <input type="text" className='form-control' value={second} onChange={(e)=>setSecond(e.target.value)}/>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-4">
              <p className=''>Birthday (Optional)</p>
            </div>
            <div className="col-8">
              <input type="date" className='form-control' value={birthday} onChange={(e)=>setBirthday(e.target.value)}/>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-4">
              <p className=''>Gender (Optional)</p>
            </div>
            <div className="col-8">
              <button className={`btn ${gender==true?"btn-danger":""} me-3`} onClick={()=>setGender(true)}>Male</button>
              <button className={`btn ${gender==false?"btn-danger":""} me-3`} onClick={()=>setGender(false)}>Female</button>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-4">
              <p className=''>Married (Optional)</p>
            </div>
            <div className="col-8">
              <button className={`btn ${married==true?"btn-danger":""} me-3`} onClick={()=>setMarried(true)}>Yes</button>
              <button className={`btn ${married==false?"btn-danger":""} me-3`} onClick={()=>setMarried(false)}>No</button>
            </div>
          </div>
        </div>
        <div className={`container p-0 pb-2 pe-5 shadow mt-5 mb-3 ${isMobile?"":"w-50"} rounded`} style={{backgroundColor:"rgb(240,240,240)",overflow:"hidden"}}>
          <h5 className='px-2 pt-4 ps-4'>Address (Optional)</h5>
          <div className="row p-2">
            <div className="col-4 ps-5">
              <p className=''>Area PinCode</p>
            </div>
            <div className="col-8">
              <input type="text" className='form-control' />
            </div>
          </div>
          <div className="row p-2">
            <div className="col-4 ps-5">
              <p className=''>Address Line 1</p>
            </div>
            <div className="col-8">
              <input type="text" className='form-control' />
            </div>
          </div>
          <div className="row p-2">
            <div className="col-4 ps-5">
              <p className=''>Address Line 2</p>
            </div>
            <div className="col-8">
              <input type="text" className='form-control' />
            </div>
          </div>
          <div className="row p-2">
            <div className="col-4 d-flex align-items-center ps-5">
              <p className=''>Landmark</p>
            </div>
            <div className="col-8">
              <input type="text" className='form-control' />
            </div>
          </div>
          <div className="row p-2">
            <div className="col-4 ps-5">
              <p className=''>State</p>
            </div>
            <div className="col-8">
              <input type="text" className='form-control' />
            </div>
          </div>
          <div className="row p-2">
            <div className="col-4 ps-5">
              <p className=''>Town/City</p>
            </div>
            <div className="col-8">
              <input type="text" className='form-control' />
            </div>
          </div>
        </div>
        <div className="container-fluid p-3 text-center bg-light mb-3" style={{position:"sticky",bottom:"0px"}}>
          <button className='btn btn-danger'>Save Changes</button>
        </div>
        <Footer/>
    </div>
  )
}

export default Profile
