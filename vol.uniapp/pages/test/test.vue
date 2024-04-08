<template>
	<view style="padding: 16rpx;">
		
		<view class="v-form-item">
			<view class="v-form-item-label">uni输入框</view>
			<view class="v-form-item-input">
				<input placeholder="订单" border="surround" clearable v-model="info.order"></input>
			</view>
		</view>
		
		<view class="v-form-item">
			<view class="v-form-item-label">单号</view>
			<view class="v-form-item-input">
				<u--input placeholder="订单" :customStyle="{border:'red'}" border="surround" clearable v-model="info.order"></u--input>
			</view>
		</view>

		<view class="v-form-item">
			<view class="v-form-item-label">内容</view>
			<view class="v-form-item-input">
				<u--input placeholder="请输入内容" border="surround" clearable v-model="info.content"></u--input>

			</view>
		</view>

		<view class="btns">
			<view class="btn">
				<u-button type="primary" @click="submit" text="提交"></u-button>
			</view>
			<view class="btn">
				<u-button type="success" @click="submit" text="获取表单"></u-button>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: {
					order: "1231",
					content: "输入内容",

				}
			}
		},
		methods: {
			submit() {
				// this.http.post("url",{},true).then(result=>{
				// 	 console.log(result)
				// })
				this.$toast(this.info.content || "")
			}
		}
	}
</script>

<style scoped lang="less">
	.v-form-item {
		padding: 16rpx;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #eee;

		.v-form-item-label {
			width: 180rpx;
		}

		.v-form-item-input {
			flex: 1;
		}
	}

	.btns {
		display: flex;
		text-align: center;
        margin-top: 25rpx;
		.btn {
			flex: 1;
			padding: 8rpx;
		}
	}
</style>
