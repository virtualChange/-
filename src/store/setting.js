import { getSetting } from '@/api/setting.js';
export default {
    namespaced: true,
    state: {
        isLoading: false,
        data: []
    },
    mutations: {
        setLoading(state, payload) {
            state.isLoading = payload
        },
        setData(state, payload) {
            state.data = payload
        }
    },
    actions: {
        async fetchData(ctx) {
            ctx.commit('setLoading', true)
            const resp = await getSetting()
            ctx.commit('setData', resp)
            ctx.commit('setLoading', false)
        }
    }
}