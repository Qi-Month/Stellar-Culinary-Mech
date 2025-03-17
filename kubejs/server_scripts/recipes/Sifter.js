ServerEvents.recipes((event) => {
	let { createsifter } = event.recipes

	let recipes = [
		// 砂砾
		{
			input: "#forge:gravel",
			mesh: "string",
			processingTime: 100,
			normalOutputs: [
				{ item: "minecraft:flint", chance: 0.05 },
				{ item: "minecraft:coal", chance: 0.08 },
				{ item: "minecraft:lapis_lazuli", chance: 0.02 }
			],
			waterloggedOutputs: [
				{ item: "minecraft:flint", chance: 0.12 },
				{ item: "minecraft:coal", chance: 0.08 },
				{ item: "minecraft:lapis_lazuli", chance: 0.01 }
			]
		},
		{
			input: "#forge:gravel",
			mesh: "flint",
			processingTime: 100,
			normalOutputs: [
				{ item: "minecraft:flint", chance: 0.10 },
				{ item: "create:crushed_raw_iron", chance: 0.08 },
				{ item: "minecraft:coal", chance: 0.12 },
				{ item: "minecraft:lapis_lazuli", chance: 0.06 }
			],
			waterloggedOutputs: [
				{ item: "minecraft:flint", chance: 0.06 },
				{ item: "create:crushed_raw_iron", chance: 0.14 },
				{ item: "minecraft:coal", chance: 0.12 },
				{ item: "minecraft:lapis_lazuli", chance: 0.04 }
			]
		},
		{
			input: "#forge:gravel",
			mesh: "iron",
			processingTime: 100,
			normalOutputs: [
				{ item: "create:crushed_raw_iron", chance: 0.15 },
				{ item: "minecraft:coal", chance: 0.16 },
				{ item: "minecraft:lapis_lazuli", chance: 0.10 },
				{ item: "create:crushed_raw_zinc", chance: 0.16 }
			],
			waterloggedOutputs: [
				{ item: "create:crushed_raw_iron", chance: 0.24 },
				{ item: "minecraft:coal", chance: 0.16 },
				{ item: "minecraft:lapis_lazuli", chance: 0.06 },
				{ item: "create:crushed_raw_zinc", chance: 0.24 }
			]
		},
		{
			input: "#forge:gravel",
			mesh: "golden",
			processingTime: 100,
			normalOutputs: [
				{ item: "create:crushed_raw_iron", chance: 0.16 },
				{ item: "minecraft:coal", chance: 0.25 },
				{ item: "minecraft:lapis_lazuli", chance: 0.15 },
				{ item: "create:crushed_raw_zinc", chance: 0.16 },
				{ item: "createoreexcavation:raw_diamond", chance: 0.01 },
				{ item: "createoreexcavation:raw_emerald", chance: 0.01 }
			],
			waterloggedOutputs: [
				{ item: "create:crushed_raw_iron", chance: 0.24 },
				{ item: "minecraft:coal", chance: 0.35 },
				{ item: "minecraft:lapis_lazuli", chance: 0.20 },
				{ item: "create:crushed_raw_zinc", chance: 0.24 },
				{ item: "createoreexcavation:raw_diamond", chance: 0.03 },
				{ item: "createoreexcavation:raw_emerald", chance: 0.03 }
			]
		},
		{
			input: "#forge:gravel",
			mesh: "diamond",
			processingTime: 100,
			normalOutputs: [
				{ item: "create:crushed_raw_iron", chance: 0.24 },
				{ item: "minecraft:coal", chance: 0.35 },
				{ item: "minecraft:lapis_lazuli", chance: 0.20 },
				{ item: "create:crushed_raw_zinc", chance: 0.24 },
				{ item: "createoreexcavation:raw_diamond", chance: 0.03 },
				{ item: "createoreexcavation:raw_emerald", chance: 0.03 },
				{ item: "minecraft:glowstone_dust", chance: 0.20 }
			],
			waterloggedOutputs: [
				{ item: "create:crushed_raw_iron", chance: 0.30 },
				{ item: "minecraft:coal", chance: 0.40 },
				{ item: "minecraft:lapis_lazuli", chance: 0.25 },
				{ item: "create:crushed_raw_zinc", chance: 0.30 },
				{ item: "createoreexcavation:raw_diamond", chance: 0.05 },
				{ item: "createoreexcavation:raw_emerald", chance: 0.05 }
			]
		},
		// 泥土
		{
			input: "#minecraft:dirt",
			mesh: "string",
			processingTime: 100,
			normalOutputs: [
				{ item: "minecraft:oak_sapling", chance: 0.15 },
				{ item: "minecraft:spruce_sapling", chance: 0.15 },
				{ item: "minecraft:birch_sapling", chance: 0.15 },
				{ item: "minecraft:jungle_sapling", chance: 0.15 },
				{ item: "minecraft:acacia_sapling", chance: 0.15 },
				{ item: "minecraft:cherry_sapling", chance: 0.15 },
				{ item: "minecraft:dark_oak_sapling", chance: 0.15 },
				// 种子
				{ item: "minecraft:wheat_seeds", chance: 0.15 },
				{ item: "minecraft:pumpkin_seeds", chance: 0.15 },
				{ item: "minecraft:melon_seeds", chance: 0.15 },
				{ item: "farmersdelight:cabbage_seeds", chance: 0.15 },
				{ item: "farmersdelight:tomato_seeds", chance: 0.15 },
				{ item: "minecraft:beetroot_seeds", chance: 0.15 },
				{ item: "minecraft:carrot", chance: 0.15 },
				{ item: "minecraft:potato", chance: 0.15 },
				{ item: "immersiveengineering:seed", chance: 0.15 },
				{ item: "farmersdelight:onion", chance: 0.15 },
				{ item: "farmersdelight:rice", chance: 0.15 },
				{ item: "youkaishomecoming:mandrake_root", chance: 0.15 },
				{ item: "youkaishomecoming:udumbara_seeds", chance: 0.15 },
				{ item: "youkaishomecoming:tea_seeds", chance: 0.15 },
				{ item: "youkaishomecoming:green_coffee_bean", chance: 0.15 },
				{ item: "youkaishomecoming:soybean", chance: 0.15 },
				{ item: "youkaishomecoming:redbean", chance: 0.15 },
			],
			waterloggedOutputs: [
				{ item: "minecraft:oak_sapling", chance: 0.10 },
				{ item: "minecraft:spruce_sapling", chance: 0.10 },
				{ item: "minecraft:birch_sapling", chance: 0.10 },
				{ item: "minecraft:jungle_sapling", chance: 0.10 },
				{ item: "minecraft:acacia_sapling", chance: 0.10 },
				{ item: "minecraft:cherry_sapling", chance: 0.10 },
				{ item: "minecraft:dark_oak_sapling", chance: 0.10 },
				// 种子
				{ item: "minecraft:wheat_seeds", chance: 0.20 },
				{ item: "minecraft:pumpkin_seeds", chance: 0.20 },
				{ item: "minecraft:melon_seeds", chance: 0.20 },
				{ item: "farmersdelight:cabbage_seeds", chance: 0.20 },
				{ item: "farmersdelight:tomato_seeds", chance: 0.20 },
				{ item: "minecraft:beetroot_seeds", chance: 0.20 },
				{ item: "minecraft:carrot", chance: 0.20 },
				{ item: "minecraft:potato", chance: 0.20 },
				{ item: "immersiveengineering:seed", chance: 0.20 },
				{ item: "farmersdelight:onion", chance: 0.20 },
				{ item: "farmersdelight:rice", chance: 0.20 },
				{ item: "youkaishomecoming:mandrake_root", chance: 0.20 },
				{ item: "youkaishomecoming:udumbara_seeds", chance: 0.20 },
				{ item: "youkaishomecoming:tea_seeds", chance: 0.20 },
				{ item: "youkaishomecoming:green_coffee_bean", chance: 0.20 },
				{ item: "youkaishomecoming:soybean", chance: 0.20 },
				{ item: "youkaishomecoming:redbean", chance: 0.20 },
			]
		},
		// 沙子
		{
			input: "#forge:sand",
			mesh: "string",
			processingTime: 100,
			normalOutputs: [
				{ item: "minecraft:cocoa_beans", chance: 0.15 },
				{ item: "minecraft:bone_meal", chance: 0.20 },
				{ item: "minecraft:cactus", chance: 0.15 }
			],
			waterloggedOutputs: [
				{ item: "minecraft:cocoa_beans", chance: 0.10 },
				{ item: "minecraft:bone_meal", chance: 0.20 },
				{ item: "minecraft:cactus", chance: 0.10 },
				{ item: "minecraft:kelp", chance: 0.15 },
				{ item: "minecraft:seagrass", chance: 0.20 },
				{ item: "minecraft:sea_pickle", chance: 0.20 }
			]
		},
		{
			input: "#forge:sand",
			mesh: "flint",
			processingTime: 100,
			normalOutputs: [
				{ item: "minecraft:cocoa_beans", chance: 0.20 },
				{ item: "minecraft:bone_meal", chance: 0.30 },
				{ item: "minecraft:cactus", chance: 0.20 },
				{ item: "create:crushed_raw_copper", chance: 0.05 },
				{ item: "minecraft:gunpowder", chance: 0.10 },
			],
			waterloggedOutputs: [
				{ item: "minecraft:cocoa_beans", chance: 0.15 },
				{ item: "minecraft:bone_meal", chance: 0.25 },
				{ item: "minecraft:cactus", chance: 0.15 },
				{ item: "minecraft:kelp", chance: 0.20 },
				{ item: "minecraft:seagrass", chance: 0.30 },
				{ item: "minecraft:sea_pickle", chance: 0.30 },
				{ item: "create:crushed_raw_copper", chance: 0.10 },
				{ item: "minecraft:gunpowder", chance: 0.10 },
			]
		},
		{
			input: "#forge:sand",
			mesh: "iron",
			processingTime: 100,
			normalOutputs: [
				{ item: "minecraft:bone_meal", chance: 0.30 },
				{ item: "create:crushed_raw_copper", chance: 0.15 },
				{ item: "create:crushed_raw_gold", chance: 0.10 },
				{ item: "minecraft:gunpowder", chance: 0.15 },
				{ item: "minecraft:redstone", chance: 0.15 },
			],
			waterloggedOutputs: [
				{ item: "minecraft:bone_meal", chance: 0.25 },
				{ item: "create:crushed_raw_copper", chance: 0.20 },
				{ item: "create:crushed_raw_gold", chance: 0.15 },
				{ item: "minecraft:gunpowder", chance: 0.10 },
				{ item: "minecraft:clay_ball", chance: 0.20 },
				{ item: "minecraft:redstone", chance: 0.20 }
			]
		},
		{
			input: "#forge:sand",
			mesh: "golden",
			processingTime: 100,
			normalOutputs: [
				{ item: "minecraft:bone_meal", chance: 0.25 },
				{ item: "create:crushed_raw_copper", chance: 0.25 },
				{ item: "create:crushed_raw_gold", chance: 0.18 },
				{ item: "minecraft:gunpowder", chance: 0.15 },
				{ item: "minecraft:redstone", chance: 0.15 },
				{ item: "minecraft:clay_ball", chance: 0.20 },
				{ item: "createoreexcavation:raw_diamond", chance: 0.01 }
			],
			waterloggedOutputs: [
				{ item: "minecraft:bone_meal", chance: 0.25 },
				{ item: "create:crushed_raw_copper", chance: 0.20 },
				{ item: "create:crushed_raw_gold", chance: 0.25 },
				{ item: "minecraft:gunpowder", chance: 0.10 },
				{ item: "minecraft:clay_ball", chance: 0.25 },
				{ item: "minecraft:redstone", chance: 0.15 },
				{ item: "createoreexcavation:raw_diamond", chance: 0.01 }
			]
		},
		{
			input: "#forge:sand",
			mesh: "diamond",
			processingTime: 100,
			normalOutputs: [
				{ item: "create:crushed_raw_copper", chance: 0.25 },
				{ item: "create:crushed_raw_gold", chance: 0.25 },
				{ item: "minecraft:redstone", chance: 0.25 },
				{ item: "createoreexcavation:raw_diamond", chance: 0.03 },
				{ item: "minecraft:blaze_powder", chance: 0.30 },
				{ item: "minecraft:glowstone_dust", chance: 0.30 },
			],
			waterloggedOutputs: [
				{ item: "create:crushed_raw_copper", chance: 0.30 },
				{ item: "create:crushed_raw_gold", chance: 0.30 },
				{ item: "minecraft:redstone", chance: 0.35 },
				{ item: "createoreexcavation:raw_diamond", chance: 0.05 }
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

		const multiplier = isAdvanced ? 2 : 1;
		[false, true].forEach((waterlogged) => {
			const outputs = (waterlogged ? base.waterloggedOutputs : base.normalOutputs)
				.map((output) => Item.of(output.item)
					.withChance(output.chance * multiplier)
					.withCount(output.count || 1)
				)

			createsifter.sifting(
				outputs,
				[base.input, meshId],
				processingTime,
				waterlogged
			)
		})
	}
})