<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/datacollection/chanpinyichangguanliqingdan/chanPinYiChangGuanLiQingDan.js此处编写
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
    import extend from "@/extension/datacollection/chanpinyichangguanliqingdan/chanPinYiChangGuanLiQingDan.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'id',
                footer: "Foots",
                cnName: '异常管理清单',
                name: 'chanpinyichangguanliqingdan/chanPinYiChangGuanLiQingDan',
                url: "/chanPinYiChangGuanLiQingDan/",
                sortName: "CreateDate"
            });
            const editFormFields = ref({"gongSi":"","cheJian":"","yueFen":"","riQi":"","gongXu":"","jiTai":"","xingHao":"","yiChangFenLei":"","buLiangShuLiang":"","queXianDaiMa":"","shiFouDuiCe":"","shiFouYouXiao":"","shiFouGuanBi":"","shiFouCongFu":"","hengJiuGaiShan":"","wenTiDian":"","yuanYinFenXi":"","gaiShanCuoShi":"","zeRenBuMen":"","naQi":"","shiJiWanChengShiJian":"","chaoQiTianShu":"","anShiWanCheng":"","zhuangTai":"","beiZhu":""});
            const editFormOptions = ref([[{"dataKey":"组织机构","data":[],"title":"公司","required":true,"field":"gongSi","type":"select"},
                               {"title":"车间","required":true,"field":"cheJian"}],
                              [{"title":"月份","required":true,"field":"yueFen"},
                               {"title":"日期","required":true,"field":"riQi","type":"date"}],
                              [{"title":"工序","required":true,"field":"gongXu"},
                               {"title":"机台","required":true,"field":"jiTai"}],
                              [{"title":"型号","required":true,"field":"xingHao"},
                               {"title":"异常分类","field":"yiChangFenLei"}],
                              [{"title":"不良数量","field":"buLiangShuLiang","type":"number"},
                               {"title":"缺陷代码","field":"queXianDaiMa"}],
                              [{"dataKey":"enable","data":[],"title":"是否对策","field":"shiFouDuiCe","type":"switch"},
                               {"dataKey":"enable","data":[],"title":"是否有效","field":"shiFouYouXiao","type":"switch"}],
                              [{"dataKey":"enable","data":[],"title":"是否关闭","field":"shiFouGuanBi","type":"switch"},
                               {"dataKey":"enable","data":[],"title":"是否重复","field":"shiFouCongFu","type":"switch"}],
                              [{"dataKey":"enable","data":[],"title":"恒久改善","field":"hengJiuGaiShan","type":"switch"}],
                              [{"title":"问题点","field":"wenTiDian","colSize":12,"type":"textarea"}],
                              [{"title":"原因分析","field":"yuanYinFenXi","colSize":12,"type":"textarea"}],
                              [{"title":"改善措施","field":"gaiShanCuoShi","colSize":12,"type":"textarea"}],
                              [{"title":"责任部门","field":"zeRenBuMen"},
                               {"title":"纳期","field":"naQi","type":"date"}],
                              [{"title":"实际完成时间","field":"shiJiWanChengShiJian","type":"date"},
                               {"title":"超期天数","field":"chaoQiTianShu","type":"number"}],
                              [{"title":"按时完成","field":"anShiWanCheng","type":"switch"},
                               {"title":"状态","field":"zhuangTai"}],
                              [{"title":"备注","field":"beiZhu","colSize":12,"type":"textarea"}]]);
            const searchFormFields = ref({"gongSi":"","cheJian":"","yueFen":"","riQi":"","gongXu":""});
            const searchFormOptions = ref([[{"dataKey":"组织机构","data":[],"title":"公司","field":"gongSi","type":"select"},{"title":"车间","field":"cheJian"},{"title":"月份","field":"yueFen"}],[{"title":"日期","field":"riQi","type":"date"},{"title":"工序","field":"gongXu"}]]);
            const columns = ref([{field:'id',title:'id',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'gongSi',title:'公司',type:'string',bind:{ key:'组织机构',data:[]},width:110,require:true,align:'left',sort:true},
                       {field:'cheJian',title:'车间',type:'string',width:110,require:true,align:'left'},
                       {field:'yueFen',title:'月份',type:'string',width:110,require:true,align:'left'},
                       {field:'riQi',title:'日期',type:'date',width:150,require:true,align:'left',sort:true},
                       {field:'gongXu',title:'工序',type:'string',width:110,require:true,align:'left'},
                       {field:'jiTai',title:'机台',type:'string',width:110,require:true,align:'left'},
                       {field:'xingHao',title:'型号',type:'string',width:110,require:true,align:'left'},
                       {field:'yiChangFenLei',title:'异常分类',type:'string',width:110,align:'left'},
                       {field:'buLiangShuLiang',title:'不良数量',type:'int',width:110,align:'left'},
                       {field:'queXianDaiMa',title:'缺陷代码',type:'string',width:110,align:'left'},
                       {field:'shiFouDuiCe',title:'是否对策',type:'string ',bind:{ key:'enable',data:[]},width:110,align:'left'},
                       {field:'shiFouYouXiao',title:'是否有效',type:'string ',bind:{ key:'enable',data:[]},width:110,align:'left'},
                       {field:'shiFouGuanBi',title:'是否关闭',type:'string ',bind:{ key:'enable',data:[]},width:110,align:'left'},
                       {field:'shiFouCongFu',title:'是否重复',type:'string ',bind:{ key:'enable',data:[]},width:110,align:'left'},
                       {field:'hengJiuGaiShan',title:'恒久改善',type:'string ',bind:{ key:'enable',data:[]},width:110,align:'left'},
                       {field:'wenTiDian',title:'问题点',type:'string',width:110,align:'left'},
                       {field:'yuanYinFenXi',title:'原因分析',type:'string',width:110,align:'left'},
                       {field:'gaiShanCuoShi',title:'改善措施',type:'string',width:110,align:'left'},
                       {field:'zeRenBuMen',title:'责任部门',type:'string',width:110,align:'left'},
                       {field:'naQi',title:'纳期',type:'date',width:150,align:'left',sort:true},
                       {field:'shiJiWanChengShiJian',title:'实际完成时间',type:'date',width:150,align:'left',sort:true},
                       {field:'chaoQiTianShu',title:'超期天数',type:'int',width:110,align:'left'},
                       {field:'anShiWanCheng',title:'按时完成',type:'string ',width:110,align:'left'},
                       {field:'zhuangTai',title:'状态',type:'string ',width:110,align:'left'},
                       {field:'beiZhu',title:'备注',type:'string',width:110,align:'left'},
                       {field:'CreateID',title:'创建人ID',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Creator',title:'创建人',type:'string',width:130,align:'left'},
                       {field:'CreateDate',title:'创建时间',type:'datetime',width:150,align:'left',sort:true},
                       {field:'ModifyID',title:'修改人ID',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Modifier',title:'修改人',type:'string',width:130,align:'left'},
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
