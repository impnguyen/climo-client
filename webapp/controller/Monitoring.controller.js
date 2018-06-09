sap.ui.define([ "jquery.sap.global", "sap/ui/core/mvc/Controller",
		"sap/ui/model/Filter", "sap/ui/model/json/JSONModel",
		"sap/m/MessageToast", "sap/ui/core/format/DateFormat" ], function(
		jQuery, Controller, Filter, JSONModel, MessageToast, DateFormat) {
	"use strict";

	return Controller.extend("mpn.climo.client.controller.Monitoring", {
		onInit : function() {

		},

		formatAvailableToObjectState : function(bAvailable) {
			return bAvailable ? "Success" : "Error";
		},

		formatAvailableToIcon : function(bAvailable) {
			return bAvailable ? "sap-icon://accept" : "sap-icon://decline";
		},

		handleDetailsPress : function(oEvent) {
			MessageToast.show("Details for product with id "
					+ this.getView().getModel().getProperty("ProductId",
							oEvent.getSource().getBindingContext()));
		}

	});
});