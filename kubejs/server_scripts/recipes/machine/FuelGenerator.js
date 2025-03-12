ServerEvents.recipes((event) => {
	addRecipe("ad_astra:fuel", 20)
	addRecipe("ad_astra:oil", 20)
	addRecipe("immersiveengineering:biodiesel", 20)
	addRecipe("immersiveengineering:plantoil", 20)
	addRecipe("immersiveengineering:plantoil", 20)
	addRecipe("immersiveengineering:creosote", 20)
	addRecipe("createaddition:seed_oil", 20)

	/**
	* @param fluid 输入的流体
	* @param energy 输出的能量
	*/
	function addRecipe(fluid, energy) {
		event.custom({
			"type": "custommachinery:custom_machine",
			"machine": `${global.namespace}:fuel_generator`,
			"time": 3200,
			"hidden": false,
			"requirements": [
				{
					"type": "custommachinery:fluid",
					"mode": "input",
					"fluid": fluid,
					"amount": 1000
				},
				{
					"type": "custommachinery:energy_per_tick",
					"mode": "output",
					"amount": energy
				}
			]
		})
	}
})