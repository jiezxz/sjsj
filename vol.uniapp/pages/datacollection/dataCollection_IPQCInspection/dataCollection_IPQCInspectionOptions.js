//************************************************ 
//  *Author：jxx
//  *QQ：283591387
//  *代码由框架生成,任何更改都可能导致被代码生成器覆盖
//  *业务请在dataCollection_IPQCInspection.js中编写
//************************************************ 
export default function() {
	return {
		editFormFields: {"gongChang":"","xjrq":"","diDian":"","chanXian":"","wtms":"","sfsybzh":"","sfcf":"","yzcd":"","jtfl":"","zrbm":"","bmzrr":"","gwzrr":"","gsqzj":"","gshzj":"","gscs":"","wtzrr":"","yqwcrq":"","zgqrr":"","sfgb":"","remark":""},
		editFormOptions: [{"key":"工厂","data":[],"title":"工厂","field":"gongChang","type":"select"},
                               {"title":"巡检日期","field":"xjrq","type":"date"},
                               {"type":"group"},
                               {"key":"9S巡检区域SQL","data":[],"title":"产线","field":"chanXian","type":"select"},
                               {"title":"地点","field":"diDian","type":"text"},
                               {"title":"问题描述","field":"wtms","type":"textarea"},
                               {"type":"group"},
                               {"key":"是否","data":[],"title":"是否属于标准化","field":"sfsybzh","type":"select"},
                               {"key":"是否","data":[],"title":"是否重复","field":"sfcf","type":"select"},
                               {"key":"严重程度","data":[],"title":"严重程度","field":"yzcd","type":"select"},
                               {"type":"group"},
                               {"key":"IPQC集团分类","data":[],"title":"集团分类","field":"jtfl","type":"select"},
                               {"key":"异常管理责任部门","data":[],"title":"责任部门","field":"zrbm","type":"select"},
                               {"title":"部门责任人","field":"bmzrr","type":"text"},
                               {"type":"group"},
                               {"title":"岗位责任人","field":"gwzrr","type":"text"},
                               {"title":"改善前证据","field":"gsqzj","type":"img"},
                               {"title":"改善后证据","field":"gshzj","type":"img"},
                               {"type":"group"},
                               {"title":"改善措施","field":"gscs","type":"textarea"},
                               {"title":"问题责任人","field":"wtzrr","type":"text"},
                               {"title":"要求完成日期","field":"yqwcrq","type":"date"},
                               {"type":"group"},
                               {"title":"整改确认人","field":"zgqrr","type":"text"},
                               {"key":"是否","data":[],"title":"是否关闭","field":"sfgb","type":"select"},
                               {"type":"group"},
                               {"title":"备注","field":"remark","type":"textarea"}],
		searchFormFields: {"gongChang":"","xjrq":[null,null],"diDian":"","chanXian":"","jtfl":"","wtzrr":"","zgqrr":"","sfgb":"","Creator":""},
		searchFormOptions: [{"key":"IPQC集团分类","data":[],"title":"集团分类","field":"jtfl"},{"title":"问题责任人","field":"wtzrr"},{"title":"整改确认人","field":"zgqrr"},{"title":"巡检人","field":"Creator"},{"type":"group"},{"key":"工厂","data":[],"title":"工厂","field":"gongChang","type":"select"},{"title":"巡检日期","field":"xjrq","type":"range"},{"type":"group"},{"title":"地点","field":"diDian","type":"like"},{"key":"9S巡检区域SQL","data":[],"title":"产线","field":"chanXian","type":"select"},{"type":"group"},{"key":"是否","data":[],"title":"是否关闭","field":"sfgb","type":"select"}],
		columns: [{field:'gongChang',title:'工厂',type:'string',bind:{ key:'工厂',data:[]}},
                       {field:'xjrq',title:'巡检日期',type:'date'},
                       {field:'diDian',title:'地点',type:'string'},
                       {field:'chanXian',title:'产线',type:'string',bind:{ key:'9S巡检区域SQL',data:[]}},
                       {field:'wtms',title:'问题描述',type:'string'},
                       {field:'sfsybzh',title:'是否属于标准化',type:'string',bind:{ key:'是否',data:[]}},
                       {field:'sfcf',title:'是否重复',type:'string',bind:{ key:'是否',data:[]}},
                       {field:'yzcd',title:'严重程度',type:'string',bind:{ key:'严重程度',data:[]}},
                       {field:'jtfl',title:'集团分类',type:'string',bind:{ key:'IPQC集团分类',data:[]}},
                       {field:'zrbm',title:'责任部门',type:'string',bind:{ key:'异常管理责任部门',data:[]}},
                       {field:'bmzrr',title:'部门责任人',type:'string'},
                       {field:'gwzrr',title:'岗位责任人',type:'string'},
                       {field:'gsqzj',title:'改善前证据',type:'img'},
                       {field:'gshzj',title:'改善后证据',type:'img'},
                       {field:'gscs',title:'改善措施',type:'string'},
                       {field:'wtzrr',title:'问题责任人',type:'string'},
                       {field:'yqwcrq',title:'要求完成日期',type:'date'},
                       {field:'zgqrr',title:'整改确认人',type:'string'},
                       {field:'sfgb',title:'是否关闭',type:'string',bind:{ key:'是否',data:[]}},
                       {field:'remark',title:'备注',type:'string'},
                       {field:'Creator',title:'巡检人',type:'string',readonly:true}],
		table: {
			key: 'id',
			footer: "Foots",
			cnName: 'IPQC巡检',
			name: 'dataCollection_IPQCInspection',
			url: "/dataCollection_IPQCInspection/",
			sortName: "CreateDate"
		}
	}
}
