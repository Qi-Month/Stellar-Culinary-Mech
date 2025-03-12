ServerEvents.tags("item", (event) => {
	// 筛子
	event.add("exdeorum:sieves", [
		"#exdeorum:small_sieve",
		"#exdeorum:compressed_sieve"
	])

	event.add("exdeorum:small_sieves", [
		"exdeorum:oak_sieve",
		"exdeorum:spruce_sieve",
		"exdeorum:birch_sieve",
		"exdeorum:jungle_sieve",
		"exdeorum:acacia_sieve",
		"exdeorum:dark_oak_sieve",
		"exdeorum:mangrove_sieve",
		"exdeorum:cherry_sieve",
		"exdeorum:bamboo_sieve",
		"exdeorum:crimson_sieve",
		"exdeorum:warped_sieve"
	])

	event.add("exdeorum:compressed_sieves", [
		"exdeorum:oak_compressed_sieve",
		"exdeorum:birch_compressed_sieve",
		"exdeorum:jungle_compressed_sieve",
		"exdeorum:acacia_compressed_sieve",
		"exdeorum:mangrove_compressed_sieve",
		"exdeorum:bamboo_compressed_sieve",
		"exdeorum:cherry_compressed_sieve",
		"exdeorum:warped_compressed_sieve",
		"exdeorum:dark_oak_compressed_sieve",
		"exdeorum:crimson_compressed_sieve",
		"exdeorum:spruce_compressed_sieve"
	])

	// 坩埚
	event.add("exdeorum:crucibles", [
		"#exdeorum:wooden_crucibles",
		"exdeorum:porcelain_crucible"
	])

	event.add("exdeorum:wooden_crucibles", [
		"exdeorum:dark_oak_crucible",
		"exdeorum:warped_crucible",
		"exdeorum:crimson_crucible",
		"exdeorum:oak_crucible",
		"exdeorum:spruce_crucible",
		"exdeorum:birch_crucible",
		"exdeorum:jungle_crucible",
		"exdeorum:acacia_crucible",
		"exdeorum:mangrove_crucible",
		"exdeorum:cherry_crucible",
		"exdeorum:bamboo_crucible"
	])
})