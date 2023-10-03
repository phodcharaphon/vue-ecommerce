<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3 class="pt-3">Our Categories</h3>
                <RouterLink :to="{ name: 'AddCategory' }" v-show="$route.name == 'AdminCategory'">
                    <button class="btn btn-primary" style="float:right">Add Category</button>
                </RouterLink>
            </div>
        </div>
        <div class="row">
            <div v-for="category of categories" :key="category.id" class="col-xl-4 col-md-6 col-12 pt-3 d-flex">
                <CategoryBox :category="category"> </CategoryBox>
            </div>
        </div>
    </div>
</template>

<script>
import CategoryBox from '../../components/Category/CategoryBox.vue';

export default {
    name: "Category",
    props: ["baseURL", "categories"],
    components: { CategoryBox },
    mounted() {
        if (this.$route.name == 'AdminCategory' && !localStorage.getItem('token')) {
            this.$router.push({ name: 'Signin' });
        }
    }
};
</script>
<style></style>