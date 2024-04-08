//************************************************ 
//  *Author：jxx
//  *QQ：283591387
//  *代码由框架生成,任何更改都可能导致被代码生成器覆盖
//  *业务请在Demo_Goods.js中编写
//************************************************ 
export default function() {
	return {
		editFormFields: {"GoodsName":"","CatalogId":[],"GoodsCode":"","Specs":"","Price":"","Enable":"","Img":""},
		editFormOptions: [{"title":"商品名称","required":true,"field":"GoodsName","type":"text"},
                               {"key":"分类级联","data":[],"title":"所属分类","field":"CatalogId","type":"cascader"},
                               {"title":"商品编号","required":true,"field":"GoodsCode","type":"text"},
                               {"type":"group"},
                               {"title":"规格","field":"Specs"},
                               {"title":"单价","required":true,"field":"Price","type":"decimal"},
                               {"key":"enable","data":[],"title":"是否可用","field":"Enable","type":"radio"},
                               {"type":"group"},
                               {"title":"商品图片","field":"Img","type":"img"}],
		searchFormFields: {"GoodsName":"","Enable":"","CreateDate":""},
		searchFormOptions: [{"key":"enable","data":[],"title":"是否可用","field":"Enable","type":"number"},{"title":"创建时间","field":"CreateDate"},{"type":"group"},{"title":"商品名称","field":"GoodsName","type":"like"}],
		columns: [{field:'GoodsName',title:'商品名称',type:'string',link:true},
                       {field:'GoodsCode',title:'商品编号',type:'string'},
                       {field:'Img',title:'商品图片',type:'img'},
                       {field:'Specs',title:'规格',type:'string'},
                       {field:'Price',title:'单价',type:'decimal'}],
		table: {
			key: 'GoodsId',
			footer: "Foots",
			cnName: '商品信息',
			name: 'Demo_Goods',
			url: "/Demo_Goods/",
			sortName: "CreateDate"
		}
	}
}
