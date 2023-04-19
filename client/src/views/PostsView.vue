<template>
  <div class="wrapper">
    <h1>posts</h1>
    
    <ul class="list">
      <li class="item"
          v-for="item of posts"
          :key="item._id"
      >
        <router-link :to="'/post/' + item._id">ID: {{ item._id }}</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "PostsView",
  data () {
    return {
      posts: undefined
    }
  },
  methods: {
    async get_posts () {
      const response = await fetch('http://localhost:5000/api/posts/');
      const posts = await response.json();

      this.posts = posts;
    }
  },
  mounted() {
    this.get_posts();
  }
}
</script>

<style scoped>

</style>