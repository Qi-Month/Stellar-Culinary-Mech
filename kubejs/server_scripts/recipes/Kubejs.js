ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	kubejs.shapeless("create:andesite_alloy", [
		"9x #forge:nuggets/andesite_alloy"
	])
	kubejs.shapeless("9x kubejs:andesite_alloy_nugget", [
		"#forge:ingots/andesite_alloy"
	])
})