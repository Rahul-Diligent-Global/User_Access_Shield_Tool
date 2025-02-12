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

        }
    });
});