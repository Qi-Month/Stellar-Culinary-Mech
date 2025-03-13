ServerEvents.recipes((event) => {
	let { tconstruct } = event.recipes

	tconstruct.melting(Fluid.of("kubejs:molten_andesite_alloy", 810), [
		"#forge:storage_blocks/andesite_alloy"
	]).time(150).temperature(500)
	tconstruct.melting(Fluid.of("kubejs:molten_andesite_alloy", 90), [
		"#forge:ingots/andesite_alloy"
	]).time(50).temperature(500)
	tconstruct.melting(Fluid.of("kubejs:molten_andesite_alloy", 10), [
		"#forge:nuggets/andesite_alloy"
	]).time(17).temperature(500)
})