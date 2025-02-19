import React from 'react'
import '../Login/login.css'
import { Link } from 'react-router-dom'
import image from '../../Img/img-register.jpg'

export default function Login() {
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
            <button className='social-btn twitter'>T</button>
            <button className='social-btn linkedin'>L</button>
          </div> */}

          {/* <div className='divider'>
            <p>Or</p>
          </div> */}

          <form>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' className='input-field' placeholder='Nhập Email Của Bạn Ở Đây' />
            </div>

            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' className='input-field' placeholder='Nhập Mật Khẩu' />
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
                Login
              </button>
              <p>
                Don't have an account?{' '}
                <Link to='/register' className='link-danger'>
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Section */}
    </div>
  )
}
