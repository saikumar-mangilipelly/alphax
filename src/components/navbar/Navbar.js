import Signup from '../signup/Signup';
import Signin from '../login/Login';
import Forgotpass from '../forgotpass/Forgotpass'
import { GoThreeBars } from "react-icons/go";
import Privateroute from '../privates/Privateroute'
import { useSelector,useDispatch } from 'react-redux'
import { Routes, Route, NavLink ,useNavigate} from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard'
import {clearloginstatus} from '../../Slices/Userslice'
import './Navbar.css'
function Navbar() {
    let dispatch=useDispatch()
    let navigate=useNavigate()
    let { issuccess, userobj } = useSelector(state => state.user)
    const onlogout=()=>{
        localStorage.clear()
        dispatch(clearloginstatus())
        navigate('/signin')
    }
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <NavLink className="logo" to='/'>AlphaX</NavLink>
                    <button className="navbar-toggler navbtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="toggler"><GoThreeBars /></span>
                    </button>
                    {issuccess ?
                        <div className="collapse navbar-collapse justify-content-end gap-2" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown mt-2">
                                    <p className="dropdown-toggle text-light fw-bold" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {userobj.username}
                                    </p>
                                    <ul className="dropdown-menu">
                                        <li><button type='button' className="dropdown-item btn" onClick={onlogout}>Logout</button></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link navhead" to='/dashboard'>Dashboard</NavLink>
                                </li>
                            </ul>
                        </div> :
                        <div className="collapse navbar-collapse justify-content-end gap-2" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link active navhead" aria-current="page" to='/'>SignUp</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link navhead" to='/signin'>SignIn</NavLink>
                                </li>
                            </ul>
                        </div>}
                </div>
            </nav>
            <Routes>
                <Route element={<Privateroute />}>
                    <Route element={<Dashboard />} path='/dashboard' />
                </Route>
                <Route path='/' element={<Signup />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/forgotpass' element={<Forgotpass />} />
            </Routes>
        </div>
    )
}

export default Navbar
