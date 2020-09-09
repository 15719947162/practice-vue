<template>
  <div style="height:100%;display:flex;justify-content: space-between;">
    <div style="width:60%;height:100%;display:flex;align-items:center">
      <i
        :class="menuCollapse?'el-icon-s-unfold':'el-icon-s-fold'"
        @click="changeMenuCollapse"
        style="margin-right:10px"
      ></i>
      <el-breadcrumb>
        <template v-if="!selectNode.path">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
        </template>
        <template v-else>
          <el-breadcrumb-item v-for="(item,index) in selectNode.path" :key="index">{{item}}</el-breadcrumb-item>
        </template>
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

  get selectNode(){
    return this.$store.state.selectNode 
  }

  get menuArrData(){
    return this.$store.state.menuArrData
  }

  get menuCollapse() {
    return this.$store.state.menuCollapse;
  }

  findSearchNode(newVal:string,oldVal:string): void{
    this.$store.dispatch("setSelectNode", this.menuArrData.find((item:Item) => item.name.indexOf(newVal) >= 0) || {});
  }

  changeMenuCollapse(): void {
    this.$store.dispatch("changeMenuCollapse", !this.menuCollapse);
  }
}
</script>

<style scoped lang="scss"></style>
