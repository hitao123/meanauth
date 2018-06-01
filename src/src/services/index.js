import axios from 'axios'
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
