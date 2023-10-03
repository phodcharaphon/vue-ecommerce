<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3 class="pt-3">Add Category</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form>
                    <div class="form-group mb-3">
                        <label>Category Name</label>
                        <input type="text" class="form-control" v-model="categoryName" />
                    </div>
                    <div class="form-group mb-3">
                        <label>Category Description</label>
                        <textarea type="text" class="form-control" v-model="description" />
                    </div>
                    <div class="form-group mb-3">
                        <label>Image</label>
                        <input type="text" class="form-control" v-model="imageUrl" />
                    </div>
                    <button type="button" class="btn btn-primary" @click="addCategory">
                        Submit
                    </button>
                </form>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
    data() {
        return {
            categoryName: null,
            description: null,
            imageUrl: null,
        };
    },
    methods: {
        addCategory() {
            const newCategory = {
                categoryName: this.categoryName,
                description: this.description,
                imageUrl: this.imageUrl,
            };
            const baseURL = "https://limitless-lake-55070.herokuapp.com";

            axios.post(`${baseURL}/category/create`, JSON.stringify(newCategory), {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(() => {
                    this.$emit("fetchData");
                    this.$router.push({name: 'Category'});
                    swal({
                        text: 'Add Success',
                        icon: 'success',
                    });
                })
                .catch(() => {
                    swal({
                        text: 'Add Error',
                        icon: 'error',
                    });
                });
        },
    },

};
</script>
<style></style>