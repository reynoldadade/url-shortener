<template>
	<div class="w-full  flex justify-between p-8 relative">
		<div class="flex w-1/2 justify-center px-4 md:px-8">
			<img src="@/assets/images/logo.svg" alt="Shortly" />
			<div class="px-4 text-mgrayV hidden md:block">
				<a
					href="http://"
					v-for="link in links"
					:key="link"
					class="p-2 hover:text-gray-700"
					>{{ link }}</a
				>
			</div>
		</div>
		<div class="px-8 md:block hidden">
			<button class="rounded-full p-2  text-mgrayV hover:text-gray-700">
				Login
			</button>
			<button
				class="rounded-full py-1 px-4 text-white bg-mcyan hover:opacity-75"
			>
				Sign up
			</button>
		</div>
		<div class="md:hidden text-mgrayV">
			<button @click="showMenu">
				<span><i class="fas fa-bars"></i></span>
			</button>
		</div>
		<transition name="fade">
			<div
				class="w-full  absolute top-full z-20  text-center left-0 block md:idden"
				v-if="menu"
			>
				<div class="bg-mviolet m-4 rounded-lg p-4">
					<div
						class="p-4 text-mgrayV w-full "
						v-for="link in links"
						:key="link"
					>
						<a href="http://" class="p-2 hover:text-gray-700">{{
							link
						}}</a>
					</div>
					<hr class="m-4 text-mgrayV" />
					<div class="m-4">
						<button
							class="rounded-full p-2  text-mgrayV hover:text-gray-700 w-full"
						>
							Login
						</button>
						<button
							class="rounded-full py-1 px-4 text-white bg-mcyan hover:opacity-75 w-3/4"
						>
							Sign up
						</button>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			links: ["Features", "Pricing", "Resources"],
			menu: false,
		};
	},
	methods: {
		showMenu() {
			this.menu = !this.menu;
		},
	},
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
