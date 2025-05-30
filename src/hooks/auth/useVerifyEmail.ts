import { useState, useCallback } from 'react'
import axios from 'axios'
import api from '../../API/API'
import { VERIFY_URL } from '../constant'

export function useVerifyEmail() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleVerify = useCallback(async (email: string, code: string) => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await api.post(VERIFY_URL, {
        email,
        verifyEmailToken: code
      })
      if (response.status === 200 || response.status === 201) {
        setSuccess(true)
      }
    } catch (err: any) {
      setError(err.response?.data?.errorMessage || 'Verification failed')
    } finally {
      setLoading(false)
    }
  }, [])

  return { handleVerify, loading, error, success }
}
