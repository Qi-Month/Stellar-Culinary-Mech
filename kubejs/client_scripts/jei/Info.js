JEIEvents.information((event) => {
	function addJEIInfo(item) {
		event.addItem(item, Component.translate(`jei.info.${name}`.replace(":", ".")))
	}

	Ingredient.of("#exdeorum:pebbles")
		.getItemIds()
		.forEach((pebbles) => {
			addJEIInfo(pebbles)
		})
})