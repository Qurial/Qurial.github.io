import axios from "axios"

const instance = axios.create({
  withCredentials: true,
  headers:
    { 'API-KEY': '2d31fe63-c710-4194-97a9-60f225513bdf', },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export let usersAPI = {
  unfollow: (id) => instance.delete(`follow/${id}`)
    .then(response => response.data),

  follow: (id) => instance.post(`follow/${id}`)
    .then(response => response.data),

  getUsers: (pageSize, pageNumber) => instance.get(`users?count=${pageSize}&page=${pageNumber}`)
    .then(response => response.data),

  getUserProfile: (id) => {
    console.warn('used obsolete method')
    return profileAPI.getUserProfile(id);
  }
};

export let profileAPI = {
  getUserProfile: (id) => instance.get(`profile/${id}`)
    .then(response => response.data),

  getStatus: (id) => instance.get(`profile/status/${id}`)
    .then(response => response.data),

  setStatus: (status) => instance.put(`profile/status`, { status })
    .then(response => response.data),

  updateUserProfile: (profile) => instance.put(`profile`, profile)
    .then(responce => responce.data),

  setProfileImage: (photo) => {

    const formData = new FormData();
    formData.append('image', photo)

    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => response.data)

  }

}

export const authAPI = {
  me: () => instance.get(`auth/me`)
    .then(response => response.data),
  login: (email, password, rememberMe, captcha) => instance.post('auth/login', { email, password, rememberMe, captcha })
    .then(responce => responce.data),
  logout: () => instance.delete('auth/login')
    .then(responce => responce.data)
}

export const securityAPI = {
  getCaptchaUrl: () => instance.get(`security/get-captcha-url`)
    .then(response => response.data),

}

export const newsAPI = {
  getNews: () => axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=a6a196efca8c4d2b8dae8c4b1295e496')
    .then(response => response.data.articles),
}
