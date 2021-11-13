<template>
	<div id="overlay" v-if="showOverlay">
		<div
			class="absolute flex text-gray-200 justify-around items-center h-full w-full"
		>
			<div>
				<div class="text-sm mb-1 text-mcyan">{{ overlayText }}</div>
				<div class="text-center text-mcyan">
					<i class="fas fa-spin fa-circle-notch fa-2x"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
	name: "OverlayComponent",
	props: {
		showOverlay: {
			type: Boolean,
		},
		overlayText: {
			type: String,
		},
	},
};
</script>

<style scoped>
#overlay {
	position: fixed; /* Sit on top of the page content */

	width: 100%; /* Full width (cover the whole page) */
	height: 100%; /* Full height (cover the whole page) */
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
	z-index: 100; /* Specify a stack order in case you're using a different order for other elements */
	cursor: pointer; /* Add a pointer on hover */
}
</style>
