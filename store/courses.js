import axios from 'axios'

export const state = () => ({
    courses: [],
    currentCourse: {},
})

export const mutations = {
    setCourses(state, payload) {
        state.courses = payload;
    },
    setCourse(state, payload) {
        state.currentCourse = payload
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
            console.log(res.data);
            console.log(DBcourse);
            commit('setCourse', DBcourse)
        })
        .catch(e => console.log(e))
    }
}