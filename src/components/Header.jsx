import './Header.css'
import favIcon from '../images/favIcon.jpg'
import { MDBInputGroup } from 'mdb-react-ui-kit'
import { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import avatar from '../images/avatar.png'


function Header() {
    const[logged,setLogged]=useState(true)
    const [isMobile,setIsMobile] = useState(window.innerWidth<1000?true:false)

    const [showOC, setShowOC] = useState(false);

    const handleCloseOC = () => setShowOC(false);
    const handleShowOC = () => setShowOC(true);

  return (
    <div>
      <div className={`container d-flex ${isMobile?"flex-wrap":""} align-items-center py-3 border-bottom`}>
        <div className="logo fs-3 d-flex align-items-center">
            <span>Seat</span>
            <img src={favIcon} className='m-1 my-2' width={'40px'} alt="" />
            <span>Scout</span>
        </div>
        <div className={`d-flex align-items-center justify-content-between container ${isMobile?"mt-3":""}`}>
            <MDBInputGroup noBorder className='w-75' textBefore={<i className="fa-solid fa-magnifying-glass fa-xl"></i>}>
                <input className='form-control' type='text' placeholder='Search Movies or Theatres' />
            </MDBInputGroup>
            {
                isMobile?<button className='btn' onClick={handleShowOC}><i className="fa-solid fa-bars fa-xl"></i></button>
                :<div className='d-flex align-items-center'>
                <div className="place">
                    <button className='btn shadow-0'>Kochi <i className="fa-solid fa-angle-down"></i></button>
                </div>
                {
                    logged?
                    <div className="profile d-flex align-items-center" onClick={handleShowOC}>
                        <button className='btn ms-2 btn-lg'><i className="fa-solid fa-user fa-xl pe-3"></i> Thejus</button>
                    </div>:
                    <div className="profile d-flex align-items-center">
                        <button className='btn btn-dark ms-2'>Sign In</button>
                        <button className='btn px-3 ms-2' onClick={handleShowOC}><i className="fa-solid fa-bars fa-xl"></i></button>
                    </div>
                }
                </div>
            }
        </div>
      </div>


      <Offcanvas show={showOC} onHide={handleCloseOC} placement='end'>
        <Offcanvas.Header closeButton={isMobile} className='border-bottom'>
          <Offcanvas.Title>
            {
              logged?
              <div className='d-flex justify-content-between align-items-center gap-3'>
                <div className="avatar">
                  <img src={avatar} width={"50px"} alt="profile" className='mb-2' style={{borderRadius:"50%"}} />
                </div>
                <div className="name">
                  <h2 className='fs-4'>Thejus Mathew</h2>
                  <p className='fs-6'>Edit Profile <i className="fa-solid fa-angle-right"></i></p>
                </div>
              </div>
              :<></>
            }
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>


    </div>
  )
}

export default Header
