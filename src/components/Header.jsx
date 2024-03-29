import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import styled from 'styled-components'
function Header() {
  return (
    <Wrapper className='cursor-pointer bg-slate-300 shadow-gray-300 rounded shadow p-3 border flex flex-col justify-around items-center flex-auto sm:flex-row gap-4'>
        {/* logo */}
        <h1 className='text-2xl font-bold'>
            <span >Real</span>
            <span >Estate</span>
        </h1>
        {/* search bar*/}
        <form className='rounded-2xl px-2 bg-slate-100 border-2 flex items-center border-slate-800 h-8'>
            <input type='text' placeholder='Search...' autoFocus  className=' outline-none  md:w-80 sm:w-full'/>
           <FaSearch/>
        </form>
        {/* pages */}
        <div>
            <ul className='flex justify-between gap-4 flex-col sm:flex-row '>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/signin'>Sign In</NavLink></li>
                
            </ul>
        </div>
    </Wrapper>
  )
}


const Wrapper=styled.section`
span{
    text-shadow: 0 0 6px  black;
    color: #ffffff;
    
}
`
export default Header
