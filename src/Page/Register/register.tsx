import React from 'react'
import '../Register/register.css'
import { Link } from 'react-router-dom'
import image from '../../Img/img-register.jpg'
export default function register() {
  return (
    <div className='container'>
      <div className='row'>
        {/* Image Section */}
        <div className='col image-container'>
          <img src={image} className='image' alt='Sample' />
        </div>

        {/* Form Section */}
        <div className='col form-container'>
          {/* <div className='social-login'>
            <p className='lead'>Sign in with</p>
            <button className='social-btn facebook'>F</button>
            <button className='social-btn twitter'>G</button>
          </div>

          <div className='divider'>
            <p>Or</p>
          </div> */}

          <form>
            <div className='name'>
              <div className='form-group'>
                <label htmlFor='firstName'>First Name </label>
                <input type='email' id='firstName' placeholder='Nhập First Name' className='input-field' />
              </div>
              <div className='form-group'>
                <label htmlFor='lastName' className='mr_l_60'>
                  Last Name{' '}
                </label>
                <input type='email' id='lastName' className='input-field' placeholder='Nhập Last Name' />
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email </label>
              <input type='email' id='email' className='input-field' placeholder='Nhập Email Của Bạn Ở Đây' />
            </div>

            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' className='input-field' placeholder='Nhập Mật Khẩu' />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Confirm Password</label>
              <input type='password' id='ConfirmPassword' className='input-field' placeholder='Xác Nhận Mật Khẩu' />
            </div>

            <div className='options'>
              <label>
                <input type='checkbox' /> Show PassWord
              </label>
              <a href='#!' className='forgot-password'>
                Forgot password?
              </a>
            </div>

            <div className='actions'>
              <button type='submit' className='btn'>
                Register
              </button>
              <p>
                Don't have an account?{' '}
                <Link to='/login' className='link-danger'>
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
