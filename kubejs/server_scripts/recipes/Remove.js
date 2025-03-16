ServerEvents.recipes((event) => {
	let removeRecipeIds = [

	]
	removeRecipeIds.forEach((id) => {
		event.remove({ id: id })
	})

	let removeItemRecipes = [
		"#createsifter:meshes"
	]
	removeItemRecipes.forEach((item) => {
		event.remove({ output: item })
	})

	let removeRecipeType = [
		"createsifter:sifting"
	]
	removeRecipeType.forEach((type) => {
		event.remove({ type: type })
	})
})