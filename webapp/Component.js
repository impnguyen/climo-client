/**
 * @module component
 * @author mpn
 * @description
 */
sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("mpn.climo.client.Component", {

		metadata: {
			manifest: "json"
		},
		
		/**
		 * @author: mpn
		 * @description 
		 * @function
		 * @memberOf module:component
		 * @inner
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// create the views based on the url/hash
			this.getRouter().initialize();			
		}, 
		
		/**
		 * @author: mpn
		 * @description returns content density style class depends on target device touch support
		 * @function
		 * @memberOf module:component
		 * @inner
		 */
		getContentDensityClass : function() {
			if (!this._sContentDensityClass) {
				if (!sap.ui.Device.support.touch) {
					this._sContentDensityClass = "sapUiSizeCompact";
				} else {
					this._sContentDensityClass = "sapUiSizeCozy";
				}
			}
			return this._sContentDensityClass;
		}
	});
});