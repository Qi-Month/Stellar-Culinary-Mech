StartupEvents.registry("block", (event) => {
	function machine(name) {
		event.create(`kubejs:${name}`, "custommachinery")
			.machine(`kubejs:${name}`)
			.tag("create:wrench_pickup")
	}
	machine("thermal_generator")
	machine("fuel_generator")
})