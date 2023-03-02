import axios from "axios"

const instance = axios.create({
  withCredentials: true,
  headers:
    { 'API-KEY': '2d31fe63-c710-4194-97a9-60f225513bdf', },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

const options = {
  method: 'GET',
  url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
  params: {
    q: '',
    pageNumber: '1',
    pageSize: '50',
    autoCorrect: 'true',
    withThumbnails: 'true',
    fromPublishedDate: 'null',
    toPublishedDate: 'null',
    safeSearch: 'true'
  },
  headers: {
    'X-RapidAPI-Key': '251b6f0c23msh46c0712d260cac0p119f1fjsn8aaab9773ea0',
    'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
  }
};

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
  getNews: async (request) => {
    options.params.q = request.query
    options.params.pageNumber = request.pageNumber
    options.params.safeSearch = request.safeSearch
    try {
      console.log(options)
      let data = await axios.request(options)
      data.data.pageSize = options.params.pageSize
      console.log(data.data)
      return data.data;
    }
    catch (error) {
      console.error(error)
    }
  },
}