import React from 'react'
import './Forgotpass.css'
import {useForm} from 'react-hook-form'
import {Link} from 'react-router-dom'
import forgotpass from '../../assests/forgotpass.svg'
function Forgotpass() {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const onsubmit=(fdata)=>{
        console.log(fdata)
    }
    return (
        <div className='container forgot'>
            <div className='row d-flex justify-content-center'>
                <div className='col-lg-8 col-md-8 mx-auto col-11 col-xl-4'>
                    <div className='card fcard'>
                        <form onSubmit={handleSubmit(onsubmit)}>
                            <h4>Welcome !</h4>
                            <div className='item1'>
                                <h2 className='fw-bold'>Forgot Password ? </h2>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                            <div className='item2'>
                                <label htmlFor="user" className='form-label flabels'>User Name</label>
                                <input type="text" id='user' placeholder='Enter your Username' className='edplace form-control' {...register("username",{required:true})} />
                                {errors.username?.type === 'required' && <p className='setag'>* username required</p>}

                                <button type='submit' className='btn btn-dark fbtn mt-4'>Login</button>
                            </div>
                            <p className='text-center mt-4'>Don't have an Account ? <Link to='/signin'
                                className="dl">Login</Link></p>
                        </form>
                    </div>
                </div>
                <div className='col-lg-4 mx-auto fimage d-lg-block d-none'>
                    <img src={forgotpass} width="450px" height="450px" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Forgotpass
