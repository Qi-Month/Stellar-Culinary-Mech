ItemEvents.tooltip((event) => {
	function addTooltip(item) {
		event.add(item, Component.translate(`tooltip.${item}`.replace(":", ".")))
	}
})