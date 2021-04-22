import axios from 'axios'

export const state = () => ({
    masters: [],
})

export const mutations = {
    setMasters(state, payload) {
        state.masters = payload;
    },
}

export const actions = {
    async getMasters({commit}, masters) {
        await axios.get('https://verkel-platform-default-rtdb.firebaseio.com/especializaciones.json')
        .then(res => {
            masters = res.data;
            console.log(res.data);
            commit('setMasters', masters)
        })
        .catch(e => console.log(e))
    },
}