import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // vue的插件机制

const token = uni.getStorageSync('token');

// 为了不和页面或组件的data中的造成混淆，state中的变量前面建议加上$符号
const state = {
	// token
	$token: token ? token : '',
	// 用户信息
	$userInfo: {},
}

const mutations = {}

const actions = {}

const getters = {}

// Vuex.Store 构造器选项
const store = new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})

export default store
