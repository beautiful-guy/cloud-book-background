import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    userinfo:{
      username:'',
      avatar:'',
      desc:'',
      email:'',
      nickname:''
    },
    userdata:{},
    categoryid:"",
    bookdata:{},
    // otherbookdata:{}
  },
  mutations:{
    CHANGE_USERINFO(state,userinfo){
      state.userinfo = userinfo
    },
    CHANGE_USERDATA(state,userdata){
      state.userdata = userdata
    },
    CHANG_CATEGORYID(state,categoryid){
      state.categoryid = categoryid
    },
    CHANGE_BOOKDATA(state,bookdata){
      state.bookdata = bookdata
    },
    // CHANGE_OTHERBOOKDATA(state,otherbookdata){
    //   state.otherbookdata = otherbookdata
    // }
  },
  actions:{},
  plugins: [createPersistedState(
    {
      storage: {
        getItem: key => sessionStorage.getItem(key),
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) =>
          sessionStorage.setItem(key, value),
        removeItem: key => sessionStorage.removeItem(key),
      },
    }
  )]
})
export default store
