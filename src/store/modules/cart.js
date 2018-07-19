const CHANGE_PRICE = 'CHANGE_PRICE'
const CHANGE_STYLE = 'CHANGE_STYLE'
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'



// function makeAction(type) {
//     return ({ dispatch }, ...args) => dispatch(type, ...args)
// }


const state = {
    iPhone6S: {
        name: 'Apple/苹果 iPhone 6S',
        desc: '3D Touch、1200万像素照片、4k视频，强大功能于一身。',
        price: '5288 - 6888',
        isSelected: true,
        style: {
            '银色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
            '深空灰色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gray-select-2015.png',
            '金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gold-select-2015.png',
            '玫瑰金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-rosegold-select-2015.png'
        },
        activeStyleUrl: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
        storage: {
            '16GB': 5288,
            '64GB': 6088,
            '128GB': 6888
        }
    },
    cart: []
}

// 相关的 mutations
const mutations = {
    [CHANGE_STYLE](state, styleName, styleUrl) {
        state.iPhone6S.activeStyle = styleName
        state.iPhone6S.activeStyleUrl = styleUrl
    },
    [CHANGE_PRICE](state, storage, price) {
        state.iPhone6S.activeStorage = storage
        state.iPhone6S.price = price
        state.iPhone6S.isSelected = false
    },
    [ADD_ITEM](state) {
        const activeStyle = state.iPhone6S.activeStyle === undefined ? '银色' : state.iPhone6S.activeStyle
        const type = activeStyle + '，' + state.iPhone6S.activeStorage
        const cartInfo = {
            type: type,
            count: 1,
            price: state.iPhone6S.price
        }
        state.cart.push(cartInfo)
    },
    [REMOVE_ITEM](state, cartInfo) {
        state.cart.$remove(cartInfo)
    }
};
// const changePrice = makeAction('CHANGE_PRICE')
// const changeStyle = makeAction('CHANGE_STYLE')
// const addItem = makeAction('ADD_ITEM')
// const removeItem = makeAction('REMOVE_ITEM')
const actions = {
    changePrice({ commit }, data) {
        commit(CHANGE_PRICE)
    },
    changeStyle({ commit }, data) {
        commit(CHANGE_STYLE)
    },
    addItem({ commit }, data) {
        commit(ADD_ITEM)
    },
    removeItem({ commit }, data) {
        commit(REMOVE_ITEM)
    }
};
const getters = {
    iPhone6S: state => state.iPhone6S
}
export default {
    state,
    mutations,
    actions,
    getters
}