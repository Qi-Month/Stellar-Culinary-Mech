ClientEvents.lang("en_us", (event) => {
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
})