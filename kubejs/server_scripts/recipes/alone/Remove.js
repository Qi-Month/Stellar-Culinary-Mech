ServerEvents.recipes((event) => {
	let removeRecipeIds = [

	]
	removeRecipeIds.forEach((recipeID) => {
		event.remove({ id: recipeID })
	})

	let removeItemRecipes = [

	]
	removeItemRecipes.forEach((item) => {
		event.remove({ output: item })
	})
})