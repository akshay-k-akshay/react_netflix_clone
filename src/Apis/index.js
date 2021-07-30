import axios from 'axios';
import { Constants } from '../Constants'

const instance = axios.create({
    baseURL: Constants.BASE_URL,
});

export const api = {
    banner: async () => {
        const response = await instance.get(`/trending/all/week?api_key=${Constants.API_KEY}&language=en-US`)
        return response.data.results
    },
    originals: async (url) => {
        const response = await instance.get(url)
        return response.data.results
    },
    actions: async (url) => {
        const response = await instance.get(url)
        return response.data.results
    },
    videos: async (id) => {
        const response = await instance.get(`/movie/${id}/videos?api_key=${Constants.API_KEY}&language=en-US`)
        return response.data.results
    }
}