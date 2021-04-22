import axios from 'axios' 

export const state = () => ({
    profesions: [],
    currentProfesion: {}
})

export const mutations = {
    setProfesions(state, payload) {
        state.profesions = payload;
    },
    setProfesion(state, payload) {
        state.currentProfesion = payload;
    }
}

export const actions = {
    async getProfesions({commit}, profesions) {
        await axios.get('https://verkel-platform-default-rtdb.firebaseio.com/profesiones.json')
        .then(res => {
            profesions = res.data
            commit('setProfesions', profesions)
        })
    },
    async getProfesion({commit}, profesionId) {
        await axios.get('https://verkel-platform-default-rtdb.firebaseio.com/profesiones.json')
        .then(res => {
            const DBprofesion = res.data.find(profesion => profesion._id === profesionId ? profesion : false);
            commit('setProfesion', DBprofesion);
        })
    }
}