<template>
	<view class="page-navbar">
		<u-navbar :safeAreaInsetTop="true" :background="background" :placeholder="true">
			<view class="u-nav-slot" slot="left">
				<u-icon name="arrow-left" size="19"></u-icon>
				<u-line direction="column" :hairline="false" length="16" margin="0 8px"></u-line>
				<u-icon name="home" size="20"></u-icon>
			</view>
		</u-navbar>
	</view>
</template>

<script>
	export default {
		props: {
			background: {
				type: Object,
				default: () => {
					return {
						background: '#fff'
					}
				}
			}
		},
		data() {
			return {

			};
		},
		methods: {
			handleGoBack() {
				uni.navigateBack()
			},
			handleGoHome() {
				uni.switchTab({
					url: "/pages/tabBars/home/index"
				})
			}
		}
	}
</script>

<style lang="scss">
	.page-navbar {
		.u-nav-slot {
			@include flex;
			align-items: center;
			justify-content: space-between;
			border-width: 0.5rpx;
			border-radius: 100rpx;
			border-color: $u-border-color;
			padding: 3rpx 7rpx;
			opacity: 0.8;
		}
	}
</style>
