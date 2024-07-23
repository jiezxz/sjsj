<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/datacollection/datacollection_9sinspection/dataCollection_9SInspection.js此处编写
 -->
<template>
    <view-grid ref="grid"
               :columns="columns"
               :detail="detail"
               :editFormFields="editFormFields"
               :editFormOptions="editFormOptions"
               :searchFormFields="searchFormFields"
               :searchFormOptions="searchFormOptions"
               :table="table"
               :extend="extend">
    </view-grid>
</template>
<script>
    import extend from "@/extension/datacollection/datacollection_9sinspection/dataCollection_9SInspection.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'id',
                footer: "Foots",
                cnName: '9S巡检',
                name: 'datacollection_9sinspection/dataCollection_9SInspection',
                url: "/dataCollection_9SInspection/",
                sortName: "CreateDate"
            });
            const editFormFields = ref({"DocumentNumber":"","gongChang":"","yzcd":"","xjsj":"","jtfl":"","diDian":"","chanXian":"","wtms":"","yctp":"","sfcf":"","cqcs":"","gsbm":"","bmzrr":"","zrr":"","zgqx":"","zgjg":"","wczt":""});
            const editFormOptions = ref([[{"title":"文件编号","field":"DocumentNumber","disabled":true},
                               {"dataKey":"工厂","data":[],"title":"工厂","field":"gongChang","type":"select"},
                               {"dataKey":"严重程度","data":[],"title":"严重程度","field":"yzcd","type":"select"}],
                              [{"dataKey":"9S集团分类SQL","data":[],"title":"集团分类","field":"jtfl","type":"select"},
                               {"title":"巡检日期","field":"xjsj","type":"date"},
                               {"title":"具体位置 ","field":"diDian","type":"text"}],
                              [{"dataKey":"9S巡检区域SQL","data":[],"title":"车间/区域","field":"chanXian","type":"select"},
                               {"title":"问题描述","field":"wtms","type":"textarea"},
                               {"title":"异常图片","field":"yctp","type":"img"}],
                              [{"dataKey":"是否","data":[],"title":"重复发生2次指摘","field":"sfcf","type":"select"},
                               {"title":"长期措施","field":"cqcs","type":"textarea"},
                               {"dataKey":"异常管理责任部门","data":[],"title":"改善部门","field":"gsbm","type":"select"}],
                              [{"title":"部门责任人","field":"bmzrr"},
                               {"title":"责任人","field":"zrr","type":"text"},
                               {"title":"整改期限","field":"zgqx","type":"datetime"}],
                              [{"title":"整改结果","field":"zgjg","type":"img"},
                               {"dataKey":"完成未完成","data":[],"title":"完成状态","field":"wczt","type":"select"}]]);
            const searchFormFields = ref({"DocumentNumber":"","gongChang":"","xjsj":"","diDian":"","chanXian":"","wtms":"","yctp":"","sfcf":"","gsbm":"","zrr":"","wczt":"","Creator":""});
            const searchFormOptions = ref([[{"title":"文件编号","field":"DocumentNumber","type":"like"},{"dataKey":"工厂","data":[],"title":"工厂","field":"gongChang","type":"select"},{"title":"巡检日期","field":"xjsj","type":"date"},{"title":"具体位置 ","field":"diDian","type":"text"},{"dataKey":"9S巡检区域SQL","data":[],"title":"车间/区域","field":"chanXian","type":"select"}],[{"title":"问题描述","field":"wtms"},{"title":"异常图片","field":"yctp"},{"dataKey":"是否","data":[],"title":"重复发生2次指摘","field":"sfcf","type":"select"},{"title":"巡检人","field":"Creator","type":"like"}],[{"dataKey":"异常管理责任部门","data":[],"title":"改善部门","field":"gsbm","type":"select"},{"title":"责任人","field":"zrr","type":"like"},{"dataKey":"完成未完成","data":[],"title":"完成状态","field":"wczt","type":"select"}]]);
            const columns = ref([{field:'DocumentNumber',title:'文件编号',type:'string',width:120,readonly:true,align:'left',sort:true},
                       {field:'gongChang',title:'工厂',type:'string',bind:{ key:'工厂',data:[]},width:120,align:'left'},
                       {field:'id',title:'编号',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'xjsj',title:'巡检日期',type:'date',width:150,align:'left',sort:true},
                       {field:'yzcd',title:'严重程度',type:'string',bind:{ key:'严重程度',data:[]},width:120,align:'left'},
                       {field:'jtfl',title:'集团分类',type:'string',bind:{ key:'9S集团分类SQL',data:[]},width:120,align:'left'},
                       {field:'diDian',title:'具体位置 ',type:'string',width:180,align:'left'},
                       {field:'chanXian',title:'车间/区域',type:'string',bind:{ key:'9S巡检区域SQL',data:[]},width:110,align:'left'},
                       {field:'wtms',title:'问题描述',type:'string',width:110,align:'left'},
                       {field:'yctp',title:'异常图片',type:'img',width:180,align:'left'},
                       {field:'sfcf',title:'重复发生2次指摘',type:'string',bind:{ key:'是否',data:[]},width:110,align:'left'},
                       {field:'cqcs',title:'长期措施',type:'string',width:110,align:'left'},
                       {field:'gsbm',title:'改善部门',type:'string',bind:{ key:'异常管理责任部门',data:[]},width:110,align:'left'},
                       {field:'bmzrr',title:'部门责任人',type:'string',width:120,align:'left'},
                       {field:'zrr',title:'责任人',type:'string',width:110,align:'left'},
                       {field:'zgqx',title:'整改期限',type:'datetime',width:150,align:'left',sort:true},
                       {field:'zgjg',title:'整改结果',type:'img',width:180,align:'left'},
                       {field:'wczt',title:'完成状态',type:'string',bind:{ key:'完成未完成',data:[]},width:110,align:'left'},
                       {field:'CreateID',title:'CreateID',type:'int',width:100,hidden:true,align:'left'},
                       {field:'Creator',title:'巡检人',type:'string',width:100,align:'left'},
                       {field:'CreateDate',title:'提交时间',type:'datetime',width:150,align:'left',sort:true},
                       {field:'ModifyID',title:'ModifyID',type:'int',width:100,hidden:true,align:'left'},
                       {field:'Modifier',title:'修改人',type:'string',width:100,align:'left'},
                       {field:'ModifyDate',title:'修改时间',type:'datetime',width:150,align:'left',sort:true}]);
            const detail = ref({
                cnName: "#detailCnName",
                table: "#detailTable",
                columns: [],
                sortName: "",
                key: ""
            });
            return {
                table,
                extend,
                editFormFields,
                editFormOptions,
                searchFormFields,
                searchFormOptions,
                columns,
                detail,
            };
        },
    });
</script>
