import { useState } from 'react'
import axios from 'axios'
import { GETALL_ANIMAL_URL } from './contanst'
import { Animal } from './type'

export function useCateGoryAnimals() {
  const [animals, setAnimals] = useState<Animal[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  const fetchAnimalByName = async (name: string) => {
    setLoading(true)
    try {
      const res = await axios.get(`${GETALL_ANIMAL_URL}/${name}`)
      setAnimals(res.data.data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return { animals, loading, error, fetchAnimalByName }
}
