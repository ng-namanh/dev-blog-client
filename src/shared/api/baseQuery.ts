// create a baseQuery with redux-toolkit query
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { config } from '../lib/config'
import { RootState } from '@/app/appStore'

export const baseQuery = fetchBaseQuery({
  baseUrl: config.API_ENDPOINT,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken

    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  }
})
