import { createStore } from 'vuex'

export const store = createStore({
  state: {
    cart: [],
    products: []
  },
  mutations: {
    addItem(state, product) {
      const found = state.cart.find(
        item => item.product.id == Number(product.id)
      )
      if (found) {
        found.qty++
      } else {
        state.cart.push({ product: product, qty: 1 })
      }
      console.log(`pushing item: ${product}`)
      console.log(`pushing item: ${state.cart}`)
    },
    deleteItem(state, id) {
      if (state.cart[id].qty > 1) {
        state.cart[id].qty--
      } else {
        state.cart.splice(id, 1)
      }
    }
  }
})
