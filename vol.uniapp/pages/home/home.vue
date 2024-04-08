<template>
	<view :style="{height:height+50+'px'}">
		<u-swiper height="360rpx" :list="swiperList" :radius="0"></u-swiper>
		<view style="padding:20rpx 20rpx 0 20rpx">
			<vol-alert type="primary">
				<view>1、致力于成为：世界一流的材料研发生产企业和国内最具竞争力的包装企业</view>
		
		<view>2、以市场和技术为导向，应用先进技术，致力于隔膜和包装材料的不断升级。</view>
<view>3、恩捷股份坚持环境、社会、公司治理三位一体的高质量可持续发展，2022年共回收纸制品/塑料制品包装物4098.7吨，安全生产支出为人民币2,377万元，较2021年增长了90.46%……</view>
			</vol-alert>
		</view>
		<view class="card-container">
			<view class="fn-title">基础功能</view>
			<u-grid :border="false" @click="gridClick" col="4">
				<u-grid-item v-for="(item,index) in fn" :key="index">
					<image style="width:90rpx;height: 90rpx;" :src="item.icon"></image>
					<!-- <u-icon :customStyle="getStyle(item)" :name="item.icon" :size="22"></u-icon> -->
					<view class="grid-text">{{item.name}}</view>
				</u-grid-item>
			</u-grid>
		</view>
		<!-- 	组件已废弃，对应pages.json中tabBar属性 -->
		<!-- 		<vol-tabbar :index="0"></vol-tabbar> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				height: 0,
				swiperList: [
					'/static/swiper1.jpg',
					'/static/swiper2.jpg'
				],
				fn: [{
						name: "菜单",
						icon: '/static/imgs/menu.png',
						path: "/pages/menu/menu"
					},
					{
						name: "表单",
						icon: '/static/imgs/stat.png',
						path: "/pages/form/form"
					},
					{
						name: "消息",
						icon: '/static/imgs/message.png',
						path: "/pages/message/message"
					},
					{
						name: "我的",
						icon: '/static/imgs/user.png',
						path: "/pages/user/user",
					}
				],
			}
		},
		onLoad() {
			var _this = this;
			// 获取手机状态栏高度
			uni.getSystemInfo({
				success: function(data) {
					// 将其赋值给this
					_this.height = data.statusBarHeight;
				}
			})
		},
		onShow() {
		},
		methods: {
			getStyle(item) {
				return {
					paddingTop: 20 + 'rpx',
					background: item.color,
					padding: '50%',
					color: "#ffff",
					'border-radius': '50%',
					left: '-24rpx'
				}
			},
			gridClick(index) {
				uni.switchTab({
					url:this.fn[index].path
				})
			},
			swiperClick(index) {

			}
		}
	}
</script>
<style lang="less" scoped>
	.card-container {
		box-shadow: 1px 1px 9px #efefef;
		margin: 20rpx;
		border: 1px solid #f1f1f1;
		border-radius: 10rpx;
		padding: 20rpx 4rpx;

		.fn-title {
			font-size: 28rpx;
			color: #8f9ca2;
			padding: 4rpx 0 30rpx 20rpx;
		}

		.grid-text {
			padding-top: 8rpx;
			font-size: 26rpx;
		}

	}
</style>
