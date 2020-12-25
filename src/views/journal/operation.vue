<template>
  <div class="page-warpper">
    <div class="search-container flex">
      <div class="form-item flex">
        <div class="label">日期范围</div>
        <el-date-picker
          v-model="timeRange"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="timestamp"
          @change="handleListData"
        />
      </div>
      <div class="form-item ip-input">
        <el-input
          placeholder="输入描述关键字搜索"
          suffix-icon="el-icon-search"
          v-model="keyword"
          @keydown.enter.native="handleListData"
        />
      </div>
    </div>
    <div class="table-warpper">
      <el-table
        ref="multipleTable"
        header-cell-class-name="table-header"
        :data="tableData"
        style="width: 100%"
        :row-class-name="rowClassName"
      >
        <el-table-column label="时间">
          <template #default="scope">
            {{ $formatTimestamp(scope.row.time, "second") }}
          </template>
        </el-table-column>
        <el-table-column prop="account" label="账号" />
        <el-table-column prop="description" label="操作描述" />
      </el-table>
      <div class="footer">
        <el-pagination
          :current-page="pageNumber"
          :page-size="pageSize"
          :total="total"
          class="pagination-container"
          layout="total, prev, pager, next, jumper"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import tableList from '../../mixins/table_list'
import { computed, ref, onMounted } from "vue";
export default {
  setup() {
    const timeRange = ref([]);
    const {keyword,
      tableData,
      pageNumber,
      pageSize,
      total,rowClassName,handleCurrentChange,handleListData} = tableList()
      const listParams = computed(() => {
        let range = timeRange.value[0]?{
          startTime: timeRange.value[0].getTime(),
          endTime: timeRange.value[1].getTime()
        }: null
      return {
        pageNumber: pageNumber.value,
        range: range,
        keyword: keyword.value,
      };
    });
    tableData.value = [
          {
            time: "1608865710276",
            account: "13513245678",
            description: "添加人员",
          },
          {
          time: "1608865710276",
            account: "13513245678",
            description: "添加人员",
          },
          {
           time: "1608865710276",
            account: "13513245678",
            description: "添加人员",
          },
          {
           time: "1608865710276",
            account: "13513245678",
            description: "添加人员",
          },
          {
           time: "1608865710276",
            account: "13513245678",
            description: "添加人员",
          },
        ];
    return {
      rowClassName,
      timeRange,
      listParams,
      keyword,
      tableData,
      pageNumber,
      pageSize,
      total,
      handleCurrentChange,
      handleListData,
    };
  }
}
</script>
