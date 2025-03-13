StartupEvents.registry("fluid", (event) => {
	let path = "block/fluid/"
	let otherFluidRegisters = `${global.namespace}:${path}`

	addColorMaterialFluid("andesite_alloy", 0xA7AD9F)

	addAloneMaterialFluid("sky_stone")
	addAloneMaterialFluid("unstable_sky_stone")

	function addColorMaterialFluid(name, color) {
		event.create(`${global.namespace}:molten_${name}`)
			.thinTexture(color)
			.bucketColor(color)
			.flowingTexture(otherFluidRegisters + "flowing")
			.stillTexture(otherFluidRegisters + "still")
			.tag("forge:molten_materials")
			.tag(`forge:molten_${name}`)
			.tag(`tconstruct:molten_${name}`)

		// 生成Json模型文件
		JsonIO.write(`kubejs/assets/${global.namespace}/models/item/molten_${name}_bucket.json`, {
			"parent": "forge:item/bucket_drip",
			"loader": "forge:fluid_container",
			"fluid": `${global.namespace}:molten_${name}`
		})

		console.log(`molten_${name}已注册!`)
	}

	function addAloneMaterialFluid(name) {
		event.create(`${global.namespace}:molten_${name}`)
			.flowingTexture(`${otherFluidRegisters + name}_flowing`)
			.stillTexture(`${otherFluidRegisters + name}_still`)
			.tag("forge:molten_materials")
			.tag(`forge:molten_${name}`)
			.tag(`tconstruct:molten_${name}`)

		// 生成Json模型文件
		JsonIO.write(`kubejs/assets/${global.namespace}/models/item/molten_${name}_bucket.json`, {
			"parent": "forge:item/bucket_drip",
			"loader": "forge:fluid_container",
			"fluid": `${global.namespace}:molten_${name}`
		})

		console.log(`molten_${name}已注册!`)
	}
})