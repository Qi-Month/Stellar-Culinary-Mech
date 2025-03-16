StartupEvents.registry("item", (event) => {
	/**
	 * @param {String} name 
	 * @param {Number} color 
	 */
	function addSifterMesu(name, color) {
		event.create(`${global.namespace}:${name}_mesu`, "createsifter:mesh")
			.color("0", color)
			.modelJson({
				"parent": "createsifter:block/meshes/mesh",
				"textures": {
					"mesh": `${global.namespace}:item/material/color/mesu`
				}
			})
			.tag("createsifter:meshes")
		event.create(`${global.namespace}:advanced_${name}_mesu`, "createsifter:advanced_mesh")
			.color("0", color)
			.modelJson({
				"parent": "createsifter:block/meshes/mesh",
				"textures": {
					"mesh": `${global.namespace}:item/material/color/mesu`,
					"frame": "create:block/brass_casing"
				}
			})
			.tag("createsifter:meshes")
	}

	addSifterMesu("string", 0xFFFFFF)
	addSifterMesu("flint", 0x000000)
	addSifterMesu("iron", 0xC0C0C0)
	addSifterMesu("golden", 0xFFD700)
	addSifterMesu("diamond", 0x00FFFF)
})