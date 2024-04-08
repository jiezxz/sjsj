//************************************************ 
//  *Author：jxx
//  *QQ：283591387
//  *代码由框架生成,任何更改都可能导致被代码生成器覆盖
//  *业务请在Demo_Catalog.js中编写
//************************************************ 
export default function() {
	return {
		editFormFields: {"CatalogCode":"","CatalogName":"","ParentId":[],"Enable":"","Remark":"","Img":""},
		editFormOptions: [{"title":"分类编号","required":true,"field":"CatalogCode"},
                               {"title":"分类名称","required":true,"field":"CatalogName"},
                               {"type":"group"},
                               {"key":"分类级联","data":[],"title":"上级分类","field":"ParentId","type":"cascader"},
                               {"key":"商品分类可用","data":[],"title":"是否可用","field":"Enable","type":"radio"},
                               {"type":"group"},
                               {"title":"备注","field":"Remark","type":"textarea"},
                               {"type":"group"},
                               {"title":"分类图片","field":"Img","type":"img"}],
		searchFormFields: {"CatalogCode":"","CatalogName":"","Enable":"","Creator":"","CreateDate":""},
		searchFormOptions: [{"title":"创建人","field":"Creator"},{"type":"group"},{"title":"分类编号","field":"CatalogCode"},{"title":"分类名称","field":"CatalogName","type":"like"},{"key":"商品分类可用","data":[],"title":"是否可用","field":"Enable","type":"select"},{"type":"group"},{"title":"创建时间","field":"CreateDate","type":"datetime"}],
		columns: [{field:'CatalogCode',title:'分类编号',type:'string'},
                       {field:'CatalogName',title:'分类名称',type:'string',link:true},
                       {field:'ParentId',title:'上级分类',type:'guid',bind:{ key:'分类级联',data:[]}},
                       {field:'Img',title:'分类图片',type:'img'},
                       {field:'Enable',title:'是否可用',type:'int',bind:{ key:'商品分类可用',data:[]}},
                       {field:'Remark',title:'备注',type:'string'},
                       {field:'Creator',title:'创建人',type:'string'},
                       {field:'CreateDate',title:'创建时间',type:'datetime'}],
		table: {
			key: 'CatalogId',
			footer: "Foots",
			cnName: '商品分类',
			name: 'Demo_Catalog',
			url: "/Demo_Catalog/",
			sortName: "CreateDate"
		}
	}
}
