<template>
    <div class="card h-100 w-100">
        <div class="embed-responsive embed-responsive-16by9">
            <img class="card-img-top embed-responsive-item" :src="product.imageURL" alt="Card image cap" />
        </div>
        <div class="card-body">
            <RouterLink :to="{ name: 'ShowDetails', params: { id: product.id } }">
                <h5 class="card-title">{{ product.name }}</h5>
            </RouterLink>
            <p class="card-text">
                {{ product.description }}
            </p>
            <RouterLink :to="{ name: 'EditProduct', params: { id: product.id } }" v-show="$route.name == 'AdminProduct'">
                <button class="btn btn-secondary">Edit</button>
            </RouterLink>
        </div>
    </div>
</template>
<script>
export default {
    name: "ProductBox",
    props: ["product"],
    methods: {
        showDetails() {
            this.$router.push({
                name: "ShowDetails",
                params: { id: this.product.id },
            });
        },
    },
};
</script>
<style>
.card-img-top {
    object-fit: cover;
}
</style>