<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/datacollection/datacollection_ipqcinspection/dataCollection_IPQCInspection.js此处编写
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
    import extend from "@/extension/datacollection/datacollection_ipqcinspection/dataCollection_IPQCInspection.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'id',
                footer: "Foots",
                cnName: 'IPQC巡检',
                name: 'datacollection_ipqcinspection/dataCollection_IPQCInspection',
                url: "/dataCollection_IPQCInspection/",
                sortName: "CreateDate"
            });
            const editFormFields = ref({"DocumentNumber":"","gongChang":"","xjrq":"","diDian":"","chanXian":"","wtms":"","sfsybzh":"","sfcf":"","yzcd":"","jtfl":"","zrbm":"","bmzrr":"","gwzrr":"","gsqzj":"","gshzj":"","gscs":"","wtzrr":"","yqwcrq":"","zgqrr":"","zgqk":"","sfgb":"","remark":""});
            const editFormOptions = ref([[{"title":"文件编号","field":"DocumentNumber","disabled":true},
                               {"dataKey":"工厂","data":[],"title":"工厂","field":"gongChang","type":"select"},
                               {"title":"巡检日期","field":"xjrq","type":"date"}],
                              [{"dataKey":"9S巡检区域SQL","data":[],"title":"产线","field":"chanXian","type":"select"},
                               {"title":"地点","field":"diDian","type":"text"},
                               {"title":"问题描述","field":"wtms","type":"textarea"}],
                              [{"dataKey":"是否","data":[],"title":"是否属于标准化","field":"sfsybzh","type":"select"},
                               {"dataKey":"是否","data":[],"title":"是否重复","field":"sfcf","type":"select"},
                               {"dataKey":"严重程度","data":[],"title":"严重程度","field":"yzcd","type":"select"}],
                              [{"dataKey":"IPQC集团分类","data":[],"title":"集团分类","field":"jtfl","type":"select"},
                               {"dataKey":"异常管理责任部门","data":[],"title":"责任部门","field":"zrbm","type":"select"},
                               {"title":"部门责任人","field":"bmzrr","type":"text"}],
                              [{"title":"岗位责任人","field":"gwzrr","type":"text"},
                               {"title":"改善前证据","field":"gsqzj","type":"img"},
                               {"title":"改善后证据","field":"gshzj","type":"img"}],
                              [{"title":"改善措施","field":"gscs","type":"textarea"},
                               {"title":"问题责任人","field":"wtzrr","type":"text"},
                               {"title":"要求完成日期","field":"yqwcrq","type":"date"}],
                              [{"title":"整改确认人","field":"zgqrr","type":"text"},
                               {"title":"整改情况","field":"zgqk","type":"textarea"},
                               {"dataKey":"是否","data":[],"title":"是否关闭","field":"sfgb","type":"select"}],
                              [{"title":"备注","field":"remark","colSize":12,"type":"textarea"}]]);
            const searchFormFields = ref({"DocumentNumber":"","gongChang":"","xjrq":[null,null],"diDian":"","chanXian":"","wtms":"","sfgb":""});
            const searchFormOptions = ref([[{"title":"文件编号","field":"DocumentNumber","type":"like"},{"dataKey":"工厂","data":[],"title":"工厂","field":"gongChang","type":"select"},{"title":"巡检日期","field":"xjrq","type":"range"}],[{"title":"地点","field":"diDian","type":"like"},{"dataKey":"9S巡检区域SQL","data":[],"title":"产线","field":"chanXian","type":"select"},{"title":"问题描述","field":"wtms"}],[{"dataKey":"是否","data":[],"title":"是否关闭","field":"sfgb","type":"select"}]]);
            const columns = ref([{field:'id',title:'id',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'DocumentNumber',title:'文件编号',type:'string',width:110,readonly:true,align:'left',sort:true},
                       {field:'gongChang',title:'工厂',type:'string',bind:{ key:'工厂',data:[]},width:110,align:'left'},
                       {field:'xjrq',title:'巡检日期',type:'date',width:150,align:'left',sort:true},
                       {field:'diDian',title:'地点',type:'string',width:180,align:'left'},
                       {field:'chanXian',title:'产线',type:'string',bind:{ key:'9S巡检区域SQL',data:[]},width:110,align:'left'},
                       {field:'wtms',title:'问题描述',type:'string',width:110,align:'left'},
                       {field:'sfsybzh',title:'是否属于标准化',type:'string',bind:{ key:'是否',data:[]},width:110,align:'left'},
                       {field:'sfcf',title:'是否重复',type:'string',bind:{ key:'是否',data:[]},width:110,align:'left'},
                       {field:'yzcd',title:'严重程度',type:'string',bind:{ key:'严重程度',data:[]},width:110,align:'left'},
                       {field:'jtfl',title:'集团分类',type:'string',bind:{ key:'IPQC集团分类',data:[]},width:110,align:'left'},
                       {field:'zrbm',title:'责任部门',type:'string',bind:{ key:'异常管理责任部门',data:[]},width:110,align:'left'},
                       {field:'bmzrr',title:'部门责任人',type:'string',width:110,align:'left'},
                       {field:'gwzrr',title:'岗位责任人',type:'string',width:110,align:'left'},
                       {field:'gsqzj',title:'改善前证据',type:'img',width:220,align:'left'},
                       {field:'gshzj',title:'改善后证据',type:'img',width:220,align:'left'},
                       {field:'gscs',title:'改善措施',type:'string',width:220,align:'left'},
                       {field:'wtzrr',title:'问题责任人',type:'string',width:110,align:'left'},
                       {field:'yqwcrq',title:'要求完成日期',type:'date',width:150,align:'left',sort:true},
                       {field:'zgqrr',title:'整改确认人',type:'string',width:110,align:'left'},
                       {field:'zgqk',title:'整改情况',type:'string',width:220,align:'left'},
                       {field:'sfgb',title:'是否关闭',type:'string',bind:{ key:'是否',data:[]},width:110,align:'left'},
                       {field:'remark',title:'备注',type:'string',width:110,align:'left'},
                       {field:'CreateID',title:'CreateID',type:'int',width:100,hidden:true,align:'left'},
                       {field:'Creator',title:'巡检人',type:'string',width:100,readonly:true,align:'left'},
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
