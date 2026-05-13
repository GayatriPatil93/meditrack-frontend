import api from './api'

const TOKEN_KEY = 'token'

export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY)
}

export function isAuthenticated() {
  return Boolean(getToken())
}

export async function loginUser(credentials) {
  const response = await api.post('/users/login', credentials)
  const token = response.data?.token
  if (token) {
    setToken(token)
  }
  return response
}

export async function registerUser(userData) {
  const response = await api.post('/users/register', userData)
  const token = response.data?.token
  if (token) {
    setToken(token)
  }
  return response
}

export function logoutUser() {
  removeToken()
}
