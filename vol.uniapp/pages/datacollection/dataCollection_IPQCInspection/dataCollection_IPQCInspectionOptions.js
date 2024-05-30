//************************************************ 
//  *Author：jxx
//  *QQ：283591387
//  *代码由框架生成,任何更改都可能导致被代码生成器覆盖
//  *业务请在dataCollection_IPQCInspection.js中编写
//************************************************ 
export default function() {
	return {
		editFormFields: {"gongChang":"","xjrq":"","diDian":"","chanXian":"","wtms":"","sfsybzh":"","sfcf":"","yzcd":"","jtfl":"","zrbm":"","bmzrr":"","gwzrr":"","gsqzj1":"","gsqzj2":"","wtzrr":"","yqwcrq":"","zgqrr":"","sfgb":"","gscs":"","gshzj1":"","gshzj2":"","remark":""},
		editFormOptions: [{"key":"工厂","data":[],"title":"工厂","field":"gongChang","type":"select"},
                               {"title":"巡检日期","field":"xjrq","type":"date"},
                               {"type":"group"},
                               {"key":"IPQC车间","data":[],"title":"车间","field":"chanXian","type":"select"},
                               {"title":"地点","field":"diDian","type":"text"},
                               {"title":"问题描述","field":"wtms","type":"textarea"},
                               {"type":"group"},
                               {"key":"是否","data":[],"title":"是否属于标准化","field":"sfsybzh","type":"select"},
                               {"key":"是否","data":[],"title":"是否重复","field":"sfcf","type":"select"},
                               {"key":"严重程度","data":[],"title":"严重程度","field":"yzcd","type":"select"},
                               {"type":"group"},
                               {"key":"IPQC集团分类","data":[],"title":"集团分类","field":"jtfl","type":"select"},
                               {"key":"IPQC责任部门","data":[],"title":"责任部门","field":"zrbm","type":"select"},
                               {"title":"部门责任人","field":"bmzrr","type":"text"},
                               {"type":"group"},
                               {"title":"岗位责任人","field":"gwzrr","type":"text"},
                               {"title":"改善前证据1","field":"gsqzj1","type":"img"},
                               {"title":"改善前证据2","field":"gsqzj2","type":"img"},
                               {"type":"group"},
                               {"title":"问题责任人","field":"wtzrr","type":"text"},
                               {"title":"要求完成日期","field":"yqwcrq","type":"date"},
                               {"type":"group"},
                               {"title":"整改确认人","field":"zgqrr","type":"text"},
                               {"key":"是否","data":[],"title":"是否关闭","field":"sfgb","type":"select"},
                               {"type":"group"},
                               {"title":"改善措施","field":"gscs","type":"textarea"},
                               {"type":"group"},
                               {"title":"改善后证据1","field":"gshzj1","type":"img"},
                               {"title":"改善后证据2","field":"gshzj2","type":"img"},
                               {"type":"group"},
                               {"title":"备注","field":"remark","type":"textarea"}],
		searchFormFields: {"gongChang":"","xjrq":"","diDian":"","chanXian":"","jtfl":"","wtzrr":"","zgqrr":"","sfgb":"","Creator":""},
		searchFormOptions: [{"title":"整改确认人","field":"zgqrr"},{"type":"group"},{"key":"工厂","data":[],"title":"工厂","field":"gongChang","type":"select"},{"title":"巡检日期","field":"xjrq","type":"date"},{"type":"group"},{"title":"地点","field":"diDian","type":"like"},{"key":"IPQC车间","data":[],"title":"车间","field":"chanXian","type":"select"},{"type":"group"},{"key":"IPQC集团分类","data":[],"title":"集团分类","field":"jtfl","type":"select"},{"type":"group"},{"title":"问题责任人","field":"wtzrr","type":"like"},{"key":"是否","data":[],"title":"是否关闭","field":"sfgb","type":"select"},{"title":"巡检人","field":"Creator","type":"like"}],
		columns: [{field:'gongChang',title:'工厂',type:'string',bind:{ key:'工厂',data:[]}},
                       {field:'xjrq',title:'巡检日期',type:'date'},
                       {field:'diDian',title:'地点',type:'string'},
                       {field:'chanXian',title:'车间',type:'string',bind:{ key:'IPQC车间',data:[]}},
                       {field:'wtms',title:'问题描述',type:'string'},
                       {field:'sfsybzh',title:'是否属于标准化',type:'string',bind:{ key:'是否',data:[]}},
                       {field:'sfcf',title:'是否重复',type:'string',bind:{ key:'是否',data:[]}},
                       {field:'yzcd',title:'严重程度',type:'string',bind:{ key:'严重程度',data:[]}},
                       {field:'jtfl',title:'集团分类',type:'string',bind:{ key:'IPQC集团分类',data:[]}},
                       {field:'zrbm',title:'责任部门',type:'string',bind:{ key:'IPQC责任部门',data:[]}},
                       {field:'bmzrr',title:'部门责任人',type:'string'},
                       {field:'gwzrr',title:'岗位责任人',type:'string'},
                       {field:'gsqzj1',title:'改善前证据1',type:'img'},
                       {field:'gsqzj2',title:'改善前证据2',type:'img'},
                       {field:'wtzrr',title:'问题责任人',type:'string'},
                       {field:'yqwcrq',title:'要求完成日期',type:'date'},
                       {field:'gscs',title:'改善措施',type:'string'},
                       {field:'gshzj1',title:'改善后证据1',type:'img'},
                       {field:'gshzj2',title:'改善后证据2',type:'img'},
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
