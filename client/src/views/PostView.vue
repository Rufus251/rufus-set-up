<template>
<h1>post</h1>

  <h2 v-if="post" >{{ post.author }}</h2>
  <p v-if="post" >{{ post.text }}</p>
</template>

<script>
export default {
  name: "PostView",
  props: ['id'],
  data () {
    return {
      post: undefined
    }
  },
  methods: {
    async get_post () {
      const id = window.location.href.split('/')[4];
      const url = `http://localhost:5000/api/posts/${id}`

      const response = await fetch(url);

      this.post = await response.json();
    }
  },
  mounted() {
    this.get_post()
  }
}
</script>

<style scoped lang="scss">

</style>