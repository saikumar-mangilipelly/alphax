import React from 'react'
import {Outlet,Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
function Privateroute() {
    let {issuccess} = useSelector(state => state.user)
  return (
    issuccess?<Outlet/>:<Navigate to='/signin'/>
  )
}

export default Privateroute
