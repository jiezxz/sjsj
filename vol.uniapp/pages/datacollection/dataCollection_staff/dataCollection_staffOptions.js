//************************************************ 
//  *Author：jxx
//  *QQ：283591387
//  *代码由框架生成,任何更改都可能导致被代码生成器覆盖
//  *业务请在dataCollection_staff.js中编写
//************************************************ 
export default function() {
	return {
		editFormFields: {"department":"","trueName":"","jobNumber":"","img":"","post":""},
		editFormOptions: [{"key":"组织机构","data":[],"title":"部门","field":"department","type":"select"},
                               {"title":"姓名","field":"trueName","type":"text"},
                               {"title":"工号","field":"jobNumber","type":"text"},
                               {"type":"group"},
                               {"key":"职务","data":[],"title":"职务","field":"post","type":"select"},
                               {"title":"照片","field":"img","type":"img"}],
		searchFormFields: {"department":"","trueName":"","jobNumber":"","img":"","post":"","Creator":""},
		searchFormOptions: [{"title":"照片","field":"img"},{"key":"职务","data":[],"title":"职务","field":"post","type":"select"},{"title":"创建人","field":"Creator"},{"type":"group"},{"title":"姓名","field":"trueName","type":"like"},{"title":"工号","field":"jobNumber","type":"like"},{"key":"组织机构","data":[],"title":"部门","field":"department","type":"select"}],
		columns: [{field:'department',title:'部门',type:'string',bind:{ key:'组织机构',data:[]}},
                       {field:'trueName',title:'姓名',type:'string'},
                       {field:'jobNumber',title:'工号',type:'string'},
                       {field:'img',title:'照片',type:'img'},
                       {field:'post',title:'职务',type:'string',bind:{ key:'职务',data:[]}},
                       {field:'Creator',title:'创建人',type:'string'}],
		table: {
			key: 'id',
			footer: "Foots",
			cnName: '员工信息',
			name: 'dataCollection_staff',
			url: "/dataCollection_staff/",
			sortName: "CreateDate"
		}
	}
}
