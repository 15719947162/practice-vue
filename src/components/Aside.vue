<template>
  <div style="height:100%">
      <el-menu @select="handleSelect" :collapse="menuCollapse" style="height:100%">
        <div style="text-align:center;height:60px;display:flex;justify-content: center;align-items: center;">
      <div>
        <img src="../assets/logo.png" alt="" style="height:60px;widht60px">
      </div>
      <div v-show="!menuCollapse" style="margin:0 10px;font-size:24px;font-weight:blod;">
        <span>王元口力口</span>
      </div>
    </div>
      <MenuMain :data="menuTreeData"></MenuMain>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuMain from "./aside/MenuMain.vue";

interface Item {
  id:string,
  name:string,
  children:Array<Item | null>
}

interface Nodetype {
  id:string,
  src:string,
}

@Component({
  components: {
    MenuMain
  }
})

export default class Aside extends Vue {

  get menuTreeData(){
    return this.$store.state.menuTreeData
  }

  get menuArrData(){
    return this.$store.state.menuArrData
  }

  get menuCollapse(){
    return this.$store.state.menuCollapse
  }

  get selectArr(){
    return this.$store.state.selectArr
  }

  handleSelect(key: string, keyPath: string): void {
    this.findNodeInArrData(key);
  }

  findNodeInArrData(key:string): void {
    const selectNode = this.menuArrData.filter((item:Item) => item.id == key)[0];
    this.pushSelectArr(selectNode)
    this.$store.dispatch('setSelectNode',selectNode);
    this.$router.push(selectNode.src)
  }

  pushSelectArr(selectNode:Nodetype): void {
    const newArr = JSON.parse(JSON.stringify(this.selectArr));
    if(!newArr.find((item:Item) => item.id == selectNode.id)){
      newArr.push(selectNode);
      this.$store.dispatch('setSelectArr',newArr);
    }
  }
}
</script>

<style scoped lang="scss"></style>
