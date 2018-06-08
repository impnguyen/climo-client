/**
 * @module basecontroller
 * @author mpn
 * @description basecontroller for controller extension
 */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
	],
	function(Controller, History) {
		"use strict";

		return Controller.extend(
			"mpn.climo.client.controller.Basecontroller", {
				
				/**
				 * @author: mpn
				 * @description Init Methode, initializes validation Handlers
				 * @memberOf module:basecontroller
				 * @inner
				 */
				onInit: function() {

				},

				/**
				 * @author: mpn
				 * @description returns router object
				 * @function
				 * @memberOf module:basecontroller
				 * @inner
				 * @return {object} - anonym - Router-Objekt
				 */
				getRouter: function() {
					return sap.ui.core.UIComponent.getRouterFor(this);
				},

				/**
				 * @author: mpn
				 * @description nav back to last hash or home target
				 * @function
				 * @memberOf module:ka_overview_base
				 * @inner
				 */
				onNavBack: function() {
					var oHistory, sPreviousHash;
					oHistory = History.getInstance();
					sPreviousHash = oHistory.getPreviousHash();
					if (sPreviousHash !== undefined) {
						window.history.go(-1);
					} else {
						this.getRouter().navTo("asdf", {}, true /* no history */ );
					}
				}
						
});
	});