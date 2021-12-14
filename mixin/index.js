const getCurrentPageRoute = function() {
	let pages = getCurrentPages(); // 获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面
	let page = pages[pages.length - 1];
	let currentPageRoute = page && page.route; // 当前的页面路由（小程序可以，H5也可以）
	return currentPageRoute
}

import {
	mapState
} from 'vuex'

module.exports = {
	onShow() {},
	// 页面拦截 判断用户信息
	onShow() {
		console.log('has user info', this.userInfo);
		const currentPageRoute = getCurrentPageRoute()
		const wList = ['pages/login/login/index']
		if (!wList.includes(currentPageRoute)) {
			if (Object.keys(this.$userInfo).length === 0) this.getUserInfo()
		}
	},
	computed: {
		...mapState(['$userInfo'])
	},
	// 全局方法
	methods: {
		// 获取当前 route
		getCurrentPageRoute,
		// 获取用户信息
		getUserInfo() {
			return new Promise((resolve) => {
				uni.$u.api.getUserInfo().then(res => {
					const data = res.data || {}
					resolve(data)
				})
			}).catch(() => {})
		}
	}
}
