// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {

//   },
//   mutations: {

//   },
//   actions: {

//   }
// })
const STORAGE_KEY = 'store-data'
export default {
    fetch () {
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    },
    save (items) {
        window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
    }
}