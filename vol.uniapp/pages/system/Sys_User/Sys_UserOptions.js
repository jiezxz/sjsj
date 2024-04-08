//************************************************ 
//  *Author：jxx
//  *QQ：283591387
//  *代码由框架生成,任何更改都可能导致被代码生成器覆盖
//  *业务请在Sys_User.js中编写
//************************************************ 
export default function() {
	return {
		editFormFields: {"UserName":"","UserTrueName":"","Role_Id":"","IsRegregisterPhone":"","Gender":"","Enable":"","HeadImageUrl":""},
		editFormOptions: [{"title":"帐号","required":true,"field":"UserName","disabled":true},
                               {"title":"真实姓名","required":true,"field":"UserTrueName","type":"text"},
                               {"type":"group"},
                               {"key":"roles","data":[],"title":"角色","required":true,"field":"Role_Id","type":"select"},
                               {"key":"isphone","data":[],"title":"手机用户","required":true,"field":"IsRegregisterPhone","type":"select"},
                               {"type":"group"},
                               {"key":"gender","data":[],"title":"性别","field":"Gender","type":"select"},
                               {"key":"enable","data":[],"title":"是否可用","required":true,"field":"Enable","type":"select"},
                               {"type":"group"},
                               {"title":"头像","required":true,"field":"HeadImageUrl","type":"img"}],
		searchFormFields: {"UserName":"","Role_Id":"","UserTrueName":"","Enable":""},
		searchFormOptions: [{"title":"帐号","field":"UserName"},{"title":"真实姓名","field":"UserTrueName"},{"type":"group"},{"key":"roles","data":[],"title":"角色","field":"Role_Id","type":"select"},{"type":"group"},{"key":"enable","data":[],"title":"是否可用","field":"Enable","type":"select"}],
		columns: [{field:'UserName',title:'帐号',type:'string',link:true,readonly:true},
                       {field:'Gender',title:'性别',type:'int',bind:{ key:'gender',data:[]}},
                       {field:'Role_Id',title:'角色',type:'int',bind:{ key:'roles',data:[]}},
                       {field:'UserTrueName',title:'真实姓名',type:'string'}],
		table: {
			key: 'User_Id',
			footer: "Foots",
			cnName: '用户管理',
			name: 'Sys_User',
			url: "/Sys_User/",
			sortName: "User_Id"
		}
	}
}
