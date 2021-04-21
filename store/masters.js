import axios from 'axios'

export const state = () => ({
    masters: [],
})

export const mutations = {
    setMasters(state, payload) {
        state.institutions = payload;
    },
}

export const actions = {
    async getMasters({commit}, masters) {
        await axios.get('https://verkel-platform-default-rtdb.firebaseio.com/instituciones.json')
        .then(res => {
            masters = res.data;
            commit('setInstitutions', masters)
        })
        .catch(e => console.log(e))
    },
}