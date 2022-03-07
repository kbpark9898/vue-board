<template>
  <div>
    <table>
      <template>
        <thead>
          <tr>
            <th class="text-left">ID</th>
            <th class="text-left">title</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in this.$store.state.articles" :key="item.name">
            <td>{{ item.ID }}</td>
            <td>{{ item.title }}</td>
          </tr>
        </tbody>
      </template>
    </table>
    <router-link to="/write">글쓰기</router-link>
  </div>
</template>

<script>
export default {};
</script>
