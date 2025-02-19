import React from 'react'
import '../VerifyEmail/verifyEmai.css'
export default function verifyEmai() {
  return (
    <div className='email-container'>
      <div className='email-card'>
        <div className='email-icon'>
          <span role='img' aria-label='smile'>
            😊
          </span>
        </div>
        <h2>
          Xác Minh Tài Khoản{' '}
          <span role='img' aria-label='emoji'>
            😃
          </span>
        </h2>
        <p>Mã xác nhận đã gửi đến email của bạn.</p>
        <>
          <input type='text' placeholder='Hãy nhập mã xác nhận vào đây' />
          <button className='verify-button'>Xác Nhận</button>
        </>

        <div className='email-specialist'>
          Để sử dụng trang web này hãy nhấp vào nút xác minh. Điều này giúp giữ an toàn cho tài khoản của bạn.
        </div>
      </div>
    </div>
  )
}
