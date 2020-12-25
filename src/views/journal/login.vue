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
          @change="handleListData"
        />
      </div>
      <div class="form-item flex">
        <div class="label">类型</div>
        <el-select v-model="type" placeholder="请选择" @change="handleListData">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="form-item ip-input">
        <el-input
          placeholder="输入IP地址搜索"
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
          <template  #default="scope">
            {{ $formatTimestamp(scope.row.time,'second') }}
          </template>
        </el-table-column>
        <el-table-column prop="account" label="账号" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="ip" label="地址" />
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
import { computed, ref, onMounted } from "vue";
export default {
  setup() {
    const options = [
      {
        value: "全部",
        label: "全部",
      },
      {
        value: "登出",
        label: "登出",
      },
      {
        value: "登出",
        label: "登出",
      },
    ];
    const timeRange = ref([]);
    const type = ref("全部");
    const keyword = ref("");
    const tableData = ref([]);
    const pageNumber = ref(1);
    const pageSize = ref(10);
    const total = ref(5);
    const listParams = computed(() => {
      return {
        pageNumber: pageNumber.value,
        timeRange: timeRange.value,
        type: type.value,
        keyword: keyword.value,
      };
    });
    const rowClassName = ({ rowIndex }) => {
      // 已取消置灰
      return rowIndex % 2 === 1 ? "even-row" : "odd-row";
    };
    //获取列表内容
    const handleListData = async () => {
      console.log(listParams.value);
      tableData.value = [
        {
          time: "1608865710276",
          account: "13513245678",
          type: "登入",
          ip: "123.123.123.123",
        },
        {
          time: "1608865710276",
          account: "13513245678",
          type: "登入",
          ip: "123.123.123.123",
        },
        {
          time: "1608865710276",
          account: "13513245678",
          type: "登入",
          ip: "123.123.123.123",
        },
        {
          time: "1608865710276",
          account: "13513245678",
          type: "登入",
          ip: "123.123.123.123",
        },
        {
          time: "1608865710276",
          account: "13513245678",
          type: "登入",
          ip: "123.123.123.123",
        },
      ];
    };
    onMounted(() => {
      // 首屏加载的时候触发请求
      handleListData();
    });
    const handleCurrentChange = (currentPage) => {
      // 切换页码
      pageNumber.value = currentPage;
      handleListData();
    };
    return {
      rowClassName,
      options,
      timeRange,
      type,
      keyword,
      tableData,
      pageNumber,
      pageSize,
      total,
      handleCurrentChange,
      handleListData,
    };
  },
};
</script>
