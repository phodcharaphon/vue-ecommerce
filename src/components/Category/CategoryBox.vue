<template>
  <div class="card w-100 h-100" style="margin-top: 10px">
    <!-- ภาพ -->
    <div class="embed-responsive embed-responsive-16by9">
      <img class="card-img-top embed-responsive-item" :src="category.imageUrl" alt="Card image cap" />
    </div>
    <!-- ข้อมูลหมวดหมู่ -->
    <div class="card-body">
      <RouterLink :to="{ name: 'ListProducts', params: { id: category.id } }">
        <h5 class="card-title">{{ category.categoryName }}</h5>
      </RouterLink>
      <p class="card-text">
        {{ category.description }}
      </p>
      <RouterLink :to="{ name: 'EditCategory', params: { id: category.id } }" v-show="$route.name == 'AdminCategory'">
        <button class="btn btn-primary">Edit</button>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryBox",
  props: ["category"],
  methods: {
    listProducts() {
      this.$router.push({
        name: "ListProducts",
        params: { id: this.category.id },
      });
    },
  },
};
</script>

  
<style scoped>
.card-img-top {
  object-fit: cover;
}
</style>