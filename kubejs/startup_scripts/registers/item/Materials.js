StartupEvents.registry("item", (event) => {

	addBasicMaterialNuggets("andesite_alloy")
	function addBasicMaterialNuggets(name) {
		event.create(`${global.namespace}:${name}_nugget`)
			.texture(`${global.namespace}:item/material/metal/${name}/nugget`)
			.tag("forge:nuggets")
			.tag(`forge:nuggets/${name}`)
	}
})