<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/datacollection/sc_glq/Sc_glq.js此处编写
 -->
<template>
    <div>
        <table>
            <tr>
                <td style="text-align: center;font-size:42px;" colspan="2"> 过滤器更换记录</td>
            </tr>
            <tr>
                <td style="width:50% ;padding-left: 10%;font-size: 20px;">保存年限：15年</td>
                <td style="width:50%;text-align: right;padding-right: 10%;font-size: 24px;">CQR-MF-017 A/3</td>
            </tr>
            <tr>
                <td style="font-size: 18px;" colspan="2"><span style="color:crimson">注：</span><br>
                    <span style="color:crimson">过滤器更换基准：</span>
                    <br>
                    <span style="color:crimson">①过滤网使用压力超过《制膜工程制造基准书》3/4页注1要求时进行更换滤器。</span><br>
                    <span style="color:crimson">②产线在更换配方或转产时，根据更换配方或转产前过滤网压力达到《制膜工程制造基准书》压力标准的80%时更换过滤器。</span><br>
                    <span style="color:skyblue;">③挤出机降温到≤50℃以下达到两次时更换过滤器，将每次降温时间记录在《过滤器更换记录》备注内。</span><br>
                    <span
                        style="color:skyblue;">④因过滤网产生的杂质或淡斑导致连续≥3轮降级时，生产主任组织技术、设备工程师或主管以上人员现场评估是否更换过滤器，更换完成后需在《过滤器更换记录》“备注”栏记录清楚。</span>
                    <br>
                    <span style="color:crimson"> ⑤以上4种情况以外的过滤器其他更换原因，需在《过滤器更换记录》表内备注中说明异常更换原因。</span>
                </td>
            </tr>
        </table>
        <view-grid ref="grid" :columns="columns" :detail="detail" :editFormFields="editFormFields"
            :editFormOptions="editFormOptions" :searchFormFields="searchFormFields" :searchFormOptions="searchFormOptions"
            :table="table" :extend="extend">
        </view-grid>
    </div>
</template>
<script>
import extend from "@/extension/datacollection/sc_glq/Sc_glq.js";
import { ref, defineComponent } from "vue";
export default defineComponent({
    setup() {
        const table = ref({
            key: 'id',
            footer: "Foots",
            cnName: '过滤器更换',
            name: 'sc_glq/Sc_glq',
            url: "/Sc_glq/",
            sortName: "CreateDate"
        });
        const editFormFields = ref({ "DocumentNumber": "", "jingdu": "", "starttime": "", "endtime": "", "banbie": "", "banci": "", "guolvqID": "", "startPr": "", "endPr": "", "zhouqi": "", "xiaoshi": "", "ghyuanyin": "", "ghren": "", "gyren": "", "xianbie": "", "banzhang": "", "beizhu": "" });
        const editFormOptions = ref([[{ "title": "文件编号", "field": "DocumentNumber" },
        { "title": "过滤网精度(um)", "field": "jingdu", "type": "text" },
        { "title": "开始使用时间", "field": "starttime", "type": "datetime" }],
        [{ "dataKey": "班主", "data": [], "title": "班别", "field": "banbie", "type": "select" },
        { "dataKey": "班次", "data": [], "title": "班次", "field": "banci", "type": "select" },
        { "title": "结束使用时间", "field": "endtime", "type": "datetime" }],
        [{ "title": "使用后初始压力(Mpa)", "field": "startPr", "type": "text" },
        { "title": "更换前最终压力(Mpa)", "field": "endPr", "type": "text" },
        { "title": "过滤器身份编号", "field": "guolvqID", "type": "text" }],
        [{ "title": "合计使用周期(天)", "field": "zhouqi", "type": "text" },
        { "title": "合计使用周期(小时)", "field": "xiaoshi", "type": "text" }],
        [{ "dataKey": "过滤器更换原因", "data": [], "title": "更换原因", "field": "ghyuanyin", "type": "select" },
        { "title": "设备更换人", "field": "ghren", "type": "text" },
        { "title": "工艺确认/调试人", "field": "gyren", "type": "text" }],
        [{ "title": "生产班长确认", "field": "banzhang", "type": "text" },
        { "dataKey": "产线-中文", "data": [], "title": "线别", "field": "xianbie", "type": "select" },
        { "title": "备注", "field": "beizhu", "type": "textarea" }]]);
        const searchFormFields = ref({ "DocumentNumber": "", "xianbie": "", "jingdu": "", "starttime": "", "endtime": "", "banbie": "", "banci": "", "guolvqID": "" });
        const searchFormOptions = ref([[{ "dataKey": "产线-中文", "data": [], "title": "线别", "field": "xianbie", "type": "select" }, { "title": "过滤网精度(um)", "field": "jingdu", "type": "text" }, { "title": "文件编号", "field": "DocumentNumber", "type": "like" }, { "title": "开始使用时间", "field": "starttime", "type": "datetime" }], [{ "title": "结束使用时间", "field": "endtime", "type": "datetime" }, { "dataKey": "班主", "data": [], "title": "班别", "field": "banbie", "type": "select" }, { "dataKey": "班次", "data": [], "title": "班次", "field": "banci", "type": "select" }], [{ "title": "过滤器身份编号", "field": "guolvqID", "type": "text" }]]);
        const columns = ref([{ field: 'DocumentNumber', title: '文件编号', type: 'string', width: 120, align: 'left', sort: true },
        { field: 'id', title: '序号', type: 'int', width: 110, hidden: true, require: true, align: 'left' },
        { field: 'xianbie', title: '线别', type: 'string', bind: { key: '产线-中文', data: [] }, width: 120, align: 'left' },
        { field: 'jingdu', title: '过滤网精度(um)', type: 'string', width: 120, align: 'left' },
        { field: 'starttime', title: '开始使用时间', type: 'datetime', width: 120, align: 'left', sort: true },
        { field: 'endtime', title: '结束使用时间', type: 'datetime', width: 120, align: 'left', sort: true },
        { field: 'banbie', title: '班别', type: 'string', bind: { key: '班主', data: [] }, width: 120, align: 'left' },
        { field: 'banci', title: '班次', type: 'string', bind: { key: '班次', data: [] }, width: 120, align: 'left' },
        { field: 'guolvqID', title: '过滤器身份编号', type: 'string', width: 200, align: 'left' },
        { field: 'startPr', title: '使用后初始压力(Mpa)', type: 'string', width: 150, align: 'left' },
        { field: 'endPr', title: '更换前最终压力(Mpa)', type: 'string', width: 150, align: 'left' },
        { field: 'zhouqi', title: '合计使用周期(天)', type: 'string', width: 180, align: 'left' },
        { field: 'xiaoshi', title: '合计使用周期(小时)', type: 'string', width: 180, align: 'left' },
        { field: 'ghyuanyin', title: '更换原因', type: 'string', bind: { key: '过滤器更换原因', data: [] }, width: 220, align: 'left' },
        { field: 'ghren', title: '设备更换人', type: 'string', width: 120, align: 'left' },
        { field: 'gyren', title: '工艺确认/调试人', type: 'string', width: 120, align: 'left' },
        { field: 'banzhang', title: '生产班长确认', type: 'string', width: 120, align: 'left' },
        { field: 'beizhu', title: '备注', type: 'string', width: 220, align: 'left' },
        { field: 'CreateID', title: '创建者ID', type: 'int', width: 80, hidden: true, align: 'left' },
        { field: 'Creator', title: '创建人', type: 'string', width: 130, align: 'left' },
        { field: 'CreateDate', title: '创建时间', type: 'datetime', width: 110, align: 'left', sort: true },
        { field: 'ModifyID', title: '修改人ID', type: 'int', width: 80, hidden: true, align: 'left' },
        { field: 'Modifier', title: '修改人名称', type: 'string', width: 130, align: 'left' },
        { field: 'ModifyDate', title: '修改时间', type: 'datetime', width: 110, align: 'left', sort: true }]);
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
