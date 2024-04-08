<template>
	<view class="login-container">
		<view class="login-title">请登陆</view>
		<view class="login-item">
			<u--input v-model="userInfo.userName" placeholder="请输入帐号" prefixIcon="account" shape="circle"
				border="bottom" clearable prefixIconStyle="font-size: 22px;color: #909399"></u--input>
		</view>
		<view class="login-item">
			<u--input v-model="userInfo.password" type="password" placeholder="请输入密码" prefixIcon="lock-open"
				shape="circle" border="bottom" clearable prefixIconStyle="font-size: 22px;color: #909399"></u--input>
		</view>
	<!-- 	<view class="login-item login-code">
			<u--input v-model="userInfo.verificationCode" placeholder="请输入验证码" prefixIcon="scan" shape="circle"
				border="bottom" clearable prefixIconStyle="font-size: 22px;color: #909399"></u--input>
			<image class="img" @click="getVierificationCode" :src="codeSrc"></image>
		</view> -->
		<view class="login-btn">
			<view>
				<u-button @click="login" :loading="loading" :loadingText="loading?'登录中..':''"
					:customStyle="{'border-radius': '10rpx'}" size="large" type="primary" text="登录">
				</u-button>
			</view>
			<!-- #ifdef MP-WEIXIN -->
			<view style="margin-top: 20rpx;">
				<!-- https://uniapp.dcloud.net.cn/component/button.html#button -->
				<button style="font-size: 28rpx;padding: 14rpx" @click="getUserProfile" type="primary"
					class='btn'>微信授权登陆</button>
			</view>
			<!-- 	#endif -->
		</view>
		<view style="margin-top: -20rpx; display: none;">
			<vol-alert type="primary">
				<view>演示帐号：admin666 密码：123456</view>
				<view>本地帐号：admin &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;密码：123456</view>
			</vol-alert>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: false,
				codeSrc: "",
				userInfo: {
					userName: "",
					password: "",
					UUID: "",
					verificationCode: ""
				},
				icons: []
			}
		},
		methods: {
			getUserProfile() {
				uni.getUserProfile({
					desc: '登录',
					success: (res) => {
						console.log(res.provider);
						uni.login({
							provider: 'weixin',
							onlyAuthorize: true,
							success: (option) => {
								const url = `api/user/loginWeChat`;
								const params = {
									code: option.code,
									iv: res.iv,
									encryptedData: res.encryptedData
								}
								this.http.post(url, params, true).then(
									result => {
										console.log(result);
										if (!result.status) {
											this.$toast(result.message);
											return;
										}
										this.$toast("登录成功,正在跳转!");
										this.$store.commit("setUserInfo", result.data);
										uni.switchTab({
											url: "/pages/home/home"
										})
									})
							},
							fail: (err) => {
								console.log(err)
							}
						});
					}
				})
			},
			login() {
				if (this.base.isEmpty(this.userInfo.userName))
					return this.$toast("请输入用户名");
				if (this.base.isEmpty(this.userInfo.password))
					return this.$toast("请输入密码");
				// if (this.base.isEmpty(this.userInfo.verificationCode))
				// 	return this.$toast("请输入验证码");
				this.userInfo.userName = this.userInfo.userName.trim();
				this.userInfo.password = this.userInfo.password.trim();
				this.userInfo.verificationCode = this.userInfo.verificationCode.trim();
				this.loading = true;
				this.http
					.post("api/user/login", this.userInfo, "正在登录....")
					.then((result) => {
						if (!result.status) {
							this.loading = false;
							this.getVierificationCode();
							return this.$toast(result.message);
						}
						this.$toast("登录成功,正在跳转!");
						this.$store.commit("setUserInfo", result.data);
						uni.switchTab({
							url: "/pages/home/home"
						})
					});
			},
			getVierificationCode() {
				// this.http.get("api/User/getVierificationCode").then(x => {
				// 	this.codeSrc = "data:image/png;base64," + x.img;
				// 	this.userInfo.UUID = x.uuid;
				// });
			},
			wechatLogin() {} 
		},
		onLoad() {
			this.getVierificationCode();
			// #ifdef MP-WEIXIN
			this.icons = ['https://img.yzcdn.cn/vant/share-icon-wechat.png']
			return
			// #endif
			this.icons = ['https://img.yzcdn.cn/vant/share-icon-qq.png',
				'https://img.yzcdn.cn/vant/share-icon-wechat.png',
				'https://img.yzcdn.cn/vant/share-icon-weibo.png'
			]
		}
	}
</script>
<style lang="less" scoped>
	.login-container {
		height: auto;

		.login-title {
			padding-left: 20rpx;
			font-size: 38rpx;
			margin-bottom: 40rpx;
		}

		padding: 80rpx 60rpx 0 60rpx;

		.login-item {
			padding: 12rpx 0;
			border-bottom: 1px solid #eee;
			margin-bottom: 20rpx;

			/deep/ .u-icon {
				width: 80rpx;
			}
		}

		.login-code {
			border-bottom: none;
			display: flex;

			.img {
				width: 120rpx;
				height: 54rpx;
			}
		}

		.login-btn {
			margin: 50rpx 0 50rpx 0;
		}
	}

	.login-other {
		display: flex;

		.login-other-item {
			flex: 1;
			margin: 0 25rpx;
		}

		.img {
			width: 50px;
			height: 50px;
			margin: 0 30rpx;
		}

		.img:first-child {
			margin-left: 0;
		}
	}
</style>
