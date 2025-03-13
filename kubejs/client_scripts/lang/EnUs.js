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

	function addItemLanguage(key, value) {
		event.add(`item.${global.namespace}.${key}`, value)
	}

	function addBlockLanguage(key, value) {
		event.add(`block.${global.namespace}.${key}`, value)
	}

	function addFluidLanguage(key, value) {
		event.add(`fluid.${global.namespace}.${key}`, value)
		event.add(`block.${global.namespace}.${key}`, value)
		event.add(`item.${global.namespace}.${key}_bucket`, `${value} Bucket`)
	}

	function addMaterialFluidLanguage(key, value) {
		event.add(`fluid.${global.namespace}.molten_${key}`, `Molten ${value}`)
		event.add(`block.${global.namespace}.molten_${key}`, `Molten ${value}`)
		event.add(`item.${global.namespace}.molten_${key}_bucket`, `Molten ${value} Bucket`)
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