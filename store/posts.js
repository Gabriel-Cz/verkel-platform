import axios from 'axios' 

export const state = () => ({
    posts: [],
    currentPost: {},
})

export const mutations = {
    setPosts(state, payload) {
        state.posts = payload;
    },
    setPost(state, payload) {
        state.currentPost = payload;
    }
} 

export const actions = {
    async getPosts({commit}, posts) {
        await axios.get('https://verkel-platform-default-rtdb.firebaseio.com/articulosDestacados.json')
        .then(res => {
            posts = res.data
            commit('setPosts', posts );
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


