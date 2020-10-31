<template>
<div class="router-view">
  <div class="content">
    <router-view/>
  </div>

</div>
</template>

<script>
export default {
  name: "Area"
}
</script>

<style scoped>
.router-view{
  background:#bbe6d6;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0px 10px 10px 10px ;
}
.content{
  background:#e4f5ef;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y:auto;
  box-sizing: border-box;
  border-radius: 10px;
}
</style>