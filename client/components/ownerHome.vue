<!-- ownerHome.vue -->
<!-- This is a really basic (static) Vue component.
We just demonstrate how data (variables in the Vue instance) can be bound to HTML elements -->
<template>
  <div class="center" >
    <h1>{{title}}</h1>
     <img class="img-fluid" alt="Responsive image" src= "http://fabellastudios.com/wp-content/uploads/2017/03/FF4.jpg" >
    <p>{{description}}</p>
    
  </div>
</template>

<script>
module.exports = {
  name:"Home",
  data () { 
    return {
      title:"welcome to our home page",
     
      description:"This is the owner's SPA. You can look at all recipes, and remove them if you want."
    }
  }
};
</script><style>
 img {
        width: 100%;
        height: 100%
    
}
</style>
