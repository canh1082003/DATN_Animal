import React, { useState } from 'react'
import '../Register/register.css'
import { Link } from 'react-router-dom'
import image from '../../Img/img-register.jpg'
import { APIUSERREGISTER } from '../../API/constant'
import axios from 'axios'
import { toast } from 'react-toastify'
import api from '../../API/API'

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      toast.error('Mật khẩu xác nhận không khớp!')
      return
    }

    const response = await api.post(APIUSERREGISTER, {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword
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
            <div className='name'>
              <div className='form-group'>
                <label htmlFor='firstName'>First Name </label>
                <input
                  type='text'
                  id='firstName'
                  placeholder='Nhập First Name'
                  name='firstName'
                  className='input-field'
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='lastName' className='mr_l_60'>
                  Last Name
                </label>
                <input
                  type='text'
                  id='lastName'
                  name='lastName'
                  className='input-field'
                  placeholder='Nhập Last Name'
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

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

            <div className='form-group'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                className='input-field'
                placeholder='Xác Nhận Mật Khẩu'
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className='actions'>
              <button type='submit' className='btn'>
                Register
              </button>
              <p>
                Already have an account?{' '}
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
