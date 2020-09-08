<template>
  <div>
    <template v-for="item in data">
      <el-submenu
        v-if="item.children.length > 0"
        :index="item.id"
        :key="item.id"
      >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{ item.name }}</span>
        </template>
        <MenuMain :data="item.children"></MenuMain>
      </el-submenu>
      <el-menu-item v-else :index="item.id" :key="item.id">
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MenuMain extends Vue {
  @Prop({ required: true, type: Array })
  data: any;
}
</script>

<style lang="scss">
.el-menu--collapse .el-submenu__title{
 span{
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
  }
   .el-submenu__icon-arrow{
    display:none;
  }
}
</style>
