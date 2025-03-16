ServerEvents.recipes(event => {
	let { createsifter } = event.recipes

	let recipes = [
		// 添加配方
		{
			input: "minecraft:gravel",
			mesh: "string",
			processingTime: 100,
			normalOutputs: [
				{ item: "minecraft:flint", chance: 0.05 },
				{ item: "minecraft:coal", chance: 0.08 },
				{ item: "minecraft:lapis_lazuli", chance: 0.02 }
			],
			waterloggedOutputs: [
				{ item: "minecraft:flint", chance: 0.06 },
				{ item: "minecraft:lapis_lazuli", chance: 0.01 }
			]
		},
		{
			input: "minecraft:gravel",
			mesh: "flint",
			processingTime: 100,
			normalOutputs: [
				{ item: "minecraft:flint", chance: 0.05 },
				{ item: "minecraft:raw_iron", chance: 0.08 },
				{ item: "minecraft:coal", chance: 0.08 },
				{ item: "minecraft:lapis_lazuli", chance: 0.02 }
			],
			waterloggedOutputs: [
				{ item: "minecraft:flint", chance: 0.06 },
				{ item: "minecraft:raw_iron", chance: 0.95 },
				{ item: "minecraft:lapis_lazuli", chance: 0.01 }
			]
		}
	]

	recipes.forEach((recipe) => {
		registerVariant(recipe, false)
		registerVariant(recipe, true)
	})

	function registerVariant(base, isAdvanced) {
		const meshBase = `kubejs:${base.mesh}`
		const meshId = isAdvanced
			? `${meshBase}_advanced_mesu`
			: `${meshBase}_mesu`

		const processingTime = isAdvanced
			? Math.floor(base.processingTime / 2)
			: base.processingTime

		const multiplier = isAdvanced ? 2 : 1

			;[false, true].forEach((waterlogged) => {
				const outputs = (waterlogged
					? base.waterloggedOutputs
					: base.normalOutputs
				).map((output) => Item.of(output.item)
					.withChance(output.chance * multiplier)
					.withCount(output.count || 1)
				)

				createsifter.sifting(
					outputs,
					base.input,
					meshId,
					processingTime,
					waterlogged
				)
			})
	}
})