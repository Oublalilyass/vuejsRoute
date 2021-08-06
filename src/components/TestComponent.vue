<template>
<h3>{{msg}}</h3>
<br>

<input :class="{'border-green': msg !== '', 'border-red': msg === ''}" v-model="serviceInput" >
<button @click="ClikMe">Add Service!</button>

<div>
    <ul>
        <li  v-for="service in services" :key="service.name">
                   {{service.name}}
        </li>
    </ul>
</div>
</template>

<script>
export default {
  props: {
  },
  name: 'TestComponent',
  data(){
      return{
          isDivShow: false,
          serviceInput: '',
          msg: '',
          services:[
              {name: 'benza'},
               {name: 'MrMan'},
                {name: 'Paritel'}
          ]
      }
  },
  methods:{
     ClikMe(){
        this.services.push({name: this.serviceInput});
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

.border-green{
  border: 1px solid green;
}
.border-red{
  border: 1px solid red;
}

</style>
