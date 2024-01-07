<template>
<section class="row">
  <div class="row">
    <ul class=" list-group nav">
      <li class="list-group-item"><a href="#">Home</a></li>
      <li class="list-group-item"><a href="#">News</a></li>
      <li class="list-group-item"><a href="#">Feed</a></li>
      <li class="list-group-item"><a href="#">My Account</a></li>
      <li class="list-group-item"><a href="#">Settings</a></li>
    </ul>
  </div>
</section>
</template>

<script>
export default {
  name: "TheSidebar"
}
</script>

<style scoped>
.nav{
  border: 1px solid darkcyan;
}
.nav li{
  border: 0;
}
.nav li a{
  color: darkcyan;
}
</style>