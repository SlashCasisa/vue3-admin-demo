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
        />
      </div>
      <div class="form-item flex">
        <div class="label">类型</div>
        <el-select v-model="type" placeholder="请选择">
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
        <el-input placeholder="输入IP地址搜索" suffix-icon="el-icon-search" v-model="ip">
        </el-input>
      </div>
    </div>
    <div class="table-warpper">
      <el-table ref="multipleTable" header-cell-class-name="table-header" :data="tableData" style="width: 100%" :row-class-name="rowClassName">
        <el-table-column prop="time" label="时间" />
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
    return {
      options,
    };
  },
  data() {
    return {
      timeRange: [],
      type: "全部",
      ip: "",
      tableData: [{
        time:'2020-09-09 15:30:30',
        account:'13513245678',
        type:'登入',
        ip:'123.123.123.123'
      },{
        time:'2020-09-09 15:30:30',
        account:'13513245678',
        type:'登入',
        ip:'123.123.123.123'
      },{
        time:'2020-09-09 15:30:30',
        account:'13513245678',
        type:'登入',
        ip:'123.123.123.123'
      },{
        time:'2020-09-09 15:30:30',
        account:'13513245678',
        type:'登入',
        ip:'123.123.123.123'
      },{
        time:'2020-09-09 15:30:30',
        account:'13513245678',
        type:'登入',
        ip:'123.123.123.123'
      }],
      pageNumber: 1,
      pageSize: 10,
      total: 0,
    };
  },
  methods: {
    handleListData() {
      console.log("ssssss");
    },
    async handleCurrentChange(currentPage) {
      // 切换页码
      this.pageNumber = currentPage;
      this.handleListData();
    },
     rowClassName({ row }) {
      // 已取消置灰
      return row%2 === 1 ? 'even-row' : 'odd-row' 
    },
  },
};
</script>
