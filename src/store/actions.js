export const GET_LIST = async ({ commit }, http) => {
    return await http.get('/city',{},{emulateJSON: true}).then(function name(response) {
        commit('GET_LIST',response.body.result.list);
    });
}