import axios from 'axios'

export const state = () => ({
    topCourses: []
})

export const mutations = {
    setTopCourses(state, payload) {
        state.topCourses = payload;
    }
}

export const actions = {
    async getTopCourses({commit}, courses) {
        await axios.get('https://verkel-platform-default-rtdb.firebaseio.com/cursosDestacados.json')
        .then(res => {
            courses = res.data;
            commit('setTopCourses', courses)
        })
        .catch(e => console.log(e))
    }
}