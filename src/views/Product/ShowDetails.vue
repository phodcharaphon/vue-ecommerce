<template>
    <div class="container">
        <div class="row pt-5">
            <div class="col-md-1"></div>
            <div class="col-md-4 col-12">
                <img :src="product.imageURL" class="img-fluid" :alt="product.name" />
            </div>

            <div class="col-md-6 col-12 pt-3 pt-md-0">
                <h4>{{ product.name }}</h4>
                <h6 class="category font-italic">{{ category.categoryName }}</h6>
                <h6 class="font-weight-bold">{{ product.price }} บาท</h6>
                <p>{{ product.description }}</p>

                <div class="d-flex flex-row justify-content-between align-items-center">
                    <div class="input-group col-md-3 col-4 p-0">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Quantity</span>
                            <input type="number" class="form-control" v-model="quantity" />
                        </div>
                    </div>

                    <div class="input-group col-md-3 col-4 p-0">
                        <button class="btn" id="add-to-cart-button" @click="addToCart(this.id)" type="button">
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div class="mt-5 text-right">
                    <button id="wishlist-button" class="btn mr-3 p-1 py-0"
                        :class="{ product_added_wishlist: isAddedToWishlist }" @click="addToWishList(this.id)">
                        {{ wishlistString }}
                    </button>
                    <button id="show-cart-button" type="button" class="btn mr-3 p-1 py-0 " @click="listCartItems">
                        Show Cart
                        <ion-icon name="cart-outline" v-pre></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import swal from 'sweetalert';
import axios from 'axios';

export default {
    data() {
        return {
            product: {},
            category: {},
            quantity: 1,
            isAddedToWishlist: false,
            wishlistString: "Add to wishlist",
            token: null,
            id: null,
        };
    },
    props: ["baseURL", "products", "categories"],
    methods: {
        addToWishList(productId) {
            axios
                .post(`${this.baseURL}wishlist/add?token=${this.token}`, {
                    id: productId,
                })
                .then((res) => {
                    if (res.status === 201) {
                        this.isAddedToWishlist = true;
                        this.wishListString = "Add to wishlist";
                        swal({
                            text: "Add to Wishlist",
                            icon: "success",
                        });
                    } else {
                        swal({
                            text: "Fail Add to Wishlist",
                            icon: "error"
                        })
                    }
                })
                .catch(() => {
                    swal({
                        text: "Please Login !",
                        icon: "error"
                    })
                });
        },
        addToCart(productId) {
            if (!this.token) {
                swal({
                    text: "Please Login !",
                    icon: "error",
                });
                return;
            }
            axios
                .post(`${this.baseURL}/cart/add?token=${this.token}`, {
                    productId: productId,
                    quantity: this.quantity,
                })
                .then((res) => {
                    if (res.status === 201) {
                        swal({
                            text: "Product added in cart",
                            icon: "success",
                            closeOnClickOutside: false
                        });
                        this.$emit("fetchData");
                    }
                })
                .catch((err) => console.log("err", err));
        },
        listCartItems() {
            axios.get(`${this.baseURL}/cart/?token=${this.token}`)
                .then((res) => {
                    if (res.status === 200) {
                        this.$router.push("/cart");
                    } else {
                        // กรณีที่ไม่ได้รับสถานะ 200 OK
                        swal({
                            text: "Please Login !",
                            icon: "error" // แก้ไขเป็น "error" ให้ถูกต้อง
                        });
                    }
                })
                .catch(() => {
                    // กรณีที่มีข้อผิดพลาดในการเรียก API
                    swal({
                        text: "Please Login !",
                        icon: "error" // แก้ไขเป็น "error" ให้ถูกต้อง
                    });
                });
        }

    },
    mounted() {
        this.id = this.$route.params.id;
        this.product = this.products.find((product) => product.id == this.id);
        this.category = this.categories.find(
            (category) => category.id == this.product.categoryId
        );
        this.token = localStorage.getItem("token");
    },
};
</script>
  
<style scoped>
.category {
    font-weight: 400;
}

/* ปรับขนาดของ input เพื่อให้มีความสูงเท่ากับปุ่ม button */
.form-control {
    width: 50px;
}

#wishlist-button {
    background-color: #b9b9b9;
}

#add-to-cart-button {
    background-color: #febd69;
}

#show-cart-button {
    background-color: #131921;
    color: white;
}
</style>
  