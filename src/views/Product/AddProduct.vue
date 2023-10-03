<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center mt-3">
                <h4>Add New Product</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form>
                    <div class="gorm-group">
                        <label>Category</label>
                        <select class="form-control" v-model="categoryId" required>
                            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.categoryName }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="name" />
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <input type="text" class="form-control" v-model="description"/>
                    </div>
                    <div class="form-group">
                        <label>ImageURL</label>
                        <input type="text" class="form-control" v-model="imageURL"/>
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input type="number" class="form-control" v-model="price"/>
                    </div>
                </form>
                <button class="btn btn-primary" type="button" @click="addProduct">Add Product</button>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
    props: ["baseURL","categories"],
    data() {
        return {
            id: null,
            categoryId: null,
            name: null,
            description: null,
            imageURL: null,
            price: null
        }
    },
    methods: {
        addProduct() {
            const newProduct = {
                categoryId: this.categoryId,
                description: this.description,
                name: this.name,
                imageURL: this.imageURL,
                price: this.price
            }
            axios.post(this.baseURL + "product/add", JSON.stringify(newProduct),{
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(() => {
                this.$router.push({name: 'Product'});
                swal({
                    text: "Add Product Success !",
                    icon: "sccuess"
                })
            })
            .catch((err) => {
                console.log("err", err);
            })
        }
    }
}
</script>

<style>
    
</style>