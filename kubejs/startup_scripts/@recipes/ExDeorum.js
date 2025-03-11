new Schema("exdeorum:barrel_compost")
	.simpleKey("volume", "intNumber", 1)
	.simpleKey("ingredient", "inputItem")

new Schema("exdeorum:barrel_fluid_mixing")
	.simpleKey("result", "outputItem")
	.simpleKey("additive_fluid", "inputFluid")
	.simpleKey("base_fluid", "inputFluid")
	.simpleKey("ingredient", "inputItem")
	.simpleKey("consumes_additive", "bool", true || false)

new Schema("exdeorum:barrel_mixing")
	.simpleKey("result", "outputItem")
	.simpleKey("ingredient", "inputFluid")
	.simpleKey("fluid", "inputFluid")
	.simpleKey("fluid_amount", "intNumber", 1000)

new Schema("exdeorum:compressed_hammer")
	.simpleKey("result", "outputItem")
	.simpleKey("ingredient", "inputItem")
	.simpleKey("result_amount", "intNumber", 1)

new Schema("exdeorum:crook")
	.simpleKey("result", "outputItem")
	.simpleKey("block_predicate", "inputBlock")
	.simpleKey("chance", "intNumber", 1)

new Schema("exdeorum:crucible_heat_source")
	.simpleKey("block_predicate", "inputBlock")
	.simpleKey("heat_value", "intNumber", 1)

new Schema("exdeorum:hammer")
	.simpleKey("result", "outputItem")
	.simpleKey("ingredient", "inputItem")
	.simpleKey("result_amount", "intNumber", 1)

new Schema("exdeorum:lava_crucible")
	.simpleKey("fluid", "outputFluid")
	.simpleKey("ingredient", "inputItem")

new Schema("exdeorum:water_crucible")
	.simpleKey("fluid", "outputFluid")
	.simpleKey("ingredient", "inputItem")