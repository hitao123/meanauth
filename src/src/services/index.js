import axios from 'axios'
import jwtDecode from 'jwt-decode'
import API from '../api'

export function register (params) {
  return axios.post(API.REGISTER, params, { headers: { 'Content-Typ': 'application/json' } })
    .then(res => {
      return Promise.resolve(res.data)
    }).catch(err => {
      return Promise.reject(err)
    })
}

export function authenticUser (params) {
  return axios.post(API.AUTH, params, { headers: { 'Content-Typ': 'application/json' } })
    .then(res => {
      return Promise.resolve(res.data)
    }).catch(err => {
      return Promise.reject(err)
    })
}

export function getProfile () {
  const token = localStorage.getItem('token')
  const headers = {
    'Authorization': token,
    'Content-Type': 'application/json'
  }
  return axios.get(API.PROFILE, { headers: headers })
    .then(res => {
      return Promise.resolve(res.data)
    }).catch(err => {
      return Promise.reject(err)
    })
}

export function storeUserData (token = '', user = {}) {
  localStorage.setItem('token', token)
  localStorage.setItem('user', JSON.stringify(user))
}

export function isTokenExpired () {
  const token = localStorage.getItem('token')
  if (!token) return false
  let data = jwtDecode(token)
  let currentTime = Date.now()
  console.log(data.exp * 1000 - currentTime > 0, data.exp, currentTime, data)
  if (data.exp * 1000 - currentTime > 0) {
    return true
  }
  return false
}

export function logout () {
  localStorage.clear()
}
