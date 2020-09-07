<template>
  <div>
    <el-menu @open="handleOpen" @close="handleClose">
      <MenuMain :data="menuData"></MenuMain>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuMain from "./aside/MenuMain.vue";

interface MenuItem {
  id: string;
  name: string;
  children: Array<MenuItem | null>;
}

@Component({
  components: {
    MenuMain
  }
})
export default class Aside extends Vue {
  //组件的data
  menuData: Array<MenuItem> = [
    {
      id: "1",
      name: "节点1",
      children: [
        {
          id: "11",
          name: "节点11",
          children: []
        },
        {
          id: "12",
          name: "节点12",
          children: []
        }
      ]
    },
    {
      id: "2",
      name: "节点2",
      children: [
        {
          id: "21",
          name: "节点21",
          children: []
        },
        {
          id: "22",
          name: "节点22",
          children: []
        }
      ]
    },
    {
      id: "3",
      name: "节点3",
      children: [
        {
          id: "31",
          name: "节点31",
          children: []
        },
        {
          id: "32",
          name: "节点32",
          children: []
        }
      ]
    }
  ];

  public handleOpen(key: string, keyPath: string): void {
    console.log(key, keyPath);
  }

  public handleClose(key: string, keyPath: string): void {
    console.log(key, keyPath);
  }
}
</script>

<style scoped lang="scss"></style>
