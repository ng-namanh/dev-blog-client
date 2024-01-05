import { ReturnMessage } from '@/entities/auth/model/types'
import { User, UserCredentials } from '@/entities/user/model/types'
import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

export const registerUser = async (userData: User): Promise<ReturnMessage> => {
  try {
    const response = await apiClient.post<ReturnMessage>(
      '/auth/register',
      userData
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error
    } else {
      throw new Error('An unexpected error occurred')
    }
  }
}

export const loginUser = async (userCredentials: UserCredentials) => {
  try {
    const response = await apiClient.post('/auth/login', userCredentials)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error
    } else {
      throw new Error('An unexpected error occurred during login')
    }
  }
}
