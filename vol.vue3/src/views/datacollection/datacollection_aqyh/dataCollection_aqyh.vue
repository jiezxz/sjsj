<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/datacollection/datacollection_aqyh/dataCollection_aqyh.js此处编写
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
    import extend from "@/extension/datacollection/datacollection_aqyh/dataCollection_aqyh.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'id',
                footer: "Foots",
                cnName: '环保与职业健康安全隐患排查治理台账',
                name: 'datacollection_aqyh/dataCollection_aqyh',
                url: "/dataCollection_aqyh/",
                sortName: "id"
            });
            const editFormFields = ref({"DocumentNumber":"","checktime":"","checkpeople":"","YHpicture":"","ZGpicture":"","type":"","serious":"","yinhuan":"","level":"","changqu":"","yhbumen":"","yhnr":"","zgcs":"","zgtime":"","zgmoney":"","gbreason":"","yfcs":"","zgzrr":"","wctime":"","fcjg":"","fcry":"","bz":""});
            const editFormOptions = ref([[{"title":"文件编号","field":"DocumentNumber","type":"text"},
                               {"title":"检查时间","field":"checktime","type":"date"},
                               {"title":"检查人员","field":"checkpeople","type":"text"},
                               {"title":"整改前照片","field":"YHpicture","type":"img"}],
                              [{"title":"整改后照片","field":"ZGpicture","type":"img"},
                               {"dataKey":"事故（事件）类别","data":[],"title":"事故(事件)类别","field":"type","type":"select"},
                               {"dataKey":"事故（事件）严重程度","data":[],"title":"事故(事件)严重程度","field":"serious","type":"select"},
                               {"dataKey":"隐患子类","data":[],"title":"隐患子类","field":"yinhuan","type":"select"}],
                              [{"dataKey":"隐患级别","data":[],"title":"隐患级别","field":"level","type":"select"},
                               {"dataKey":"工厂","data":[],"title":"厂区","field":"changqu","type":"select"},
                               {"dataKey":"隐患部门","data":[],"title":"隐患部门/岗位","field":"yhbumen","type":"select"},
                               {"title":"隐患/不符合内容","field":"yhnr","type":"text"}],
                              [{"title":"整改/纠正措施","field":"zgcs","type":"textarea"},
                               {"title":"整改时限","field":"zgtime","type":"date"},
                               {"title":"整改资金","field":"zgmoney","type":"text"},
                               {"title":"根本原因","field":"gbreason","type":"textarea"}],
                              [{"title":"预防措施","field":"yfcs","type":"text"},
                               {"title":"整改责任人","field":"zgzrr","type":"text"},
                               {"title":"完成时间","field":"wctime","type":"date"},
                               {"title":"复查结果","field":"fcjg","type":"text"}],
                              [{"title":"复查人员","field":"fcry","type":"text"},
                               {"title":"备注","field":"bz","type":"textarea"}]]);
            const searchFormFields = ref({"type":"","level":"","changqu":"","yhbumen":"","zgzrr":""});
            const searchFormOptions = ref([[{"dataKey":"事故（事件）类别","data":[],"title":"事故(事件)类别","field":"type","type":"select"},{"dataKey":"隐患级别","data":[],"title":"隐患级别","field":"level","type":"text"}],[{"dataKey":"工厂","data":[],"title":"厂区","field":"changqu","type":"select"},{"title":"整改责任人","field":"zgzrr","type":"text"},{"dataKey":"隐患部门","data":[],"title":"隐患部门/岗位","field":"yhbumen","type":"select"}]]);
            const columns = ref([{field:'id',title:'id',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'DocumentNumber',title:'文件编号',type:'string',width:120,align:'left',sort:true},
                       {field:'checktime',title:'检查时间',type:'datetime',width:150,align:'left',sort:true},
                       {field:'checkpeople',title:'检查人员',type:'string',width:120,align:'left'},
                       {field:'YHpicture',title:'整改前照片',type:'img',width:220,align:'left'},
                       {field:'ZGpicture',title:'整改后照片',type:'img',width:220,align:'left'},
                       {field:'type',title:'事故(事件)类别',type:'string',bind:{ key:'事故（事件）类别',data:[]},width:120,align:'left'},
                       {field:'serious',title:'事故(事件)严重程度',type:'string',bind:{ key:'事故（事件）严重程度',data:[]},width:220,align:'left'},
                       {field:'yinhuan',title:'隐患子类',type:'string',bind:{ key:'隐患子类',data:[]},width:120,align:'left'},
                       {field:'level',title:'隐患级别',type:'string',bind:{ key:'隐患级别',data:[]},width:120,align:'left'},
                       {field:'changqu',title:'厂区',type:'string',bind:{ key:'工厂',data:[]},width:220,align:'left'},
                       {field:'yhbumen',title:'隐患部门/岗位',type:'string',bind:{ key:'隐患部门',data:[]},width:120,align:'left'},
                       {field:'yhnr',title:'隐患/不符合内容',type:'string',width:220,align:'left'},
                       {field:'zgcs',title:'整改/纠正措施',type:'string',width:220,align:'left'},
                       {field:'zgtime',title:'整改时限',type:'datetime',width:150,align:'left',sort:true},
                       {field:'zgmoney',title:'整改资金',type:'string',width:120,align:'left'},
                       {field:'gbreason',title:'根本原因',type:'string',width:220,align:'left'},
                       {field:'yfcs',title:'预防措施',type:'string',width:120,align:'left'},
                       {field:'zgzrr',title:'整改责任人',type:'string',width:120,align:'left'},
                       {field:'wctime',title:'完成时间',type:'datetime',width:150,align:'left',sort:true},
                       {field:'fcjg',title:'复查结果',type:'string',width:120,align:'left'},
                       {field:'fcry',title:'复查人员',type:'string',width:120,align:'left'},
                       {field:'bz',title:'备注',type:'string',width:220,align:'left'},
                       {field:'CreateID',title:'创建者ID',type:'int',width:100,hidden:true,align:'left'},
                       {field:'Creator',title:'创建人',type:'string',width:100,align:'left'},
                       {field:'CreateDate',title:'创建时间',type:'datetime',width:150,align:'left',sort:true},
                       {field:'ModifyID',title:'修改人ID',type:'int',width:100,hidden:true,align:'left'},
                       {field:'Modifier',title:'修改人名称',type:'string',width:100,align:'left'},
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
