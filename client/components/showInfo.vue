<template>
    <div class="row w-75 mx-auto " >
        <div class="col-md-8 col-sm-3">
            <div class="thumbnail">
                <img class="img-fluid" alt="Responsive image"  :src= "recipe.image" >

            </div>
<div class="card border-primary mb-3" style="width:100%">
  <div class="card-header">Recipe</div>
  <div class="card-body text-primary">
    <h5 class="card-title">{{recipe.title}}</h5>
    <p class="card-text">{{recipe.description}}</p>
  </div>
</div>
            <div class="comment">
                 <div class="text-right">
                  <router-link v-bind:to = "'/AddComment/'+ recipe._id "><button type="button" class="btn btn-success" style="padding-bottom: 5px; margin-bottom: 10px;">Add new Comment</button></router-link> 
                 </div>
                  <div v-for="comment in recipe.comments" v-bind:key="comment._id" class="media border p-3 mt-3 mb-3">   
                      <div class="media-body">
                        <button type="button" class="close" @click="deleteComment(comment._id)">&times;</button>
                        <h8 class="mt-0">{{comment.author}}</h8>
                        <p>{{comment.text}}</p>

                      </div>
                  </div>
                
            </div>

        </div>
    </div>
</template>


<script>
var axios = require('axios');

module.exports =  {
    data(){
        return{
            recipeId: this.$route.params.recipeId,
            recipe: {
                comments:[],
                title:'',
                image:'',
                description:''

            }
        }
    },
    methods: {
      //Performs a GET request to /api/camels using AXIOS.
        getRecipe: function () {
            axios.get('/admin/recipes/'+this.recipeId+'/comments')
            .then(
                response => {
                    //This is only an example of how you can access the status code
                    if (response.status!==200) {
                        console.log("Wrong status code: " + response.status);
                    }
                    //If we get a response, empty the camels array and fill it with all camels from our endpoints
                    
                        console.log(response.data);
                        this.recipe = response.data;
                        console.log(this.recipe);
                    
            })
            .catch(error => {
                //In case of error, empty the camels array.
                
                console.log(error);
            })
            .then(function () {
                //This code is always executed, independent of the request being successful or not.
            });
        },
        deleteComment: function (commentId) {
            console.log("Deleting Comment with ID " + commentId);
            axios.delete('/admin/recipes/'+this.recipeId+'/comments/'+commentId)
            .then(
                response => {
                    //This code basically finds the camel under question in the array and deletes it (using splice)
                    var localIndex = -1;
                    for (var i=0; i < this.recipe.comments.length; i++) {
                        if (this.recipe.comments[i]._id === commentId) {
                            localIndex = i;
                            i = this.recipe.comments.length;
                        }
                    }
                    if (localIndex !== -1) {
                        //Vue reacts to splice. So removing the element here causes the DOM to update.
                        this.recipe.comments.splice(localIndex, 1); 
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
 mounted () {
        this.getRecipe();
    }

};
</script>

<style>
 img {
        width: 100%;
        height: 100%
    
}
</style>
