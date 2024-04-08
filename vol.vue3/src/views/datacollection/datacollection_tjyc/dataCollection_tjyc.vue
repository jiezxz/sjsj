<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/datacollection/datacollection_tjyc/dataCollection_tjyc.js此处编写
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
    import extend from "@/extension/datacollection/datacollection_tjyc/dataCollection_tjyc.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'id',
                footer: "Foots",
                cnName: '停机&设备异常',
                name: 'datacollection_tjyc/dataCollection_tjyc',
                url: "/dataCollection_tjyc/",
                sortName: "CreateDate"
            });
            const editFormFields = ref({"scx":"","riQi":"","banZhu":"","banZhang":"","banCi":"","ciShu":"","weiZhi":"","daiHao":"","yuanYin":"","chuLi":"","zdyc":"","tjsj":"","qjwc":"","cmwc":"","tswc":"","tisoShiWC":"","sjsj":"","tzwxsj":"","wxzcsj":"","cyry":""});
            const editFormOptions = ref([[{"dataKey":"产线-中文","data":[],"title":"生产线","field":"scx","type":"select"},
                               {"title":"日期","field":"riQi","type":"date"}],
                              [{"dataKey":"生产班长","data":[],"title":"班长","field":"banZhang","type":"select"},
                               {"dataKey":"班主","data":[],"title":"班主","field":"banZhu","type":"select"},
                               {"dataKey":"班次","data":[],"title":"班次","field":"banCi","type":"select"}],
                              [{"title":"停机次数","field":"ciShu","type":"number"},
                               {"dataKey":"停机位置","data":[],"title":"停机位置","field":"weiZhi","colSize":6,"type":"select"}],
                              [{"dataKey":"停机代号","data":[],"title":"停机代号","field":"daiHao","colSize":6,"type":"select"},
                               {"title":"停机原因","field":"yuanYin","colSize":6}],
                              [{"title":"处理方案","field":"chuLi","colSize":6},
                               {"dataKey":"停机分类","data":[],"title":"停机分类","field":"zdyc","type":"select"}],
                              [{"title":"停机时间","field":"tjsj","type":"datetime"},
                               {"title":"清洁完成","field":"qjwc","type":"datetime"},
                               {"title":"穿膜完成","field":"cmwc","type":"datetime"}],
                              [{"title":"提速完成","field":"tswc","type":"datetime"},
                               {"title":"调试完成","field":"tisoShiWC","type":"datetime"},
                               {"title":"收卷时间","field":"sjsj","type":"datetime"}],
                              [{"title":"通知维修时间","field":"tzwxsj","type":"datetime"},
                               {"title":"维修正常时间","field":"wxzcsj","type":"datetime"}],
                              [{"title":"参与人员","field":"cyry","colSize":12,"type":"textarea"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'id',title:'id',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'scx',title:'生产线',type:'string',bind:{ key:'产线-中文',data:[]},width:110,align:'left',sort:true},
                       {field:'riQi',title:'日期',type:'date',width:150,align:'left',sort:true},
                       {field:'banZhu',title:'班主',type:'string',bind:{ key:'班主',data:[]},width:110,align:'left'},
                       {field:'banZhang',title:'班长',type:'string',bind:{ key:'生产班长',data:[]},width:110,align:'left'},
                       {field:'banCi',title:'班次',type:'string',bind:{ key:'班次',data:[]},width:110,align:'left'},
                       {field:'ciShu',title:'停机次数',type:'int',width:110,align:'left'},
                       {field:'weiZhi',title:'停机位置',type:'string',bind:{ key:'停机位置',data:[]},width:110,align:'left'},
                       {field:'daiHao',title:'停机代号',type:'string',bind:{ key:'停机代号',data:[]},width:110,align:'left'},
                       {field:'yuanYin',title:'停机原因',type:'string',width:110,align:'left'},
                       {field:'chuLi',title:'处理方案',type:'string',width:110,align:'left'},
                       {field:'zdyc',title:'停机分类',type:'string',bind:{ key:'停机分类',data:[]},width:110,align:'left'},
                       {field:'tjsj',title:'停机时间',type:'datetime',width:150,align:'left',sort:true},
                       {field:'qjwc',title:'清洁完成',type:'datetime',width:150,align:'left',sort:true},
                       {field:'cmwc',title:'穿膜完成',type:'datetime',width:150,align:'left',sort:true},
                       {field:'tswc',title:'提速完成',type:'datetime',width:150,align:'left',sort:true},
                       {field:'tisoShiWC',title:'调试完成',type:'datetime',width:150,align:'left',sort:true},
                       {field:'sjsj',title:'收卷时间',type:'datetime',width:150,align:'left',sort:true},
                       {field:'tzwxsj',title:'通知维修时间',type:'datetime',width:150,align:'left',sort:true},
                       {field:'wxzcsj',title:'维修正常时间',type:'datetime',width:150,align:'left',sort:true},
                       {field:'CreateID',title:'CreateID',type:'int',width:100,hidden:true,align:'left'},
                       {field:'Creator',title:'创建人',type:'string',width:100,align:'left'},
                       {field:'CreateDate',title:'创建时间',type:'datetime',width:150,align:'left',sort:true},
                       {field:'ModifyID',title:'ModifyID',type:'int',width:100,hidden:true,align:'left'},
                       {field:'Modifier',title:'修改人',type:'string',width:100,align:'left'},
                       {field:'ModifyDate',title:'修改时间',type:'datetime',width:150,align:'left',sort:true},
                       {field:'cyry',title:'参与人员',type:'string',width:110,align:'left'}]);
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
