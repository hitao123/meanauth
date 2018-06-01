import { register, authenticUser, getProfile } from '../services/index'

export default {
  REGISTER: ({ commit, dispatch, state }, { params }) => {
    return register(params)
  },
  GETPROFILE: ({ commit, dispatch, state }, params) => {
    return getProfile(params)
  },
  AUTHENTIC: ({ commit, dispatch, state }, params) => {
    return authenticUser(params)
  }
}
