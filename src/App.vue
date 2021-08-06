<template>
<div id="nav">
  <nav>

 <router-link to="/">Home</router-link> |
  <router-link to="about">About</router-link> |
  <router-link :to="{name: 'Product', params : {name : 'Skate'}}"> Product 1</router-link> |
  <router-link :to="{name: 'Product', params : {name : 'VTT'}}"> Product 2 </router-link> |
  <button @click="showProduct('TV')">Product 3</button>

  </nav>
 
</div>
<router-view />
</template>

<script>
export default{
 name: 'App',
 methods:{
   showProduct: function(name){
    this.$router.push({name: 'Product', params : {name: name}});
   }
 }

}

</script>

<style>
#nav router-link {
  padding: 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a{

  text-decoration: none;
  color: #999;
}
button{
  color: #999;
}
</style>
