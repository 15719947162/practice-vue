<template>
  <div style="height:100%;display:flex;justify-content: space-between;">
    <div style="width:60%;height:100%;display:flex;align-items:center">
       <i :class="menuCollapse?'el-icon-s-fold':'el-icon-s-unfold'" @click="changeMenuCollapse" style="margin-right:10px"></i>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">活动管理</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="height:100%;text-align: right;display:flex;align-items:center">
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
      <el-avatar
        :size="50"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      ></el-avatar>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  get menuCollapse(){
    return this.$store.state.menuCollapse
  }

  changeMenuCollapse():void{
    this.$store.dispatch("changeMenuCollapse",!this.menuCollapse)
  }
}
</script>

<style scoped lang="scss"></style>
