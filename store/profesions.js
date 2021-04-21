import axios from 'axios' 

export const state = () => ({
    profesions: []
})

export const mutations = {
    setProfesions(state, payload) {
        state.profesions = payload;
    }
}

export const actions = {
    async getProfesions({commit}, profesions) {
        await axios.get('https://verkel-platform-default-rtdb.firebaseio.com/profesiones.json')
        .then(res => {
            profesions = res.data
            commit('setProfesions', profesions)
        })
    }
}