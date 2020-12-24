<template>
   
   <form>
  <div class="form-group">
    <label for="author"> Author</label>
    <input type="text" class="form-control" placeholder="enter author name" v-model="comment.author">
  </div>

   <div class="form-group">
    <label for="description"> Description </label>
    <input  type="text" class="form-control" rows="3" v-model="comment.text">
  </div>
   <button type="submit" class="btn btn-primary mb-2" @click="addToApi"> Add comment </button>
    <router-link v-bind:to= "'/recipes/'+ this.recipeId "> </router-link>
</form>   
</template>

<script>
var axios = require("axios");

module.exports = {
  data() {
    return {
      recipeId: this.$route.params.recipeId,
      comment: {
        author: "",
        text: ""
      }
    };
  },
  methods: {
    addToApi: function() {
      let newComment = {
        author: this.comment.author,
        text: this.comment.text
      };
      console.log(newComment);
      axios.post("admin/recipes/" + this.recipeId + "/comments", newComment)
        .then(response => {
          if (response.status !== 200) {
            console.log("Wrong status code: " + response.status);
          }

          console.log(response.data);
          console.log("you have commented successfully")
       
        })
        .catch(error => {
          //In case of error, empty the camels array.

          console.log(error);
        })
        .then(response => {
          //This code is always executed, independent of the request being successful or not.
          window.open('http://localhost:3000/admin#/recipes/'+ this.recipeId,'_self')
        });
    }
  }
};
</script>