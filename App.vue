<script>
	export default {
		onLaunch: function() {
			const token = uni.getStorageSync('token') || '';
			console.log('App onLaunch token ---->', token);
			if (token) {
				uni.switchTab({
					url: '/pages/tabBar/home/index'
				})
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */

	html,
	body {
		height: 100%;
	}

	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>
