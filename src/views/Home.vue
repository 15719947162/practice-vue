<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
      <el-button @click="handleClose">上左</el-button>
    </el-tooltip>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  dialogVisible = false;

  handleClose() {
    this.$confirm("确认关闭？")
      .then(_ => {
        console.log(111)
      })
      .catch(_ => {console.log(111)});
  }
}
</script>
