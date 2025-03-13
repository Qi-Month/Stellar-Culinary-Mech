ClientEvents.lang("zh_cn", (event) => {
	function addAloneLanguage(key, value) {
		event.add(key, value)
	}
	function addItemLanguage(key, value) {
		event.add(`item.${global.namespace}.${key}`, value)
	}

	function addBlockLanguage(key, value) {
		event.add(`block.${global.namespace}.${key}`, value)
	}

	function addFluidLanguage(key, value) {
		event.add(`fluid.${global.namespace}.${key}`, value)
		event.add(`block.${global.namespace}.${key}`, value)
		event.add(`item.${global.namespace}.${key}_bucket`, value)
	}

	function addMachineLanguage(key, value) {
		event.add(`block.${global.namespace}.${key}`, value)
		event.add(`machine.${global.namespace}.${key}`, value)
	}

	function addTooltipLanguage(key, value) {
		event.add(`tooltip.${global.namespace}.${key}`, value)
	}

	function addJEIInfoLanguage(key, value) {
		event.add(`jei.info.${global.namespace}.${key}`, value)
	}

	addAloneLanguage(`itemGroup.${global.namespace}.all`, "星际炊事班")
	addAloneLanguage(`message.${global.namespace}.debug.getHardness`, "这个方块的硬度是%s")

	addMachineLanguage("thermal_generator", "火力发电机")
	addMachineLanguage("fuel_generator", "燃油发电机")

	addJEIInfoLanguage("pebbles", "也可以右键泥土等方块获得")
})