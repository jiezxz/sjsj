<template>
	<view>
		<view-grid @showPopup="showPopup" ref="grid" :index="true" :options="options">
			<!-- 自定义slot -->
			<view   slot="gridHeader" class="grid-header">
					<u-popup :show="show" @close="close">
			            <view style="height: 600rpx;text-align: center;padding: 50rpx;">
			                <text>{{row.UserTrueName}}</text>
			            </view>
					</u-popup>
			</view>
		</view-grid>
	</view>
</template>

<script>
	//this.$emit
	//************************************************
	//  *Author：jxx
	//  *QQ：283591387
	//  *自定义业务逻辑扩展
	//************************************************
    import extend from './Sys_UserExtend.js'
    import options from './Sys_UserOptions.js';
	let _options = options();
	_options.extend = extend;
	export default {
		data() {
			return {
				row:{},
				show:false,
				options: _options
			}
		},
		onShow() {
		},
		methods: {
			showPopup(row){
				 this.row=row;
				 this.show=true;
			},
			close(){
				this.show=false;
			}
		}
	}
</script>

<style>
</style>
