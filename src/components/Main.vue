<template>
  <div style="height:100%">
    <el-tabs :value="selectNodeId" type="border-card" closable @tab-remove="removeTabs" @tab-click="clickTabs">
      <el-tab-pane v-for="(item,index) in selectArr" :key="index" :name="item.id" :src="item.src">
        <span slot="label"><i class="el-icon-date"></i> {{item.name}}</span>
      </el-tab-pane>
    </el-tabs>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

interface Item {
  id:string,
  name:string,
  children:Array<Item | null>
}

interface Nodetype {
  id:string
}

@Component
export default class HelloWorld extends Vue {
  get selectNodeId(){
    return this.$store.state.selectNode.id
  }

  get menuArrData(){
    return this.$store.state.menuArrData
  }

  get selectArr(){
    return this.$store.state.selectArr
  }

  clickTabs(node:any): void {
    const selectNode = this.menuArrData.filter((item:Item) => item.id == node.name)[0];
    this.$store.dispatch('setSelectNode',selectNode);
    this.$router.push(selectNode.src);
  }

  removeTabs(name:string): void {
    this.spliceSelectArr(name)
  }

  spliceSelectArr(selectId:string): void {
    const newArr = JSON.parse(JSON.stringify(this.selectArr));
    for(let i=0,len=newArr.length;i<len;i++){
      if(newArr[i].id == selectId){
        newArr.splice(i,1);
        break;
      }
    }
    this.$store.dispatch('setSelectArr',newArr);
  }
}
</script>

<style lang="scss">
.el-tabs__content{
  padding: 0px!important;
}
</style>
