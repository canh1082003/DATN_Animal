import React from 'react'
import './footer.css'
import ChatBox from '../../Page/ChatBox/ChatBox'
export default function Footer() {
  const RenderFooter = () => {
    return (
      <div className='footer'>
        <div className='footer_main'>
          <div className='footer_contact'>
            <div className='footer_heading'>Liên Hệ</div>
            <div className='footer_roadName'>123 Nguyễn Tất Thành</div>
            <div className='footer_city'>Thành Phố Hội An</div>
            <div className='footer_email'>
              Email: infor
              <a href=''>@thucung.com</a>
            </div>
            <div className='footer_phoneNumber'>Điện Thoại: 0775500478</div>
          </div>
          <div className='footer_Links'>
            <div className='footer_Links_title'>Liên Kết Nhanh</div>
            <div className='footer_Links_title_list'>
              <li>Trang Chủ</li>
              <li>Dịch Vụ</li>
              <li>Liên Hệ</li>
            </div>
          </div>
          <div className='footer_follow'>
            <div className='footer_follow_heading'>Theo Dõi Chúng Tôi</div>
            <div className='footer_follow_icon'>
              <li>FaceBook </li>
              <li>Instagram</li>
              <li>Twitter</li>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      <RenderFooter />
      <ChatBox />
    </>
  )
}
