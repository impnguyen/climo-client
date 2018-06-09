/**
 * @module app_controller
 * @author mpn
 * @description
 */
sap.ui.define([
	"mpn/climo/client/controller/Base.controller"
], function(Base) {
	"use strict";

	return Base.extend("mpn.climo.client.controller.App", {

		/**
		 * @author: mpn
		 * @description setup density class
		 * @memberOf module:basecontroller
		 * @inner
		 */
		onInit: function() {
			//set content density class 
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
//			this.getRouter().getRoute("asdf").attachPatternMatched(this._onCrossNavigationMatched, this);
		}

	});
});