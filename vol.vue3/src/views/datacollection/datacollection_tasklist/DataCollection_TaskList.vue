<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/datacollection/datacollection_tasklist/DataCollection_TaskList.js此处编写
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
    import extend from "@/extension/datacollection/datacollection_tasklist/DataCollection_TaskList.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'id',
                footer: "Foots",
                cnName: '部门任务清单',
                name: 'datacollection_tasklist/DataCollection_TaskList',
                url: "/DataCollection_TaskList/",
                sortName: "ProposeTime"
            });
            const editFormFields = ref({"BuMen":"","ResponsiblePerson":"","TaskName":"","TaskContent":"","ProposeTime":"","EndTime":"","StartSsatus":"","StartTime":"","Status":"","CompletionTime":"","TaskRemarks":"","Attachment":""});
            const editFormOptions = ref([[{"dataKey":"部门列表","data":[],"title":"部门","field":"BuMen","type":"select"},
                               {"title":"责任人","field":"ResponsiblePerson","type":"text"}],
                              [{"title":"任务名称","field":"TaskName","colSize":12,"type":"textarea"},
                               {"title":"任务内容","field":"TaskContent","colSize":12,"type":"textarea"}],
                              [{"title":"提出时间","field":"ProposeTime","type":"datetime"},
                               {"title":"截止时间","field":"EndTime","type":"datetime"}],
                              [{"title":"开始时间","field":"StartTime","type":"datetime"},
                               {"dataKey":"启动状态","data":[],"title":"启动状态","field":"StartSsatus","type":"select"}],
                              [{"title":"完成时间","field":"CompletionTime","type":"datetime"},
                               {"dataKey":"部门任务状态","data":[],"title":"进行状态","field":"Status","type":"select"}],
                              [{"title":"进度描述","field":"TaskRemarks","colSize":12,"type":"textarea"},
                               {"title":"佐证资料","field":"Attachment","type":"file"}]]);
            const searchFormFields = ref({"BuMen":"","Status":"","ResponsiblePerson":"","TaskName":""});
            const searchFormOptions = ref([[{"dataKey":"部门列表","data":[],"title":"部门","field":"BuMen","type":"select"},{"title":"责任人","field":"ResponsiblePerson","type":"like"},{"title":"任务名称","field":"TaskName","type":"like"}],[{"dataKey":"部门任务状态","data":[],"title":"进行状态","field":"Status","type":"select"}]]);
            const columns = ref([{field:'id',title:'id',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'BuMen',title:'部门',type:'string',bind:{ key:'部门列表',data:[]},width:110,align:'left',sort:true},
                       {field:'Status',title:'进行状态',type:'string',bind:{ key:'部门任务状态',data:[]},width:110,align:'left'},
                       {field:'IsItOverdue',title:'是否超期',type:'string ',width:110,hidden:true,align:'left'},
                       {field:'Urgency',title:'紧急度',type:'int',width:80,hidden:true,align:'left'},
                       {field:'ResponsiblePerson',title:'责任人',type:'string',width:110,align:'left'},
                       {field:'TaskName',title:'任务名称',type:'string',width:220,align:'left'},
                       {field:'TaskContent',title:'任务内容',type:'string',width:110,align:'left'},
                       {field:'StartSsatus',title:'启动状态',type:'string',bind:{ key:'启动状态',data:[]},width:120,align:'left'},
                       {field:'ProposeTime',title:'提出时间',type:'datetime',width:150,align:'left',sort:true},
                       {field:'TaskRemarks',title:'进度描述',type:'string',width:110,align:'left'},
                       {field:'StartTime',title:'开始时间',type:'datetime',width:150,align:'left',sort:true},
                       {field:'EndTime',title:'截止时间',type:'datetime',width:150,align:'left',sort:true},
                       {field:'Attachment',title:'佐证资料',type:'file',width:110,align:'left'},
                       {field:'CompletionTime',title:'完成时间',type:'datetime',width:150,align:'left',sort:true},
                       {field:'CreateID',title:'CreateID',type:'int',width:100,hidden:true,align:'left'},
                       {field:'Creator',title:'创建人',type:'string',width:100,align:'left'},
                       {field:'CreateDate',title:'创建时间',type:'datetime',width:150,align:'left',sort:true},
                       {field:'ModifyID',title:'ModifyID',type:'int',width:100,hidden:true,align:'left'},
                       {field:'Modifier',title:'Modifier',type:'string',width:100,hidden:true,align:'left'},
                       {field:'ModifyDate',title:'ModifyDate',type:'datetime',width:150,hidden:true,align:'left',sort:true}]);
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
