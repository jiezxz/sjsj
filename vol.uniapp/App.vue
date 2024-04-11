<script>
	export default {
		
		
		onLaunch: function() {
		    console.log('App Show')
		    plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
		    this.version = widgetInfo.version
		    uni.request({
		        url: 'http://172.21.56.96:9099/api/dataCollection_AppVersion/GetPageData',
		        success: (res) => {
		            function compareVersion(version1, version2) {
		                const newVersion1 = `${version1}`.split('.').length < 3 ? `${version1}`.concat('.0') : `${version1}`;
		                const newVersion2 = `${version2}`.split('.').length < 3 ? `${version2}`.concat('.0') : `${version2}`;
		                  //计算版本号大小,转化大小
		                 function toNum(a){
		                    const c = a.toString().split('.');
		                    const num_place = ["", "0", "00", "000", "0000"],
		                        r = num_place.reverse();
		                    for (let i = 0; i < c.length; i++){
		                        const len=c[i].length;
		                        c[i]=r[len]+c[i];
		                    }
		                        return c.join('');
		                    }
		                    // 检测版本号是否需要更新
		                    function checkPlugin(a, b) {
		                        const numA = toNum(a);
		                        const numB = toNum(b);
		                        return numA > numB ? 1 : numA < numB ? -1 : 0;
		                    }
		                        return checkPlugin(newVersion1 ,newVersion2);
		                    }
		                    for (let i of res.data.content) {
		                        if (i.description === 'app版本') {
		                            // 1代表app新包版本号大于本地版本号
		                            if (compareVersion(i.dictDetails[0].value, this.version) === 1) {
		                                uni.showModal({
		                                    title: '提示',
		                                    content: '发现新的应用安装包，点击确定立即更新',
		                                    success: function (res) {
		                                       if (res.confirm) {
		                                            console.log('用户点击确定');
		                                            uni.showLoading({
		                                                title: '更新中……'
		                                            })
		                                            uni.downloadFile({
		                                                // 存放最新安装包的地址
		                                                url: 'http://172.21.56.96:8099/other/apk/sjsj.apk',
		                                                success: (downloadResult) => {  
		                                                    uni.hideLoading();
		                                                    if (downloadResult.statusCode === 200) { 
		                                                        uni.hideLoading();
		                                                        plus.runtime.install(downloadResult.tempFilePath,{ 
		                                                            force: false
		                                                        }, function() {
		                                                            console.log('install success...');  
		                                                            plus.runtime.restart();  
		                                                        }, function(e) {  
		                                                            uni.hideLoading();
		                                                            console.error('install fail...');  
		                                                        });  
		                                                    }
		                                                }  
		                                            }); 
		                                       } else if (res.cancel) {
		                                            console.log('用户点击取消');
		                                       }
		                                    }
		                                });
		                            } else {
		                        }
		                    }
		                 }
		            }
		        });
		    });
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
	.u-popup .u-transition{
		z-index: 99999999 !important;
	}

</style>
