// ownerMain.js - Main javascript file for the Owner SPA
const Vue = require('vue');
const VueRouter = require('vue-router');

// tell vue.js to use router capabilities
Vue.use(VueRouter);

// routing vueified components
// Specifically, we have one component showing a static home page (ownerHome) and one component showing a list of camels (ownerListCamels)
var router = new VueRouter({
  routes: [
    { path: '/', component: require("./components/ownerHome.vue") },
    { path: '/listRecipes', component: require("./components/ownerListCamels.vue") },
    { path: '/recipes/:recipeId/', component: require("./components/showInfo.vue") },
    {path : '/addRecipes',component: require("./components/adminAddRecipes.vue")},
    { path: '/AddComment/:recipeId', component: require("./components/adminAddComment.vue") },
  ]
});

// this vue component will act as the root for our SPA
var baserouter = require("./components/ownerBaserouter.vue");

// and finally, mount the view-model instance
new Vue({
  router: router,
  render: function (createElement) {
    return createElement(baserouter);
  }
}).$mount("#mountpoint");
//The mount command tells Vue where to place the template content (in HTML element with id mountpoint)