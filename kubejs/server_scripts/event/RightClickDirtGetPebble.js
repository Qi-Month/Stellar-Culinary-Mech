BlockEvents.rightClicked((event) => {
	let { block, player } = event

	// 可触发的方块
	let dirtGroup = [
		"minecraft:dirt",
		"minecraft:grass_block",
		"minecraft:podzol",
		"minecraft:mycelium",
		"minecraft:coarse_dirt",
		"minecraft:rooted_dirt"
	]

	// 空手, 潜行, 概率50%
	if (player.mainHandItem !== "MAIN_HAND" && player.crouching && Math.random() < 0.5) {
		player.swing()
		
		dirtGroup.forEach((dirt) => {
			if (block.id === dirt) {
				let entityItem = block.createEntity("item")
				let pebbleGroup = Ingredient.of("#exdeorum:pebbles").getItemIds()

				// 随机选择一种石子生成
				entityItem.item = pebbleGroup[Math.floor(Math.random() * pebbleGroup.length)]
				entityItem.x += 0.5
				entityItem.y += 1
				entityItem.z += 0.5
				entityItem.spawn()
			}
		})
	}
})