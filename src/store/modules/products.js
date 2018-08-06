const state = {
    products: [
        { name: '鼠标', price: 20 },
        { name: '键盘', price: 40 },
        { name: '耳机', price: 60 },
        { name: '显示屏', price: 80 }
    ]
}
const getters = {
    saleProducts: state => {
        let saleProducts = state.products.map(product => {
            return {
                name: product.name,
                price: product.price / 2
            }
        })
        return saleProducts
    },
    products: state => state.products
}
const mutations = {
    minusPrice(state, payload) {
        //mutations中绝对不允许出现异步
        let newPrice = state.products.forEach(product => {
            product.price -= payload
        })
    },
};
const actions = {
    //actions中可以包含异步操作
    minusPriceAsync(context, payload) {
        setTimeout(() => {
            context.commit('minusPrice', payload);
        }, 2000)
    }
}
export default {
    state,
    getters,
    mutations,
    actions

}