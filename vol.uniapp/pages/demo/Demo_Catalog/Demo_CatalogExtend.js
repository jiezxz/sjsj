//************************************************
//  *Author：jxx
//  *QQ：283591387
//  *自定义业务逻辑扩展
//************************************************
export default function() {
	return {
		methods: {
			onInited() { //页面参数初始化
				//设置table超出换行显示
				//this.textInline = false;

				//设置列宽度
				//this.columns[1].width = 70;

				//设置table为水平显示或者list列表显示
				this.direction ="list";// 'horizontal'//list
				//如果为list列表显示，指定list的标题列
				//this.titleField="字段";

				//设置自定义格式显示
				//this.columns.forEach(column=>{
				// 	if(column.field=='字段'){
				//      //自定义格式化显示,在下面的formatter实现具体逻辑
				// 		//column.formatter=true;

				//      //指定字段为date类型不显示时分秒
				//      //column.type="date";

				//      //设置列宽度
				//      //column.width = 70;
				// 	}
				// })

				//页面打开时禁用加载数据
				//this.load=false;
				//页面打开时默认弹出查询框
				//this.searchModel = true;
				this.height = this.height - 56;
			},
			formatter(row, column, index) { //自定义格式化
				// if(column.field=='xx'){
				//  return '<a style="color:red;">' + row[column.field] + '</a>';
				// }
				//return row[column.field]
			},
			rowClick(index, row, column) { //行点击事件(默认触发编辑)
				return true;
			},
			cellClick(index, row, column) { //单元格击事件(默认触发编辑)
				//仅onInited中设置：this.direction = "horizontal", this.columns的字段设置为click=true后生效
				return true;
			},
			rowButtons(index, row) { //列表显示的按钮
			   //if(row.xx=='')
				//自定义按钮,仅onInited中设置：this.direction = "list"后生效
				let buttons= [{
					text: "测试",
					icon: "edit-pen",
					type: "primary",
					plain: true,
					shape: "circle",
					disabled: false
				}, {
					text: "删除",
					icon: "trash",
					type: "error",
					plain: true,
					shape: "circle",
					//shape:"",//square、circle
					disabled: false
				}];
				return buttons;
			},
			rowButtonClick(btn, index, row) { //列表显示的按钮点击事件
				if (btn.text == '删除') {
					this.$toast('删除按钮')
				} else if (btn.text == '测试') {
					this.$toast('测试按钮')
				}
			},
			modelOpenBefore(row) {
				return true;
			},
			setScanCode(code) { //弹出框中扫描二维码
				//this.http.get("url?code="+code).then(c=>{
				this.editFormFields.CatalogCode = code;
				//})

			},
			searchBefore(params) { //查询前
				params.wheres.push({
					name: "CatalogCode", //查询的字段
					value: this.code //当前扫描二维码的值
				})
				return true;
			},
			scanCode(code) { //扫描二维码调用的方法
				this.code = code;
				this.search();
			},
			updateBefore(formData) { //更新保存前操作
				return true;
			},
			addBefore(formData) { //新建保存前操作
				return true;
			},
			searchFormOnChange(field, value) { //查询弹出框下拉框或日期选中事件
				//if(field=="字段"){
				// 	console.log(value)
				//}
			},
			editFormOnChange(field, value) { //新建编辑弹出框下拉框或日期选中事件
				//if(field=="字段"){
				// 	console.log(value)
				//}
			},
		}
	}
}
