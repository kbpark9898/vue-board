<template>
  <div>
    <textarea name="" id="" cols="30" rows="10" v-model="textData"></textarea>
    <router-link to="/">메인으로 돌아가기</router-link>
    <router-link to="/">
      <button v-on:click="writeData">write</button>
    </router-link>
  </div>
</template>

<script>
import DButil from "../db/db";
export default {
  data() {
    return {
      textData: "",
    };
  },
  methods: {
    writeData() {
      this.$store.commit("addArticle", {
        ID: this.$store.getters.getID,
        title: this.textData,
      });
      console.log(this.$store.getters.getID);
      DButil.writeData(this.$store.getters.getID(), this.textData);
      this.$store.commit("increaseID");
    },
  },
};
</script>
