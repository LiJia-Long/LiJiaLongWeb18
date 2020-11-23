<template>
  <div id="main">
      <Dao></Dao>
      <Dao2></Dao2>
          <router-view></router-view>
  </div>
</template>
<script>
import Dao from "./Dao";
import Dao2 from "./Dao2";
export default {
  name: "Shou2",
  components: {
    Dao,
    Dao2
  },
};
</script>
<style scoped>
</style>