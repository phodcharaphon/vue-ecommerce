<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!--    Logo-->
    <RouterLink class="navbar-brand" :to="{ name: 'Home' }">
      <a class="">Demo Ecommerce</a>
      <!-- <img id="logo" src="../assets/icon.png" /> -->
    </RouterLink>

    <!--    Burger Button-->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!--      Search Bar-->
      <form class="d-flex mt-1" role="search">
        <input class="form-control me-2 mt-1" style="width: 100%;" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success mt- my-sm-0 ml-2 mt-1" type="submit">Search</button>
      </form>

      <!--      DropDowns-->
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="browseDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Browse
          </a>
          <div class="dropdown-menu" aria-labelledby="browseDropdown">
            <RouterLink class="dropdown-item" :to="{ name: 'Admin' }">Admin</RouterLink>
            <RouterLink class="dropdown-item" :to="{ name: 'Home' }">Home</RouterLink>
            <RouterLink class="dropdown-item" :to="{ name: 'AdminProduct' }">Product</RouterLink>
            <RouterLink class="dropdown-item" :to="{ name: 'AdminCategory' }">Category</RouterLink>
          </div>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="accountsDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Accounts
          </a>
          <div class="dropdown-menu" aria-labelledby="accountsDropdown">
            <RouterLink class="dropdown-item" v-if="!token" :to="{ name: 'Signin' }">Wishlist</RouterLink>
            <RouterLink class="dropdown-item" v-else :to="{ name: 'Wishlist' }">Wishlist</RouterLink>
            <RouterLink class="dropdown-item" v-if="!token" :to="{ name: 'Signin' }">Log In</RouterLink>
            <RouterLink class="dropdown-item" v-if="!token" :to="{ name: 'Signup' }">Sign Up</RouterLink>
            <a class="dropdown-item" v-if="token" href="#" @click="signout">Sign Out</a>
          </div>
        </li>

        <li class="nav-item">
          <RouterLink class="nav-link text-light" :to="{ name: 'Order' }">Orders</RouterLink>
        </li>

        <li class="nav-item">
          <div id="cart">
            <span id="nav-cart-count">{{ cartCount }}</span>
            <RouterLink class="text-light" :to="{ name: 'Cart' }"><i class="bi bi-bag-check" style="font-size:25px"></i>
            </RouterLink>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: ["cartCount"],
  data() {
    return {
      token: null,
    };
  },

  methods: {
    signout() {
      localStorage.removeItem("token");
      this.token = null;
      this.$emit("resetCartCount");
      this.$router.push({ name: "Home" });
      swal({
        text: "Logout Success !",
        icon: "success",
        closeOnClickOutside: false,
      });
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
  },
};
</script>

<style scoped>
#logo {
  width: 150px;
  margin-left: 20px;
  margin-right: 20px;
}

.nav-link {
  color: rgba(255, 255, 255);
}

#search-button-navbar {
  background-color: #febd69;
  border-color: #febd69;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}

.nav-item .nav-link:hover {
  color: #febd69;
  /* เมื่อโฮเวอร์และเลือกลิงค์ */
}

.dropdown-menu {
  background-color: #343a40;
}

.dropdown-item {
  color: white;
}

.dropdown-item:hover {
  background-color: #febd69;
  /* เมื่อโฮเวอร์และเลือกรายการดรอปดาวน์ */
  color: black;
}

/* ปรับแต่งสไตล์ของปุ่มค้นหา */
.form-inline .form-control {
  width: 100%;
}

.btn-outline-success {
  background-color: #febd69;
  color: black;
  border-color: #febd69;
}

.btn-outline-success:hover {
  background-color: black;
  /* เมื่อโฮเวอร์ค้นหา */
  color: white;
  border-color: black;
}

#nav-cart-count {
  background-color: red;
  color: white;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  font-size: 15px;
}

#cart {
  position: relative;
}
</style>