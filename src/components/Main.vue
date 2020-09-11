<template>
  <div style="height:100%">
    <el-tabs v-model="selectNodeId" type="border-card" closable @tab-remove="removeTabs">
      <el-tab-pane v-for="(item,index) in selectArr" :key="index" :name="item.id" :src="item.src">
        <span slot="label"><i class="el-icon-date"></i> {{item.name}}</span>
      </el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

interface Item {
  id:string,
  name:string,
  children:Array<Item | null>
}

@Component
export default class HelloWorld extends Vue {
  get selectNodeId(){
    return this.$store.state.selectNode.id
  }
  set selectNodeId(val){
    const selectNode = this.menuArrData.filter((item:Item) => item.id == val)[0];
    this.$router.push({ path: selectNode.src });  
    this.$store.dispatch('setSelectNode',selectNode);
  }

  get menuArrData(){
    return this.$store.state.menuArrData
  }

  get selectArr(){
    return this.$store.state.selectArr
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
