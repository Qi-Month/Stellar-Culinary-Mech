let displayName = [
	["kubejs", "Stellar Culinary Mech"],
]
displayName.forEach(([namespace, displayName]) => {
	Platform.getInfo(namespace).name = displayName
})