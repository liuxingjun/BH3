<template>
  <div id="app">
    <div>
      <el-table ref="filterTable" :data="tableData" :default-sort = "{prop: 'comfort', order: 'descending'}" >
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="theme" label="主题"></el-table-column>
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
      typeFilters: []
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
    const plucked = collection.pluck("type").unique();
    plucked.each(item => {
      let filter = { text: item, value: item };
      this.typeFilters.push(filter);
    });
    console.log(filter);
    console.log(this.typeFilters);
  }
};
</script>
