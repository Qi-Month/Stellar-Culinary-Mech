ClientEvents.lang("zh_cn", (event) => {
	addNuggetItemLanguage("andesite_alloy", "安山合金")

	addSifterMesuLanguage("string", "线")
	addSifterMesuLanguage("flint", "燧石")
	addSifterMesuLanguage("iron", "铁")
	addSifterMesuLanguage("golden", "金")
	addSifterMesuLanguage("diamond", "钻石")

	addMaterialFluidLanguage("andesite_alloy", "安山合金")
	addMaterialFluidLanguage("sky_stone", "陨石")
	addMaterialFluidLanguage("unstable_sky_stone", "不稳定陨石")

	addMachineLanguage("thermal_generator", "火力发电机")
	addMachineLanguage("fuel_generator", "燃油发电机")

	addJEIInfoLanguage("pebbles", "也可以空手潜行右键泥土草方块等方块获得")

	addAloneLanguage(`itemGroup.${global.namespace}.all`, "星际炊事班")
	addAloneLanguage(`message.${global.namespace}.debug.getHardness`, "这个方块的硬度是: %s")
	addAloneLanguage(`text.${global.namespace}.dev`, "开发中画面, 实际内容请以正式版为准")
	addAloneLanguage(`text.${global.namespace}.player`, "测试中版本, 不代表最终品质")

	function addItemLanguage(key, value) {
		event.add(`item.${global.namespace}.${key}`, value)
	}

	function addNuggetItemLanguage(key, value) {
		event.add(`item.${global.namespace}.${key}_nugget`, `${value}粒`)
	}

	function addSifterMesuLanguage(key, value) {
		event.add(`item.${global.namespace}.${key}_mesu`, `${value}筛网`)
		event.add(`item.${global.namespace}.advanced_${key}_mesu`, `高级${value}筛网`)
	}

	function addBlockLanguage(key, value) {
		event.add(`block.${global.namespace}.${key}`, value)
	}

	function addFluidLanguage(key, value) {
		event.add(`fluid.${global.namespace}.${key}`, value)
		event.add(`block.${global.namespace}.${key}`, value)
		event.add(`item.${global.namespace}.${key}_bucket`, `${value}桶`)
	}

	function addMaterialFluidLanguage(key, value) {
		event.add(`fluid.${global.namespace}.molten_${key}`, `熔融${value}`)
		event.add(`block.${global.namespace}.molten_${key}`, `熔融${value}`)
		event.add(`item.${global.namespace}.molten_${key}_bucket`, `熔融${value}桶`)
	}

	function addMachineLanguage(key, value) {
		event.add(`block.${global.namespace}.${key}`, value)
		event.add(`machine.${global.namespace}.${key}`, value)
	}

	function addTooltipLanguage(key, value) {
		event.add(`tooltip.${key}`.replace(":", "."), `§b${value}`)
	}

	function addJEIInfoLanguage(key, value) {
		event.add(`jei.info.${key}`.replace(":", "."), `§b${value}`)
	}

	function addAloneLanguage(key, value) {
		event.add(key, value)
	}
})