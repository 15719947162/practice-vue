import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuCollapse:false,
    menuArrData:[{
      id: "1",
      name: "节点1",
      path:["节点1"],
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
    },{
      id: "11",
      name: "节点11",
      path:["节点1","节点11"],
      children: []
    },{
      id: "12",
      name: "节点12",
      path:["节点1","节点12"],
      children: []
    },{
      id: "2",
      name: "节点2",
      path:["节点2"],
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
    }, {
      id: "21",
      name: "节点21",
      path:["节点2","节点21"],
      children: []
    },{
      id: "22",
      name: "节点22",
      path:["节点2","节点22"],
      children: []
    },{
      id: "3",
      name: "节点3",
      path:["节点3"],
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
    },{
      id: "31",
      name: "节点31",
      path:["节点3","节点31"],
      children: []
    },{
      id: "32",
      name: "节点32",
      path:["节点3","节点32"],
      children: []
    }],
    menuTreeData:[
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
    ],
    selectNode:{},
    searchNode:{},
  },
  mutations: {
    SETSELECTNODE:function(state,data){
      state.selectNode = data;
    },
    CHANGEMENUCOLLAPSE:function(state,data){
      state.menuCollapse = data;
    },
    SETSEARCHNODE:function(state,data){
      state.searchNode = data;
    }
  },
  actions: {
    setSelectNode:function(context,data){
      context.commit('SETSELECTNODE',data);
    },
    changeMenuCollapse:function(context,data){
      context.commit('CHANGEMENUCOLLAPSE',data);
    },
    setSearchNode:function(context,data){
      debugger
      context.commit('SETSEARCHNODE',data);
    }
  },
  modules: {}
});
