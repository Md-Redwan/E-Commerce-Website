import React from 'react'
import { useLocation } from 'react-router'

const BreadCrumb = () => {

    const location = useLocation().pathname

    const pathname = location.split ("/")[1]
  return (
    <div className='flex gap-7.5 mt-20'>
      <h3>home</h3>
      <h3>/</h3>
      <h3>{pathname}</h3>
    </div>
  )
}

export default BreadCrumb
