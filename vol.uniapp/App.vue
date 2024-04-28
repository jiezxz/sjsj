<script>
	export default {


		onLaunch: function() {
			//#ifdef APP-PLUS  
			var server = "http://172.21.56.96:9099/api/dataCollection_AppVersion/GetPageData"; //检查更新地址  
			var req = { //升级检测数据  
				// "appid": plus.runtime.appid,  
				// "version": plus.runtime.version  
			};
			uni.request({
				url: server,
				data: req,
				method: "POST",
				success: (res) => {
					let platform = plus.os.name.toLocaleLowerCase();
					console.log(platform)
					if (res.data.rows[0].versionNo != plus.runtime.version) {
						if (platform == "ios") {


						} else {
							console.log("提示更新");
							uni.showModal({ //提醒用户更新  
								title: "更新提示",
								content: "发现新版本,本次更新内容："+res.data.rows[0].Remarks,
								success: (res) => {
									if (res.confirm) {
										//  plus.runtime.openURL("http://172.21.56.96:8099/other/apk/sjsj.apk");  

										uni.downloadFile({
											// 存放最新安装包的地址
											url: 'http://172.21.56.96:8099/other/apk/sjsj.apk',
											success: (downloadResult) => {
												uni.hideLoading();
												if (downloadResult.statusCode ===
													200) {
													uni.hideLoading();
													plus.runtime.install(
														downloadResult
														.tempFilePath, {
															force: false
														},
														function() {
															console.log(
																'install success...'
															);
															plus.runtime
																.restart();
														},
														function(e) {
															uni.hideLoading();
															console.error(
																'install fail...'
															);
														});
												}
											}
										});


									}
								}
							})
						}
					} else {
						console.log("最新版");
					}
				}
			})
			//#endif  
		}


	}
</script>


<style>
	/*每个页面公共css */
	.u-tabbar>.u-tabbar__content {
		padding-bottom: 10rpx;
		border-top: 1px solid #eee;
	}

	/* 	.u-popup .u-fade-enter-active{
		    z-index: 999999 !important;
	} */
	uni-toast {
		z-index: 99999999 !important;
	}

	uni-page-body,
	html,
	body {
		height: 100%;
	}

	uni-page-body>uni-view:first-child {
		height: 100%;
	}

	.sort-form-popup .u-fade-enter-to {
		z-index: 9999999 !important;
	}

	.u-button {
		border-color: unset !important;
		border-width: 0 !important;
	}

	/* 	.grid-u-model>.u-transition {
		z-index: 99999999 !important;
	} */
	.grid-u-model .u-transition {
		z-index: 99999999 !important;
	}

	// #ifdef MP-WEIXIN
	page {
		height: 100%;
	}

	page>view:first-child {
		height: 100%;
	}

	// #endif

	.vol-action-sheet-select-container {
		min-height: 200rpx;
		display: flex;
		flex-direction: column;
	}

	.vol-action-sheet-select-container .vol-action-sheet-select-title {
		padding: 24rpx;
		text-align: center;
		position: relative;
		border-bottom: 1px solid rgb(233 233 233);

	}

	.vol-action-sheet-select-container .vol-action-sheet-select-title .vol-action-sheet-select-confirm {
		position: absolute;
		right: 30rpx;
		color: #007AFF;
		font-weight: 500;
	}

	.vol-action-sheet-select-container .vol-action-sheet-select-content {
		flex: 1;
		height: 0;
		overflow: scroll;
	}

	.u-popup .u-transition {
		z-index: 99999999 !important;
	}
</style>