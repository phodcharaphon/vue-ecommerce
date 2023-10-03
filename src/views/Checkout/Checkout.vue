<template>
  <div class="checkout-container">
    <h3 class="checkout-heading">Thank You</h3>

    <div class="alert alert-primary" role="alert">
      ทางร้านได้รับออเดอร์เรียบร้อยแล้ว จะจัดส่งให้เร็วที่สุดคะ
    </div>

    <!-- <button class="checkout-button" id="proceed-to-checkout" @click="goToCheckout()">
      Make Payment
    </button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // stripeAPIToken: process.env.VUE_APP_STRIPETOKEN,
      stripe: '',
      token: null,
      sessionId: null,
      checkoutBodyArray: [],
    };
  },

  name: 'Checkout',
  props: ['baseURL'],
  methods: {
  //   configureStripe() { },
  //   getAllItems() {
  //     axios.get(`${this.baseURL}cart/?token=${this.token}`).then(
  //       (response) => {
  //         if (response.status == 200) {
  //           const products = response.data;
  //           const len = Object.keys(products.cartItems).length;
  //           for (const i = 0; i < len; i++)
  //             this.checkoutBodyArray.push({
  //               imageUrl: products.cartItems[i].product.imageURL,
  //               productName: products.cartItems[i].product.name,
  //               quantity: products.cartItems[i].quantity,
  //               price: products.cartItems[i].product.price,
  //               productId: products.cartItems[i].product.id,
  //               userId: products.cartItems[i].userId,
  //             });
  //         }
  //       },
  //       (err) => {
  //         console.log(err);
  //       }
  //     );
  //   },
  //   async goToCheckout() {
  //     try {
  //       const response = await axios.post(
  //         this.baseURL + 'order/create-checkout-session',
  //         this.checkoutBodyArray
  //       );

  //       localStorage.setItem('sessionId', response.data.sessionId);

  //       const session = await this.stripe.redirectToCheckout({
  //         sessionId: response.data.sessionId,
  //       });

  //       if (session.error) {
  //         // จัดการเวลาเกิดข้อผิดพลาด
  //         console.error(session.error);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // },
  // mounted() {
  //   // get the token
  //   this.token = localStorage.getItem('token');
  //   // get all the cart items
  //   this.stripe = Stripe(this.stripeAPIToken);
  //   this.getAllItems();
  },
};
</script>

<style scoped>
.checkout-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
}

.checkout-heading {
  font-size: 24px;
  margin-bottom: 20px;
}

.alert {
  width: 50%;
  text-align: center;
}

.checkout-button {
  background-color: #5d3dec;
  border: none;
  color: white;
  margin-top: 20px;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.checkout-button:hover {
  background-color: #432bb1;
}

.checkout-button:disabled {
  background-color: #9b86f7;
  cursor: not-allowed;
}
</style>