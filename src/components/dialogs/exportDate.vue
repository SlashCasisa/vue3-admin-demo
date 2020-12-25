<template>
  <el-dialog title="选择续签时长" v-model="data.dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="活动名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >提交</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { getOneYear, getTreeYear, getFiveYear } from "../../utils/formatDate";
import { onMounted, reactive, watch } from "vue";

export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const data = reactive({
      dialogFormVisible: false
    })
   
   watch(() => props.isShow, (newVal) => {
     console.log(newVal,'newVal');
   })
    onMounted(() => {
      
      const timeLine1 = getOneYear();
      const timeLine3 = getTreeYear();
      const timeLine5 = getFiveYear();
      console.log(timeLine1, timeLine3, timeLine5);
    });
    return {
      data,
    };
  },
};
</script>

<style>
</style>