import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import Category from '../views/Category/Category.vue'
import Admin from '../views/Admin/Admin.vue'
import Product from '../views/Product/Product.vue'
import AddProduct from '../views/Product/AddProduct.vue'
import EditCategory from '../views/Category/EditCategory.vue'
import EditProduct from '../views/Product/EditProduct.vue'
import ShowDetails from '../views/Product/ShowDetails.vue'
import ListProducts from '../views/Category/ListProducts.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import Wishlist from '../views/Product/Wishlist.vue'
import Cart from '../views/Cart/Cart.vue'
import Order from '../views/Orders/Order.vue'
import OrderDetails from '../views/Orders/OrderDetails.vue'
import Checkout from '../views/Checkout/Checkout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category/show/:id',
      name: 'ListProducts',
      component: ListProducts
    },
    {
      path: '/admin/category/add',
      name: 'AddCategory',
      component: AddCategory
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/admin/category',
      name: 'AdminCategory',
      component: Category
    },
    //category edit
    {
      path: '/admin/category/:id',
      name: 'EditCategory',
      component: EditCategory
    },
    //admin home page
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/admin/product',
      name: 'AdminProduct',
      component: Product
    },
    //add product
    {
      path: '/admin/product/add',
      name: 'AddProduct',
      component: AddProduct
    },
    //edit product
    {
      path: '/admin/product/:id',
      name: 'EditProduct',
      component: EditProduct
    },
    //show detail product
    {
      path: '/product/show/:id',
      name: 'ShowDetails',
      component: ShowDetails
    },
    // sign up and signin
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/wishlist',
      name: 'Wishlist',
      component: Wishlist
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/order/:id',
      name: 'OrderDetails',
      component: OrderDetails
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
  ]
})

export default router
