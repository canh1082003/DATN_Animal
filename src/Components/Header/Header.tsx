import React from 'react'
import { UserCircleIcon, ViewGridAddIcon } from '@heroicons/react/outline'
import { MenuIcon } from '@heroicons/react/outline'
import '../Header/header.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='header'>
      <div className='heading'>
        <Link to='/'>
          <span>A</span>
          nimal
        </Link>
      </div>
      <div className='header_title'></div>
      <div className='header_user'>
        <Link to='/findAnimal'>
          <div className='find_Animal'>
            <ViewGridAddIcon className='find_icon' />
          </div>
        </Link>
        <div className='header_Newsletter'>Newsletter</div>
        <Link to='/login'>
          <div className='header_icon'>
            <UserCircleIcon className='header_icon_user_1' />
            <MenuIcon className='header_icon_user_2' />
          </div>
        </Link>
      </div>
    </div>
  )
}
