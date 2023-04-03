<template>
  <header class="header">
    <div class="container">
      <ul class="list">
        <li class="item">
          <router-link to="/" >Home</router-link>
        </li>
        <li class="item">
          <router-link to="/posts" >POSTS</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>

<style scoped lang="scss">
  .header {
    padding: 20px 0;
    border-bottom: 1px solid teal;

    .list {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 20px;
      margin-left: auto;
      width: fit-content;
    }
  }
</style>