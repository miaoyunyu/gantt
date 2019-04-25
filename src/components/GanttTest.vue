<template>
  <q-page class="q-pa-sm">
    <gantt-elastic
      :options="options"
      :tasks="tasks"
    >
      <gantt-header slot="header"></gantt-header>
    </gantt-elastic>
  </q-page>
</template>
<script>
import GanttElastic from "gantt-elastic";
import GanttHeader from "gantt-elastic-header";
import dayjs from "dayjs";
import axios from 'axios';

import jsonData from '../../static/task.json'

axios.defaults.baseURL=''

axios.interceptors.response.use(res=>{
    return res.data;
})


export default {
  name: "Gantt",
  components: {
    GanttElastic,
    GanttHeader
  },
  data() {
    return {

      jsonData:jsonData,
      tasks:[
              {
                id: 999,
                label: " ",
                start : 1556070680649,
                end : 1556553600000,
                percent:100,
                user:" " ,
                type : "project",
              }
      ],
      options:{
            taskMapping: {
              progress: "percent"
            },
            maxRows: 100,
            maxHeight: 500,
            title: {
              label: " 测试",
              html: false
            },
            row: {
              height: 24
            },
            calendar: {
              hour: {
                display: true
              }
            },
            chart: {
              progress: {
                bar: false
              },
              expander: {
                display: true
              }
            },
            taskList: {
              expander: {
                straight: false
              },
              columns: [
                {
                  id: 1,
                  label: "任务名称",
                  value: "label",
                  width: 200,
                  expander: true,
                  html: true,
                  events: {
                    click({data}) {
                      alert(data.publicId);
                    }
                  }
                },
                {
                  id: 2,
                  label: "分配者",
                  value: "user",
                  width: 130,
                  html: true
                },
                {
                  id: 3,
                  label: "开始时间",
                  value: task => dayjs(task.start).format("YYYY-MM-DD"),
                  width: 78
                },
                {
                  id: 4,
                  label: "结束时间",
                  value: task => dayjs(task.end).format("YYYY-MM-DD"),
                  width: 78
                },
              ]
            },
            locale: {
              code:'cn-zn',
            'Now': '现在',
            'X-Scale': '水平缩放',
            'Y-Scale': '垂直缩放',
            'Task list width': '任务列表',
            'Before/After': '扩大',
            'Display task list': '任务列表',
            weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
            weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
            weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
            months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
            monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
            ordinal: n => `${n}日`,
            relativeTime: {
              future: '%s内',
              past: '%s前',
              s: '几秒',
              m: '1 分钟',
              mm: '%d 分钟',
              h: '1 小时',
              hh: '%d 小时',
              d: '1 天',
              dd: '%d 天',
              M: '1 个月',
              MM: '%d 个月',
              y: '1 年',
              yy: '%d 年'
            }
            }
          },
    };
  },
  methods: {
    // 获取数据
    getData: function() {
        this.regroupData(this.jsonData)
     },
    // 设置数据填充表格
     regroupData:function(data){   
        if(data.result == 1){
            let listData=data.data
            listData.forEach(item=>{
                   let cur={
                        id: item.id,
                        publicId:item.publicId,
                        label: item.label,
                        user: item.user,
                        type: item.type,
                        start: item.start,
                        end: item.end+(24*60*60*1000-1000),
                        percent:100,
                        parentId:item.parentId,
                        expander: item.expander
                   }
                  this.tasks.push(cur)
            })
            this.tasks=this.tasks.filter(function(item){
               return item.id!=999
            })
       } 
     },
  },
  created:function(){
     this.getData();
  }
};
</script>
