<template>
	<view>
		<view-grid ref="grid" :index="true" :options="options">
			<!-- 自定义slot -->
			<view slot="gridHeader" class="grid-header">
				<view class="input">
					<u--input placeholder="请输入内容" border="surround" v-model="code"></u--input>
				</view>
				<view class="btn">
					<u-button @click="scanCode" type="primary" icon="map" text="扫描二维码"></u-button>
				</view>
			</view>
			
			<view slot="modelHeader" class="grid-header">
				<view class="btn">
					<u-button @click="modelScanCode" type="primary" icon="map" text="扫描二维码"></u-button>
				</view>
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
	import extend from './Demo_CatalogExtend.js'
	import options from './Demo_CatalogOptions.js';
	let _options = options();
	_options.extend = extend;
	export default {
		data() {
			return {
				code: "",
				options: _options
			}
		},
		onShow() {},
		methods: {
			scanCode(){
				let _this=this;
				uni.scanCode({
					success: function (res) {
						_this.code=res.result;
						_this.$refs.grid.scanCode(_this.code);
						//console.log('条码内容：' + res.result);
					}
				});
			},
			modelScanCode(){
				let _this=this;
				uni.scanCode({
					success: function (res) {
						 _this.$refs.grid.setScanCode(res.result)
					}
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	.grid-header {
		display: flex;
         padding: 16rpx;
		 background: #EEEEEE;
		.input {
			flex: 1;
			background: #FFFFFF;
		}

		.btn {
			margin-left: 20rpx;
			width: 200rpx;
		}
	}
</style>
