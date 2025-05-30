import React, { useState } from 'react'
import '../Login/login.css'
import { Link } from 'react-router-dom'
import image from '../../Img/img-register.jpg'
import api from '../../API/API'
import { toast } from 'react-toastify'
import { LOGIN_URL } from '../../hooks/constant'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await api.post(LOGIN_URL, {
      email: formData.email,
      password: formData.password
    })

    if (response.status === 201) {
      toast.success('Đăng Ký Thành Công')
    }
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col image-container'>
          <img src={image} className='image' alt='Sample' />
        </div>
        <div className='col form-container'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                className='input-field'
                placeholder='Nhập Email Của Bạn Ở Đây'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                className='input-field'
                placeholder='Nhập Mật Khẩu'
                value={formData.password}
                onChange={handleChange}
                required
              />
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
    </div>
  )
}
