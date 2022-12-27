import {useState} from 'react'
import './Signup.css'
import {useForm} from 'react-hook-form'
import {Link} from 'react-router-dom'
import signup from '../../assests/signup.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
function Signup() {
  const [passvisibility,setpassvisibility]=useState(false)
  const [cpassvisibility,setcpassvisibility]=useState(false)
  const navigate=useNavigate()
  const {register,handleSubmit,formState:{errors}}=useForm()
  const signpassfunction=()=>{
    setpassvisibility(!passvisibility)
  }
  const csignpassfunction=()=>{
    setcpassvisibility(!cpassvisibility)
  }
  const onsubmit=(signupdata)=>{
    if(signupdata.password===signupdata.cpassword){
    axios.post('/user/register',signupdata)
        .then(response=>{
            alert(response.data.message)
            if(response.data.message==="new user created")
            {
                navigate('/signin')
            }
        })
        .catch(error=>alert("something went wrong in creating user"))
      }
      else{
        alert("Confirm Password")
      }
  }
  return (
    <div className='container sc'>
      <div className='row d-flex justify-content-center mb-3'>
        <div className='col-lg-8 col-md-8 mx-auto col-11 col-xl-4'>
          <div className='card signupcard'>
            <form onSubmit={handleSubmit(onsubmit)}>
              <h4>Welcome !</h4>
              <h2 className='mt-3 fw-bold'>Sign Up</h2>
              <p>Lorem ipsum dolor sit.</p>
              <label htmlFor="mail" className='form-label slabels'>Email</label>
              <input type="email" id='mail' placeholder='Enter your Email' className='edplace form-control' {...register("email",{required:true})}/>
              {errors.email?.type === 'required' && <p className='setag'>* email required</p>}

              <label htmlFor="user" className='form-label mt-3 slabels'>User Name</label>
              <input type="text" id='user' placeholder='Enter your Username' autoComplete='username' className='edplace form-control' {...register("username",{required:true})}/>
              {errors.username?.type === 'required' && <p className='setag'>* username required</p>}

              <label htmlFor="pass" className='form-label mt-3 slabels'>Password</label>
              <input type={passvisibility?"text":"password"} id='pass' placeholder='Enter your Password' autoComplete='new-password' className='edplace form-control' {...register("password",{required:true})}/>
              <i className='sign-pass-toggle' onClick={signpassfunction}>{passvisibility?<AiFillEyeInvisible/>:<AiFillEye/>}</i>
              {errors.password?.type === 'required' && <p className='setag'>* password required</p>}

              <label htmlFor="cfpass" className='form-label mt-3 slabels'>Confirm Password</label>
              <input type={cpassvisibility?"text":"password"} id='cfpass' className='form-control edplace' autoComplete='new-cpassword' placeholder='Confirm your Password' {...register("cpassword",{required:true})}/>
              <i className='sign-pass-toggle' onClick={csignpassfunction}>{cpassvisibility?<AiFillEyeInvisible/>:<AiFillEye/>}</i>
              {errors.cpassword?.type === 'required' && <p className='setag'>* confirm Password</p>}

              <button type='submit' className='btn btn-dark signupbtn mt-4'>Register</button>
              <p className='text-center mt-4 mb-0'>Don't have an Account ? <Link to='/signin'
                className="dl">Login</Link></p>
            </form>
          </div>
        </div>
        <div className='col-lg-4 mx-auto simage d-lg-block d-none'>
          <img src={signup} width="500px" height="500px" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Signup
