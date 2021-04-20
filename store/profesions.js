import axios from 'axios' 

export const state = () => ({
    topProfesions: []
})

export const mutations = {
    setTopProfesions(state, payload) {
        state.topProfesions = payload;
    }
}

export const actions = {
    async getTopProfesions({commit}, profesions) {
        await axios.get('https://verkel-platform-default-rtdb.firebaseio.com/profesionesDestacadas.json')
        .then(res => {
            profesions = res.data
            console.log(profesions);
            commit('setTopProfesions', profesions);
        })
        .catch(e => console.log(e))
    }
}