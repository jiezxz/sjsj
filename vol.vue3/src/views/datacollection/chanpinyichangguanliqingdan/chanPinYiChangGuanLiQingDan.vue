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
            const editFormFields = ref({"cheJian":"","riQi":"","gongXu":"","jiTai":"","xingHao":"","yiChangFenLei":"","buLiangShuLiang":"","queXianDaiMa":"","shiFouDuiCe":"","shiFouYouXiao":"","shiFouGuanBi":"","shiFouCongFu":"","hengJiuGaiShan":"","wenTiDian":"","yuanYinFenXi":"","gaiShanCuoShi":"","zeRenBuMen":"","zeRenRen":"","naQi":"","shiJiWanChengShiJian":"","chaoQiTianShu":"","anShiWanCheng":"","zhuangTai":"","beiZhu":""});
            const editFormOptions = ref([[{"dataKey":"车间","data":[],"title":"车间","field":"cheJian","type":"select"},
                               {"title":"日期","field":"riQi","type":"date"}],
                              [{"dataKey":"工序","data":[],"title":"工序","field":"gongXu","type":"select"},
                               {"dataKey":"机台","data":[],"title":"机台","field":"jiTai","type":"select"}],
                              [{"dataKey":"型号","data":[],"title":"型号","field":"xingHao","type":"select"},
                               {"dataKey":"异常分类","data":[],"title":"异常分类","field":"yiChangFenLei","type":"select"}],
                              [{"title":"不良数量","field":"buLiangShuLiang","type":"number"},
                               {"dataKey":"缺陷代码","data":[],"title":"缺陷代码","field":"queXianDaiMa","type":"select"}],
                              [{"dataKey":"enable","data":[],"title":"是否对策","field":"shiFouDuiCe","type":"switch"},
                               {"dataKey":"enable","data":[],"title":"是否有效","field":"shiFouYouXiao","type":"switch"}],
                              [{"dataKey":"enable","data":[],"title":"是否关闭","field":"shiFouGuanBi","type":"switch"},
                               {"dataKey":"enable","data":[],"title":"是否重复","field":"shiFouCongFu","type":"switch"}],
                              [{"dataKey":"enable","data":[],"title":"恒久改善","field":"hengJiuGaiShan","type":"switch"}],
                              [{"title":"问题点","field":"wenTiDian","colSize":12,"type":"textarea"}],
                              [{"title":"原因分析","field":"yuanYinFenXi","colSize":12,"type":"textarea"}],
                              [{"title":"改善措施","field":"gaiShanCuoShi","colSize":12,"type":"textarea"}],
                              [{"dataKey":"异常管理责任部门","data":[],"title":"责任部门","field":"zeRenBuMen","type":"select"},
                               {"title":"责任人","field":"zeRenRen"},
                               {"title":"纳期","field":"naQi","type":"date"}],
                              [{"title":"实际完成时间","field":"shiJiWanChengShiJian","type":"date"},
                               {"title":"超期天数","field":"chaoQiTianShu","type":"number"},
                               {"dataKey":"enable","data":[],"title":"按时完成","field":"anShiWanCheng","type":"switch"}],
                              [{"dataKey":"异常管理状态","data":[],"title":"状态","field":"zhuangTai","type":"select"}],
                              [{"title":"备注","field":"beiZhu","colSize":12,"type":"textarea"}]]);
            const searchFormFields = ref({"cheJian":"","riQi":"","gongXu":[],"jiTai":[],"xingHao":[],"yiChangFenLei":[],"buLiangShuLiang":[null,null],"queXianDaiMa":[],"shiFouDuiCe":"","shiFouYouXiao":"","shiFouGuanBi":"","shiFouCongFu":"","hengJiuGaiShan":""});
            const searchFormOptions = ref([[{"dataKey":"车间","data":[],"title":"车间","field":"cheJian","type":"select"},{"title":"日期","field":"riQi","type":"date"}],[{"dataKey":"机台","data":[],"title":"机台","field":"jiTai","type":"selectList"},{"dataKey":"型号","data":[],"title":"型号","field":"xingHao","type":"selectList"},{"dataKey":"工序","data":[],"title":"工序","field":"gongXu","type":"selectList"}],[{"dataKey":"异常分类","data":[],"title":"异常分类","field":"yiChangFenLei","type":"selectList"},{"title":"不良数量","field":"buLiangShuLiang","type":"range"},{"dataKey":"缺陷代码","data":[],"title":"缺陷代码","field":"queXianDaiMa","type":"selectList"}],[{"dataKey":"enable","data":[],"title":"是否对策","field":"shiFouDuiCe","type":"select"},{"dataKey":"enable","data":[],"title":"是否有效","field":"shiFouYouXiao","type":"select"},{"dataKey":"enable","data":[],"title":"是否关闭","field":"shiFouGuanBi","type":"select"}],[{"dataKey":"enable","data":[],"title":"是否重复","field":"shiFouCongFu","type":"select"},{"dataKey":"enable","data":[],"title":"恒久改善","field":"hengJiuGaiShan","type":"select"}]]);
            const columns = ref([{field:'id',title:'id',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'cheJian',title:'车间',type:'string',bind:{ key:'车间',data:[]},width:110,align:'left',sort:true},
                       {field:'riQi',title:'日期',type:'date',width:150,align:'left',sort:true},
                       {field:'gongXu',title:'工序',type:'string',bind:{ key:'工序',data:[]},width:110,align:'left'},
                       {field:'jiTai',title:'机台',type:'string',bind:{ key:'机台',data:[]},width:110,align:'left'},
                       {field:'xingHao',title:'型号',type:'string',bind:{ key:'型号',data:[]},width:110,align:'left'},
                       {field:'yiChangFenLei',title:'异常分类',type:'string',bind:{ key:'异常分类',data:[]},width:110,align:'left'},
                       {field:'buLiangShuLiang',title:'不良数量',type:'int',width:110,align:'left'},
                       {field:'queXianDaiMa',title:'缺陷代码',type:'string',bind:{ key:'缺陷代码',data:[]},width:110,align:'left'},
                       {field:'shiFouDuiCe',title:'是否对策',type:'int',bind:{ key:'enable',data:[]},width:110,align:'left'},
                       {field:'shiFouYouXiao',title:'是否有效',type:'int',bind:{ key:'enable',data:[]},width:110,align:'left'},
                       {field:'shiFouGuanBi',title:'是否关闭',type:'int',bind:{ key:'enable',data:[]},width:110,align:'left'},
                       {field:'shiFouCongFu',title:'是否重复',type:'int',bind:{ key:'enable',data:[]},width:110,align:'left'},
                       {field:'hengJiuGaiShan',title:'恒久改善',type:'int',bind:{ key:'enable',data:[]},width:110,align:'left'},
                       {field:'wenTiDian',title:'问题点',type:'string',width:110,align:'left'},
                       {field:'yuanYinFenXi',title:'原因分析',type:'string',width:110,align:'left'},
                       {field:'gaiShanCuoShi',title:'改善措施',type:'string',width:110,align:'left'},
                       {field:'zeRenBuMen',title:'责任部门',type:'string',bind:{ key:'异常管理责任部门',data:[]},width:110,align:'left'},
                       {field:'zeRenRen',title:'责任人',type:'string',width:110,align:'left'},
                       {field:'naQi',title:'纳期',type:'date',width:150,align:'left',sort:true},
                       {field:'shiJiWanChengShiJian',title:'实际完成时间',type:'date',width:150,align:'left',sort:true},
                       {field:'chaoQiTianShu',title:'超期天数',type:'int',width:110,align:'left'},
                       {field:'anShiWanCheng',title:'按时完成',type:'int',bind:{ key:'enable',data:[]},width:110,align:'left'},
                       {field:'zhuangTai',title:'状态',type:'int',bind:{ key:'异常管理状态',data:[]},width:110,align:'left'},
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
