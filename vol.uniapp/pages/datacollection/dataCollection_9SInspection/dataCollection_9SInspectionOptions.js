//************************************************ 
//  *Author：jxx
//  *QQ：283591387
//  *代码由框架生成,任何更改都可能导致被代码生成器覆盖
//  *业务请在dataCollection_9SInspection.js中编写
//************************************************ 
export default function() {
	return {
		editFormFields: {"gongChang":"","yzcd":"","xjsj":"","jtfl":"","diDian":"","chanXian":"","wtms":"","yctp":"","sfcf":"","cqcs":"","gsbm":"","bmzrr":"","zrr":"","zgqx":"","zgjg":"","wczt":""},
		editFormOptions: [{"key":"工厂","data":[],"title":"工厂","field":"gongChang","type":"select"},
                               {"key":"严重程度","data":[],"title":"严重程度","field":"yzcd","type":"select"},
                               {"type":"group"},
                               {"key":"9S集团分类SQL","data":[],"title":"集团分类","field":"jtfl","type":"select"},
                               {"title":"巡检日期","field":"xjsj","type":"date"},
                               {"title":"具体位置 ","field":"diDian","type":"text"},
                               {"type":"group"},
                               {"key":"9S巡检区域SQL","data":[],"title":"车间/区域","field":"chanXian","type":"select"},
                               {"title":"问题描述","field":"wtms","type":"textarea"},
                               {"title":"异常图片","field":"yctp","type":"img"},
                               {"type":"group"},
                               {"key":"是否","data":[],"title":"重复发生2次指摘","field":"sfcf","type":"select"},
                               {"title":"长期措施","field":"cqcs","type":"textarea"},
                               {"key":"异常管理责任部门","data":[],"title":"改善部门","field":"gsbm","type":"select"},
                               {"type":"group"},
                               {"title":"部门责任人","field":"bmzrr"},
                               {"title":"责任人","field":"zrr","type":"text"},
                               {"title":"整改期限","field":"zgqx","type":"datetime"},
                               {"type":"group"},
                               {"title":"整改结果","field":"zgjg","type":"img"},
                               {"key":"完成未完成","data":[],"title":"完成状态","field":"wczt","type":"select"}],
		searchFormFields: {"DocumentNumber":"","gongChang":"","xjsj":"","diDian":"","chanXian":"","sfcf":"","zrr":"","wczt":"","yzcd":"","jtfl":"","bmzrr":""},
		searchFormOptions: [{"key":"严重程度","data":[],"title":"严重程度","field":"yzcd","type":"select"},{"key":"9S集团分类SQL","data":[],"title":"集团分类","field":"jtfl","type":"select"},{"title":"部门责任人","field":"bmzrr","type":"like"},{"type":"group"},{"title":"文件编号","field":"DocumentNumber","type":"like"},{"key":"工厂","data":[],"title":"工厂","field":"gongChang","type":"select"},{"title":"巡检日期","field":"xjsj","type":"date"},{"title":"具体位置 ","field":"diDian","type":"text"},{"key":"9S巡检区域SQL","data":[],"title":"车间/区域","field":"chanXian","type":"select"},{"type":"group"},{"key":"是否","data":[],"title":"重复发生2次指摘","field":"sfcf","type":"select"},{"type":"group"},{"title":"责任人","field":"zrr","type":"like"},{"key":"完成未完成","data":[],"title":"完成状态","field":"wczt","type":"select"}],
		columns: [{field:'DocumentNumber',title:'文件编号',type:'string',readonly:true},
                       {field:'gongChang',title:'工厂',type:'string',bind:{ key:'工厂',data:[]}},
                       {field:'xjsj',title:'巡检日期',type:'date'},
                       {field:'yzcd',title:'严重程度',type:'string',bind:{ key:'严重程度',data:[]}},
                       {field:'jtfl',title:'集团分类',type:'string',bind:{ key:'9S集团分类SQL',data:[]}},
                       {field:'diDian',title:'具体位置 ',type:'string'},
                       {field:'chanXian',title:'车间/区域',type:'string',bind:{ key:'9S巡检区域SQL',data:[]}},
                       {field:'wtms',title:'问题描述',type:'string'},
                       {field:'yctp',title:'异常图片',type:'img'},
                       {field:'sfcf',title:'重复发生2次指摘',type:'string',bind:{ key:'是否',data:[]}},
                       {field:'cqcs',title:'长期措施',type:'string'},
                       {field:'gsbm',title:'改善部门',type:'string',bind:{ key:'异常管理责任部门',data:[]}},
                       {field:'bmzrr',title:'部门责任人',type:'string'},
                       {field:'zrr',title:'责任人',type:'string'},
                       {field:'zgqx',title:'整改期限',type:'datetime'},
                       {field:'zgjg',title:'整改结果',type:'img'},
                       {field:'wczt',title:'完成状态',type:'string',bind:{ key:'完成未完成',data:[]}},
                       {field:'Creator',title:'巡检人',type:'string'},
                       {field:'CreateDate',title:'提交时间',type:'datetime'}],
		table: {
			key: 'id',
			footer: "Foots",
			cnName: '9S巡检',
			name: 'dataCollection_9SInspection',
			url: "/dataCollection_9SInspection/",
			sortName: "CreateDate"
		}
	}
}
