<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3 class="pt-3">Our Products</h3>
                <RouterLink :to="{name : 'AddProduct'}" v-show="$route.name=='AdminProduct'">
                    <button class="btn btn-primary" style="float: right">Add Product</button>
                </RouterLink>
            </div>
        </div>
        <div class="row">
            <div v-for="product of products" :key="product.id" class="col-md-6 col-xl-4 col-12 pt-3 d-flex">
                <ProductBox :product="product" />
            </div>
        </div>
    </div>
</template>
<script>
import ProductBox from '../../components/Product/ProductBox.vue';

export default {
    name: "Product",
    props: ["baseURL","products"],
    components: { ProductBox },
    mounted() {
        if (this.$route.name='AdminProduct' && !localStorage.getItem("token")) {
            this.$router.push({name: 'Signin'});
        }
    }
}
</script>
<style></style>