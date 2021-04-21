import axios from 'axios'

export const state = () => ({
    courses: [],
    course: {},
})

export const mutations = {
    setCourses(state, payload) {
        state.courses = payload;
    },
    setCourse(state, payload) {
        state.course = payload
    }
}

export const actions = {
    async getCourses({commit}, courses) {
        await axios.get('https://verkel-platform-default-rtdb.firebaseio.com/cursos.json')
        .then(res => {
            courses = res.data;
            commit('setCourses', courses)
        })
        .catch(e => console.log(e))
    },
    async getCourse({commit}, id) {
        await axios.get('https://verkel-platform-default-rtdb.firebaseio.com/cursos.json')
        .then(res => {
            const DBcourse = res.data.find(course => course._id === id ? course : false);
            commit('setCourse', DBcourse)
            console.log(DBcourse);
        })
        .catch(e => console.log(e))
    }
}