<template>
  <div style="height:100%;display:flex;justify-content: space-between;">
    <div style="width:60%;height:100%;display:flex;align-items:center">
      <i
        :class="menuCollapse?'el-icon-s-unfold':'el-icon-s-fold'"
        @click="changeMenuCollapse"
        style="margin-right:10px"
      ></i>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="height:100%;text-align: right;display:flex;align-items:center">
      <div>
        <el-input placeholder="请输入功能" v-model="searchValue" @change="findSearchNode">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <div style="margin:0 20px">
        <i class="el-icon-edit"></i>
        <el-divider direction="vertical" style="margin:0 20px"></el-divider>
        <i class="el-icon-share"></i>
        <el-divider direction="vertical" style="margin:0 20px"></el-divider>
        <i class="el-icon-delete"></i>
      </div>
      <el-avatar
        :size="50"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      ></el-avatar>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

interface Item {
  id:string,
  name:string,
  children:Array<Item | null>
}

@Component
export default class HelloWorld extends Vue {
  searchValue: any = ""

  get menuArrData(){
    return this.$store.state.menuArrData
  }

  get menuCollapse() {
    return this.$store.state.menuCollapse;
  }

  findSearchNode(newVal:string,oldVal:string): void{
    this.$store.dispatch("setSearchNode", this.menuArrData.find((item:Item) => item.name.indexOf(newVal) >= 0));
  }

  changeMenuCollapse(): void {
    this.$store.dispatch("changeMenuCollapse", !this.menuCollapse);
  }
}
</script>

<style scoped lang="scss"></style>
