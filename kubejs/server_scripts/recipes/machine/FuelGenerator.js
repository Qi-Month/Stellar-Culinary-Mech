ServerEvents.recipes((event) => {
	addFuelRecipe("ad_astra:fuel", 20)
	addFuelRecipe("ad_astra:oil", 20)
	addFuelRecipe("immersiveengineering:biodiesel", 20)
	addFuelRecipe("immersiveengineering:plantoil", 20)
	addFuelRecipe("immersiveengineering:plantoil", 20)
	addFuelRecipe("immersiveengineering:creosote", 20)
	addFuelRecipe("createaddition:seed_oil", 20)

	/**
	* @param fluid 输入的流体
	* @param energy 输出的能量
	*/
	function addFuelRecipe(fluid, energy) {
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