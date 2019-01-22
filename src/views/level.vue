<template>
  <div id="app">
    <div>
      <el-table ref="filterTable" :data="tableData" :default-sort = "{prop: '关卡', order: 'descending'}" >
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="name" label="关卡"></el-table-column>
        <el-table-column prop="difficulty" label="难度" :filters="difficultyFilters"  :filter-multiple=false  :filter-method="filterHandler"  ></el-table-column>
        <el-table-column prop="material" label="通用进化材料" :filters="materialFilters" :filter-multiple=false :filter-method="filterHandler"></el-table-column>
        <el-table-column prop="fragment" label="碎片" :filters="fragmentFilters" :filter-method="filterHandler" :filter-multiple=false ></el-table-column>
        
        <el-table-column prop="power" label="战力" sortable></el-table-column>
        <el-table-column prop="vitality" label="体力" sortable></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import tableData from "@/level.json";
import collect from "collect.js";

export default {
  name: "level",
  data() {
    return {
      tableData: tableData,
      materialFilters: [],
      fragmentFilters:[],
      difficultyFilters:[
      { text: '普通', value: '普通' }, 
      { text: '困难', value: '困难' },
      { text: '噩梦', value: '噩梦' }, 
      ],
    };
  },
  methods: {
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    }
  },
  mounted() {
    const collection = collect(this.tableData);
    
    console.log(collection);
    const material = collection.pluck("material").unique();
    material.each(item => {
      let filter = { text: item, value: item };
      this.materialFilters.push(filter);
    });
     const fragment = collection.pluck("fragment").unique();
    fragment.each(item => {
      let filter = { text: item, value: item };
      this.fragmentFilters.push(filter);
    });
    console.log(filter);
    console.log(this.typeFilters);
  }
};
</script>
