ServerEvents.recipes((event) => {
	let { create } = event.recipes

	create.filling("create:blaze_cake", [
		"create:blaze_cake_base",
		Fluid.of("tconstruct:blazing_blood", 1000)
	]).id("create:filling/blaze_cake")
})