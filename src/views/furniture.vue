<template>
  <div id="app">
    <div>
      <el-table ref="filterTable" :data="tableData" :default-sort = "{prop: 'comfort', order: 'descending'}" >
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="theme" label="主题" :filters="themeFilters" :filter-multiple=false :filter-method="filterHandler"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="type" label="类别" :filters="typeFilters" :filter-multiple=false :filter-method="filterHandler"></el-table-column>
        <el-table-column prop="comfort" label="舒适度" sortable></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import tableData from "@/furniture.json";
import collect from "collect.js";

export default {
  name: "furniture",
  data() {
    return {
      tableData: tableData,
      typeFilters: [],
      themeFilters:[],
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
    let typeFilters=collect();
    let themeFilters=collect();
    collection.each(item => {
      let typeFilter = { text: item.type, value: item.type };
      typeFilters.push(typeFilter);
      let themeFilter = { text: item.theme, value: item.theme };
      themeFilters.push(themeFilter);
    });
    this.themeFilters = themeFilters.unique('value').all();
    this.typeFilters = typeFilters.unique('value').all();
  }
};
</script>
