import React, { useRef, useState } from 'react'
import '../Home/home.css'
import ChatBox from '../ChatBox/ChatBox'
import video from '../../Video/IntroHd.mp4'
import imgAnimal from '../../Img/img-register.jpg'
import imgAnimal1 from '../../Img/ran.jpg'
import imgAnimal2 from '../../Img/ngua.png'
import { ViewListIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
export default function Home() {
  const IntroHome = () => {
    return (
      <div className='intro'>
        <div className='introHome'>
          <video className='videoHome' src={video} autoPlay loop muted>
            Trình duyệt của bạn không hỗ trợ video.
          </video>
          <p>
            I<span>Animal</span>
          </p>
        </div>
      </div>
    )
  }
  const AnimalTypes = () => {
    return (
      <div className='home_animal_type'>
        <div className='heading_animal'>Animal Type</div>
        <div className='list_animal_type'>
          <Link to='pageRan'>
            <div className='animal_type'>
              <img src={imgAnimal} alt='' className='animal_img' />
              <div className='animal_describe'>
                <div className='name_animal'>Voi Châu Phi</div>
                <div className='animal_seemore'>
                  <ViewListIcon className='animal_type_icon' />
                  <div className='seemore'>See More</div>
                </div>
              </div>
            </div>
          </Link>
          <Link to='/pageRan'>
            <div className='animal_type'>
              <img src={imgAnimal1} alt='' className='animal_img' />
              <div className='animal_describe'>
                <div className='name_animal'>Rắn</div>
                <div className='animal_seemore'>
                  <ViewListIcon className='animal_type_icon' />
                  <div className='seemore'>See More</div>
                </div>
              </div>
            </div>
          </Link>
          <Link to='#'>
            <div className='animal_type'>
              <img src={imgAnimal2} alt='' className='animal_img' />
              <div className='animal_describe'>
                <div className='name_animal'>Ngựa</div>
                <div className='animal_seemore'>
                  <ViewListIcon className='animal_type_icon' />
                  <div className='seemore'>See More</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    )
  }
  return (
    <div className='main'>
      {IntroHome()}
      {AnimalTypes()}
    </div>
  )
}
