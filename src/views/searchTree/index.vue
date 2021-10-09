<template>
  <div>
    <!-- <button @click="setKeys">通过key选中河南和河北</button>
    <button @click="getKeys">获取所有选中项的keys</button>
    <button @click="getNodes">获取所有选中项的nodes</button>
    <button @click="resetChecked">清空所有选中状态</button>
    <button @click="getNode">通过key获取河北省节点</button> -->
    <SearchTree
      ref="tree"
      class="tree1"
      node-key="id"
      :data="treeList"
      :show-checkbox="true"
      :default-checked-keys="[1103]"
      :default-expanded-keys="[1103, 1105]"
      @node-click="handleClick"
    ></SearchTree>
  </div>
</template>
<script>
import Vue from 'vue'
import SearchTree from 'vue-search-tree'
Vue.use(SearchTree)
export default {
  name: 'searchTree',
  data () {
    return {
      treeList: [
        {
          "id": 1000,
          "name": "信息中心",
          "children": [{
            "id": 1009,
            "name": "陈琳",
            "children": [{
              "id": 1119,
              "name": "新乡市宏力大道店"
            }, {
              "id": 1120,
              "name": "新乡市胜利北街店"
            }, {
              "id": 1121,
              "name": "新乡市首比街店"
            }]
          },
          {
            "id": 1016,
            "name": "刘雅",
            "children": [{
              "id": 1254,
              "name": "巩义市新兴路店"
            }]
          },{
            "id": 1026,
            "name": "袁成宗",
            "children": [{
              "id": 1254,
              "name": "巩义市新兴路店"
            }]
          }]
        }, {
          "id": 2000,
          "name": "采购处",
          "children": [{
            "id": 2103,
            "name": "张伟",
            "children": [{
              "id": 2544,
              "name": "济南市无影山西路店"
            }, {
              "id": 2545,
              "name": "济南市堤口路店"
            }]
          },{
            "id": 2203,
            "name": "王府井",
            "children": [{
              "id": 2554,
              "name": "济南市无影山西路店"
            }, {
              "id": 2574,
              "name": "济南市堤口路店"
            }]
          }]
        }, {
          "id": 3000,
          "name": "档标准",
          "children": [{
            "id": 1103,
            "name": "王衣蛾",
            "children": [{
              "id": 2544,
              "name": "济南市无影山西路店"
            }, {
              "id": 2545,
              "name": "济南市堤口路店"
            }]
          }, {
            "id": 1105,
            "name": "李非非",
            "children": [{
              "id": 2561,
              "name": "沂市东岳庙店"
            }]
          }]
        }, {
          "id": 4000,
          "name": "人力处",
          "children": [{
            "id": 1111,
            "name": "魏列军",
            "children": [{
              "id": 2649,
              "name": "兰州市金港城店"
            }, {
              "id": 2651,
              "name": "兰州市秦安路店"
            }]
          }]
        }
      ],
    }
  },
  methods: {
    setKeys () {
      this.$refs.tree.setCheckedKeys([1000, 1001], true)
    },
    getKeys () {
      const keys = this.$refs.tree.getCheckedKeys()
      console.log(keys)
    },
    getNodes () {
      const nodes = this.$refs.tree.getCheckedNodes()
      console.log(nodes)
    },
    resetChecked () {
      this.$refs.tree.resetChecked()
    },
    getNode () {
      const node = this.$refs.tree.getNode(1001)
      console.log(node)
    },
    handleClick (e, node) {
      console.log(node)
    }
  }
}
</script>

<style>
button {
  margin: 0 5px 10px 5px;
}
/* html .tree1{
  font-size:38px;
} */
html *{
  font-size:38px;
} 
</style>