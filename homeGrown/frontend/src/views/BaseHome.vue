<template>

<div>

	<div class="main" id='app'>
		<div class="row-fluid apt-contents">
			<div>
				<v-header id="BaseHome"></v-header>	
				<!-- 麵包屑導覽 end -->			
				<side-bar></side-bar>
				<!-- <gt-content></gt-content> -->
				<router-view></router-view>
			</div>
		</div>
	</div>
</div>
	
	<!-- <div> -->
		<!-- 麵包屑導覽 end -->
		<!-- <gt-sidebar></gt-sidebar>

		<router-view></router-view>
	</div> -->
</template>
<script >
	import sideBar from '@/components/sideBar.vue'
	import vHeader from '@/components/header.vue'
	
	export default {
		name: '',
		mixins: [],
		extends: {},
		components: {vHeader ,sideBar},
		props: [],
		data() {
			return {
			};
		},
		computed: {},
		watch: {},
		created() {},
		mounted() {},
		updated() {},
		beforeDestroy() {},
		methods: {},
	};
	
</script>
