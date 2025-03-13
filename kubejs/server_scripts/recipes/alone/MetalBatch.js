// ServerEvents.recipes((event) => {
// 	let { kubejs } = event.recipes

// 	// 定义金属Tags
// 	let tags = {
// 		ingots: "#forge:ingots",
// 		blocks: "#forge:storage_blocks",
// 		nuggets: "#forge:nuggets"
// 	}

// 	// 遍历标签并生成配方
// 	Object.keys(tags).forEach((key) => {
// 		let itemIds = Ingredient.of(tags[key]).getItemIds()

// 		if (!itemIds || itemIds.length === 0) {
// 			console.error(`No items found for tag: ${tags[key]}`)
// 			return 0
// 		}

// 		itemIds.forEach((itemId) => {
// 			if (key === "blocks") {
// 				// 块 => 9 锭
// 				let ingotId = itemId.replace("block", "ingot")
// 				if (Item.exists(ingotId)) {
// 					kubejs.shapeless(Item.of(ingotId, 9), [itemId])
// 				} else {
// 					console.warn(`Skipping: No ingot found for block: ${itemId}`)
// 				}
// 			} else if (key === "ingots") {
// 				// 锭 => 9 粒
// 				let nuggetId = itemId.replace("ingot", "nugget")
// 				if (Item.exists(nuggetId)) {
// 					kubejs.shapeless(Item.of(nuggetId, 9), [itemId])
// 					// 9 粒 => 锭
// 					kubejs.shapeless(Item.of(itemId, 1), Array(9).fill(nuggetId))
// 				} else {
// 					console.warn(`Skipping: No nugget found for ingot: ${itemId}`)
// 				}

// 				// 9 锭 => 块
// 				let blockId = itemId.replace("ingot", "block")
// 				if (Item.exists(blockId)) {
// 					kubejs.shapeless(Item.of(blockId, 1), Array(9).fill(itemId))
// 				} else {
// 					console.warn(`Skipping: No block found for ingot: ${itemId}`)
// 				}
// 			}
// 		})
// 	})
// })