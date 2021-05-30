<template>
  <navbar
    :cart="cart"
    :cart-total="cartTotal"
    :cart-qty="cartQty"
    @delete-item="deleteItem"
  />
  <div class="container">
    <router-view
      :products="products"
      @addItem="addItem"
      @delete-item="deleteItem"
    />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  data: function() {
    return {
      products: []
    }
  },
  components: {
    Navbar
  },
  created() {
    fetch('https://hplussport.com/api/products/order/price')
      .then(response => response.json())
      .then(data => {
        this.products = data
      })
  },

  computed: {
    cart() {
      return this.$store.state.cart
    },
    cartTotal() {
      let sum = 0
      for (let key in this.$store.state.cart) {
        sum =
          sum + this.$store.state.cart[key].product.price * this.cart[key].qty
      }
      return sum
    },
    cartQty: function() {
      let qty = 0
      for (let key in this.$store.state.cart) {
        qty = qty + this.$store.state.cart[key].qty
      }
      return qty
    }
  }
}
</script>

<style lang="scss">
$primary: #6f42c1;
@import 'node_modules/bootstrap/scss/bootstrap';
</style>
