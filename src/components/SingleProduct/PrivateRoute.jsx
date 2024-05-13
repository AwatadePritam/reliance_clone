import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
 const navigator =   useNavigate()
 const token     =   useSelector((store)=>store.token)

 useEffect(()=>{
    if(!token){
        navigator('/login')
    }
   },[])

 return (
      <>
      {
        token && (
            <>
            {children}
            </>
        )
      }
      
      </>
  )
}

export default PrivateRoute