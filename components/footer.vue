<template>
	<div
		class="w-full px-8 py-20 flex md:flex-row flex-col justify-between bg-mdarkblue "
	>
		<div class="p-4 md:w-1/3 w-full text-center flex justify-center">
			<div>
				<img
					src="@/assets/images/logo-white.svg"
					alt=""
					class="w-auto"
				/>
			</div>
		</div>
		<div
			class="flex text-sm text-white flex-1 justify-between  md:flex-row flex-col py-2 text-center md:text-left"
		>
			<div v-for="link in links" :key="link.title">
				<header class="font-bold">{{ link.title }}</header>
				<div class="text-mgrayV my-2 text-xs">
					<div v-for="url in link.links" :key="url" class="py-2">
						<a href="#">{{ url }}</a>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-1 p-4 justify-center">
			<img
				src="@/assets/images/icon-facebook.svg"
				alt=""
				class="h-8 w-8 m-2"
			/>
			<img
				src="@/assets/images/icon-instagram.svg"
				alt=""
				class="h-8 w-8 m-2"
			/>
			<img
				src="@/assets/images/icon-pinterest.svg"
				alt=""
				class="h-8 w-8 m-2"
			/>
			<img
				src="@/assets/images/icon-twitter.svg"
				alt=""
				class="h-8 w-8 m-2"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: "FooterComponent",
	data() {
		return {
			links: [
				{
					title: "Features",
					links: ["Link shortening", "Branded links", "Analysis"],
				},
				{
					title: "Resources",
					links: ["Blog", "Developers", "Support"],
				},
				{
					title: "Company",
					links: ["About", "Our Team", "Careers", "Contact"],
				},
			],
		};
	},
};
</script>

<style></style>
