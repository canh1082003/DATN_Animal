import axios, { AxiosError, type AxiosInstance } from 'axios'
import { baseURL } from './constant'
import { toast } from 'react-toastify'
import { LOGIN_URL, REGISTER_URL, VERIFY_URL } from '../hooks/constant'
import { ApiSuccessResponse } from '../hooks/type'
import { LoginData, RegisterData } from '../hooks/auth/use/type'

export class Api {
  instance: AxiosInstance
  constructor() {
    ;(this.instance = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })),
      this.instance.interceptors.response.use(
        (response) => {
          const { url } = response.config
          console.log(url)
          switch (url) {
            case REGISTER_URL: {
              const registerResponse = response as ApiSuccessResponse<RegisterData>
              const email = registerResponse.data.data.email
              if (email) {
                setTimeout(() => {
                  window.location.href = '/verifyEmail/' + email
                }, 6000)
              }

              return response
            }
            case VERIFY_URL: {
              toast.success('Verify successfully')
              setTimeout(() => {
                window.location.href = '/'
              }, 6000)
              return response
            }
            case LOGIN_URL: {
              const LoginResponse = response as ApiSuccessResponse<LoginData>
              const userInfo = LoginResponse.data.data
             
              localStorage.setItem('userInfo', JSON.stringify(userInfo))
              if (!userInfo.isVerifyEmail) {
                toast.success('Đăng Nhập Thành Công')
                setTimeout(() => {
                  window.location.href = '/verifyEmail/' + userInfo.email
                }, 6000)
                return response
              }
              if (userInfo.role === 'admin') window.location.href = '/home/admin/'
              else if (userInfo.role === 'user') {
                toast.success('Đăng Nhập Thành Công')
                setTimeout(() => {
                  window.location.href = '/'
                }, 6000)
              } else {
                setTimeout(() => {
                  window.location.href = '/home/shipper'
                }, 6000)
              }
              return response
            }

            default: {
              return response
            }
          }
        },
        (error: any) => {
          const errorData = error.response?.data
          console.log(errorData)
          const errorMessage = errorData?.errors?.[0]?.errorMessage
          toast.error(errorMessage)
        }
      )
  }
}
const api = new Api().instance
export default api
