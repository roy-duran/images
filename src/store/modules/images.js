import api from '../../api/imgur'
import { router } from '../../main'

const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

const actions = {
    async fetchImages({ rootState, commit }) {
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
        commit('setImages', response.data.data)
    },
    async uploadImages({ rootState }, images) {
        // Get Access Token
        const { token } = rootState.auth;

        // Call Api to upload
        await api.uploadImages(images, token)

        // Redirect user to image list component
        router.push('/')
    }
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

export default {
    state, getters, actions, mutations
}