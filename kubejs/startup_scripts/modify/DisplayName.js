function modifyDisplayName(namespace, displayName) {
	Platform.getInfo(namespace).name = displayName
}
modifyDisplayName("kubejs", "Stellar Culinary Mech")