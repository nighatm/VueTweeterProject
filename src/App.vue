<template>
  <div id="app" class="container">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
  components: {},
  data() {
    return {};
  }
};
</script>
<style>
#conteiner {
  display: grid;
  width: 100%;
}
.tw-button {
  min-width: 150px;
  color: white;
  background-color: #1da1f2;
  font-weight: bold;
  padding: 12px 18px;
  border: none;
  border-radius: 25px;
  outline: 0;
  margin-top: 2vh;
  margin-bottom: 2vh;
}
.tw-button:hover {
  text-decoration: none;
  transition: 0.25s;
  background-color: #1c5d99;
}
</style>
