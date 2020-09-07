<template>
  <div id="app">
    <el-container>
      <el-aside width="250px">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
          <Main></Main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Aside from "./components/Aside.vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

@Component({
  components: {
    Aside,
    Header,
    Main
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .el-container {
    height: 100%;
  }
}

* {
  padding: 0;
  margin: 0;
}
</style>
