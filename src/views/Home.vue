<template>
  <div id="home">
    <div id="background-div" class="page-holder bg-cover">
      <div class="container py-5">
        <header class="text-left py-5">
          <h3><button @click="slideStart" id="heading" class="badge px-2 py-2"> Start shopping</button></h3>
          <p id="demo" class="badge lead mb-0 p-1 rounded"> Demo Ecommerce</p>
        </header>
      </div>
    </div>

    <div class="container" id="start-shopping">
      <div class="row">
        <div class="col-12 text-left">
          <h2 class="pt-3"> Top Categories</h2>
        </div>
      </div>

      <div class="row">
        <div v-for="index in this.categorySize" :key="index"
          class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
          <CategoryBox class="shadow" :category="categories[index - 1]" />
        </div>
      </div>
    </div>

    <hr>

    <div class="container">
      <div class="row">
        <div class="col-12 text-left">
          <h2 class="pt-3"> Top Products</h2>
        </div>
      </div>
      <div class="row">
        <div v-for="index in this.productSize" :key="index"
          class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
          <ProductBox class="shadow" :product="products[index - 1]" />
        </div>
      </div>
    </div>
  </div>

  <!-- <button @click="slideUp" class="btn btn-primary ml-5 mt-5">
    <i class="fas fa-arrow-up"></i>
  </button> -->
</template>

<script>
import CategoryBox from '../components/Category/CategoryBox.vue';
import ProductBox from '../components/Product/productbox.vue';

export default {
  name: "Home",
  components: { ProductBox, CategoryBox },
  props: ["baseURL", "categories", "products"],
  data() {
    return {
      categorySize: 0,
      productSize: 0
    }
  },
  methods: {
    slideStart() {
      // เลื่อนหน้าเว็บขึ้นไปด้านล่าง
      window.scrollBy({
        top: 710,
        behavior: "smooth"
      });
    },
    // slideUp() {
    //   // เลื่อนหน้าเว็บขึ้นไปด้านบน
    //   window.scrollTo({
    //     top: 0,
    //     behavior: "smooth"
    //   });
    // }
  },
  mounted() {
    this.categorySize = Math.min(6, this.categories.length);
    this.productSize = Math.min(6, this.products.length);
  }
};
</script>
<style>
#background-div {
  background-image: url("../assets/store.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
}

#heading {
  text-decoration: none;
  font-size: 40px;
  color: black;
  background-color: white;
}

#demo {
  font-size: 30px;
  color: white;
  background-color: black;
}
</style>