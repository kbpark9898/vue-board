<template>
  <div id="app">
    <BoardHeader></BoardHeader>
    <BoardBody></BoardBody>
  </div>
</template>

<script>
import BoardHeader from "./components/BoardHeader.vue";
import BoardBody from "./components/BoardBody.vue";
export default {
  created() {
    if (localStorage.length > 1) {
      for (let i = 1; i < localStorage.length; i++) {
        const curKey = localStorage.key(i);
        this.$store.commit("addArticle", {
          ID: curKey,
          title: localStorage.getItem(curKey),
        });
      }
    }
  },
  components: {
    BoardHeader: BoardHeader,
    BoardBody: BoardBody,
  },
};
</script>
