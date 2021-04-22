import axios from 'axios' 

export const state = () => ({
    topPosts: [],
    currentPost: {},
})

export const mutations = {
    setTopPosts(state, payload) {
        state.topPosts = payload;
    },
    setPost(state, payload) {
        state.currentPost = payload;
    }
} 

export const actions = {
    async getTopPosts({commit}, posts) {
        await axios.get('https://verkel-platform-default-rtdb.firebaseio.com/articulosDestacados.json')
        .then(res => {
            posts = res.data
            commit('setTopPosts', posts );
        })
        .catch(e => console.log(e))
    },
    async getPost({commit}, postId) {
        await axios.get('https://verkel-platform-default-rtdb.firebaseio.com/articulosDestacados.json')
        .then(res => {
            const DBpost = res.data.find(post => post._id === postId ? post : false);
            commit('setPost', DBpost)
        })
    }
}


