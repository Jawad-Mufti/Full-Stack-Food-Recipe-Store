<template>
  <div>
      
      <form>

  <div class="form-group">
     <label for="input">Title</label>
    <input type="text" class="form-control" v-model="recipe.title" id="inputTitle" placeholder="Enter recipe title"  >
    <small id="inputTitle" class="form-text text-muted"> provide the name of the recipe</small>
  </div>

   <div class = "form-group">
      <label for="input">image </label>
                    <input class= "form-control"  v-model="recipe.image" type="text" name="image" placeholder=" Enter image url" >
                </div>
  
  <div class="form-group">
    <label for="input">description</label>
    <input type="text" class="form-control" v-model="recipe.description" id="desciption" placeholder="please describe how the recipe could be made">
  </div>
 
  <button type="submit" class="btn btn-primary" @click="addToApi">Submit</button>
  
</form>
    
 </div>



 
</template>

<script>
var axios = require("axios");
module.exports = {
  data() {
    return {
      recipe: {
        title: "",
        image: "",
        description: ""
      }
    };
  },
  methods: {
    addToApi: function() {
      let newRecipe = {
        title: this.recipe.title,
        image: this.recipe.image,
        description: this.recipe.description
      };
      console.log(newRecipe);
      axios.post("admin/recipes/", newRecipe)
        .then(response => {
          //This is only an example of how you can access the status code
          if (response.status !== 200) {
            console.log("Wrong status code: " + response.status);
          }
          //If we get a response, empty the camels array and fill it with all camels from our endpoints

          console.log(response.data);
          this.recipe = response.data;
        })
        .catch(error => {
          //In case of error, empty the camels array.

          console.log(error);
        })
        .then(function() {
          //This code is always executed, independent of the request being successful or not.
           window.open('http://localhost:3000/admin#/','_self');
        });
    }
  }
};
</script>

