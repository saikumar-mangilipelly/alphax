import React from 'react'
import './Login.css'
import signin from '../../assests/signin.svg'
import {useForm} from 'react-hook-form'
import { useDispatch,useSelector } from 'react-redux'
import { Link,Navigate} from 'react-router-dom'
import { userlogin } from '../../Slices/Userslice'
function Login() {
  const {register,handleSubmit,formState:{errors}}=useForm()
  let {issuccess} = useSelector(state => state.user)
  let dispatch=useDispatch()
  
  const onsubmit=(loginuserdata)=>{
    dispatch(userlogin(loginuserdata))
  }
  return (
    <>
    {issuccess? <Navigate to='/dashboard'/> :
    <div className='container lg'>
      <div className='row d-flex justify-content-center'>
        <div className='col-lg-7 col-md-8 mx-auto col-11 col-xl-4'>
          <div className='card logincard'>
            <form onSubmit={handleSubmit(onsubmit)}>
              <h4>Welcome !</h4>
              <h2 className='mt-4 fw-bold'>Sign in</h2>
              <p>Lorem ipsum dolor sit.</p>
              <label htmlFor="user" className='form-label mt-3 loglabels'>User Name</label>
              <input type="text" id='user' placeholder='Enter your Username' className='edplace form-control' {...register("username",{required:true})}/>
              {errors.username?.type === 'required' && <p className='etag'>* username required</p>}

              <label htmlFor="pass" className='form-label mt-3 loglabels'>Password</label>
              <input type="password" id='pass' className='form-control edplace' placeholder='Enter your Password' {...register("password",{required:true})}/>
              {errors.password?.type === 'required' && <p className='etag'>* password required</p>}

              <div className='cbox mt-3'>
                <div>
                  <input type="checkbox" id='rememberme' />
                  <label htmlFor="rememberme" className='ms-2'>Remember me</label>
                </div>
                <div>
                  <Link to='/forgotpass' className='fp'>Forgot password ?</Link>
                </div>
              </div>
              <button type='submit' className='btn btn-dark loginbtn mt-4'>Login</button>
              <p className='text-center mt-4'>Don't have an Account ? <Link to='/'
                className="dl">Register</Link></p>
            </form>
          </div>
        </div>
        <div className='col-lg-5 mx-auto mt-5 d-lg-block d-none'>
          <img src={signin} width="600px" height="600px" alt="" />
        </div>
      </div>
    </div>
  }
  </>
  )
}

export default Login
