<!-- ownerListCamels.vue -->
<!-- This is a Vue component with some AJAX magic.
In the JS Code, we have defined a camel array (camels) that we populate using the function
getCamels(), using an AXIOS get request. Furthermore, we provide a delete function that can
delete camels using a DELETE request (again using AXIOS).

In the template tag, the only interesting part is the div with the v-for attribute. 
Here, Vue creates a div per camel in our camels array. Each div has an image and 
another div containing some basic information on the Camel (its color and position).-->
<template>

    <div class= "card-columns" style = "display:flex; flex-wrap:wrap;" >
          <div v-for="recipe in recipes" v-bind:key="recipe._id" class="card">
            <button type="button" class="close" @click="deleteRecipe(recipe._id)">&times;</button>
             <div class="card" style= "width: 18rem; ">
              <img class="card-img-top" v-bind:src="recipe.image" style="100px;" alt="recipe.title">
             <div class="card-body">
            <h8 class="card-title"> {{recipe.title}} </h8>
             <router-link v-bind:to= "'/recipes/'+ recipe._id "><button type="button" class="btn btn-outline-info">show info</button></router-link> 
          </div>

   
</div>
</div>
    </div>      
        
       
</template>




<script>
var axios = require('axios');

module.exports = {
  name:"listRecipes",
  data () {
    return {
      recipes: []
    }
  },
  methods: {
      //Performs a GET request to /api/camels using AXIOS.
      
        getRecipes: function () { 
            
            axios.get('/admin/recipes')
            .then(
                response => {
                    //This is only an example of how you can access the status code
                    if (response.status!==200) {
                        console.log("Wrong status code: " + response.status);
                    }
                    //If we get a response, empty the camels array and fill it with all camels from our endpoints
                    this.recipes.length = 0;
                    for (var i = 0; i < response.data.data.length; i++) {
                        this.recipes.push(response.data.data[i]);
                    }
            })
            .catch(error => {
                //In case of error, empty the camels array.
                this.recipes.length = 0;
                console.log(error);
            })
            .then(function () {
                //This code is always executed, independent of the request being successful or not.
            });
        }, 
        //Performs a DELETE request to the camel with the provided ID.
        deleteRecipe: function (recipeID) {
            console.log("Deleting camel with ID " + recipeID);
            axios.delete('admin/recipes/'+recipeID)
            .then(
                response => {
                    //This code basically finds the camel under question in the array and deletes it (using splice)
                    var localIndex = -1;
                    for (var i=0; i < this.recipes.length; i++) {
                        if (this.recipes[i]._id === recipeID) {
                            localIndex = i;
                            i = this.recipes.length;
                        }
                    }
                    if (localIndex !== -1) {
                        //Vue reacts to splice. So removing the element here causes the DOM to update.
                        this.recipes.splice(localIndex, 1); 
                    }
                    console.log("Success: " + response.status);
            })
            .catch(error => {
                console.log(error);
            })
            .then(function () {
            });

        }
    }, 
    //This basically means that once Vue is ready, we call getCamels() to fetch
    //all camels and populate our DOM tree with them.
    mounted () {
        this.getRecipes();
    }
};
</script>

<style>
img { max-width: auto;
max-height: 180px;


}
</style>

