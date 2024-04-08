//************************************************
//  *Author：jxx
//  *QQ：283591387
//  *自定义业务逻辑扩展
//************************************************
export default function() {
	return {
		methods: {
			onInited() { //页面参数初始化
				//设置table为水平显示或者list列表显示
				this.direction = 'horizontal' //list
				//如果为list列表显示，指定list的标题列

				//设置自定义格式显示
				this.columns.forEach(column => {
					if (column.field == 'Gender') {
						//设置列宽度  
						column.width = 60;
					}
					if (column.field == "UserTrueName") {
						column.click = true;
						column.formatter = true;
					}
				})

				this.columns.push({
					field: '操作',
					title: '操作',
					click: true,
					formatter: true
				})
			},
			formatter(row, column, index) { //自定义格式化
				if (column.field == '操作') {
					return '<a style="background: #5ac725;color: white;padding: 2px 7px 4px 7px;border-radius: 2px;">删除</a>'
				} else if (column.field == 'UserTrueName') {
					return '<a style="color:red">' + row.UserTrueName + '</a>'
				}
			},
			cellClick(index, row, column) { //判断单元格点击事件
				if (column.field == '操作') {
					//点击了单元格
					this.$toast("点击了单元格" + row.UserName);
				} else if (column.field == 'UserTrueName') {
					this.$emit("showPopup",row);
					//this.$toast("点击了单元格:" + index);
				}
			},
			rowClick(index, row, column) { //行点击事件(默认触发编辑)
				return true;
			},
			searchBefore(params) { //查询前
				return true;
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
