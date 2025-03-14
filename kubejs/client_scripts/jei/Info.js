JEIEvents.information((event) => {
	function addJEIInfo(name) {
		event.addItem(name, Component.translate(`jei.info.${name}`.replace(":", ".")))
	}

	Ingredient.of("#exdeorum:pebbles")
		.getItemIds()
		.forEach((pebbles) => {
			addJEIInfo("pebbles")
		})
})