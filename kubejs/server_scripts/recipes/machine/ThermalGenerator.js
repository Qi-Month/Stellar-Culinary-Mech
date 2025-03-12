ServerEvents.recipes((event) => {
	addRecipe(1600, "#minecraft:coals", 20)
	addRecipe(300, "#minecraft:logs", 20)
	addRecipe(300, "#minecraft:planks", 20)

	/**
	 * @param time 物品的燃烧时间(Tick), 同时也是配方处理的时间
	 * @param item 输入的物品
	 * @param energy 输出的能量
	 */
	function addRecipe(time, item, energy) {
		event.custom({
			"type": "custommachinery:custom_machine",
			"machine": `${global.namespace}:thermal_generator`,
			"time": time,
			"hidden": false,
			"requirements": [
				{
					"type": "custommachinery:item",
					"mode": "input",
					"item": item,
					"amount": 1
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