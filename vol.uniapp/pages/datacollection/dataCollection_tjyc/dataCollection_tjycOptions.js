//************************************************ 
//  *Author：jxx
//  *QQ：283591387
//  *代码由框架生成,任何更改都可能导致被代码生成器覆盖
//  *业务请在dataCollection_tjyc.js中编写
//************************************************ 
export default function() {
	return {
		editFormFields: {"gongChang":"","scx":"","riQi":"","banZhu":"","banZhang":"","banCi":"","ciShu":"","weiZhi":"","daiHao":"","yuanYin":"","chuLi":"","zdyc":"","tjsj":"","qjwc":"","cmwc":"","tswc":"","tisoShiWC":"","sjsj":"","tzwxsj":"","wxzcsj":""},
		editFormOptions: [{"key":"工厂","data":[],"title":"工厂","field":"gongChang","type":"select"},
                               {"key":"产线-中文","data":[],"title":"生产线","field":"scx","type":"select"},
                               {"title":"日期","field":"riQi","type":"date"},
                               {"type":"group"},
                               {"key":"生产班长","data":[],"title":"班长","field":"banZhang","type":"select"},
                               {"key":"班主","data":[],"title":"班主","field":"banZhu","type":"select"},
                               {"key":"班次","data":[],"title":"班次","field":"banCi","type":"select"},
                               {"type":"group"},
                               {"title":"停机次数","field":"ciShu","type":"number"},
                               {"key":"停机位置","data":[],"title":"停机位置","field":"weiZhi","type":"select"},
                               {"type":"group"},
                               {"key":"停机代号","data":[],"title":"停机代号","field":"daiHao","type":"select"},
                               {"title":"停机原因","field":"yuanYin"},
                               {"type":"group"},
                               {"title":"处理方案","field":"chuLi"},
                               {"key":"停机分类","data":[],"title":"停机分类","field":"zdyc","type":"select"},
                               {"type":"group"},
                               {"title":"停机时间","field":"tjsj","type":"datetime"},
                               {"title":"清洁完成","field":"qjwc","type":"datetime"},
                               {"title":"穿膜完成","field":"cmwc","type":"datetime"},
                               {"type":"group"},
                               {"title":"提速完成","field":"tswc","type":"datetime"},
                               {"title":"调试完成","field":"tisoShiWC","type":"datetime"},
                               {"title":"收卷时间","field":"sjsj","type":"datetime"},
                               {"type":"group"},
                               {"title":"通知维修时间","field":"tzwxsj","type":"datetime"},
                               {"title":"维修正常时间","field":"wxzcsj","type":"datetime"}],
		searchFormFields: {"gongChang":"","scx":"","riQi":""},
		searchFormOptions: [{"key":"产线-中文","data":[],"title":"生产线","field":"scx","type":"select"},{"title":"日期","field":"riQi","type":"date"},{"type":"group"},{"key":"工厂","data":[],"title":"工厂","field":"gongChang","type":"select"}],
		columns: [{field:'gongChang',title:'工厂',type:'string',bind:{ key:'工厂',data:[]}},
                       {field:'scx',title:'生产线',type:'string',bind:{ key:'产线-中文',data:[]}},
                       {field:'riQi',title:'日期',type:'date'},
                       {field:'banZhu',title:'班主',type:'string',bind:{ key:'班主',data:[]}},
                       {field:'banZhang',title:'班长',type:'string',bind:{ key:'生产班长',data:[]}},
                       {field:'banCi',title:'班次',type:'string',bind:{ key:'班次',data:[]}},
                       {field:'ciShu',title:'停机次数',type:'int'},
                       {field:'weiZhi',title:'停机位置',type:'string',bind:{ key:'停机位置',data:[]}},
                       {field:'daiHao',title:'停机代号',type:'string',bind:{ key:'停机代号',data:[]}},
                       {field:'yuanYin',title:'停机原因',type:'string'},
                       {field:'chuLi',title:'处理方案',type:'string'},
                       {field:'zdyc',title:'停机分类',type:'string',bind:{ key:'停机分类',data:[]}},
                       {field:'tjsj',title:'停机时间',type:'datetime'},
                       {field:'qjwc',title:'清洁完成',type:'datetime'},
                       {field:'cmwc',title:'穿膜完成',type:'datetime'},
                       {field:'tswc',title:'提速完成',type:'datetime'},
                       {field:'tisoShiWC',title:'调试完成',type:'datetime'},
                       {field:'sjsj',title:'收卷时间',type:'datetime'},
                       {field:'tzwxsj',title:'通知维修时间',type:'datetime'},
                       {field:'wxzcsj',title:'维修正常时间',type:'datetime'},
                       {field:'Creator',title:'创建人',type:'string'}],
		table: {
			key: 'id',
			footer: "Foots",
			cnName: '停机&设备异常',
			name: 'dataCollection_tjyc',
			url: "/dataCollection_tjyc/",
			sortName: "CreateDate"
		}
	}
}