import { getBanners } from '@/api/banner.js';
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
            // console.log(ctx.state.data.length);
            if(ctx.state.data.length) {
                return
            }
            ctx.commit('setLoading', true)
            const resp = await getBanners()
            ctx.commit('setData', resp)
            ctx.commit('setLoading', false)
        }
    }
}