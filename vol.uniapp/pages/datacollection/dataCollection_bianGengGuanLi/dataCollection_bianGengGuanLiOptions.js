//************************************************ 
//  *Author：jxx
//  *QQ：283591387
//  *代码由框架生成,任何更改都可能导致被代码生成器覆盖
//  *业务请在dataCollection_bianGengGuanLi.js中编写
//************************************************ 
export default function() {
	return {
		editFormFields: {"gongChang":"","gongXu":"","shengChanXian":"","xingHao":"","keHu":"","tiaoZhengRiQi":"","tiaoZhengShiJian":"","lianLuoShiYou":"","sfxjlcsp":"","yiChangYuanYin":"","tzyxdxgzbjqx":"","tiaoZhengQianCanShu":"","tiaoZhengHouCanShu":"","zhongYaoDao":"","bianGengXiangMu":"","kongZhiXingShi":"","qiShiPiHao":"","jieShouRiQi":"","jieShouShiJian":"","queRenShiJian":"","kaiShiZhengChangPiZhiHao":"","queRenJieGuo":"","banZhangQueRen":"","gongChengShiFuHe":"","pingGuWanChengShiJian":"","nbbgpssfjx":"","bgzk":""},
		editFormOptions: [{"key":"工厂","data":[],"title":"工厂","field":"gongChang","type":"select"},
                               {"key":"工序","data":[],"title":"工序","field":"gongXu","type":"select"},
                               {"key":"产线SQL","data":[],"title":"生产线","field":"shengChanXian","type":"select"},
                               {"type":"group"},
                               {"title":"型号","field":"xingHao"},
                               {"title":"客户","field":"keHu","type":"text"},
                               {"title":"调整日期","field":"tiaoZhengRiQi","type":"date"},
                               {"type":"group"},
                               {"title":"调整时间","field":"tiaoZhengShiJian","type":"time"},
                               {"key":"联络事由","data":[],"title":"联络事由","field":"lianLuoShiYou","type":"select"},
                               {"key":"是否","data":[],"title":"是否进行流程审批","field":"sfxjlcsp","type":"select"},
                               {"type":"group"},
                               {"title":"异常原因","field":"yiChangYuanYin","type":"textarea"},
                               {"title":"指标及缺陷","field":"tzyxdxgzbjqx","type":"textarea"},
                               {"title":"调整前参数","field":"tiaoZhengQianCanShu","type":"textarea"},
                               {"type":"group"},
                               {"title":"调整后参数","field":"tiaoZhengHouCanShu","type":"textarea"},
                               {"key":"重要度","data":[],"title":"重要度（产线动作不填）","field":"zhongYaoDao","type":"select"},
                               {"title":"变更项目（产线动作不填）","field":"bianGengXiangMu","type":"textarea"},
                               {"type":"group"},
                               {"key":"控制形式","data":[],"title":"控制形式（产线动作不填）","field":"kongZhiXingShi","type":"select"},
                               {"title":"起始批号","field":"qiShiPiHao","type":"text"},
                               {"title":"接收日期","field":"jieShouRiQi","type":"date"},
                               {"type":"group"},
                               {"title":"接收时间","field":"jieShouShiJian","type":"time"},
                               {"title":"确认时间","field":"queRenShiJian","type":"time"},
                               {"title":"开始正常批支号","field":"kaiShiZhengChangPiZhiHao","type":"text"},
                               {"type":"group"},
                               {"key":"结果","data":[],"title":"确认结果","field":"queRenJieGuo","type":"select"},
                               {"title":"班长确认","field":"banZhangQueRen","type":"text"},
                               {"title":"工程师复核","field":"gongChengShiFuHe","type":"text"},
                               {"type":"group"},
                               {"title":"评估完成时间","field":"pingGuWanChengShiJian","type":"date"},
                               {"key":"是否","data":[],"title":"内部变更评审是否进行","field":"nbbgpssfjx","type":"select"},
                               {"title":"变更状况","field":"bgzk","type":"textarea"}],
		searchFormFields: {"gongChang":"","gongXu":"","shengChanXian":[],"lianLuoShiYou":""},
		searchFormOptions: [{"key":"工厂","data":[],"title":"工厂","field":"gongChang","type":"select"},{"key":"工序","data":[],"title":"工序","field":"gongXu","type":"select"},{"key":"产线SQL","data":[],"title":"生产线","field":"shengChanXian","type":"selectList"},{"type":"group"},{"key":"联络事由","data":[],"title":"联络事由","field":"lianLuoShiYou","type":"select"}],
		columns: [{field:'gongChang',title:'工厂',type:'string',bind:{ key:'工厂',data:[]}},
                       {field:'gongXu',title:'工序',type:'int',bind:{ key:'工序',data:[]}},
                       {field:'shengChanXian',title:'生产线',type:'string',bind:{ key:'产线SQL',data:[]}},
                       {field:'xingHao',title:'型号',type:'string'},
                       {field:'keHu',title:'客户',type:'string'},
                       {field:'Creator',title:'申请人',type:'string'},
                       {field:'tiaoZhengRiQi',title:'调整日期',type:'date'},
                       {field:'tiaoZhengShiJian',title:'调整时间',type:'string'},
                       {field:'lianLuoShiYou',title:'联络事由',type:'int',bind:{ key:'联络事由',data:[]}},
                       {field:'yiChangYuanYin',title:'异常原因',type:'string'},
                       {field:'tzyxdxgzbjqx',title:'指标及缺陷',type:'string'},
                       {field:'tiaoZhengQianCanShu',title:'调整前参数',type:'string'},
                       {field:'tiaoZhengHouCanShu',title:'调整后参数',type:'string'},
                       {field:'zhongYaoDao',title:'重要度（产线动作不填）',type:'int',bind:{ key:'重要度',data:[]}},
                       {field:'bianGengXiangMu',title:'变更项目（产线动作不填）',type:'string'},
                       {field:'kongZhiXingShi',title:'控制形式（产线动作不填）',type:'int',bind:{ key:'控制形式',data:[]}},
                       {field:'qiShiPiHao',title:'起始批号',type:'string'},
                       {field:'jieShouRiQi',title:'接收日期',type:'datetime'},
                       {field:'jieShouShiJian',title:'接收时间',type:'string'},
                       {field:'queRenShiJian',title:'确认时间',type:'string'},
                       {field:'kaiShiZhengChangPiZhiHao',title:'开始正常批支号',type:'string'},
                       {field:'queRenJieGuo',title:'确认结果',type:'int',bind:{ key:'结果',data:[]}},
                       {field:'banZhangQueRen',title:'班长确认',type:'string'},
                       {field:'gongChengShiFuHe',title:'工程师复核',type:'string'},
                       {field:'pingGuWanChengShiJian',title:'评估完成时间',type:'datetime'},
                       {field:'nbbgpssfjx',title:'内部变更评审是否进行',type:'string',bind:{ key:'是否',data:[]}},
                       {field:'sfxjlcsp',title:'是否进行流程审批',type:'string',bind:{ key:'是否',data:[]}},
                       {field:'bgzk',title:'变更状况',type:'string'}],
		table: {
			key: 'id',
			footer: "Foots",
			cnName: '4M变更管理清单',
			name: 'dataCollection_bianGengGuanLi',
			url: "/dataCollection_bianGengGuanLi/",
			sortName: "CreateDate"
		}
	}
}
