import { useState, useCallback } from 'react'
import axios from 'axios'
import { COMFIRM_EMAIL_URL } from '../constant'
import api from '../../API/API'

export function useResendVerifyCode() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleResendCode = useCallback(async (email: string) => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await api.post(`${COMFIRM_EMAIL_URL}/${email}`)
      if (response.status === 200 || response.status === 201) {
        setSuccess(true)
      }
    } catch (err: any) {
      setError(err.response?.data?.errorMessage || 'Failed to resend code')
    } finally {
      setLoading(false)
    }
  }, [])

  return { handleResendCode, loading, error, success }
}
