<template>
	<view>
		<view-grid ref="grid" :index="true" :options="options">
			<!-- 自定义slot -->
			<view @click="viewClick" slot="gridHeader" class="grid-header">
				{{gridHeaderText}}
			</view>
		</view-grid>
	</view>
</template>

<script>
	//************************************************
	//  *Author：jxx
	//  *QQ：283591387
	//  *自定义业务逻辑扩展
	//************************************************
    import extend from './dataCollection_cjkbExtend.js'
    import options from './dataCollection_cjkbOptions.js';
	export default {
		data() {
			let _options = options();
	        _options.extend = extend;
			return {
				gridHeaderText: "",//随便输入字符后可以显示出来
				options: _options
			}
		},
		onShow() {
		},
		methods: {
			viewClick() {
				//获取生成页面grid的对象
				console.log(this.$refs.grid.searchFormFields)
			}
		}
	}
</script>

<style>
</style>
