import state from './state';
import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

// import { socket, socket_estatus } from '../../helpers/funcionesIO';

const apiStore = {
    // plugins: [ socket, socket_estatus() ],
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

export default apiStore;