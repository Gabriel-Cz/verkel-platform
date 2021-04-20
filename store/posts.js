import axios from 'axios' 

export const state = () => ({
    topPosts: [],
})

export const mutations = {
    setTopPosts(state, payload) {
        state.topPosts = payload;
    }
} 

export const actions = {
    async getTopPosts({commit}, posts) {
        await axios.get('https://verkel-platform-default-rtdb.firebaseio.com/articulosDestacados.json')
        .then(res => {
            posts = res.data
            console.log(posts);
            commit('setTopPosts', posts );
        })
        .catch(e => console.log(e))
    },
}


