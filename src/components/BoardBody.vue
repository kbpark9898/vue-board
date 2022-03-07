<template>
  <div>
    <router-view v-if="this.$store.state.logined"></router-view>
    <div v-else>
      <h3>이름을 입력하세요</h3>
      <input placeholder="사용자 이름" v-model="userName" />
      <button v-on:click="login">submit</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    login() {
      this.$store.commit("setUser", this.userName);
    },
  },
};
</script>
