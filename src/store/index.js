import Vue from 'vue'
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as plugins_obj from './plugins/clone';
const plugins = Object.values(plugins_obj)

Vue.use(Vuex);
const getters = {

}
const state = {
    index: {
        
    },
    classify: {

    },
    list: {
        data: []
    },
    my: {

    }
}
/* store */
export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    plugins
})
