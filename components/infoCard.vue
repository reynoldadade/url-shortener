<template>
	<div class=" shadow p-4 bg-white relative z-10 rounded-lg h-64 ">
		<div
			class="absolute rounded-full border bg-mdarkblue -top-5 left-5 w-10 h-10 p-1 flex justify-center items-center text-mcyan"
		>
			<i :class="info.icon" alt="logo"></i>
		</div>
		<div class="text-center md:text-left px-8 py-2">
			{{ info.title }}
		</div>
		<div class="text-sm px-8 py-4 text-mgrayV">
			{{ info.message }}
		</div>
	</div>
</template>

<script>
export default {
	props: {
		info: Object,
	},
};
</script>

<style></style>
