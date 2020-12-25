import { computed, ref, onMounted } from "vue";
export default function(){
    const keyword = ref("");
    const tableData = ref([]);
    const pageNumber = ref(1);
    const pageSize = ref(10);
    const total = ref(15);
    const rowClassName = ({ rowIndex }) => {
        // 已取消置灰
        return rowIndex % 2 === 1 ? "even-row" : "odd-row";
      };
      //获取列表内容
      const handleListData = async () => {
        // console.log(req.listParams);
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
      return{
        keyword,
        tableData,
        pageNumber,
        pageSize,
        total,
        rowClassName,
        handleListData,
        handleCurrentChange
      }
}