<template>
  <Navbar />
  <div class="conatiner">
    <div class="row">
      <div class="col-12 justify-content-center d-flex flex-row pt-5">
        <div id="signin" class="flext-item">
          <h2 class="pt-4 text-center">Sign-In</h2>
          <form @submit="signin" class="form-group pt-4 pl-4 pr-4 te">
            <div class="form-group">
              <label>Email </label>
              <input v-model="email" type="email" class="form-control" />
            </div>
            <div class="form-group">
              <label>Password </label>
              <input v-model="password" type="password" class="form-control" />
            </div>
            <button class="btn btn-primary mt-2">Signin</button>
            <RouterLink class="btn btn-secondary mt-2 ml-3" :to="{ name: 'Signup' }">Signup</RouterLink>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert';
import Navbar from '../components/Navbar.vue';

export default {
  props: ["baseURL"],
  components: { Navbar },
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    async signin(e) {
      e.preventDefault();
      const user = {
        email: this.email,
        password: this.password,
      };
      await axios
        .post(`${this.baseURL}user/signIn`, user)
        .then((res) => {
          this.$router.replace("/");
          localStorage.setItem("token", res.data.token);
          this.$emit("fetchData");
          this.$router.push({ name: "Home" });
          swal({
            text: "Login successful",
            icon: "success",
          });
        })
        .catch(() => {
          swal({
            text: "Fail Login",
            icon: "error",
          });
        });
    },
  },
};
</script>
<style scoped>
.btn-primary {
  background-color: #001aff;
  color: rgb(255, 255, 255);
}

@media screen and (min-width: 992px) {
  #signin {
    width: 40%;
  }
}
</style>