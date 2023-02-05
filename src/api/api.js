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
}

export const authAPI = {
    me: () => instance.get(`auth/me`)
        .then(response => response.data),
    login: (email, password) => instance.post('auth/login', { email, password })
        .then(responce => responce.data)
}
