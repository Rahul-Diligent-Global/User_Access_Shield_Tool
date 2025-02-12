sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("diligent.com.uas.home.controller.Entry", {
        onInit() {
            var oData = {
                activeConflicts: 24,
                activeRules: 156,
                systemsConnected: 5,
                recentConflicts: [
                  { user: "JOHN.DOE", rule: "FIN-001", severity: "HIGH", status: "Active", statusState: "Error" },
                  { user: "JANE.SMITH", rule: "PUR-002", severity: "MEDIUM", status: "Mitigated", statusState: "Warning" }
                ]
              };
              var oModel = new JSONModel(oData);
              this.getView().setModel(oModel);

        },

        onListItemPress: function (oEvent) {
			var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();

			this.getSplitContObj().toDetail(this.createId(sToPageId));
		},
        getSplitContObj: function () {
			var result = this.byId("SplitContDemo");
			if (!result) {
				Log.error("SplitApp object can't be found");
			}
			return result;
		},
        onPressDetailBack: function () {
			this.getSplitContObj().backDetail();
		},
        onAfterRendering: function () {
			var oSplitCont = this.getSplitContObj(),
				ref = oSplitCont.getDomRef() && oSplitCont.getDomRef().parentNode;
			// set all parent elements to 100% height, this should be done by app developer, but just in case
			if (ref && !ref._sapUI5HeightFixed) {
				ref._sapUI5HeightFixed = true;
				while (ref && ref !== document.documentElement) {
					var $ref = jQuery(ref);
					if ($ref.attr("data-sap-ui-root-content")) { // Shell as parent does this already
						break;
					}
					if (!ref.style.height) {
						ref.style.height = "100%";
					}
					ref = ref.parentNode;
				}
			}
		},
    });
});