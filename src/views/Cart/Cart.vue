<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Shopping cart</h3>
      </div>
    </div>
    <div v-for="cartItem in cartItems" :key="cartItem.product.id" class="row mt-2 pt-3 justify-content-around">
      <div class="col-2"></div>
      <div class="col-md-3 embed-responsive embed-responsive-16by9">
        <RouterLink :to="{ name: 'ShowDetails', params: { id: cartItem.product.id } }">
          <img v-bind:src="cartItem.product.imageURL" class="w-100 card-img-top embed-responsive-item" />
        </RouterLink>
      </div>
      <div class="col-md-5 px-3">
        <div class="card-block px-3">
          <h6 class="card-title">
            <RouterLink :to="{ name: 'ShowDetails', params: { id: cartItem.product.id } }">{{ cartItem.product.name }}
            </RouterLink>
          </h6>
          <p id="item-price" class="mb-0 font-weight-bold">
            {{ cartItem.product.price }} บาท
          </p>
          <p id="item-quantity" class="mb-0">
            จำนวน :
            <input type="number" size="1" class="border-bottom border-top-0 border-left-0 border-right-0"
              style="width: 50px; height: 30px;" v-model="cartItem.quantity" />
          </p>
          <p id="item-total-price" class="mb-0">
            ราคา :
            <span class="font-weight-bold">
              {{ cartItem.product.price * cartItem.quantity }}
            </span>
          </p>

        </div>
      </div>
      <div class="col-2"><button id="btndel" type="button" class="btn btn-danger"
          @click="deleteItem(cartItem.id)">ลบ</button></div>
      <div class="col-12">
        <hr />
      </div>
    </div>
    <div class="total-cost pt-2 text-right">
      <h5>จำนวน : {{ totalQuantity }} </h5>
      <h5>รวม : {{ formatTotalCost }} บาท</h5>
      <button :disabled="isDisabled" type="button" class="btn btn-primary confirm" @click="checkout">
        Checkout
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
  name: "Cart",
  props: ["baseURL"],
  data() {
    return {
      cartItems: [],
      token: null,
    };
  },
  computed: {
    totalCost() {
      return this.cartItems.reduce(
        (total, cartItem) =>
          total + cartItem.product.price * cartItem.quantity, 0);
    },
    isDisabled() {
      return this.cartItems.length === 0;
    },
    formatTotalCost() {
      if (typeof this.totalCost === 'number') {
        return this.totalCost.toFixed(0);
      }
    },
    totalQuantity() {
      return this.cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    }
  },
  methods: {
    listCartItems() {
      axios.get(`${this.baseURL}cart/?token=${this.token}`).then(
        (response) => {
          if (response.status == 200) {
            const result = response.data;
            this.cartItems = result.cartItems;
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
    checkout() {
      this.$router.push({ name: 'Checkout' });
    },
    deleteItem(itemId) {
      swal({
        title: "ต้องการลบรายการนี้หรือไม่?",
        text: "คุณไม่สามารถยกเลิกการกระทำนี้ได้",
        icon: "warning",
        buttons: {
          cancel: "ยกเลิก",
          confirm: "ตกลง",
        },
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios
            .delete(`${this.baseURL}cart/delete/${itemId}/?token=${this.token}`)
            .then(
              (response) => {
                if (response.status == 200) {
                  this.$router.go(0);
                }
                this.$emit('fetchData');
              },
              (error) => {
                console.log(error);
              }
            );
        }
      });
    },
    showDetails(productId) {
      this.$router.push({
        name: 'ShowDetails',
        params: { id: productId },
      });
    },
  },
  mounted() {
    this.token = localStorage.getItem('token');
    this.listCartItems();
  },
};
</script>

<style scoped>
h3 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}

.embed-responsive .card-img-top {
  object-fit: cover;
}

#item-price {
  color: #232f3e;
}

#item-quantity {
  float: left;
}

#item-total-price {
  float: right;
}

.confirm {
  font-weight: bold;
  font-size: larger;
}
</style>
