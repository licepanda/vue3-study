<template>
    <div>
        <page-header title="欢迎回来" content="" :show-back="false" />
        <page-main>
            <el-button type="primary" @click="exportTable">Primary</el-button>
            <div>
                <el-table   el-table :data="tableData" border style="width: 100%">
                    <el-table-column prop="date" label="Date" width="180" />
                    <el-table-column prop="name" label="Name" width="180" />
                    <el-table-column prop="address" label="Address" />
                </el-table>
                <div id="myChart123" :style="{width: '100%', height: '550px'}"></div>
            </div>
           
        </page-main>
    </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';
import {onMounted} from "vue";
const tableData =[
    {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
onMounted(() => { // 需要获取到element,所以是onMounted的Hook
      let myChart = echarts.init(document.getElementById("myChart123"));
      // 绘制图表
      myChart.setOption({
        xAxis: {
          data: ["4-3", "4-4", "4-5", "4-6", "4-7", "4-8", "4-9"]
        },
        yAxis:{},
        series: [
          {
            name: "用户量",
            type: "line",
            data: [8, 15, 31, 13, 15, 22, 11]
          }
        ]
      });
      window.onresize = function () { // 自适应大小
        myChart.resize();
      };
})
function exportTable(){
    console.log(1);
}
</script>

<style scoped>

</style>