<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/datacollection/datacollection_biangengguanli/dataCollection_bianGengGuanLi.js此处编写
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
    import extend from "@/extension/datacollection/datacollection_biangengguanli/dataCollection_bianGengGuanLi.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'id',
                footer: "Foots",
                cnName: '4M变更管理清单',
                name: 'datacollection_biangengguanli/dataCollection_bianGengGuanLi',
                url: "/dataCollection_bianGengGuanLi/",
                sortName: "CreateDate"
            });
            const editFormFields = ref({"gongXu":"","shengChanXian":"","xingHao":"","keHu":"","tiaoZhengRiQi":"","tiaoZhengShiJian":"","lianLuoShiYou":"","sfxjlcsp":"","yiChangYuanYin":"","tzyxdxgzbjqx":"","tiaoZhengQianCanShu":"","tiaoZhengHouCanShu":"","zhongYaoDao":"","bianGengXiangMu":"","kongZhiXingShi":"","qiShiPiHao":"","jieShouRiQi":"","jieShouShiJian":"","queRenShiJian":"","kaiShiZhengChangPiZhiHao":"","queRenJieGuo":"","banZhangQueRen":"","gongChengShiFuHe":"","pingGuWanChengShiJian":"","nbbgpssfjx":"","bgzk":""});
            const editFormOptions = ref([[{"dataKey":"工序","data":[],"title":"工序","field":"gongXu","type":"select"},
                               {"dataKey":"产线SQL","data":[],"title":"生产线","field":"shengChanXian","type":"select"},
                               {"title":"型号","field":"xingHao"}],
                              [{"title":"客户","field":"keHu","type":"text"},
                               {"title":"调整日期","field":"tiaoZhengRiQi","type":"date"},
                               {"title":"调整时间","field":"tiaoZhengShiJian","type":"time"}],
                              [{"dataKey":"联络事由","data":[],"title":"联络事由","field":"lianLuoShiYou","type":"select"},
                               {"dataKey":"是否","data":[],"title":"是否进行流程审批","field":"sfxjlcsp","type":"select"},
                               {"title":"异常原因","field":"yiChangYuanYin","type":"textarea"}],
                              [{"title":"指标及缺陷","field":"tzyxdxgzbjqx","type":"textarea"},
                               {"title":"调整前参数","field":"tiaoZhengQianCanShu","type":"textarea"},
                               {"title":"调整后参数","field":"tiaoZhengHouCanShu","type":"textarea"}],
                              [{"dataKey":"重要度","data":[],"title":"重要度","field":"zhongYaoDao","type":"select"},
                               {"title":"变更项目","field":"bianGengXiangMu","type":"textarea"},
                               {"dataKey":"控制形式","data":[],"title":"控制形式","field":"kongZhiXingShi","type":"select"}],
                              [{"title":"起始批号","field":"qiShiPiHao","type":"text"},
                               {"title":"接收日期","field":"jieShouRiQi","type":"date"},
                               {"title":"接收时间","field":"jieShouShiJian","type":"time"}],
                              [{"title":"确认时间","field":"queRenShiJian","type":"time"},
                               {"title":"开始正常批支号","field":"kaiShiZhengChangPiZhiHao","type":"text"},
                               {"dataKey":"结果","data":[],"title":"确认结果","field":"queRenJieGuo","type":"select"}],
                              [{"title":"班长确认","field":"banZhangQueRen","type":"text"},
                               {"title":"工程师复核","field":"gongChengShiFuHe","type":"text"},
                               {"title":"评估完成时间","field":"pingGuWanChengShiJian","type":"date"}],
                              [{"dataKey":"是否","data":[],"title":"内部变更评审是否进行","field":"nbbgpssfjx","type":"select"},
                               {"title":"变更状况","field":"bgzk","type":"textarea"}]]);
            const searchFormFields = ref({"gongXu":"","shengChanXian":[],"xingHao":"","tiaoZhengRiQi":"","lianLuoShiYou":"","zhongYaoDao":""});
            const searchFormOptions = ref([[{"dataKey":"工序","data":[],"title":"工序","field":"gongXu","type":"select"},{"dataKey":"产线SQL","data":[],"title":"生产线","field":"shengChanXian","type":"selectList"},{"title":"型号","field":"xingHao"}],[{"title":"调整日期","field":"tiaoZhengRiQi","type":"date"},{"dataKey":"联络事由","data":[],"title":"联络事由","field":"lianLuoShiYou","type":"select"},{"dataKey":"重要度","data":[],"title":"重要度","field":"zhongYaoDao","type":"select"}]]);
            const columns = ref([{field:'id',title:'id',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'gongXu',title:'工序',type:'int',bind:{ key:'工序',data:[]},width:110,align:'left',sort:true},
                       {field:'shengChanXian',title:'生产线',type:'string',bind:{ key:'产线SQL',data:[]},width:110,align:'left'},
                       {field:'xingHao',title:'型号',type:'string',width:110,align:'left'},
                       {field:'keHu',title:'客户',type:'string',width:110,align:'left'},
                       {field:'tiaoZhengRiQi',title:'调整日期',type:'date',width:150,align:'left',sort:true},
                       {field:'tiaoZhengShiJian',title:'调整时间',type:'string',width:110,align:'left'},
                       {field:'lianLuoShiYou',title:'联络事由',type:'int',bind:{ key:'联络事由',data:[]},width:110,align:'left'},
                       {field:'sfxjlcsp',title:'是否进行流程审批',type:'string',bind:{ key:'是否',data:[]},width:110,align:'left'},
                       {field:'yiChangYuanYin',title:'异常原因',type:'string',width:110,align:'left'},
                       {field:'tzyxdxgzbjqx',title:'指标及缺陷',type:'string',width:110,align:'left'},
                       {field:'tiaoZhengQianCanShu',title:'调整前参数',type:'string',width:110,align:'left'},
                       {field:'tiaoZhengHouCanShu',title:'调整后参数',type:'string',width:110,align:'left'},
                       {field:'zhongYaoDao',title:'重要度',type:'int',bind:{ key:'重要度',data:[]},width:110,align:'left'},
                       {field:'bianGengXiangMu',title:'变更项目',type:'string',width:110,align:'left'},
                       {field:'kongZhiXingShi',title:'控制形式',type:'int',bind:{ key:'控制形式',data:[]},width:110,align:'left'},
                       {field:'qiShiPiHao',title:'起始批号',type:'string',width:110,align:'left'},
                       {field:'jieShouRiQi',title:'接收日期',type:'datetime',width:150,align:'left',sort:true},
                       {field:'jieShouShiJian',title:'接收时间',type:'string',width:110,align:'left'},
                       {field:'queRenShiJian',title:'确认时间',type:'string',width:110,align:'left'},
                       {field:'kaiShiZhengChangPiZhiHao',title:'开始正常批支号',type:'string',width:110,align:'left'},
                       {field:'queRenJieGuo',title:'确认结果',type:'int',bind:{ key:'结果',data:[]},width:110,align:'left'},
                       {field:'banZhangQueRen',title:'班长确认',type:'string',width:110,align:'left'},
                       {field:'gongChengShiFuHe',title:'工程师复核',type:'string',width:110,align:'left'},
                       {field:'pingGuWanChengShiJian',title:'评估完成时间',type:'datetime',width:150,align:'left',sort:true},
                       {field:'nbbgpssfjx',title:'内部变更评审是否进行',type:'string',bind:{ key:'是否',data:[]},width:110,align:'left'},
                       {field:'bgzk',title:'变更状况',type:'string',width:220,align:'left'},
                       {field:'CreateID',title:'CreateID',type:'int',width:100,hidden:true,align:'left'},
                       {field:'Creator',title:'申请人',type:'string',width:100,align:'left'},
                       {field:'CreateDate',title:'CreateDate',type:'datetime',width:150,align:'left',sort:true},
                       {field:'ModifyID',title:'ModifyID',type:'int',width:100,hidden:true,align:'left'},
                       {field:'Modifier',title:'Modifier',type:'string',width:100,align:'left'},
                       {field:'ModifyDate',title:'ModifyDate',type:'datetime',width:150,align:'left',sort:true}]);
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
