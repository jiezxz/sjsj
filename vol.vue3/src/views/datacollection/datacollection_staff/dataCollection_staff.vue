<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/datacollection/datacollection_staff/dataCollection_staff.js此处编写
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
    import extend from "@/extension/datacollection/datacollection_staff/dataCollection_staff.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'id',
                footer: "Foots",
                cnName: '员工信息',
                name: 'datacollection_staff/dataCollection_staff',
                url: "/dataCollection_staff/",
                sortName: "CreateDate"
            });
            const editFormFields = ref({"department":"","trueName":"","jobNumber":"","img":"","post":""});
            const editFormOptions = ref([[{"dataKey":"组织机构","data":[],"title":"部门","field":"department","type":"select"},
                               {"title":"姓名","field":"trueName","type":"text"},
                               {"title":"工号","field":"jobNumber","type":"text"}],
                              [{"dataKey":"职务","data":[],"title":"职务","field":"post","type":"select"},
                               {"title":"照片","field":"img","type":"img"}]]);
            const searchFormFields = ref({"department":"","trueName":"","jobNumber":""});
            const searchFormOptions = ref([[{"title":"姓名","field":"trueName","type":"like"},{"title":"工号","field":"jobNumber","type":"like"},{"dataKey":"组织机构","data":[],"title":"部门","field":"department","type":"select"}]]);
            const columns = ref([{field:'department',title:'部门',type:'string',bind:{ key:'组织机构',data:[]},width:120,align:'left',sort:true},
                       {field:'id',title:'id',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'trueName',title:'姓名',type:'string',width:110,align:'left'},
                       {field:'jobNumber',title:'工号',type:'string',width:110,align:'left'},
                       {field:'img',title:'照片',type:'img',width:110,align:'left'},
                       {field:'post',title:'职务',type:'string',bind:{ key:'职务',data:[]},width:110,align:'left'},
                       {field:'CreateID',title:'CreateID',type:'int',width:100,hidden:true,align:'left'},
                       {field:'Creator',title:'创建人',type:'string',width:100,align:'left'},
                       {field:'CreateDate',title:'创建时间',type:'datetime',width:150,align:'left',sort:true},
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
