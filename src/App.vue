<template>
  <Navbar :cartCount="cartCount" @resetCartCount="resetCartCount" v-if="!['Signup', 'Signin'].includes($route.name)" />
  <div style="min-height: 70vh">
    <RouterView v-if="products && categories" :baseURL="baseURL" :products="products" :categories="categories"
      @fetchData="fetchData">
    </RouterView>
  </div>
  <Footer v-if="!['Signup', 'Signin'].includes($route.name)" />
</template>

<script>
import axios from 'axios';
import Navbar from './components/Navbar.vue';
import Footer from './components/footer.vue';

export default {
  data() {
    return {
      baseURL: "https://limitless-lake-55070.herokuapp.com/",
      products: null,
      categories: null,
      key: 0,
      token: null,
      cartCount: 0,
    }
  },
  components: { Navbar, Footer },
  methods: {
    async fetchData() {

      //api categories
      await axios.get(this.baseURL + "category/")
        .then(res => {
          this.categories = res.data
        })
        .catch((err) => console.log('err', err));

      //api products

      await axios.get(this.baseURL + "product/")
        .then(res => {
          this.products = res.data
        })
        .catch((err) => console.log('err', err));

      //fetch cart items
      if (this.token) {
        await axios.get(`${this.baseURL}cart/?token=${this.token}`)
          .then((res) => {
            if (res.status == 200) {
              this.cartCount = Object.keys(res.data.cartItems).length;
            }
          },
            (error) => {
              console.log(error);
            }
          );
      }
    },
    resetCartCount() {
      this.cartCount = 0;
    },
  },
  mounted() {
    this.fetchData();
    this.token = localStorage.getItem('token');
  }
}
</script>

<style></style>