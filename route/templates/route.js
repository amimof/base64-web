module.exports = function(router) {
	router.route('/<%= namel %>s')
		/*
		* Put your methods here. Example:
		* 	.post(controller.createKitten)
		*		.get(controller.getKittens)
		*/
	router.route('/<%= namel %>s/:<%= namel %>_id')
		/*
		* Put your methods here. Example:
		* 	.get(controller.getKitten)
		*		.put(controller.updateKitten)
		*		.delete(controller.deleteKitten);
		*/
}
