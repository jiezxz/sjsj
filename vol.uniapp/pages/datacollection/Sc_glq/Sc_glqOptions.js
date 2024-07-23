//************************************************ 
//  *Author：jxx
//  *QQ：283591387
//  *代码由框架生成,任何更改都可能导致被代码生成器覆盖
//  *业务请在Sc_glq.js中编写
//************************************************ 
export default function() {
	return {
		editFormFields: {"jingdu":"","starttime":"","endtime":"","banbie":"","banci":"","guolvqID":"","startPr":"","endPr":"","zhouqi":"","ghyuanyin":"","ghren":"","gyren":"","banzhang":"","beizhu":"","xianbie":""},
		editFormOptions: [{"title":"过滤网精度(um)","field":"jingdu","type":"text"},
                               {"title":"开始使用时间","field":"starttime","type":"datetime"},
                               {"title":"结束使用时间","field":"endtime","type":"datetime"},
                               {"type":"group"},
                               {"key":"班主","data":[],"title":"班别","field":"banbie","type":"select"},
                               {"key":"班次","data":[],"title":"班次","field":"banci","type":"select"},
                               {"title":"过滤器身份编号","field":"guolvqID","type":"text"},
                               {"type":"group"},
                               {"title":"使用后初始压力(Mpa)","field":"startPr","type":"text"},
                               {"title":"更换前最终压力(Mpa)","field":"endPr","type":"text"},
                               {"type":"group"},
                               {"title":"合计使用周期(小时/天)","field":"zhouqi","type":"text"},
                               {"title":"更换原因","field":"ghyuanyin","type":"textarea"},
                               {"type":"group"},
                               {"title":"设备更换人","field":"ghren","type":"text"},
                               {"title":"工艺确认/调试人","field":"gyren","type":"text"},
                               {"title":"生产班长确认","field":"banzhang","type":"text"},
                               {"type":"group"},
                               {"title":"备注","field":"beizhu","type":"textarea"},
                               {"key":"产线-中文","data":[],"title":"线别","field":"xianbie","type":"select"}],
		searchFormFields: {"DocumentNumber":"","jingdu":""},
		searchFormOptions: [{"title":"文件编号","field":"DocumentNumber","type":"like"},{"title":"过滤网精度(um)","field":"jingdu","type":"text"}],
		columns: [{field:'DocumentNumber',title:'文件编号',type:'string'},
                       {field:'jingdu',title:'过滤网精度(um)',type:'string'},
                       {field:'starttime',title:'开始使用时间',type:'datetime'},
                       {field:'endtime',title:'结束使用时间',type:'datetime'},
                       {field:'banbie',title:'班别',type:'string',bind:{ key:'班主',data:[]}},
                       {field:'banci',title:'班次',type:'string',bind:{ key:'班次',data:[]}},
                       {field:'guolvqID',title:'过滤器身份编号',type:'string'},
                       {field:'startPr',title:'使用后初始压力(Mpa)',type:'string'},
                       {field:'endPr',title:'更换前最终压力(Mpa)',type:'string'},
                       {field:'zhouqi',title:'合计使用周期(小时/天)',type:'string'},
                       {field:'ghyuanyin',title:'更换原因',type:'string'},
                       {field:'ghren',title:'设备更换人',type:'string'},
                       {field:'gyren',title:'工艺确认/调试人',type:'string'},
                       {field:'banzhang',title:'生产班长确认',type:'string'},
                       {field:'beizhu',title:'备注',type:'string'},
                       {field:'xianbie',title:'线别',type:'string',bind:{ key:'产线-中文',data:[]}}],
		table: {
			key: 'id',
			footer: "Foots",
			cnName: '过滤器更换',
			name: 'Sc_glq',
			url: "/Sc_glq/",
			sortName: "CreateDate"
		}
	}
}
