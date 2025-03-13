JEIEvents.information((event) => {
	function addJEIInfo(item, key) {
		event.addItem(item, Component.translate(`jei.info.${global.namespace}.${key}`));
	}

	Ingredient.of("#exdeorum:pebbles")
		.getItemIds()
		.forEach((pebbles) => {
			addJEIInfo(pebbles, "pebbles")
		})
})