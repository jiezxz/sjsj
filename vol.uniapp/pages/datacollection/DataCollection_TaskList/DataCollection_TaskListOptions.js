//************************************************ 
//  *Author：jxx
//  *QQ：283591387
//  *代码由框架生成,任何更改都可能导致被代码生成器覆盖
//  *业务请在DataCollection_TaskList.js中编写
//************************************************ 
export default function() {
	return {
		editFormFields: {"BuMen":"","ResponsiblePerson":"","TaskName":"","TaskContent":"","ProposeTime":"","EndTime":"","StartTime":"","Status":"","CompletionTime":"","TaskRemarks":""},
		editFormOptions: [{"key":"部门列表","data":[],"title":"部门","field":"BuMen","type":"select"},
                               {"title":"责任人","field":"ResponsiblePerson","type":"text"},
                               {"type":"group"},
                               {"title":"任务名称","field":"TaskName","type":"textarea"},
                               {"title":"任务内容","field":"TaskContent","type":"textarea"},
                               {"type":"group"},
                               {"title":"提出时间","field":"ProposeTime","type":"datetime"},
                               {"title":"截止时间","field":"EndTime","type":"datetime"},
                               {"type":"group"},
                               {"title":"开始时间","field":"StartTime","type":"datetime"},
                               {"type":"group"},
                               {"title":"完成时间","field":"CompletionTime","type":"datetime"},
                               {"key":"部门任务状态","data":[],"title":"进行状态","field":"Status","type":"select"},
                               {"type":"group"},
                               {"title":"进度描述","field":"TaskRemarks","type":"textarea"}],
		searchFormFields: {"BuMen":"","Status":"","ResponsiblePerson":"","TaskName":"","StartSsatus":""},
		searchFormOptions: [{"key":"启动状态","data":[],"title":"启动状态","field":"StartSsatus"},{"type":"group"},{"key":"部门列表","data":[],"title":"部门","field":"BuMen","type":"select"},{"title":"责任人","field":"ResponsiblePerson","type":"like"},{"title":"任务名称","field":"TaskName","type":"like"},{"type":"group"},{"key":"部门任务状态","data":[],"title":"进行状态","field":"Status","type":"select"}],
		columns: [{field:'BuMen',title:'部门',type:'string',bind:{ key:'部门列表',data:[]}},
                       {field:'Status',title:'进行状态',type:'string',bind:{ key:'部门任务状态',data:[]}},
                       {field:'ResponsiblePerson',title:'责任人',type:'string'},
                       {field:'TaskName',title:'任务名称',type:'string'},
                       {field:'TaskContent',title:'任务内容',type:'string'},
                       {field:'StartSsatus',title:'启动状态',type:'string',bind:{ key:'启动状态',data:[]}},
                       {field:'ProposeTime',title:'提出时间',type:'datetime'},
                       {field:'TaskRemarks',title:'进度描述',type:'string'},
                       {field:'StartTime',title:'开始时间',type:'datetime'},
                       {field:'EndTime',title:'截止时间',type:'datetime'},
                       {field:'CompletionTime',title:'完成时间',type:'datetime'},
                       {field:'Creator',title:'创建人',type:'string'},
                       {field:'CreateDate',title:'创建时间',type:'datetime'}],
		table: {
			key: 'id',
			footer: "Foots",
			cnName: '部门任务清单',
			name: 'DataCollection_TaskList',
			url: "/DataCollection_TaskList/",
			sortName: "ProposeTime"
		}
	}
}
