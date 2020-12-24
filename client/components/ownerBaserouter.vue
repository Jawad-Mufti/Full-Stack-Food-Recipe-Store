<!-- baserouter.vue -->
<template>
  <div>
    <!-- This is our header. Just a Jumbotron with some static info and a navigation bar -->

    <div class="jumbotron text-center w-75 mx-auto"> 
      <h1>Frontend Template: Camel Owner</h1>
      <p>This is a minimum frontend template using Bootstrap 4 (CSS only), Vue.js and Axios.</p>
      <nav class="navbar navbar-expand-sm bg-light navbar-light">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/listRecipes">List recipes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/addRecipes">add recipes</a>
          </li>
      
        </ul>
      </nav>
    </div>
  
  
    
     
     
      <div class="row">
      <!-- The empty col-2 here are just used as a placeholder on the right and left -->
      <div class="col-sm-2">
      </div>
     
       <!-- Router view is where we will mount our dynamic content  -->
       <div class="col-sm-8 text-center">
        <router-view></router-view>
      </div>
    
      <div class="col-sm-2">
      </div>
    </div>
  
  <!-- This is our footer -->
  <div class="jumbotron text-center w-75 mx-auto " style="margin-bottom:0">
    <p>Created by Jawad</p>
  </div>
</div>
</template>

<script>
  module.exports = {
    name:"BaseRouter"
  };
</script>