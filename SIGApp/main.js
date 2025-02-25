(self["webpackChunkrealgis"] = self["webpackChunkrealgis"] || []).push([["main"],{

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class AppComponent {
  constructor() {
    this.title = "gis";
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.module */ 3467);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _home_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/components/home/home.component */ 52093);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);










const routes = [{
  path: '',
  component: _home_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent
}];
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBarModule],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _home_home_module__WEBPACK_IMPORTED_MODULE_0__.HomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBarModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _home_home_module__WEBPACK_IMPORTED_MODULE_0__.HomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule],
    exports: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBarModule]
  });
})();

/***/ }),

/***/ 29405:
/*!****************************************************************************!*\
  !*** ./src/app/home/components/confirm-dialog/confirm-dialog.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialogComponent": () => (/* binding */ ConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 84522);





class ConfirmDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  ngOnInit() {}
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) {
  return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
};
ConfirmDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ConfirmDialogComponent,
  selectors: [["app-confirm-dialog"]],
  decls: 14,
  vars: 4,
  consts: [["mat-dialog-title", "", "align", "center"], [1, "content"], ["align", "center", 1, "iconHelp"], [1, "actions"], ["mat-raised-button", "", 3, "mat-dialog-close"], ["mat-raised-button", "", "mat-dialog-close", ""]],
  template: function ConfirmDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirmaci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "help_outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-dialog-actions", 3)(10, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancelar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.confirmAction);
    }
  },
  dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
  styles: [".content[_ngcontent-%COMP%]{\n    font-size: larger;\n    text-align: center;\n}\n\n.iconHelp[_ngcontent-%COMP%]{\n    font-size: xx-large;\n    height: 48px;\n    width: 48px;\n}\n\n.actions[_ngcontent-%COMP%]{\n    justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9jb21wb25lbnRzL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29uSGVscHtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgIGhlaWdodDogNDhweDtcbiAgICB3aWR0aDogNDhweDtcbn1cblxuLmFjdGlvbnN7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 98376:
/*!************************************************************!*\
  !*** ./src/app/home/components/filter/filter.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterComponent": () => (/* binding */ FilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _view_services_map_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../view/services/map.service */ 39569);
/* harmony import */ var _services_filter_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/filter/filter.service */ 95722);
/* harmony import */ var _services_forms_field_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/forms/field-form.service */ 21322);
/* harmony import */ var _view_services_panoramic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../view/services/panoramic.service */ 30541);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);




















const _c0 = ["table"];
function FilterComponent_mat_hint_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Seleccione espacio de trabajo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function FilterComponent_mat_form_field_25_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", field_r20.formulario_campo_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](field_r20.formulario_campo_nombre);
  }
}
function FilterComponent_mat_form_field_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field", 31)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Campo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FilterComponent_mat_form_field_25_Template_mat_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.campoId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, FilterComponent_mat_form_field_25_mat_option_4_Template, 2, 2, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.campoId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.fields);
  }
}
function FilterComponent_mat_label_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Valor Menor");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function FilterComponent_mat_label_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Valor");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function FilterComponent_mat_label_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Latitud");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function FilterComponent_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FilterComponent_button_32_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.search());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function FilterComponent_mat_form_field_34_mat_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Valor Mayor");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function FilterComponent_mat_form_field_34_mat_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Longitud");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function FilterComponent_mat_form_field_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FilterComponent_mat_form_field_34_mat_label_1_Template, 2, 0, "mat-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, FilterComponent_mat_form_field_34_mat_label_2_Template, 2, 0, "mat-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FilterComponent_mat_form_field_34_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r28.valorBuscar2 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FilterComponent_mat_form_field_34_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r30.search());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.tipoBuscar == "Intervalo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.tipoBuscar == "Coordenadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r6.valorBuscar2);
  }
}
function FilterComponent_mat_spinner_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-spinner", 37);
  }
}
function FilterComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r9.defCampo1, " ");
  }
}
function FilterComponent_td_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r31.campo1, " ");
  }
}
function FilterComponent_th_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r11.defCampo2, " ");
  }
}
function FilterComponent_td_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r32.campo2, " ");
  }
}
function FilterComponent_th_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ubicaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function FilterComponent_td_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", element_r33.latitud, ", ", element_r33.longitud, " ");
  }
}
function FilterComponent_th_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function FilterComponent_td_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 39)(1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FilterComponent_td_50_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36);
      const element_r34 = restoredCtx.$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r35.cargarEscena(element_r34.scene, element_r34.x, element_r34.y));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "pin_drop");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function FilterComponent_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 41);
  }
}
function FilterComponent_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 42);
  }
}
class FilterComponent {
  constructor(mapService, filterService, fieldFormService, panoramicService, dialogRef, data) {
    this.mapService = mapService;
    this.filterService = filterService;
    this.fieldFormService = fieldFormService;
    this.panoramicService = panoramicService;
    this.dialogRef = dialogRef;
    this.data = data;
    this.campos = [];
    this.activos = [];
    this.camposigual = [];
    this.resultados = [];
    this.resultadosCampos = [];
    this.resultadosActivos = [];
    this.displayedColumns = [];
    this.DATOS_RESULTADOS = [];
    this.loading = false;
    this.pagination = true;
    this.pagslength = 0;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource([]);
    this.formId = mapService.getCurrentFormId();
    //RE PLANTEAR (Por Coordenadas)
    /*      if (this.formId === "") {
            this.dialogRef.close();
            alert(
              "No se ha seleccionado ningún formulario para realizar la busqueda"
            );
          }  */
    this.fieldFormService.getFieldForm({
      formulario_id: this.formId
    }).subscribe(data => {
      this.fields = data["SDTFormularioid"];
    });
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  cargarEscena(name, x, y) {
    var xmlscene = name.substring(6, 16);
    this.panoramicService.loadScene(xmlscene, name);
    this.panoramicService.getPanoramic().call("lookat(" + x + "," + y + ")");
    this.dialogRef.close();
  }
  limpiar() {
    if (this.resultados.length != 0) {
      this.resultados = [];
      this.campos = [];
      this.resultadosCampos = [];
      this.resultadosActivos = [];
      this.DATOS_RESULTADOS.length = 0;
      this.table.renderRows();
      this.displayedColumns = [];
    }
  }
  search() {
    this.loading = true;
    this.limpiar();
    this.obtenerCampos();
  }
  obtenerCampos() {
    if (this.tipoBuscar == "Coordenadas") {
      this.filterService.getActivos().subscribe(data1 => {
        this.activos = data1;
        this.buscarCampos(this.campoId, this.tipoBuscar, this.valorBuscar, this.valorBuscar2);
      });
    } else {
      this.filterService.getCampos().subscribe(data => {
        this.campos = data;
        this.buscarCampos(this.campoId, this.tipoBuscar, this.valorBuscar, this.valorBuscar2);
      });
    }
  }
  buscarCampos(id, tipo, valor1, valor2) {
    switch (tipo) {
      case "Igual":
        this.campos.forEach(element => {
          if (element["formulario_campo_id"] == id) {
            if (element["formulario_captura_campo_valor"] == valor1) {
              this.resultados.push(element);
            }
          }
        });
        break;
      case "Contiene":
        this.campos.forEach(element => {
          if (element["formulario_campo_id"] == id) {
            if (element["formulario_captura_campo_valor"].toUpperCase().includes(valor1.toUpperCase())) {
              this.resultados.push(element);
            }
          }
        });
        break;
      case "Mayor":
        this.campos.forEach(element => {
          if (element["formulario_campo_id"] == id) {
            if (Number(element["formulario_captura_campo_valor"]) > Number(valor1)) {
              this.resultados.push(element);
            }
          }
        });
        break;
      case "Menor":
        this.campos.forEach(element => {
          if (element["formulario_campo_id"] == id) {
            if (element["formulario_captura_campo_valor"] < valor1) {
              this.resultados.push(element);
            }
          }
        });
        break;
      case "Intervalo":
        this.campos.forEach(element => {
          if (element["formulario_campo_id"] == id) {
            if (element["formulario_captura_campo_valor"] > valor1 && element["formulario_captura_campo_valor"] < valor2) {
              this.resultados.push(element);
            }
          }
        });
        break;
      case "Coordenadas":
        this.activos.forEach(element => {
          if (Number(element["formulario_captura_latitud"]) == Number(valor1) && Number(element["formulario_captura_longitud"]) == Number(valor2)) {
            this.resultados.push(element);
          }
        });
        break;
      default:
        alert("No selecciono el tipo de Busqueda");
        this.loading = false;
        break;
    }
    if (this.resultados.length == 0) {
      alert("No se encontraron coincidencias con los parametros buscados");
      this.loading = false;
      this.limpiar();
    } else {
      this.getCamposresultados();
    }
  }
  getCamposresultados() {
    this.resultados.forEach(element => {
      this.filterService.getCamposResultado(element["formulario_captura_id"]).subscribe(data2 => {
        this.resultadosCampos.push(data2);
        this.getActivosresultados(element["formulario_captura_id"]);
      });
    });
  }
  getActivosresultados(id) {
    this.filterService.getActivosResultados(id).subscribe(data3 => {
      this.resultadosActivos.push(data3);
      if (this.resultadosActivos.length == this.resultadosCampos.length && this.resultadosCampos.length == this.resultados.length) {
        this.generarTabla();
      }
    });
  }
  generarTabla() {
    var campo1, campo2, latitud, longitud, scene, sceneX, sceneY;
    var ids = [];
    for (let i = 0; i < this.resultados.length; i++) {
      campo2 = this.resultados[i]["formulario_captura_campo_valor"];
      longitud = Number(this.resultadosActivos[i]["formulario_captura_longitud"]).toFixed(4);
      latitud = Number(this.resultadosActivos[i]["formulario_captura_latitud"]).toFixed(4);
      sceneX = Number(this.resultadosActivos[i]["formulario_captura_x"]);
      sceneY = Number(this.resultadosActivos[i]["formulario_captura_y"]);
      scene = this.resultadosActivos[i]["formulario_captura_scene"];
      this.resultadosCampos[i].forEach(element => {
        ids.push(element["formulario_campo_id"]);
        if (element["formulario_campo_id"] == Math.min.apply(null, ids)) {
          campo1 = element["formulario_captura_campo_valor"];
          this.defCampo1 = element["formulario_campo_nombre"];
        }
        if (element["formulario_campo_id"] == this.campoId) {
          this.defCampo2 = element["formulario_campo_nombre"];
        }
      });
      const infoResultado = {
        campo1: campo1,
        campo2: campo2,
        latitud: latitud,
        longitud: longitud,
        scene: scene,
        x: sceneX,
        y: sceneY
      };
      this.DATOS_RESULTADOS.push(infoResultado);
      if (this.DATOS_RESULTADOS.length == this.resultados.length) {
        this.displayedColumns = ["campo1", "campo2", "ubicacion", "boton"];
        this.loading = false;
        this.dataSource.data = this.DATOS_RESULTADOS;
      }
    }
  }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) {
  return new (t || FilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_view_services_map_service__WEBPACK_IMPORTED_MODULE_0__.MapService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_forms_field_form_service__WEBPACK_IMPORTED_MODULE_2__.FieldFormService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_view_services_panoramic_service__WEBPACK_IMPORTED_MODULE_3__.PanoramicService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA));
};
FilterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: FilterComponent,
  selectors: [["app-filter"]],
  viewQuery: function FilterComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    }
  },
  decls: 54,
  vars: 14,
  consts: [["mat-icon-button", "", "mat-dialog-close", "", 1, "close-button"], [1, "close-icon"], ["mat-dialog-title", "", "align", "center"], [1, "filter-container"], ["appearance", "fill", 1, "tipo-busqueda"], ["required", "", 1, "tipoBuscar", 3, "ngModel", "ngModelChange"], ["value", "Igual"], ["value", "Contiene"], ["value", "Mayor"], ["value", "Menor"], ["value", "Intervalo"], ["value", "Coordenadas"], [4, "ngIf"], ["appearance", "fill", "class", "campo-id", 4, "ngIf"], ["appearance", "fill", 1, "valor-busqueda"], ["matInput", "", "type", "search", "required", "", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["appearance", "fill", "class", "valor-busqueda2", 4, "ngIf"], [1, "resultados"], ["mode", "indeterminate", "class", "spinner", 4, "ngIf"], ["mat-table", "", 3, "dataSource"], ["table", ""], ["matColumnDef", "campo1"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["type", "text", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "campo2"], ["matColumnDef", "ubicacion"], ["matColumnDef", "boton"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "hidePageSize", "", 3, "pageSize"], ["appearance", "fill", 1, "campo-id"], ["required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", 3, "click"], ["appearance", "fill", 1, "valor-busqueda2"], ["mode", "indeterminate", 1, "spinner"], ["mat-header-cell", ""], ["type", "text", "mat-cell", ""], ["mat-icon-button", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function FilterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0)(1, "mat-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Filtrar Activos");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-dialog-content", 3)(6, "mat-form-field", 4)(7, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Tipo de Busqueda");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-select", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_mat_select_ngModelChange_9_listener($event) {
        return ctx.tipoBuscar = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Igual a");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Contiene");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Mayor que");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Menor que");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "En un Intervalo");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Por Coordenadas");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, FilterComponent_mat_hint_22_Template, 2, 0, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, FilterComponent_mat_form_field_25_Template, 5, 2, "mat-form-field", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-form-field", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, FilterComponent_mat_label_28_Template, 2, 0, "mat-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, FilterComponent_mat_label_29_Template, 2, 0, "mat-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, FilterComponent_mat_label_30_Template, 2, 0, "mat-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_input_ngModelChange_31_listener($event) {
        return ctx.valorBuscar = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, FilterComponent_button_32_Template, 3, 0, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, FilterComponent_mat_form_field_34_Template, 7, 3, "mat-form-field", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, FilterComponent_mat_spinner_36_Template, 1, 0, "mat-spinner", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "table", 20, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](39, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, FilterComponent_th_40_Template, 2, 1, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, FilterComponent_td_41_Template, 2, 1, "td", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](42, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, FilterComponent_th_43_Template, 2, 1, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, FilterComponent_td_44_Template, 2, 1, "td", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](45, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, FilterComponent_th_46_Template, 2, 0, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, FilterComponent_td_47_Template, 2, 2, "td", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](48, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, FilterComponent_th_49_Template, 2, 0, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, FilterComponent_td_50_Template, 4, 0, "td", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, FilterComponent_tr_51_Template, 1, 0, "tr", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, FilterComponent_tr_52_Template, 1, 0, "tr", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "mat-paginator", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.tipoBuscar);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.formId == "" && (ctx.tipoBuscar == "Igual" || ctx.tipoBuscar == "Contiene" || ctx.tipoBuscar == "Mayor" || ctx.tipoBuscar == "Menor" || ctx.tipoBuscar == "Intervalo"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tipoBuscar != "Coordenadas");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tipoBuscar == "Intervalo");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tipoBuscar != "Intervalo" && ctx.tipoBuscar != "Coordenadas");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tipoBuscar == "Coordenadas");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.valorBuscar);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tipoBuscar != "Intervalo" && ctx.tipoBuscar != "Coordenadas");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tipoBuscar == "Intervalo" || ctx.tipoBuscar == "Coordenadas");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSize", 5);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinner, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator],
  styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd.mat-mdc-cell[_ngcontent-%COMP%] {\n  padding-right: 15px;\n}\n\nth.mat-mdc-header-cell[_ngcontent-%COMP%]:first-of-type, td.mat-mdc-cell[_ngcontent-%COMP%]:first-of-type {\n  padding-left: 5px;\n}\n\nth.mat-mdc-header-cell[_ngcontent-%COMP%]:last-of-type, td.mat-mdc-cell[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 5px;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  float: right;\n  z-index: 100;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  float: center;\n  right: -70px;\n}\n\nth.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGQubWF0LW1kYy1jZWxsIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxudGgubWF0LW1kYy1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlLCB0ZC5tYXQtbWRjLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG50aC5tYXQtbWRjLWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSwgdGQubWF0LW1kYy1jZWxsOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uc3Bpbm5lciB7XG4gIGZsb2F0OiBjZW50ZXI7XG4gIHJpZ2h0OiAtNzBweDtcbn1cblxudGgubWF0LW1kYy1oZWFkZXItY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 73378:
/*!************************************************************!*\
  !*** ./src/app/home/components/footer/footer.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.component */ 52093);


class FooterComponent {
  constructor(homeComponent) {
    this.homeComponent = homeComponent;
  }
  ngOnInit() {}
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent));
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 3,
  vars: 4,
  consts: [[1, "map-footer"], ["id", "coordenadas", 1, "coordenadas"], ["id", "scaleBar", 1, "scaleBar"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("margin-right", ctx.homeComponent.sidenavView ? "57px" : "0")("width", ctx.homeComponent.activatedViewPanoramic ? ctx.homeComponent.splitAreaSizeMap + "%" : "100%");
    }
  },
  styles: [".info[_ngcontent-%COMP%] {\n    display: flex;\n    color: white;\n}\n\n\n\n.map-footer[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n}\n\n.coordenadas[_ngcontent-%COMP%] {\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBOztHQUVHOztBQUVIO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIC5kZXRhaWxzIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59ICovXG5cbi5tYXAtZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNvb3JkZW5hZGFzIHtcbiAgICBjb2xvcjogd2hpdGU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 34260:
/*!************************************************************!*\
  !*** ./src/app/home/components/header/header.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _widgets_basemap_gallery_basemap_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../widgets/basemap-gallery/basemap-gallery.component */ 80109);
/* harmony import */ var _widgets_layers_list_layers_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../widgets/layers-list/layers-list.component */ 3106);
/* harmony import */ var _widgets_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../widgets/search/search.component */ 30177);
/* harmony import */ var _widgets_select_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../widgets/select/select.component */ 10497);
/* harmony import */ var _widgets_measurement_measurement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../widgets/measurement/measurement.component */ 84320);
/* harmony import */ var _widgets_add_layer_add_layer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../widgets/add-layer/add-layer.component */ 72085);
/* harmony import */ var src_app_widgets_overview_map_overview_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/widgets/overview-map/overview-map.component */ 59066);
/* harmony import */ var src_app_widgets_print_print_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/widgets/print/print.component */ 45783);
/* harmony import */ var _arcgis_core_widgets_Legend__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @arcgis/core/widgets/Legend */ 37942);
/* harmony import */ var _arcgis_core_widgets_Editor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @arcgis/core/widgets/Editor.js */ 64495);
/* harmony import */ var _view_services_map_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../view/services/map.service */ 39569);
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/login/login.service */ 6817);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _view_services_panoramic_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../view/services/panoramic.service */ 30541);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../home/home.component */ 52093);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);























function HeaderComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HeaderComponent_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r7.openDialog("DialogBasemapGallery", ctx_r7.baseMapGallery));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "dataset");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HeaderComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r9.openDialog("DialogLayersList", ctx_r9.layerList, ctx_r9.position["topRight"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "layers");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HeaderComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r11.openDialog("DialogMeasurement", ctx_r11.measurement, ctx_r11.position["topLeft"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "straighten");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HeaderComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r13.openDialog("DialogAddLayer", ctx_r13.addLayer, ctx_r13.position["topLeft"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "library_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HeaderComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r15.openDialog("DialogOverview", ctx_r15.overView, ctx_r15.position["bottomLeft"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "zoom_in_map");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HeaderComponent_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r17.openDialog("DialogPrint", ctx_r17.print));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "print");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HeaderComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r19.toggleLegend());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "legend_toggle");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
class HeaderComponent {
  constructor(mapService, loginService, dialog, panoramicService, homeComponent) {
    this.mapService = mapService;
    this.loginService = loginService;
    this.dialog = dialog;
    this.panoramicService = panoramicService;
    this.homeComponent = homeComponent;
    this.sidenavOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
    this.legendView = false;
    this.editorView = false;
    this.projectEnvironment = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
    this.tooltipDashboard = "Tablero de control";
    this.baseMapGallery = _widgets_basemap_gallery_basemap_gallery_component__WEBPACK_IMPORTED_MODULE_1__.BasemapGalleryComponent;
    this.layerList = _widgets_layers_list_layers_list_component__WEBPACK_IMPORTED_MODULE_2__.LayersListComponent;
    this.search = _widgets_search_search_component__WEBPACK_IMPORTED_MODULE_3__.SearchComponent;
    this.select = _widgets_select_select_component__WEBPACK_IMPORTED_MODULE_4__.SelectComponent;
    this.measurement = _widgets_measurement_measurement_component__WEBPACK_IMPORTED_MODULE_5__.MeasurementComponent;
    this.addLayer = _widgets_add_layer_add_layer_component__WEBPACK_IMPORTED_MODULE_6__.AddLayerComponent;
    this.overView = src_app_widgets_overview_map_overview_map_component__WEBPACK_IMPORTED_MODULE_7__.OverviewMapComponent;
    this.print = src_app_widgets_print_print_component__WEBPACK_IMPORTED_MODULE_8__.PrintComponent;
    //Posiciones predefinidas para la apertura de los widgets
    this.position = {
      topRight: {
        top: '75px',
        right: '60px'
      },
      bottomRight: {
        bottom: '60px',
        right: '110px'
      },
      topLeft: {
        top: '75px',
        left: '20px'
      },
      bottomLeft: {
        bottom: '60px',
        left: '20px'
      },
      middleLeft: {
        left: '20px'
      },
      top: {
        top: '75px'
      }
    };
  }
  toggleSidenav() {
    this.sidenavOpen.emit();
  }
  changeCreateActive() {
    //verificar formulario activo
    if (this.panoramicService.getCreateActive()) this.panoramicService.setCreateActive(false);else this.panoramicService.setCreateActive(true);
  }
  openDialog(id, component, position) {
    if (!document.getElementById(id)) {
      this.dialog.open(component, {
        id: id,
        autoFocus: false,
        hasBackdrop: false,
        position: position
      });
    } else {
      this.dialog.getDialogById(id).close();
    }
  }
  toggleLegend() {
    const view = this.mapService.getViewMap();
    let legend = new _arcgis_core_widgets_Legend__WEBPACK_IMPORTED_MODULE_9__["default"]({
      container: document.createElement("div"),
      view: view,
      id: 'leyenda'
    });
    if (this.legendView) {
      view.ui.remove('leyenda');
      this.legendView = false;
    } else {
      view.ui.add(legend, 'top-right');
      this.legendView = true;
    }
  }
  openEditor() {
    const view = this.mapService.getViewMap();
    const editor = new _arcgis_core_widgets_Editor_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
      view: view,
      id: 'editor'
    });
    if (this.editorView) {
      view.ui.remove('editor');
      this.editorView = false;
    } else {
      view.ui.add(editor, 'top-right');
      this.editorView = true;
    }
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_view_services_map_service__WEBPACK_IMPORTED_MODULE_11__.MapService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_login_login_service__WEBPACK_IMPORTED_MODULE_12__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_view_services_panoramic_service__WEBPACK_IMPORTED_MODULE_13__.PanoramicService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_home_home_component__WEBPACK_IMPORTED_MODULE_14__.HomeComponent));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  outputs: {
    sidenavOpen: "sidenavOpen"
  },
  decls: 14,
  vars: 7,
  consts: [[1, "toolbar"], ["id", "logoApp"], [1, "first_spacer"], [1, "widgetsButtons"], ["mat-icon-button", "", "matTooltip", "Galeria de Mapas Base", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Lista de Capas", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Medir", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "A\u00F1adir Capa", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Vista General", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Imprimir", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Leyenda", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Galeria de Mapas Base", 3, "click"], ["mat-icon-button", "", "matTooltip", "Lista de Capas", 3, "click"], ["mat-icon-button", "", "matTooltip", "Medir", 3, "click"], ["mat-icon-button", "", "matTooltip", "A\u00F1adir Capa", 3, "click"], ["mat-icon-button", "", "matTooltip", "Vista General", 3, "click"], ["mat-icon-button", "", "matTooltip", "Imprimir", 3, "click"], ["mat-icon-button", "", "matTooltip", "Leyenda", 3, "click"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " SIGApp ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "sub");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "demo");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, HeaderComponent_button_7_Template, 3, 0, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, HeaderComponent_button_8_Template, 3, 0, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, HeaderComponent_button_9_Template, 3, 0, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, HeaderComponent_button_10_Template, 3, 0, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, HeaderComponent_button_11_Template, 3, 0, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, HeaderComponent_button_12_Template, 3, 0, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, HeaderComponent_button_13_Template, 3, 0, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.projectEnvironment.modules.baseMapGallery && !ctx.homeComponent.activatedViewDashboard);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.projectEnvironment.modules.layerList && !ctx.homeComponent.activatedViewDashboard);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.projectEnvironment.modules.measurement && !ctx.homeComponent.activatedViewDashboard);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.projectEnvironment.modules.addLayer && !ctx.homeComponent.activatedViewDashboard);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.projectEnvironment.modules.overviewMap && !ctx.homeComponent.activatedViewDashboard);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.projectEnvironment.modules.print && !ctx.homeComponent.activatedViewDashboard);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.homeComponent.activatedViewDashboard);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatIconButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__.MatToolbar, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltip],
  styles: [".logo[_ngcontent-%COMP%] {\n  width: 50%;\n  height: auto;\n  border: none;\n  vertical-align: middle;\n  \n}\n\n.first_spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.menuLogin[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.icon[_ngcontent-%COMP%] {\n  height: 38px;\n  width: 38px;\n}\n\n.icon-activated[_ngcontent-%COMP%] {\n  height: 38px;\n  width: 38px;\n  filter: brightness(120%) hue-rotate(180deg);\n}\n\n.widgetButton[_ngcontent-%COMP%] + .widgetButton[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.widgetsButtons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: row;\n  margin-right: 8px;\n}\n\n\n\n.scroll-widgets[_ngcontent-%COMP%] {\n  width: 550px;\n  height: 38px;\n}\n\n.widgetButton[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 38px;\n  height: 38px;\n}\n\n.widgetButton[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  filter: brightness(130%); \n  \n}\n\n.menuActions[_ngcontent-%COMP%] {\n  display: contents;\n}\n\n\n.mat-divider-vertical[_ngcontent-%COMP%] {\n  margin-right: 9px;\n  margin-left: 10px;\n  border-right-color: white;\n}\n\n\n  .menu .mat-mdc-menu-content {\n  padding: 0px !important;\n}\n\n  .menu.mat-mdc-menu-panel {\n  top: 15px;\n}\n\n.toolbar[_ngcontent-%COMP%]{\n  background-color: #d7e3ff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBOzs7OztHQUtHOztBQUVIO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsK0RBQStEO0FBQ2pFOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLDJEQUEyRDtBQUMzRDtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBLHlEQUF5RDtBQUN6RDtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXI6IG5vbmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC8qIGJhY2tncm91bmQ6ICNkN2UzZmY7ICovXG59XG5cbi5maXJzdF9zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLm1lbnVMb2dpbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmljb24ge1xuICBoZWlnaHQ6IDM4cHg7XG4gIHdpZHRoOiAzOHB4O1xufVxuXG4uaWNvbi1hY3RpdmF0ZWQge1xuICBoZWlnaHQ6IDM4cHg7XG4gIHdpZHRoOiAzOHB4O1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTIwJSkgaHVlLXJvdGF0ZSgxODBkZWcpO1xufVxuXG4ud2lkZ2V0QnV0dG9uKy53aWRnZXRCdXR0b24ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ud2lkZ2V0c0J1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLyogLmNkay12aXJ0dWFsLXNjcm9sbC1kYXRhLXNvdXJjZS1leGFtcGxlIC5leGFtcGxlLXZpZXdwb3J0IC5jZGstdmlydHVhbC1zY3JvbGwtY29udGVudC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDQ0MHB4O1xuICAgIGhlaWdodDogMzhweDtcbn0gKi9cblxuLnNjcm9sbC13aWRnZXRzIHtcbiAgd2lkdGg6IDU1MHB4O1xuICBoZWlnaHQ6IDM4cHg7XG59XG5cbi53aWRnZXRCdXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDM4cHg7XG4gIGhlaWdodDogMzhweDtcbn1cblxuLndpZGdldEJ1dHRvbjpob3ZlciAuaWNvbiB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxMzAlKTsgXG4gIC8qIGh1ZS1yb3RhdGUoMjAwZGVnKTsgIHRoaXMgd2lsbCBjaGFuZ2UgdGhlIGNvbG9yIG9mIHRoZSBpY29uKi9cbn1cblxuLm1lbnVBY3Rpb25zIHtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG5cbi8qIGVzdGUgZXMgZWwgZGl2aXNvciwgbGFzIGNsYXNlcyBzb24gcHJpb3BpYXMgZGUgYW5ndWxhciAqL1xuLm1hdC1kaXZpZGVyLXZlcnRpY2FsIHtcbiAgbWFyZ2luLXJpZ2h0OiA5cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXItcmlnaHQtY29sb3I6IHdoaXRlO1xufVxuXG4vKiB0aGlzIGlzIGRlcHJlY2F0ZWQsIHJldmlzYXIgZW4gZnV0dXJvLiBkYW5pZWwgc2lsdmEgICovXG46Om5nLWRlZXAgLm1lbnUgLm1hdC1tZGMtbWVudS1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWVudS5tYXQtbWRjLW1lbnUtcGFuZWwge1xuICB0b3A6IDE1cHg7XG59XG5cbi50b29sYmFye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdlM2ZmO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 52093:
/*!********************************************************!*\
  !*** ./src/app/home/components/home/home.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _modal_window_modal_window_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal-window/modal-window.component */ 11671);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.component */ 41024);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _view_services_panoramic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../view/services/panoramic.service */ 30541);
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/login/login.service */ 6817);
/* harmony import */ var _view_services_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../view/services/map.service */ 39569);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 34497);











const _c0 = ["sidenav"];
class HomeComponent {
  constructor(panoramicService, dialog, loginService, mapService, domSanitizer) {
    this.panoramicService = panoramicService;
    this.dialog = dialog;
    this.loginService = loginService;
    this.mapService = mapService;
    this.domSanitizer = domSanitizer;
    this.activatedViewMap = true;
    this.activatedViewPanoramic = false;
    this.activatedViewDashboard = false;
    this.login = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.login;
    this.ver = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.version;
    this.proyect = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.project;
    this.splitAreaSizeMap = 50;
    this.splitAreaSizePanoramic = 50;
    this.sidenavView = false;
  }
  ngOnInit() {
    //open Login in start app
    if (this.login) {
      this.openLogin();
    }
    //sanitize dashboard url
    this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_6__.SecurityContext.URL, _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.dashboardUrl));
  }
  openSidenav() {
    this.sidenav.toggle();
  }
  openLogin() {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.backdropClass = "backdropLogin";
    this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, dialogConfig);
  }
  openSettingsLayer() {
    const dialogConfig2 = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
    dialogConfig2.autoFocus = false;
    this.dialog.open(_modal_window_modal_window_component__WEBPACK_IMPORTED_MODULE_0__.ModalWindowComponent, dialogConfig2);
  }
  changeViewMap() {
    this.activatedViewMap = true;
    this.activatedViewPanoramic = false;
    this.mapService.removeMarkers();
  }
  changeViewMixed() {
    this.activatedViewMap = true;
    this.activatedViewPanoramic = true;
  }
  changeCreateActive() {
    //verificar formulario activo
    if (this.panoramicService.getCreateActive()) this.panoramicService.setCreateActive(false);else this.panoramicService.setCreateActive(true);
  }
  onDragEnd(event) {
    this.splitAreaSizeMap = event.sizes[0];
    this.splitAreaSizePanoramic = event.sizes[1];
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_view_services_panoramic_service__WEBPACK_IMPORTED_MODULE_3__.PanoramicService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_login_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_view_services_map_service__WEBPACK_IMPORTED_MODULE_5__.MapService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  viewQuery: function HomeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    }
  },
  decls: 2,
  vars: 0,
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-header")(1, "app-view-map");
    }
  },
  styles: ["main[_ngcontent-%COMP%] {\n    display: flex;\n    flex-grow: 1;\n}\n\n[_nghost-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\napp-footer[_ngcontent-%COMP%] {\n    display: flex;\n    background: #d7e3ff !important;\n    padding: 0.3em;\n    justify-content: space-between;\n}\n\n\n\n.hide[_ngcontent-%COMP%] {\n    width: 0%;\n    height: 0%;\n}\n\n.show[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n}\n\napp-view-map[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n}\n\n\n.dashboard[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n}\n\n\n\n  .as-split-gutter {\n    background-color: rgb(66, 66, 66) !important;\n    position: relative;\n}\n\n  .as-split-gutter-icon {\n    background-image: none !important;\n    background-color: black;\n    transition: opacity 0.3s;\n    opacity: 0;\n    position: absolute;\n}\n\n  .as-split-gutter.as-dragged .as-split-gutter-icon,   .as-split-gutter-icon:hover {\n    opacity: 0.35;\n}\n\n\n  .as-split-gutter-icon {\n    width: 17px !important;\n    left: -8px;\n    right: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGNBQWM7SUFDZCw4QkFBOEI7QUFDbEM7O0FBRUE7OztHQUdHOztBQUVIO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7OztBQUdBLDJDQUEyQztBQUMzQztJQUNJLDRDQUE0QztJQUM1QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixVQUFVO0FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5hcHAtZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6ICNkN2UzZmYgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwLjNlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi8qIGFwcC12aWV3LXBhbm9yYW1pY3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59ICovXG5cbi5oaWRlIHtcbiAgICB3aWR0aDogMCU7XG4gICAgaGVpZ2h0OiAwJTtcbn1cblxuLnNob3cge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuYXBwLXZpZXctbWFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuLmRhc2hib2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbi8qIHRoaXMgaXMgdXNlZCB0byBzdHlsZSB0aGUgc3BsaXQgYmFyIERTICovXG46Om5nLWRlZXAgLmFzLXNwbGl0LWd1dHRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LCA2NiwgNjYpICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG46Om5nLWRlZXAgLmFzLXNwbGl0LWd1dHRlci1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG46Om5nLWRlZXAgLmFzLXNwbGl0LWd1dHRlci5hcy1kcmFnZ2VkIC5hcy1zcGxpdC1ndXR0ZXItaWNvbixcbjo6bmctZGVlcCAuYXMtc3BsaXQtZ3V0dGVyLWljb246aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuMzU7XG59XG5cblxuOjpuZy1kZWVwIC5hcy1zcGxpdC1ndXR0ZXItaWNvbiB7XG4gICAgd2lkdGg6IDE3cHggIWltcG9ydGFudDtcbiAgICBsZWZ0OiAtOHB4O1xuICAgIHJpZ2h0OiA4cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 41024:
/*!**********************************************************!*\
  !*** ./src/app/home/components/login/login.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/login/login.service */ 6817);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);









class LoginComponent {
  constructor(loginservice, dialogRef, _snackBar) {
    this.loginservice = loginservice;
    this.dialogRef = dialogRef;
    this._snackBar = _snackBar;
    this.hide = true;
  }
  ngOnInit() {
    this.dialogRef.addPanelClass("loginDialog");
  }
  limpiarLogin() {
    this.user = "";
    this.pass = "";
  }
  openSnackBar(message) {
    this._snackBar.open(message, "", {
      duration: 2000,
      horizontalPosition: "center",
      verticalPosition: "top"
    });
  }
  validacion() {
    const user = {
      usuario_realgisUsuario: this.user,
      usuario_realgisClave: this.pass
    };
    this.loginservice.login(user).subscribe(data => {
      if (data["SDTUsuaroRolFuncion"].length > 0) {
        this.status = data["SDTUsuaroRolFuncion"][0].Estado;
        if (this.status == "Activo") {
          this.name = data["SDTUsuaroRolFuncion"][0].usuario_realgisNombre1;
          this.lastname = data["SDTUsuaroRolFuncion"][0].usuario_realgisApellido1;
          this.usuarioId = data["SDTUsuaroRolFuncion"][0].usuario_realgisId;
          this.loginservice.userId = this.usuarioId;
          this.rol = data["SDTUsuaroRolFuncion"][0].Rol_Nombre;
          var funciones = "";
          funciones = data["SDTUsuaroRolFuncion"][0].Funciones;
          this.functions = funciones.split("*");
          this.loginservice.userName = this.name;
          this.loginservice.userLastname = this.lastname;
          this.loginservice.userRol = this.rol;
          this.loginservice.settings = this.functions.includes("Settings");
          this.loginservice.layers = this.functions.includes("Layers");
          this.loginservice.search = this.functions.includes("Search");
          this.loginservice.createActive = this.functions.includes("Create Active");
          this.loginservice.views = this.functions.includes("Views");
          this.loginservice.zoom = this.functions.includes("Zoom");
          this.loginservice.mLine = this.functions.includes("Measure Line");
          this.loginservice.mPol = this.functions.includes("Measure Polygon");
          this.openSnackBar("Ingreso Correcto: " + this.name + " " + this.lastname);
          this.dialogRef.close();
        } else {
          this.openSnackBar("Usuario " + this.status);
        }
      } else {
        this.openSnackBar("Datos de ingreso incorrectos");
        this.limpiarLogin();
      }
    });
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_login_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 21,
  vars: 7,
  consts: [[3, "keydown.enter"], ["mat-dialog-title", "", 1, "title"], ["src", "assets/img/realgis_icono.ico", "alt", "logo", 1, "icon"], [1, "login"], ["matInput", "", "placeholder", "Usuario", 3, "disabled", "ngModel", "ngModelChange"], ["matPrefix", "", 2, "margin-right", "5px"], ["matInput", "", "placeholder", "Contrase\u00F1a", 3, "type", "ngModel", "ngModelChange"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-flat-button", "", "type", "submit", 2, "margin", "auto", 3, "click"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function LoginComponent_Template_div_keydown_enter_0_listener() {
        return ctx.validacion();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Iniciar Sesi\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-dialog-content", 3)(5, "mat-form-field")(6, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.user = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "person");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field")(10, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "lock");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) {
        return ctx.pass = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_13_listener() {
        return ctx.hide = !ctx.hide;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-dialog-actions")(17, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() {
        return ctx.validacion();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "login");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Ingresar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", false)("ngModel", ctx.user);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("ngModel", ctx.pass);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
    }
  },
  dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel],
  styles: [".login[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .icon[_ngcontent-%COMP%] {\n    width: 12%;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin-right: 15px;\n  }\n\n  .title[_ngcontent-%COMP%]{\n    padding-top: 20px;\n    display: inline-flex;\n    justify-content: center;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQix1QkFBdUI7RUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5pY29uIHtcbiAgICB3aWR0aDogMTIlO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB9XG5cbiAgLnRpdGxle1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4971:
/*!****************************************************************************!*\
  !*** ./src/app/home/components/modal-addfield/modal-addfield.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalAddfieldComponent": () => (/* binding */ ModalAddfieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_forms_object_types_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/forms/object-types.service */ 18123);
/* harmony import */ var _services_forms_field_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/forms/field-form.service */ 21322);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);














function ModalAddfieldComponent_mat_option_11_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fieldType_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](fieldType_r3.tipo_objeto_icono);
  }
}
function ModalAddfieldComponent_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ModalAddfieldComponent_mat_option_11_mat_icon_1_Template, 2, 1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fieldType_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", fieldType_r3.tipo_objeto_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.panelOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", fieldType_r3.tipo_objeto_nombre, " ");
  }
}
function ModalAddfieldComponent_mat_form_field_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Opciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalAddfieldComponent_mat_form_field_16_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.fieldOptions = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Ingrese las opciones del campo separadas por comas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.fieldOptions);
  }
}
class ModalAddfieldComponent {
  constructor(objectTypesService, fieldFormService, dialogRef, data) {
    this.objectTypesService = objectTypesService;
    this.fieldFormService = fieldFormService;
    this.dialogRef = dialogRef;
    this.data = data;
    this.fieldSelected = true;
    this.formId = data.formId;
    this.objectTypesService.getObjectTypes().subscribe(data => {
      this.fieldTypes = data;
    });
  }
  createFieldForm() {
    const fieldFormDetails = {
      formulario_id: this.formId,
      tipo_objeto_id: this.fieldType,
      formulario_campo_nombre: this.fieldName,
      formulario_campo_requerido: this.fieldRequired
    };
    this.fieldFormService.createFieldForm(fieldFormDetails).subscribe(data => {
      if (data["tipo_objeto_id"] == 2) {
        this.createOptionsField(data["formulario_campo_id"]);
      }
      this.dialogRef.close({
        data
      });
    });
  }
  fieldSelect() {
    console.log("selected");
  }
  createOptionsField(campo_id) {
    var options = this.fieldOptions.split(",");
    options.forEach((element, index) => {
      const option = {
        formulario_campo_id: campo_id,
        formulario_campo_opcion_valor: element,
        formulario_campo_opcion_orden: index
      };
      this.fieldFormService.createOption(option).subscribe(data => {});
    });
  }
  closeMe() {
    this.dialogRef.close();
  }
  ngOnInit() {}
}
ModalAddfieldComponent.ɵfac = function ModalAddfieldComponent_Factory(t) {
  return new (t || ModalAddfieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_forms_object_types_service__WEBPACK_IMPORTED_MODULE_0__.ObjectTypesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_forms_field_form_service__WEBPACK_IMPORTED_MODULE_1__.FieldFormService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA));
};
ModalAddfieldComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ModalAddfieldComponent,
  selectors: [["app-modal-addfield"]],
  decls: 22,
  vars: 6,
  consts: [["mat-dialog-title", ""], ["matInput", "", "placeholder", "Nombre del Campo", "name", "fieldName", 3, "disabled", "ngModel", "ngModelChange"], ["required", "", 3, "ngModel", "ngModelChange"], ["selectType", ""], [3, "value", 4, "ngFor", "ngForOf"], ["color", "primary", "labelPosition", "before", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["mat-raised-button", "", 3, "click"], [3, "value"], ["required", "", "matInput", "", "placeholder", "Opcion 1,Opcion 2", 3, "ngModel", "ngModelChange"], ["align", "left"]],
  template: function ModalAddfieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Agregar nuevo campo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-dialog-content")(3, "mat-form-field")(4, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalAddfieldComponent_Template_input_ngModelChange_4_listener($event) {
        return ctx.fieldName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field")(7, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Tipo de Campo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-select", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalAddfieldComponent_Template_mat_select_ngModelChange_9_listener($event) {
        return ctx.fieldType = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ModalAddfieldComponent_mat_option_11_Template, 3, 3, "mat-option", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-slide-toggle", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalAddfieldComponent_Template_mat_slide_toggle_ngModelChange_13_listener($event) {
        return ctx.fieldRequired = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Requerido?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ModalAddfieldComponent_mat_form_field_16_Template, 6, 1, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-dialog-actions")(18, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalAddfieldComponent_Template_button_click_18_listener() {
        return ctx.createFieldForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Aceptar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalAddfieldComponent_Template_button_click_20_listener() {
        return ctx.closeMe();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Cancelar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", false)("ngModel", ctx.fieldName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.fieldType);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.fieldTypes);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.fieldRequired);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fieldType == 2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatHint, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__.MatSlideToggle],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 43297:
/*!****************************************************************************!*\
  !*** ./src/app/home/components/modal-category/modal-category.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalCategoryComponent": () => (/* binding */ ModalCategoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_category_layers_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/category_layers/category.service */ 47761);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);









function ModalCategoryComponent_h1_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Crear Categor\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ModalCategoryComponent_h1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Editar Categor\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ModalCategoryComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalCategoryComponent_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.createCategory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Crear");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ModalCategoryComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalCategoryComponent_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.editCategory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class ModalCategoryComponent {
  constructor(categoryService, dialogRef, data) {
    this.categoryService = categoryService;
    this.dialogRef = dialogRef;
    this.data = data;
    this.action_type = "create";
    if (typeof data.data !== "undefined") {
      this.id = data.data.categoria_capa_id;
      this.name = data.data.categoria_capa_nombre;
      this.hash = data.data.gx_md5_hash;
      this.action_type = "edit";
    }
  }
  ngOnInit() {}
  closeMe() {
    this.dialogRef.close();
  }
  createCategory() {
    var categoryDetails = {
      categoria_capa_nombre: this.name,
      categoria_capa_fecha_creacion: this.date
    };
    this.categoryService.createCategory(categoryDetails).subscribe(data => {
      this.dialogRef.close({
        data: data
      });
    });
  }
  editCategory() {
    var categoryDetails = {
      categoria_capa_id: this.id,
      categoria_capa_nombre: this.name,
      categoria_capa_fecha_creacion: this.date,
      gx_md5_hash: this.hash
    };
    this.categoryService.updateCategory(this.id, categoryDetails).subscribe(data => {
      this.dialogRef.close({
        data: data
      });
    });
  }
  deleteCategory(id) {
    this.categoryService.deleteCategory(this.id).subscribe(data => {
      this.dialogRef.close({
        data: data,
        type: this.action_type
      });
    });
  }
  close() {
    this.dialogRef.close();
  }
}
ModalCategoryComponent.ɵfac = function ModalCategoryComponent_Factory(t) {
  return new (t || ModalCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_category_layers_category_service__WEBPACK_IMPORTED_MODULE_0__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
};
ModalCategoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ModalCategoryComponent,
  selectors: [["app-modal-category"]],
  decls: 10,
  vars: 6,
  consts: [["mat-dialog-title", "", 4, "ngIf"], [1, "create-category"], ["matInput", "", "placeholder", "Nombre de la categor\u00EDa", "required", "", 3, "disabled", "ngModel", "ngModelChange"], ["mat-raised-button", "", 3, "click", 4, "ngIf"], ["mat-raised-button", "", 3, "click"], ["mat-dialog-title", ""]],
  template: function ModalCategoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ModalCategoryComponent_h1_0_Template, 2, 0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModalCategoryComponent_h1_1_Template, 2, 0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "mat-form-field")(4, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ModalCategoryComponent_Template_input_ngModelChange_4_listener($event) {
        return ctx.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-dialog-actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ModalCategoryComponent_button_6_Template, 2, 0, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ModalCategoryComponent_button_7_Template, 2, 0, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalCategoryComponent_Template_button_click_8_listener() {
        return ctx.closeMe();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Cancelar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.action_type === "create");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.action_type === "edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", false)("ngModel", ctx.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.action_type === "create");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.action_type === "edit");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel],
  styles: [".create-category[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 270px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9jb21wb25lbnRzL21vZGFsLWNhdGVnb3J5L21vZGFsLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlLWNhdGVnb3J5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDI3MHB4O1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 38767:
/*!******************************************************************************!*\
  !*** ./src/app/home/components/modal-form-user/modal-form-user.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalFormUserComponent": () => (/* binding */ ModalFormUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _home_services_layers_layer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../home/services/layers/layer.service */ 13737);
/* harmony import */ var _home_services_category_layers_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../home/services/category_layers/category.service */ 47761);
/* harmony import */ var _home_services_forms_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../home/services/forms/form.service */ 46235);
/* harmony import */ var _services_users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/users/users.service */ 43472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);














function ModalFormUserComponent_mat_progress_bar_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 9);
  }
}
function ModalFormUserComponent_mat_list_item_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list-item")(1, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const form_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](form_r4.formulario_nombre);
  }
}
function ModalFormUserComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ModalFormUserComponent_button_18_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const form_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.selectForm(form_r5.formulario_Id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const form_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](form_r5.formulario_nombre);
  }
}
class ModalFormUserComponent {
  constructor(layerService, categoryService, formService, userService, dialogRef, data) {
    this.layerService = layerService;
    this.categoryService = categoryService;
    this.formService = formService;
    this.userService = userService;
    this.dialogRef = dialogRef;
    this.data = data;
    this.formsUser = [];
    this.formsAdd = [];
    this.getFormsUser(data.data);
    this.getForms();
    this.userId = data.idUser;
  }
  getFormsUser(data) {
    this.formsUser = [];
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const element = data[key];
        this.formsUser.push(element);
      }
    }
  }
  ngOnInit() {}
  getForms() {
    this.formsAdd = [];
    this.formService.getForms().subscribe(data => {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const element2 = data[key];
          if (!this.formsUser.find(element => element.formulario_id == element2.formulario_Id)) {
            this.formsAdd.push(element2);
          }
        }
      }
    });
  }
  selectForm(formId) {
    const form_user = {
      usuario_realgisId: this.userId,
      formulario_id: formId,
      formulario_usuario_estado: 1
    };
    this.userService.assignFormUser(form_user).subscribe(data1 => {
      this.formService.getFormsUser(this.userId).subscribe(data2 => {
        this.getFormsUser(data2);
        this.getForms();
      });
    });
  }
}
ModalFormUserComponent.ɵfac = function ModalFormUserComponent_Factory(t) {
  return new (t || ModalFormUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_home_services_layers_layer_service__WEBPACK_IMPORTED_MODULE_0__.LayerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_home_services_category_layers_category_service__WEBPACK_IMPORTED_MODULE_1__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_home_services_forms_form_service__WEBPACK_IMPORTED_MODULE_2__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_users_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA));
};
ModalFormUserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ModalFormUserComponent,
  selectors: [["app-modal-form-user"]],
  decls: 19,
  vars: 5,
  consts: [["mat-icon-button", "", 1, "close-button", 3, "mat-dialog-close"], [1, "close-icon"], ["mat-dialog-title", "", "align", "center"], ["mode", "indeterminate", 4, "ngIf"], [1, "create-category"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "matTooltip", "Asignar un nuevo formulario a este usuario", "cdkFocusInitial", "", 3, "matMenuTriggerFor"], ["menuForms", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mode", "indeterminate"], ["mat-list-icon", ""], ["mat-line", ""], ["mat-menu-item", "", 3, "click"]],
  template: function ModalFormUserComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0)(1, "mat-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Formularios asignados");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ModalFormUserComponent_mat_progress_bar_5_Template, 1, 0, "mat-progress-bar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-dialog-content", 4)(7, "mat-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ModalFormUserComponent_mat_list_item_8_Template, 5, 1, "mat-list-item", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-dialog-actions")(10, "button", 6)(11, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "assignment_ind");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "sup")(14, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-menu", null, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ModalFormUserComponent_button_18_Template, 2, 1, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mat-dialog-close", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.formsUser == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.formsUser);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.formsAdd);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListItem, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__.MatProgressBar, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip],
  styles: [".close-button[_ngcontent-%COMP%] {\n    float: right;\n    z-index: 100;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9jb21wb25lbnRzL21vZGFsLWZvcm0tdXNlci9tb2RhbC1mb3JtLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0VBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xvc2UtYnV0dG9uIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgei1pbmRleDogMTAwO1xuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 67094:
/*!**********************************************************************!*\
  !*** ./src/app/home/components/modal-forms/modal-forms.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalFormsComponent": () => (/* binding */ ModalFormsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_forms_form_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/forms/form.service */ 46235);
/* harmony import */ var _services_forms_field_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/forms/field-form.service */ 21322);
/* harmony import */ var _home_services_layers_layer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../home/services/layers/layer.service */ 13737);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);














function ModalFormsComponent_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const layer_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", layer_r1.capa_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", layer_r1.capa_nombre, " ");
  }
}
class ModalFormsComponent {
  constructor(formService, fieldFormService, layerService, dialogRef, data) {
    this.formService = formService;
    this.fieldFormService = fieldFormService;
    this.layerService = layerService;
    this.dialogRef = dialogRef;
    this.data = data;
    this.layerService.getLayers().subscribe(data => {
      this.layers = data;
    });
  }
  ngOnInit() {}
  closeMe() {
    this.dialogRef.close();
  }
  createForm() {
    const formDetails = {
      formulario_nombre: this.name,
      formulario_descripcion: this.description,
      capa_id: this.layer,
      formulario_estado: 1
    };
    this.formService.createForm(formDetails).subscribe(data => {
      this.dialogRef.close({
        data
      });
      let fieldFormDetails;
    });
  }
}
ModalFormsComponent.ɵfac = function ModalFormsComponent_Factory(t) {
  return new (t || ModalFormsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_forms_form_service__WEBPACK_IMPORTED_MODULE_0__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_forms_field_form_service__WEBPACK_IMPORTED_MODULE_1__.FieldFormService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_home_services_layers_layer_service__WEBPACK_IMPORTED_MODULE_2__.LayerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA));
};
ModalFormsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ModalFormsComponent,
  selectors: [["app-modal-forms"]],
  decls: 20,
  vars: 7,
  consts: [["mat-icon-button", "", 1, "close-button", 3, "mat-dialog-close"], [1, "close-icon"], ["mat-dialog-title", ""], [1, "form-active"], ["matInput", "", "required", "", "placeholder", "Nombre", 3, "disabled", "ngModel", "ngModelChange"], ["matInput", "", "required", "", "placeholder", "Descripci\u00F3n", 3, "disabled", "ngModel", "ngModelChange"], ["name", "layer", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "cdkFocusInitial", "", 3, "click"], [3, "value"]],
  template: function ModalFormsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0)(1, "mat-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Nuevo Formulario");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-dialog-content", 3)(6, "mat-form-field")(7, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModalFormsComponent_Template_input_ngModelChange_7_listener($event) {
        return ctx.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-form-field")(9, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModalFormsComponent_Template_input_ngModelChange_9_listener($event) {
        return ctx.description = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-form-field")(11, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Capa");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-select", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModalFormsComponent_Template_mat_select_ngModelChange_13_listener($event) {
        return ctx.layer = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ModalFormsComponent_mat_option_14_Template, 2, 2, "mat-option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-dialog-actions")(16, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModalFormsComponent_Template_button_click_16_listener() {
        return ctx.createForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Crear");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModalFormsComponent_Template_button_click_18_listener() {
        return ctx.closeMe();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Cancelar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mat-dialog-close", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", false)("ngModel", ctx.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", false)("ngModel", ctx.description);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.layer);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.layers);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel],
  styles: [".form-active[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  float: right;\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9jb21wb25lbnRzL21vZGFsLWZvcm1zL21vZGFsLWZvcm1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1hY3RpdmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5jbG9zZS1idXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHotaW5kZXg6IDEwMDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 17327:
/*!**********************************************************************!*\
  !*** ./src/app/home/components/modal-layer/modal-layer.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalLayerComponent": () => (/* binding */ ModalLayerComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_layers_layer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/layers/layer.service */ 13737);
/* harmony import */ var _services_forms_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/forms/form.service */ 46235);
/* harmony import */ var _services_forms_field_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/forms/field-form.service */ 21322);
/* harmony import */ var _services_category_layers_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/category_layers/category.service */ 47761);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);














function ModalLayerComponent_h1_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Crear una nueva capa");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ModalLayerComponent_h1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Editar capa");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ModalLayerComponent_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", category_r6.categoria_capa_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", category_r6.categoria_capa_nombre, " ");
  }
}
function ModalLayerComponent_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const geometry_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", geometry_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", geometry_r7.description, " ");
  }
}
function ModalLayerComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ModalLayerComponent_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.createLayer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Crear");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ModalLayerComponent_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ModalLayerComponent_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.editLayer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class ModalLayerComponent {
  constructor(layerService, formService, fieldFormService, categoryService, dialogRef, data) {
    this.layerService = layerService;
    this.formService = formService;
    this.fieldFormService = fieldFormService;
    this.categoryService = categoryService;
    this.dialogRef = dialogRef;
    this.data = data;
    this.geometries = [{
      value: "1",
      description: "Línea"
    }, {
      value: "2",
      description: "Punto"
    }, {
      value: "3",
      description: "Polígono"
    }];
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
    this.action_type = "create";
    if (typeof data.data !== "undefined") {
      this.id = data.data.capa_id;
      this.name = data.data.capa_nombre;
      this.category = data.data.categoria_capa_id;
      this.geometry = data.data.geometria_capa_id;
      this.description = data.data.capa_nombre_descripcion;
      this.hash = data.data.gx_md5_hash;
      this.action_type = "edit";
    }
  }
  ngOnInit() {}
  closeMe() {
    this.dialogRef.close();
  }
  createLayer() {
    const layerDetails = {
      geometria_capa_id: this.geometry,
      categoria_capa_id: this.category,
      capa_nombre: this.name,
      capa_nombre_descripcion: this.description,
      capa_nombre_estado: "1"
    };
    this.layerService.createLayer(layerDetails).subscribe(data => {
      this.dialogRef.close({
        data: data
      });
    });
  }
  editLayer() {
    const layerDetails = {
      capa_id: this.id,
      geometria_capa_id: this.geometry,
      categoria_capa_id: this.category,
      capa_nombre: this.name,
      capa_nombre_descripcion: this.description,
      capa_nombre_estado: "1",
      gx_md5_hash: this.hash
    };
    this.layerService.updateLayer(this.id, layerDetails).subscribe(data => {
      this.dialogRef.close({
        data: data
      });
    });
  }
}
ModalLayerComponent.ɵfac = function ModalLayerComponent_Factory(t) {
  return new (t || ModalLayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_layers_layer_service__WEBPACK_IMPORTED_MODULE_0__.LayerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_forms_form_service__WEBPACK_IMPORTED_MODULE_1__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_forms_field_form_service__WEBPACK_IMPORTED_MODULE_2__.FieldFormService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_category_layers_category_service__WEBPACK_IMPORTED_MODULE_3__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA));
};
ModalLayerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ModalLayerComponent,
  selectors: [["app-modal-layer"]],
  decls: 22,
  vars: 12,
  consts: [["mat-dialog-title", "", 4, "ngIf"], [1, "create-layer"], ["matInput", "", "placeholder", "Nombre de la Capa", "required", "", 3, "disabled", "ngModel", "ngModelChange"], ["required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Descripci\u00F3n", "required", "", 3, "disabled", "ngModel", "ngModelChange"], ["mat-raised-button", "", 3, "click", 4, "ngIf"], ["mat-raised-button", "", 3, "click"], ["mat-dialog-title", ""], [3, "value"]],
  template: function ModalLayerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ModalLayerComponent_h1_0_Template, 2, 0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ModalLayerComponent_h1_1_Template, 2, 0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "mat-form-field")(4, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ModalLayerComponent_Template_input_ngModelChange_4_listener($event) {
        return ctx.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-form-field")(6, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Categor\u00EDa Capa");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-select", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ModalLayerComponent_Template_mat_select_ngModelChange_8_listener($event) {
        return ctx.category = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ModalLayerComponent_mat_option_9_Template, 2, 2, "mat-option", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-form-field")(11, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Geometr\u00EDa Capa");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-select", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ModalLayerComponent_Template_mat_select_ngModelChange_13_listener($event) {
        return ctx.geometry = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ModalLayerComponent_mat_option_14_Template, 2, 2, "mat-option", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-form-field")(16, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ModalLayerComponent_Template_input_ngModelChange_16_listener($event) {
        return ctx.description = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-dialog-actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ModalLayerComponent_button_18_Template, 2, 0, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, ModalLayerComponent_button_19_Template, 2, 0, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ModalLayerComponent_Template_button_click_20_listener() {
        return ctx.closeMe();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Cancelar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.action_type === "create");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.action_type === "edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", false)("ngModel", ctx.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.category);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.categories);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.geometry);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.geometries);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", false)("ngModel", ctx.description);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.action_type === "create");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.action_type === "edit");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel],
  styles: [".create-layer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 300px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9jb21wb25lbnRzL21vZGFsLWxheWVyL21vZGFsLWxheWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlLWxheWVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 11018:
/*!****************************************************************************!*\
  !*** ./src/app/home/components/modal-new-user/modal-new-user.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalNewUserComponent": () => (/* binding */ ModalNewUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_users_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/users/users.service */ 43472);
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/login/login.service */ 6817);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);















function ModalNewUserComponent_h1_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Editar usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ModalNewUserComponent_h1_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Crear nuevo usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ModalNewUserComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21)(1, "mat-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalNewUserComponent_td_13_Template_mat_checkbox_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.disabled[0] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.disabled[0]);
  }
}
function ModalNewUserComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21)(1, "mat-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalNewUserComponent_td_19_Template_mat_checkbox_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.disabled[1] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.disabled[1]);
  }
}
function ModalNewUserComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21)(1, "mat-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalNewUserComponent_td_26_Template_mat_checkbox_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.disabled[2] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r4.disabled[2]);
  }
}
function ModalNewUserComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21)(1, "mat-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalNewUserComponent_td_32_Template_mat_checkbox_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.disabled[3] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r5.disabled[3]);
  }
}
function ModalNewUserComponent_td_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21)(1, "mat-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalNewUserComponent_td_49_Template_mat_checkbox_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.disabled[4] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r6.disabled[4]);
  }
}
function ModalNewUserComponent_td_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21)(1, "mat-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalNewUserComponent_td_55_Template_mat_checkbox_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r24.disabled[5] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r7.disabled[5]);
  }
}
function ModalNewUserComponent_td_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21)(1, "mat-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalNewUserComponent_td_62_Template_mat_checkbox_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r26.disabled[6] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r8.disabled[6]);
  }
}
function ModalNewUserComponent_td_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21)(1, "mat-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalNewUserComponent_td_69_Template_mat_checkbox_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.disabled[7] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r9.disabled[7]);
  }
}
function ModalNewUserComponent_td_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21)(1, "mat-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalNewUserComponent_td_75_Template_mat_checkbox_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r30.disabled[8] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r10.disabled[8]);
  }
}
function ModalNewUserComponent_td_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td")(1, "mat-form-field")(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Rol");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalNewUserComponent_td_77_Template_mat_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r32.rol = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Administrador");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Reconocedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Consulta");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r11.rol)("disabled", !ctx_r11.disabled[9]);
  }
}
function ModalNewUserComponent_button_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalNewUserComponent_button_79_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r34.createUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Crear Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ModalNewUserComponent_button_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalNewUserComponent_button_80_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r36.editUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Editar Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class ModalNewUserComponent {
  constructor(userService, loginService, _snackBar, dialogRef, data) {
    this.userService = userService;
    this.loginService = loginService;
    this._snackBar = _snackBar;
    this.dialogRef = dialogRef;
    this.data = data;
    this.disabled = [];
    this.edit = this.data.edit;
    if (this.edit) {
      this.userService.getUser(data.idUser).subscribe(data => {
        this.nombre1 = data["usuario_realgisNombre1"];
        this.nombre2 = data["usuario_realgisNombre2"];
        this.apellido1 = data["usuario_realgisApellido1"];
        this.apellido2 = data["usuario_realgisApellido2"];
        this.tipoDoc = data["usuario_realgisTipo"];
        this.numDoc = data["usuario_realgisDoc"];
        this.email = data["usuario_realgisCorreo"];
        this.user = data["usuario_realgisUsuario"];
        this.pass = data["usuario_realgisClave"];
        this.rol = data["usuario_realgisRolIni"];
        this.disabled = [false, false, false, false, false, false, false, false, false, false, false];
      });
    } else {
      this.disabled = [true, true, true, true, true, true, true, true, true, true, true];
    }
  }
  ngOnInit() {}
  createUser() {
    const user = {
      usuario_realgisTipo: this.tipoDoc,
      usuario_realgisDoc: this.numDoc,
      usuario_realgisNombre1: this.nombre1,
      usuario_realgisNombre2: this.nombre2,
      usuario_realgisApellido1: this.apellido1,
      usuario_realgisApellido2: this.apellido2,
      usuario_realgisUsuario: this.user,
      usuario_realgisClave: this.pass,
      usuario_realgisEstado: 1,
      usuario_realgisCorreo: this.email,
      usuario_realgisUsuarioCreacion: this.loginService.userName + " " + this.loginService.userLastname,
      usuario_realgisRolIni: this.rol
    };
    this.userService.createNewUser(user).subscribe(data => {
      if (data["SDTReporteErrores"][0]["Id"] == 1) {
        this.dialogRef.close();
      }
      this._snackBar.open(data["SDTReporteErrores"][0]["Descipcion"], "OK", {
        duration: 5000
      });
    });
  }
  editUser() {
    const user = {
      usuario_realgisId: this.data.idUser,
      usuario_realgisTipo: !this.disabled[4] ? "" : this.tipoDoc,
      usuario_realgisDoc: !this.disabled[5] ? "" : this.numDoc,
      usuario_realgisNombre1: !this.disabled[0] ? "" : this.nombre1,
      usuario_realgisNombre2: !this.disabled[1] ? "" : this.nombre2,
      usuario_realgisApellido1: !this.disabled[2] ? "" : this.apellido1,
      usuario_realgisApellido2: !this.disabled[3] ? "" : this.apellido2,
      usuario_realgisUsuario: !this.disabled[7] ? "" : this.user,
      usuario_realgisClave: !this.disabled[8] ? "" : this.pass,
      usuario_realgisEstado: "",
      usuario_realgisCorreo: !this.disabled[6] ? "" : this.email
    };
    this.userService.editUser(user).subscribe(data => {
      if (data["SDTReporteErrores"].length == 0) {
        this.dialogRef.close();
        this._snackBar.open("El Usuario se Edito correctamente", "OK", {
          duration: 5000
        });
      }
    });
  }
}
ModalNewUserComponent.ɵfac = function ModalNewUserComponent_Factory(t) {
  return new (t || ModalNewUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_users_users_service__WEBPACK_IMPORTED_MODULE_0__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_login_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA));
};
ModalNewUserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ModalNewUserComponent,
  selectors: [["app-modal-new-user"]],
  decls: 83,
  vars: 34,
  consts: [["mat-icon-button", "", 1, "close-button", 3, "mat-dialog-close"], [1, "close-icon"], ["mat-dialog-title", "", "align", "center", 4, "ngIf"], ["mat-dialog-content", ""], ["cellspacing", "2", 1, "full-width"], ["matInput", "", "type", "text", 3, "ngModel", "disabled", "ngModelChange"], ["class", "checkbox", 4, "ngIf"], [3, "ngModel", "disabled", "ngModelChange"], ["value", "CC"], ["value", "CE"], ["value", "TI"], ["value", "PS"], ["value", "NIT"], ["matInput", "", "type", "number", 3, "ngModel", "disabled", "ngModelChange"], ["matInput", "", "type", "email", 3, "ngModel", "disabled", "ngModelChange"], ["matInput", "", "type", "text", 3, "ngModel", "disabled", "type", "ngModelChange"], [4, "ngIf"], ["mat-dialog-actions", ""], ["mat-raised-button", "", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-dialog-title", "", "align", "center"], [1, "checkbox"], [3, "ngModel", "ngModelChange"], ["value", "1"], ["value", "2"], ["value", "3"], ["mat-raised-button", "", 3, "click"]],
  template: function ModalNewUserComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0)(1, "mat-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ModalNewUserComponent_h1_3_Template, 2, 0, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ModalNewUserComponent_h1_4_Template, 2, 0, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "table", 4)(7, "tr")(8, "td")(9, "mat-form-field")(10, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Primer Nombre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalNewUserComponent_Template_input_ngModelChange_12_listener($event) {
        return ctx.nombre1 = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ModalNewUserComponent_td_13_Template, 2, 1, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td")(15, "mat-form-field")(16, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Segundo Nombre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalNewUserComponent_Template_input_ngModelChange_18_listener($event) {
        return ctx.nombre2 = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ModalNewUserComponent_td_19_Template, 2, 1, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "tr")(21, "td")(22, "mat-form-field")(23, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Primer Apellido");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalNewUserComponent_Template_input_ngModelChange_25_listener($event) {
        return ctx.apellido1 = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ModalNewUserComponent_td_26_Template, 2, 1, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "td")(28, "mat-form-field")(29, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Segundo Apellido");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalNewUserComponent_Template_input_ngModelChange_31_listener($event) {
        return ctx.apellido2 = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, ModalNewUserComponent_td_32_Template, 2, 1, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "tr")(34, "td")(35, "mat-form-field")(36, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Tipo de Documento");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-select", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalNewUserComponent_Template_mat_select_ngModelChange_38_listener($event) {
        return ctx.tipoDoc = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Cedula de Ciudadania");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Cedula de Extranjeria");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Tarjeta de Identidad");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Pasaporte");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "NIT");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, ModalNewUserComponent_td_49_Template, 2, 1, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "td")(51, "mat-form-field")(52, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Numero de Documento");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalNewUserComponent_Template_input_ngModelChange_54_listener($event) {
        return ctx.numDoc = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, ModalNewUserComponent_td_55_Template, 2, 1, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "tr")(57, "td")(58, "mat-form-field")(59, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Correo Electronico");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalNewUserComponent_Template_input_ngModelChange_61_listener($event) {
        return ctx.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, ModalNewUserComponent_td_62_Template, 2, 1, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "tr")(64, "td")(65, "mat-form-field")(66, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Usuario");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalNewUserComponent_Template_input_ngModelChange_68_listener($event) {
        return ctx.user = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, ModalNewUserComponent_td_69_Template, 2, 1, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "td")(71, "mat-form-field")(72, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Contrase\u00F1a");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalNewUserComponent_Template_input_ngModelChange_74_listener($event) {
        return ctx.pass = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](75, ModalNewUserComponent_td_75_Template, 2, 1, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](77, ModalNewUserComponent_td_77_Template, 11, 2, "td", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](79, ModalNewUserComponent_button_79_Template, 2, 0, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](80, ModalNewUserComponent_button_80_Template, 2, 0, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Cancelar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.edit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.edit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.nombre1)("disabled", !ctx.disabled[0]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.edit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.nombre2)("disabled", !ctx.disabled[1]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.edit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.apellido1)("disabled", !ctx.disabled[2]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.edit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.apellido2)("disabled", !ctx.disabled[3]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.edit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.tipoDoc)("disabled", !ctx.disabled[4]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.edit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.numDoc)("disabled", !ctx.disabled[5]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.edit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.email)("disabled", !ctx.disabled[6]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.edit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user)("disabled", !ctx.disabled[7]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.edit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pass)("disabled", !ctx.disabled[8])("type", !ctx.disabled[8] ? "password" : "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.edit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.edit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.edit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.edit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckbox, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel],
  styles: [".full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n\ntr[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  float: right;\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9jb21wb25lbnRzL21vZGFsLW5ldy11c2VyL21vZGFsLW5ldy11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZCIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkIHtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG50ciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY2xvc2UtYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB6LWluZGV4OiAxMDA7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 11106:
/*!*******************************************************************************!*\
  !*** ./src/app/home/components/modal-remove-active/modal-remove.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalRemoveComponent": () => (/* binding */ ModalRemoveComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _view_services_panoramic_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../view/services/panoramic.service */ 30541);
/* harmony import */ var _view_services_active_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../view/services/active.service */ 94966);
/* harmony import */ var _services_forms_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/forms/form.service */ 46235);
/* harmony import */ var _services_filter_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/filter/filter.service */ 95722);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);













function ModalRemoveComponent_mat_progress_bar_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 11);
  }
}
function ModalRemoveComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 12)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", element_r5.nombre, " ");
  }
}
function ModalRemoveComponent_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r6.valor, " ");
  }
}
function ModalRemoveComponent_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 13);
  }
}
class ModalRemoveComponent {
  constructor(panoramicService, activeService, formService, filterService, dialogRef, data) {
    this.panoramicService = panoramicService;
    this.activeService = activeService;
    this.formService = formService;
    this.filterService = filterService;
    this.dialogRef = dialogRef;
    this.data = data;
    this.CAMPOS_ACTIVO = [];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource([]);
    this.loading = true;
    this.displayedColumns = [];
    this.id = data.id;
    this.lat = data.lat;
    this.lng = data.lng;
    this.name = data.name;
    this.hash = data.hash;
  }
  ngOnInit() {
    this.getCampos();
  }
  getCampos() {
    var formCapId;
    var camposActivo;
    this.activeService.getActive(this.id).subscribe(data => {
      formCapId = data["formulario_captura_id"];
      this.filterService.getCamposResultado(formCapId).subscribe(data2 => {
        camposActivo = data2;
        camposActivo.forEach(element => {
          const campoN = {
            nombre: element["formulario_campo_nombre"],
            valor: element["formulario_captura_campo_valor"],
            id: element["formulario_captura_campo_id"]
          };
          this.CAMPOS_ACTIVO.push(campoN);
        });
        this.CAMPOS_ACTIVO.sort(function (a, b) {
          if (a.id > b.id) {
            return 1;
          }
          if (a.id < b.id) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        const latitud = {
          nombre: "Latitud",
          valor: Number(this.lat),
          //valor: this.convertToDMS(this.lat) + (this.lat  >= 0 ? "N" : "S"),
          //Habilitar cuando se implemente en la herramienta de filtro
          id: 0
        };
        const longitud = {
          nombre: "Longitud",
          valor: Number(this.lng),
          //valor: this.convertToDMS(this.lng) + (this.lng >= 0 ? "E" : "W"), 
          //Habilitar cuando se implemente en la herramienta de filtro
          id: 0
        };
        this.CAMPOS_ACTIVO.push(latitud);
        this.CAMPOS_ACTIVO.push(longitud);
        this.generateTable();
      });
    });
  }
  generateTable() {
    this.displayedColumns = ["nombre", "valor"];
    this.loading = false;
    this.dataSource.data = this.CAMPOS_ACTIVO;
  }
  convertToDMS(coordinate) {
    var absolute = Math.abs(coordinate);
    var degrees = Math.floor(absolute);
    var minutesNotTruncated = (absolute - degrees) * 60;
    var minutes = Math.floor(minutesNotTruncated);
    var seconds = (minutesNotTruncated - minutes) * 60;
    return degrees + "°" + minutes + "'" + seconds.toFixed(2) + '"';
  }
  updateActive() {
    var activeDetails = {
      formulario_captura_nombre: this.name
    };
    this.activeService.updateActive(this.id, activeDetails).subscribe(data => {
      this.dialogRef.close({
        data: data
      });
    });
  }
  deleteActive() {
    this.activeService.deleteActive(this.id).subscribe(data => {
      this.panoramicService.deleteHotspot(this.id);
      this.dialogRef.close();
    });
  }
}
ModalRemoveComponent.ɵfac = function ModalRemoveComponent_Factory(t) {
  return new (t || ModalRemoveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_view_services_panoramic_service__WEBPACK_IMPORTED_MODULE_0__.PanoramicService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_view_services_active_service__WEBPACK_IMPORTED_MODULE_1__.ActiveService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_forms_form_service__WEBPACK_IMPORTED_MODULE_2__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_3__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA));
};
ModalRemoveComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ModalRemoveComponent,
  selectors: [["app-modal-remove"]],
  decls: 14,
  vars: 4,
  consts: [["mat-icon-button", "", 1, "close-button", 3, "mat-dialog-close"], [1, "close-icon"], ["mat-dialog-title", "", "align", "center"], ["mode", "query", "class", "progressBar", 4, "ngIf"], [1, "update-active"], ["mat-table", "", 3, "dataSource"], ["table", ""], ["matColumnDef", "nombre"], ["type", "text", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "valor"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mode", "query", 1, "progressBar"], ["type", "text", "mat-cell", ""], ["mat-row", ""]],
  template: function ModalRemoveComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0)(1, "mat-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Informaci\u00F3n Activo");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ModalRemoveComponent_mat_progress_bar_5_Template, 1, 0, "mat-progress-bar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-dialog-content", 4)(7, "table", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](9, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ModalRemoveComponent_td_10_Template, 3, 1, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](11, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ModalRemoveComponent_td_12_Template, 2, 1, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ModalRemoveComponent_tr_13_Template, 1, 0, "tr", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mat-dialog-close", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__.MatProgressBar],
  styles: [".update-active[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }.mat-column-nombre[_ngcontent-%COMP%]{\n    text-align: left;\n  }\n\n  .mat-column-valor[_ngcontent-%COMP%]{\n    text-align: right;\n    font-size: 12px;\n  }\n\n  .mat-column-nombre[_ngcontent-%COMP%]{\n    text-align: left;\n    font-size: 12px;\n  }\n\n  table[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0 0 0 0;\n  }\ntr.mat-mdc-row[_ngcontent-%COMP%]{\n  height: 30px;\n}\n\n  .close-button[_ngcontent-%COMP%]{\n    float: right;\n    z-index: 100;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9jb21wb25lbnRzL21vZGFsLXJlbW92ZS1hY3RpdmUvbW9kYWwtcmVtb3ZlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCLENBQUM7SUFDQyxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7QUFDRjtFQUNFLFlBQVk7QUFDZDs7RUFFRTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyIudXBkYXRlLWFjdGl2ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9Lm1hdC1jb2x1bW4tbm9tYnJle1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAubWF0LWNvbHVtbi12YWxvcntcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAubWF0LWNvbHVtbi1ub21icmV7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDAgMCAwO1xuICB9XG50ci5tYXQtbWRjLXJvd3tcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4gIC5jbG9zZS1idXR0b257XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHotaW5kZXg6IDEwMDtcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 11671:
/*!************************************************************************!*\
  !*** ./src/app/home/components/modal-window/modal-window.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalWindowComponent": () => (/* binding */ ModalWindowComponent)
/* harmony export */ });
/* harmony import */ var _modal_layer_modal_layer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal-layer/modal-layer.component */ 17327);
/* harmony import */ var _modal_category_modal_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-category/modal-category.component */ 43297);
/* harmony import */ var _modal_admon_active_admon_active_admon_active_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal_admon_active/admon-active/admon-active.component */ 25311);
/* harmony import */ var _modal_forms_modal_forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal-forms/modal-forms.component */ 67094);
/* harmony import */ var _modal_form_user_modal_form_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal-form-user/modal-form-user.component */ 38767);
/* harmony import */ var _modal_new_user_modal_new_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal-new-user/modal-new-user.component */ 11018);
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ 29405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _view_services_map_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../view/services/map.service */ 39569);
/* harmony import */ var _home_services_layers_layer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../home/services/layers/layer.service */ 13737);
/* harmony import */ var _home_services_category_layers_category_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../home/services/category_layers/category.service */ 47761);
/* harmony import */ var _home_services_forms_form_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../home/services/forms/form.service */ 46235);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _services_users_users_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/users/users.service */ 43472);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tabs */ 15892);























function ModalWindowComponent_mat_progress_bar_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "mat-progress-bar", 10);
  }
}
function ModalWindowComponent_mat_expansion_panel_9_ng_container_7_mat_expansion_panel_1_ng_container_10_mat_list_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div")(3, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ModalWindowComponent_mat_expansion_panel_9_ng_container_7_mat_expansion_panel_1_ng_container_10_mat_list_item_1_Template_mat_icon_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const form_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r12.editForm(form_r10.formulario_Id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ModalWindowComponent_mat_expansion_panel_9_ng_container_7_mat_expansion_panel_1_ng_container_10_mat_list_item_1_Template_mat_icon_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const form_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r15.deleteForm(form_r10.formulario_Id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const form_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", form_r10.formulario_nombre, " ");
  }
}
function ModalWindowComponent_mat_expansion_panel_9_ng_container_7_mat_expansion_panel_1_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ModalWindowComponent_mat_expansion_panel_9_ng_container_7_mat_expansion_panel_1_ng_container_10_mat_list_item_1_Template, 7, 1, "mat-list-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const form_r10 = ctx.$implicit;
    const layer_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", form_r10.capa_id == layer_r7.capa_id);
  }
}
function ModalWindowComponent_mat_expansion_panel_9_ng_container_7_mat_expansion_panel_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div")(5, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ModalWindowComponent_mat_expansion_panel_9_ng_container_7_mat_expansion_panel_1_Template_mat_icon_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21);
      const layer_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r19.editLayer(layer_r7.capa_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ModalWindowComponent_mat_expansion_panel_9_ng_container_7_mat_expansion_panel_1_Template_mat_icon_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21);
      const layer_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r22.deleteLayer(layer_r7.capa_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, ModalWindowComponent_mat_expansion_panel_9_ng_container_7_mat_expansion_panel_1_ng_container_10_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const layer_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", layer_r7.capa_nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r8.formsAdd);
  }
}
function ModalWindowComponent_mat_expansion_panel_9_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ModalWindowComponent_mat_expansion_panel_9_ng_container_7_mat_expansion_panel_1_Template, 11, 2, "mat-expansion-panel", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const layer_r7 = ctx.$implicit;
    const category_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", layer_r7.categoria_capa_id == category_r5.categoria_capa_id);
  }
}
function ModalWindowComponent_mat_expansion_panel_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ModalWindowComponent_mat_expansion_panel_9_Template_mat_icon_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r27);
      const category_r5 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r26.editCategory(category_r5.categoria_capa_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, ModalWindowComponent_mat_expansion_panel_9_ng_container_7_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", category_r5.categoria_capa_nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.layersAdd);
  }
}
function ModalWindowComponent_mat_expansion_panel_12_mat_icon_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ModalWindowComponent_mat_expansion_panel_12_mat_icon_31_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r32);
      const user_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r30.getFormsUser(user_r28.usuario_realgisId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "assignment_ind");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ModalWindowComponent_mat_expansion_panel_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "Nombres:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, "Apellidos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "Rol:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "Correo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "Identificaci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "Usuario:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "mat-action-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](31, ModalWindowComponent_mat_expansion_panel_12_mat_icon_31_Template, 2, 0, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ModalWindowComponent_mat_expansion_panel_12_Template_mat_icon_click_32_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34);
      const user_r28 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r33.openEditUser(user_r28.usuario_realgisId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ModalWindowComponent_mat_expansion_panel_12_Template_mat_icon_click_34_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34);
      const user_r28 = restoredCtx.$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r35.disableUser(user_r28.usuario_realgisId, user_r28.usuario_realgisNombre1, user_r28.usuario_realgisApellido1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35, "person_remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", user_r28.usuario_realgisNombre1, " ", user_r28.usuario_realgisApellido1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", user_r28.usuario_realgisNombre1, " ", user_r28.usuario_realgisNombre2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", user_r28.usuario_realgisApellido1, " ", user_r28.usuario_realgisApellido2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", user_r28.Rol_Nombre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", user_r28.usuario_realgisCorreo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", user_r28.usuario_realgisTipo, " ", user_r28.usuario_realgisDoc, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", user_r28.usuario_realgisUsuario, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", user_r28.Rol_Nombre == "Consulta" || user_r28.Rol_Nombre == "Reconocedor");
  }
}
function ModalWindowComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 21)(1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ModalWindowComponent_div_13_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r36.createCategory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "category");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "sup")(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ModalWindowComponent_div_13_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r37);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r38.createLayer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "layers");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "sup")(11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ModalWindowComponent_div_13_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r37);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r39.createForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "sup")(17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
}
function ModalWindowComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 21)(1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ModalWindowComponent_div_14_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r40.openCreateUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "person_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
class ModalWindowComponent {
  constructor(mapService, layerService, categoryService, formService, dialog, usersService, _snackBar) {
    this.mapService = mapService;
    this.layerService = layerService;
    this.categoryService = categoryService;
    this.formService = formService;
    this.dialog = dialog;
    this.usersService = usersService;
    this._snackBar = _snackBar;
    this.indexTab = 0;
    this.categoryService.getCategories().subscribe(data => {
      this.categoriesAdd = data;
    });
    this.layerService.getLayers().subscribe(data => {
      this.layersAdd = data;
    });
    this.formService.getForms().subscribe(data => {
      this.formsAdd = data;
    });
    this.getUsers();
  }
  ngOnInit() {}
  changeTab(index) {
    this.indexTab = index;
  }
  getUsers() {
    this.usersAdd = [];
    this.usersService.getUsers().subscribe(data => {
      this.usersAdd = data;
    });
  }
  createLayer() {
    this.dialog.open(_modal_layer_modal_layer_component__WEBPACK_IMPORTED_MODULE_0__.ModalLayerComponent, {
      data: {}
    }).afterClosed().subscribe(response => {
      this.layerService.getLayers().subscribe(data => {
        this.layersAdd = data;
      });
    });
  }
  editLayer(id) {
    this.layerService.getLayer(id).subscribe(data => {
      this.dialog.open(_modal_layer_modal_layer_component__WEBPACK_IMPORTED_MODULE_0__.ModalLayerComponent, {
        data: {
          data
        }
      }).afterClosed().subscribe(response => {
        this.layerService.getLayers().subscribe(data => {
          this.layersAdd = data;
        });
        this._snackBar.open("Se editó correctamente la capa", "OK", {
          duration: 5000
        });
      });
    });
  }
  deleteLayer(id) {
    this.layerService.deleteLayer(id).subscribe(data => {
      this.layerService.getLayers().subscribe(data => {
        this.layersAdd = data;
      });
      this._snackBar.open("Se eliminó correctamente la capa", "OK", {
        duration: 5000
      });
    });
  }
  createCategory() {
    this.dialog.open(_modal_category_modal_category_component__WEBPACK_IMPORTED_MODULE_1__.ModalCategoryComponent, {
      data: {}
    }).afterClosed().subscribe(response => {
      this.categoryService.getCategories().subscribe(data => {
        this.categoriesAdd = data;
      });
    });
  }
  editCategory(id) {
    this.categoryService.getCategory(id).subscribe(data => {
      this.dialog.open(_modal_category_modal_category_component__WEBPACK_IMPORTED_MODULE_1__.ModalCategoryComponent, {
        data: {
          data
        }
      }).afterClosed().subscribe(response => {
        this.categoryService.getCategories().subscribe(data => {
          this.categoriesAdd = data;
          this._snackBar.open("Se editó/eliminó correctamente la categoría", "OK", {
            duration: 5000
          });
        });
      });
    });
  }
  createForm() {
    this.dialog.open(_modal_forms_modal_forms_component__WEBPACK_IMPORTED_MODULE_3__.ModalFormsComponent, {
      data: {}
    }).afterClosed().subscribe(response => {
      this.formService.getForms().subscribe(data => {
        this.formsAdd = data;
      });
    });
  }
  editForm(id) {
    this.dialog.open(_modal_admon_active_admon_active_admon_active_component__WEBPACK_IMPORTED_MODULE_2__.AdmonActiveComponent, {
      data: {
        id
      }
    }).afterClosed().subscribe(response => {
      /*this.categoryService.getCategories().subscribe((data: {}) => {
        this.categoriesAdd = data;
      });*/
    });
  }
  deleteForm(id) {
    this.formService.deleteForm(id).subscribe(data => {
      this.formService.getForms().subscribe(data => {
        this.formsAdd = data;
      });
      this._snackBar.open("Se eliminó correctamente el formulario", "OK", {
        duration: 5000
      });
    });
  }
  getFormsUser(idUser) {
    this.formService.getFormsUser(idUser).subscribe(data => {
      this.dialog.open(_modal_form_user_modal_form_user_component__WEBPACK_IMPORTED_MODULE_4__.ModalFormUserComponent, {
        data: {
          data,
          idUser
        },
        autoFocus: false
      });
    });
  }
  openCreateUser() {
    const dialogRef = this.dialog.open(_modal_new_user_modal_new_user_component__WEBPACK_IMPORTED_MODULE_5__.ModalNewUserComponent, {
      data: {
        edit: false
      },
      autoFocus: true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getUsers();
    });
  }
  openEditUser(idUser) {
    const dialogRef = this.dialog.open(_modal_new_user_modal_new_user_component__WEBPACK_IMPORTED_MODULE_5__.ModalNewUserComponent, {
      data: {
        edit: true,
        idUser
      },
      autoFocus: true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getUsers();
    });
  }
  disableUser(idUser, username, lastname) {
    const dialogRef = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmDialogComponent, {
      data: {
        message: "¿Desea inhabilitar este Usuario?",
        confirmAction: "Inhabilitar",
        message2: username + " " + lastname
      },
      autoFocus: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const user = {
          usuario_realgisId: idUser
        };
        this.usersService.disableUser(user).subscribe(data => {
          this._snackBar.open(data["SDTReporteErrores"][0]["Descipcion"], "OK", {
            duration: 5000
          });
          this.getUsers();
        });
      }
    });
  }
  changeActuallyCategoryLayer(category, layer, form, formId) {
    this.mapService.setCurrentCategory(category);
    this.mapService.setCurrentLayer(layer);
    this.mapService.setCurrentForm(form);
    this.mapService.setCurrentFormId(formId);
  }
}
ModalWindowComponent.ɵfac = function ModalWindowComponent_Factory(t) {
  return new (t || ModalWindowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_view_services_map_service__WEBPACK_IMPORTED_MODULE_7__.MapService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_home_services_layers_layer_service__WEBPACK_IMPORTED_MODULE_8__.LayerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_home_services_category_layers_category_service__WEBPACK_IMPORTED_MODULE_9__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_home_services_forms_form_service__WEBPACK_IMPORTED_MODULE_10__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_users_users_service__WEBPACK_IMPORTED_MODULE_11__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBar));
};
ModalWindowComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: ModalWindowComponent,
  selectors: [["app-modal-window"]],
  decls: 15,
  vars: 6,
  consts: [["mat-icon-button", "", 1, "close-button", 3, "mat-dialog-close"], [1, "close-icon"], ["mat-dialog-title", "", "align", "center"], ["mode", "indeterminate", 4, "ngIf"], ["mat-align-tabs", "center", "mat-dialog-content", "", 3, "selectedIndexChange"], ["label", "Espacio de Trabajo"], [1, "content-settings"], [4, "ngFor", "ngForOf"], ["label", "Gesti\u00F3n de Usuarios"], ["mat-dialog-actions", "", 4, "ngIf"], ["mode", "indeterminate"], ["matTooltip", "Editar Nombre de Categoria", "color", "primary", 1, "button-layer", 3, "click"], [4, "ngIf"], ["matTooltip", "Editar Capa", "color", "primary", 3, "click"], ["matTooltip", "Eliminar esta Capa", 1, "button-layer", "colorRed", 3, "click"], ["matTooltip", "Ver o agregar campos del Formulario", "color", "primary", 1, "button-layer", 3, "click"], ["matTooltip", "Eliminar este Formulario", 1, "button-layer", "colorRed", 3, "click"], ["matTooltip", "Ver formularios asignados", "class", "button-layer", "color", "primary", 3, "click", 4, "ngIf"], ["matTooltip", "Editar usuario", "color", "primary", 1, "button-layer", 3, "click"], ["matTooltip", "Inhabilitar usuario", 1, "button-layer", "colorRed", 3, "click"], ["matTooltip", "Ver formularios asignados", "color", "primary", 1, "button-layer", 3, "click"], ["mat-dialog-actions", ""], ["mat-raised-button", "", "matTooltip", "Crear una nueva Categoria", 3, "click"], ["mat-raised-button", "", "matTooltip", "Crear una nueva Capa", 3, "click"], ["mat-raised-button", "", "matTooltip", "Crear un nuevo formulario", 3, "click"], ["mat-raised-button", "", "matTooltip", "Crear un nuevo Usuario", 3, "click"]],
  template: function ModalWindowComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 0)(1, "mat-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Configuraci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, ModalWindowComponent_mat_progress_bar_5_Template, 1, 0, "mat-progress-bar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "mat-tab-group", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selectedIndexChange", function ModalWindowComponent_Template_mat_tab_group_selectedIndexChange_6_listener($event) {
        return ctx.changeTab($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "mat-tab", 5)(8, "mat-accordion", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, ModalWindowComponent_mat_expansion_panel_9_Template, 8, 2, "mat-expansion-panel", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "mat-tab", 8)(11, "mat-accordion");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, ModalWindowComponent_mat_expansion_panel_12_Template, 36, 12, "mat-expansion-panel", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, ModalWindowComponent_div_13_Template, 19, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, ModalWindowComponent_div_14_Template, 4, 0, "div", 9);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("mat-dialog-close", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.categoriesAdd == null || ctx.layersAdd == null || ctx.formsAdd == null || ctx.usersAdd == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.categoriesAdd);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.usersAdd);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.indexTab == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.indexTab == 1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatIconButton, _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatListItem, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionPanelActionRow, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionPanelTitle, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__.MatProgressBar, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltip, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabGroup],
  styles: [".button-layer[_ngcontent-%COMP%]{\n  cursor: pointer;\n}\n\n.mat-expansion-panel-header-title[_ngcontent-%COMP%]{\n  justify-content: space-between;\n}\n\n.colorRed[_ngcontent-%COMP%]{\n  color:red\n}\n\n.content-settings[_ngcontent-%COMP%]{\n  flex-basis: 0;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 8px;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  float: right;\n  z-index: 100;\n}\n\n.mat-mdc-list-item-icon[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9jb21wb25lbnRzL21vZGFsLXdpbmRvdy9tb2RhbC13aW5kb3cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQztFQUNDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QiIsInNvdXJjZXNDb250ZW50IjpbIiAuYnV0dG9uLWxheWVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZXtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY29sb3JSZWR7XG4gIGNvbG9yOnJlZFxufVxuXG4uY29udGVudC1zZXR0aW5nc3tcbiAgZmxleC1iYXNpczogMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uY2xvc2UtYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5tYXQtbWRjLWxpc3QtaXRlbS1pY29uIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 73160:
/*!******************************************************************************!*\
  !*** ./src/app/home/components/modal-workspace/modal-workspace.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalWorkspaceComponent": () => (/* binding */ ModalWorkspaceComponent)
/* harmony export */ });
/* harmony import */ var _modal_layer_modal_layer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal-layer/modal-layer.component */ 17327);
/* harmony import */ var _modal_category_modal_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-category/modal-category.component */ 43297);
/* harmony import */ var _modal_admon_active_admon_active_admon_active_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal_admon_active/admon-active/admon-active.component */ 25311);
/* harmony import */ var _modal_forms_modal_forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal-forms/modal-forms.component */ 67094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _view_services_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../view/services/map.service */ 39569);
/* harmony import */ var _home_services_layers_layer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../home/services/layers/layer.service */ 13737);
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/login/login.service */ 6817);
/* harmony import */ var _home_services_category_layers_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../home/services/category_layers/category.service */ 47761);
/* harmony import */ var _home_services_forms_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../home/services/forms/form.service */ 46235);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);


















function ModalWorkspaceComponent_mat_progress_bar_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "mat-progress-bar", 7);
  }
}
function ModalWorkspaceComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "No se han asignado formularios al usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ModalWorkspaceComponent_mat_expansion_panel_9_ng_container_5_mat_expansion_panel_1_ng_container_5_mat_list_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-list-item")(1, "mat-radio-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ModalWorkspaceComponent_mat_expansion_panel_9_ng_container_5_mat_expansion_panel_1_ng_container_5_mat_list_item_1_Template_mat_radio_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12);
      const form_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const layer_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
      const category_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r10.changeActuallyCategoryLayer(category_r3.categoria_capa_nombre, layer_r5.capa_nombre, form_r8.formulario_nombre, form_r8.formulario_Id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const form_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", form_r8.formulario_nombre, "");
  }
}
function ModalWorkspaceComponent_mat_expansion_panel_9_ng_container_5_mat_expansion_panel_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ModalWorkspaceComponent_mat_expansion_panel_9_ng_container_5_mat_expansion_panel_1_ng_container_5_mat_list_item_1_Template, 3, 1, "mat-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const form_r8 = ctx.$implicit;
    const layer_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", form_r8.capa_id == layer_r5.capa_id);
  }
}
function ModalWorkspaceComponent_mat_expansion_panel_9_ng_container_5_mat_expansion_panel_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ModalWorkspaceComponent_mat_expansion_panel_9_ng_container_5_mat_expansion_panel_1_ng_container_5_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const layer_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", layer_r5.capa_nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r6.formsAdd);
  }
}
function ModalWorkspaceComponent_mat_expansion_panel_9_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ModalWorkspaceComponent_mat_expansion_panel_9_ng_container_5_mat_expansion_panel_1_Template, 6, 2, "mat-expansion-panel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const layer_r5 = ctx.$implicit;
    const category_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", layer_r5.categoria_capa_id == category_r3.categoria_capa_id);
  }
}
function ModalWorkspaceComponent_mat_expansion_panel_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ModalWorkspaceComponent_mat_expansion_panel_9_ng_container_5_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", category_r3.categoria_capa_nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.layersAdd);
  }
}
class ModalWorkspaceComponent {
  constructor(mapService, layerService, loginService, categoryService, formService, dialog) {
    this.mapService = mapService;
    this.layerService = layerService;
    this.loginService = loginService;
    this.categoryService = categoryService;
    this.formService = formService;
    this.dialog = dialog;
    this.layersAdd = [];
    this.categoriesAdd = [];
    this.formsAdd = [];
    this.formsAsignados = false;
    this.userId = this.loginService.getuserId();
    this.userRol = this.loginService.getUserRol();
    if (this.userRol == "Administrador") {
      this.categoryService.getCategories().subscribe(data => {
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            const element = data[key];
            this.categoriesAdd.push(element);
          }
        }
      });
      this.layerService.getLayers().subscribe(data => {
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            const element = data[key];
            this.layersAdd.push(element);
          }
        }
      });
      this.formService.getForms().subscribe(data => {
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            const element = data[key];
            this.formsAdd.push(element);
          }
        }
      });
    } else {
      this.formService.getFormsUser(this.userId).subscribe(dataForms => {
        if (!dataForms[0]) {
          this.formsAsignados = true;
        }
        ;
        for (const key in dataForms) {
          if (Object.prototype.hasOwnProperty.call(dataForms, key)) {
            const element = dataForms[key];
            this.formService.getForm(element.formulario_id).subscribe(dataForm => {
              this.formsAdd.push(dataForm);
              this.layerService.getLayer(dataForm["capa_id"]).subscribe(dataLayer => {
                if (!this.layersAdd.find(element => element["capa_id"] == dataLayer["capa_id"])) {
                  this.layersAdd.push(dataLayer);
                }
                this.categoryService.getCategory(dataLayer["categoria_capa_id"]).subscribe(dataCategory => {
                  if (!this.categoriesAdd.find(element => element["categoria_capa_id"] == dataLayer["categoria_capa_id"])) {
                    this.categoriesAdd.push(dataCategory);
                  }
                });
              });
            });
          }
        }
      });
    }
  }
  ngOnInit() {}
  createLayer() {
    this.dialog.open(_modal_layer_modal_layer_component__WEBPACK_IMPORTED_MODULE_0__.ModalLayerComponent, {
      data: {}
    }).afterClosed().subscribe(response => {
      this.layerService.getLayers().subscribe(data => {
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            const element = data[key];
            this.layersAdd.push(element);
          }
        }
      });
    });
  }
  editLayer(id) {
    this.layerService.getLayer(id).subscribe(data => {
      this.dialog.open(_modal_layer_modal_layer_component__WEBPACK_IMPORTED_MODULE_0__.ModalLayerComponent, {
        data: {
          data
        }
      }).afterClosed().subscribe(response => {
        this.layerService.getLayers().subscribe(data => {
          for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
              const element = data[key];
              this.layersAdd.push(element);
            }
          }
        });
        alert("Se editó correctamente la capa");
      });
    });
  }
  deleteLayer(id) {
    this.layerService.deleteLayer(id).subscribe(data => {
      this.layerService.getLayers().subscribe(data => {
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            const element = data[key];
            this.layersAdd.push(element);
          }
        }
      });
      alert("Se eliminó correctamente la capa");
    });
  }
  createCategory() {
    this.dialog.open(_modal_category_modal_category_component__WEBPACK_IMPORTED_MODULE_1__.ModalCategoryComponent, {
      data: {}
    }).afterClosed().subscribe(response => {
      this.categoryService.getCategories().subscribe(data => {
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            const element = data[key];
            this.categoriesAdd.push(element);
          }
        }
      });
    });
  }
  editCategory(id) {
    this.categoryService.getCategory(id).subscribe(data => {
      this.dialog.open(_modal_category_modal_category_component__WEBPACK_IMPORTED_MODULE_1__.ModalCategoryComponent, {
        data: {
          data
        }
      }).afterClosed().subscribe(response => {
        this.categoryService.getCategories().subscribe(data => {
          for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
              const element = data[key];
              this.categoriesAdd.push(element);
            }
          }
          alert("Se editó/eliminó correctamente la categoría");
        });
      });
    });
  }
  createForm() {
    this.dialog.open(_modal_forms_modal_forms_component__WEBPACK_IMPORTED_MODULE_3__.ModalFormsComponent, {
      data: {}
    }).afterClosed().subscribe(response => {
      this.formService.getForms().subscribe(data => {
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            const element = data[key];
            this.formsAdd.push(element);
          }
        }
      });
    });
  }
  editForm(id) {
    this.dialog.open(_modal_admon_active_admon_active_admon_active_component__WEBPACK_IMPORTED_MODULE_2__.AdmonActiveComponent, {
      data: {
        id
      }
    }).afterClosed().subscribe(response => {
      this.categoryService.getCategories().subscribe(data => {
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            const element = data[key];
            this.categoriesAdd.push(element);
          }
        }
      });
    });
  }
  deleteForm(id) {
    this.formService.deleteForm(id).subscribe(data => {
      this.formService.getForms().subscribe(data => {
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            const element = data[key];
            this.formsAdd.push(element);
          }
        }
      });
      alert("Se eliminó correctamente el formulario");
    });
  }
  changeActuallyCategoryLayer(category, layer, form, formId) {
    this.mapService.setCurrentCategory(category);
    this.mapService.setCurrentLayer(layer);
    this.mapService.setCurrentForm(form);
    this.mapService.setCurrentFormId(formId);
    this.mapService.addActives();
    this.dialog.closeAll();
  }
}
ModalWorkspaceComponent.ɵfac = function ModalWorkspaceComponent_Factory(t) {
  return new (t || ModalWorkspaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_view_services_map_service__WEBPACK_IMPORTED_MODULE_4__.MapService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_home_services_layers_layer_service__WEBPACK_IMPORTED_MODULE_5__.LayerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_login_login_service__WEBPACK_IMPORTED_MODULE_6__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_home_services_category_layers_category_service__WEBPACK_IMPORTED_MODULE_7__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_home_services_forms_form_service__WEBPACK_IMPORTED_MODULE_8__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog));
};
ModalWorkspaceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: ModalWorkspaceComponent,
  selectors: [["app-modal-workspace"]],
  decls: 10,
  vars: 4,
  consts: [["mat-icon-button", "", 1, "close-button", 3, "mat-dialog-close"], [1, "close-icon"], ["mat-dialog-title", "", "align", "center"], ["mode", "indeterminate", 4, "ngIf"], ["mat-dialog-content", ""], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["mode", "indeterminate"], ["checked", "false", "color", "primary", 3, "click"]],
  template: function ModalWorkspaceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 0)(1, "mat-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Espacio de Trabajo");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ModalWorkspaceComponent_mat_progress_bar_5_Template, 1, 0, "mat-progress-bar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, ModalWorkspaceComponent_p_7_Template, 2, 0, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "mat-accordion");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, ModalWorkspaceComponent_mat_expansion_panel_9_Template, 6, 2, "mat-expansion-panel", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("mat-dialog-close", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.categoriesAdd.length == 0 && ctx.layersAdd.length == 0 && ctx.formsAdd.length == 0 && !ctx.formsAsignados);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formsAsignados);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.categoriesAdd);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatIconButton, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListItem, _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__.MatRadioButton, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanelTitle, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__.MatProgressBar],
  styles: [".colorRed[_ngcontent-%COMP%] {\n  color: red\n}\n\n.example-tree-invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.example-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n\n.example-tree[_ngcontent-%COMP%]   .mat-nested-tree-node[_ngcontent-%COMP%]   div[role=group][_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n\n\n.example-tree[_ngcontent-%COMP%]   div[role=group][_ngcontent-%COMP%] > .mat-tree-node[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  float: right;\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9jb21wb25lbnRzL21vZGFsLXdvcmtzcGFjZS9tb2RhbC13b3Jrc3BhY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUU7QUFDRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7OztFQUlFO0FBQ0Y7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yUmVkIHtcbiAgY29sb3I6IHJlZFxufVxuXG4uZXhhbXBsZS10cmVlLWludmlzaWJsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5leGFtcGxlLXRyZWUgdWwsXG4uZXhhbXBsZS10cmVlIGxpIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4vKlxuICogVGhpcyBwYWRkaW5nIHNldHMgYWxpZ25tZW50IG9mIHRoZSBuZXN0ZWQgbm9kZXMuXG4gKi9cbi5leGFtcGxlLXRyZWUgLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIGRpdltyb2xlPWdyb3VwXSB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cblxuLypcbiAqIFBhZGRpbmcgZm9yIGxlYWYgbm9kZXMuXG4gKiBMZWFmIG5vZGVzIG5lZWQgdG8gaGF2ZSBwYWRkaW5nIHNvIGFzIHRvIGFsaWduIHdpdGggb3RoZXIgbm9uLWxlYWYgbm9kZXNcbiAqIHVuZGVyIHRoZSBzYW1lIHBhcmVudC5cbiAqL1xuLmV4YW1wbGUtdHJlZSBkaXZbcm9sZT1ncm91cF0+Lm1hdC10cmVlLW5vZGUge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG5cbi5jbG9zZS1idXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHotaW5kZXg6IDEwMDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7920:
/*!**********************************************************!*\
  !*** ./src/app/home/components/modal/modal.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _view_services_map_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../view/services/map.service */ 39569);
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/login/login.service */ 6817);
/* harmony import */ var _services_forms_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/forms/form.service */ 46235);
/* harmony import */ var _services_forms_field_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/forms/field-form.service */ 21322);
/* harmony import */ var _view_services_active_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../view/services/active.service */ 94966);
/* harmony import */ var _services_forms_object_types_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/forms/object-types.service */ 18123);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);

















function ModalComponent_mat_form_field_7_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ModalComponent_mat_form_field_7_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.valuesCampo[i_r2] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const field_r1 = ctx_r12.$implicit;
    const i_r2 = ctx_r12.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("type", field_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", field_r1.formulario_campo_nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("required", field_r1.formulario_campo_requerido)("disabled", false)("ngModel", ctx_r3.valuesCampo[i_r2]);
  }
}
function ModalComponent_mat_form_field_7_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ModalComponent_mat_form_field_7_input_2_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.valuesCampo[i_r2] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const field_r1 = ctx_r16.$implicit;
    const i_r2 = ctx_r16.index;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", field_r1.formulario_campo_nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("required", field_r1.formulario_campo_requerido)("matDatepicker", _r8)("ngModel", ctx_r4.valuesCampo[i_r2]);
  }
}
function ModalComponent_mat_form_field_7_mat_label_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](field_r1.formulario_campo_nombre);
  }
}
function ModalComponent_mat_form_field_7_mat_select_4_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", option_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](option_r19);
  }
}
function ModalComponent_mat_form_field_7_mat_select_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ModalComponent_mat_form_field_7_mat_select_4_Template_mat_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.valuesCampo[i_r2] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ModalComponent_mat_form_field_7_mat_select_4_mat_option_1_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const field_r1 = ctx_r23.$implicit;
    const i_r2 = ctx_r23.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("required", field_r1.formulario_campo_requerido)("ngModel", ctx_r6.valuesCampo[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", field_r1.options);
  }
}
function ModalComponent_mat_form_field_7_mat_datepicker_toggle_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-datepicker-toggle", 19);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r8);
  }
}
function ModalComponent_mat_form_field_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ModalComponent_mat_form_field_7_input_1_Template, 1, 5, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ModalComponent_mat_form_field_7_input_2_Template, 1, 4, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ModalComponent_mat_form_field_7_mat_label_3_Template, 2, 1, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ModalComponent_mat_form_field_7_mat_select_4_Template, 2, 3, "mat-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ModalComponent_mat_form_field_7_mat_datepicker_toggle_5_Template, 1, 1, "mat-datepicker-toggle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "mat-datepicker", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", field_r1.type != "date" && field_r1.type != "combo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", field_r1.type == "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", field_r1.type == "combo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", field_r1.type == "combo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", field_r1.type == "date");
  }
}
class ModalComponent {
  constructor(mapService, loginService, formService, fieldFormService, activeService, objectTypesService, dialogRef, data) {
    this.mapService = mapService;
    this.loginService = loginService;
    this.formService = formService;
    this.fieldFormService = fieldFormService;
    this.activeService = activeService;
    this.objectTypesService = objectTypesService;
    this.dialogRef = dialogRef;
    this.data = data;
    this.scene = data.scene;
    this.lat = data.lat;
    this.lng = data.lng;
    this.posX = data.posX;
    this.posY = data.posY;
    this.formcapId = [];
    this.valuesCampo = [];
    this.formId = mapService.getCurrentFormId();
    this.usuarioId = loginService.getuserId();
    this.objectTypesService.getObjectTypes().subscribe(data => {
      this.fieldTypes = data;
      this.getFields();
    });
    if (this.formId === "") {
      this.dialogRef.close();
      alert("No se ha seleccionado ningún formulario para la creación del activo");
    }
  }
  ngOnInit() {}
  closeMe() {
    this.dialogRef.close();
  }
  //this is used to retrieve the current date in YYYY-MM-DD format
  getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const day = ('0' + now.getDate()).slice(-2);
    const currentDate = year + '-' + month + '-' + day;
    return currentDate;
  }
  getFields() {
    this.fieldFormService.getFieldForm({
      formulario_id: this.formId
    }).subscribe(dataField => {
      this.fields = dataField["SDTFormularioid"];
      dataField["SDTFormularioid"].forEach(element => {
        this.formcapId.push(element["formulario_campo_id"]);
      });
      this.getTypes();
    });
  }
  getTypes() {
    this.fields.forEach((element, index) => {
      for (let index2 = 0; index2 < this.fieldTypes.length; index2++) {
        const element2 = this.fieldTypes[index2];
        if (element["tipo_objeto_id"] == element2["tipo_objeto_id"]) {
          var typeconvert;
          switch (element2["tipo_objeto_icono"]) {
            case "text_fields":
              typeconvert = "text";
              break;
            case "numbers":
              typeconvert = "number";
              break;
            case "list":
              typeconvert = "combo";
              this.fields[index].options = this.getOptionsField(element["formulario_campo_id"]);
              break;
            case "event":
              typeconvert = "date";
              break;
            case "image":
              typeconvert = "text"; //CAMBIAR PARA QUE SEA UN FILESELECT
              break;
            default:
              break;
          }
          this.fields[index].type = typeconvert;
        }
      }
    });
  }
  getOptionsField(id) {
    var options = [];
    this.fieldFormService.getOptions(id).subscribe(data => {
      data.forEach(element => {
        options[element["formulario_campo_opcion_orden"]] = element["formulario_campo_opcion_valor"];
      });
    });
    return options;
  }
  createActive() {
    const activeDetails = {
      formulario_captura_scene: this.scene,
      formulario_captura_latitud: this.lat,
      formulario_captura_longitud: this.lng,
      formulario_captura_x: this.posX,
      formulario_captura_y: this.posY,
      formulario_captura_altitud: "2600",
      formulario_captura_estado: 1,
      formulario_captura_fecha: this.getCurrentDate(),
      formulario_id: this.formId,
      usuario_realgisId: this.usuarioId //Usuario login   
    };

    this.activeService.createActive(activeDetails).subscribe(data => {
      this.dialogRef.close({
        data: data
      });
      this.createCapture(data);
    });
  }
  createCapture(data) {
    for (let index = 0; index < this.formcapId.length; index++) {
      const capture = {
        formulario_captura_id: data["formulario_captura_id"],
        formulario_campo_id: this.formcapId[index],
        formulario_captura_campo_valor: this.valuesCampo[index]
      };
      console.log(capture);
      /* this.activeService.createCapture(capture).subscribe((data: {}) => {
        this.dialogRef.close({ data: data });
      }); */
    }
  }
}

ModalComponent.ɵfac = function ModalComponent_Factory(t) {
  return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_view_services_map_service__WEBPACK_IMPORTED_MODULE_0__.MapService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_login_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_forms_form_service__WEBPACK_IMPORTED_MODULE_2__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_forms_field_form_service__WEBPACK_IMPORTED_MODULE_3__.FieldFormService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_view_services_active_service__WEBPACK_IMPORTED_MODULE_4__.ActiveService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_forms_object_types_service__WEBPACK_IMPORTED_MODULE_5__.ObjectTypesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA));
};
ModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ModalComponent,
  selectors: [["app-modal"]],
  decls: 13,
  vars: 5,
  consts: [["mat-dialog-title", ""], [1, "add-active"], ["matInput", "", "placeholder", "Latitud", 3, "disabled", "value"], ["matInput", "", "placeholder", "Longitud", 3, "disabled", "value"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "submit", 3, "click"], ["mat-raised-button", "", 3, "click"], ["matInput", "", 3, "required", "disabled", "type", "ngModel", "placeholder", "ngModelChange", 4, "ngIf"], ["matInput", "", "disabled", "", 3, "required", "matDatepicker", "ngModel", "placeholder", "ngModelChange", 4, "ngIf"], [4, "ngIf"], [3, "required", "ngModel", "ngModelChange", 4, "ngIf"], ["matSuffix", "", 3, "for", 4, "ngIf"], ["disabled", "false"], ["picker", ""], ["matInput", "", 3, "required", "disabled", "type", "ngModel", "placeholder", "ngModelChange"], ["matInput", "", "disabled", "", 3, "required", "matDatepicker", "ngModel", "placeholder", "ngModelChange"], [3, "required", "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matSuffix", "", 3, "for"]],
  template: function ModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Creaci\u00F3n de Activo");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ModalComponent_mat_form_field_7_Template, 8, 5, "mat-form-field", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-dialog-actions")(9, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_9_listener() {
        return ctx.createActive();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Crear");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_11_listener() {
        return ctx.closeMe();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Cancelar");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", ctx.data.lat);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", ctx.data.lng);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.fields);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerToggle],
  styles: [".add-active[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1hY3RpdmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 25311:
/*!*******************************************************************************************!*\
  !*** ./src/app/home/components/modal_admon_active/admon-active/admon-active.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdmonActiveComponent": () => (/* binding */ AdmonActiveComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _modal_addfield_modal_addfield_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modal-addfield/modal-addfield.component */ 4971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_layers_layer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/layers/layer.service */ 13737);
/* harmony import */ var _services_forms_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/forms/form.service */ 46235);
/* harmony import */ var _services_forms_field_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/forms/field-form.service */ 21322);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);











function AdmonActiveComponent_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", field_r1.formulario_campo_nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", true);
  }
}
class AdmonActiveComponent {
  constructor(layerService, formService, fieldFormService, dialog, dialogRef, data) {
    this.layerService = layerService;
    this.formService = formService;
    this.fieldFormService = fieldFormService;
    this.dialog = dialog;
    this.dialogRef = dialogRef;
    this.data = data;
    this.others = [{
      new_field: ""
    }];
    this.formId = data.id;
    // tslint:disable-next-line: no-shadowed-variable
    this.layerService.getLayers().subscribe(data => {
      this.layers = data;
    });
    this.fieldFormService.getFieldForm({
      formulario_id: this.formId
    }).subscribe(data => {
      this.fields = data["SDTFormularioid"];
    });
  }
  removeOther(i) {
    this.others.splice(i, 1);
  }
  ngOnInit() {}
  closeMe() {
    this.dialogRef.close();
  }
  addOther() {
    this.others.push({
      new_field: ""
    });
  }
  createForm() {
    const formDetails = {
      capa_id: this.layer,
      formulario_nombre: this.name,
      formulario_descripcion: this.description,
      formulario_estado: 1
    };
    this.formService.createForm(formDetails).subscribe(data => {
      this.dialogRef.close({
        data
      });
    });
  }
  createFieldForm() {
    this.dialog.open(_modal_addfield_modal_addfield_component__WEBPACK_IMPORTED_MODULE_0__.ModalAddfieldComponent, {
      data: {
        formId: this.formId
      }
    }).afterClosed().subscribe(result => {
      this.fieldFormService.getFieldForm({
        formulario_id: this.formId
      }).subscribe(data => {
        this.fields = data["SDTFormularioid"];
      });
    });
  }
}
AdmonActiveComponent.ɵfac = function AdmonActiveComponent_Factory(t) {
  return new (t || AdmonActiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_layers_layer_service__WEBPACK_IMPORTED_MODULE_1__.LayerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_forms_form_service__WEBPACK_IMPORTED_MODULE_2__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_forms_field_form_service__WEBPACK_IMPORTED_MODULE_3__.FieldFormService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA));
};
AdmonActiveComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AdmonActiveComponent,
  selectors: [["app-admon-active"]],
  decls: 9,
  vars: 1,
  consts: [["mat-dialog-title", ""], [1, "create-form"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "click"], ["matInput", "", 3, "disabled", "placeholder"]],
  template: function AdmonActiveComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Previsualizaci\u00F3n de Formulario");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-dialog-content", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AdmonActiveComponent_mat_form_field_3_Template, 2, 2, "mat-form-field", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-dialog-actions")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdmonActiveComponent_Template_button_click_5_listener() {
        return ctx.createFieldForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Agregar nuevo campo");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdmonActiveComponent_Template_button_click_7_listener() {
        return ctx.closeMe();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Cerrar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.fields);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField],
  styles: [".create-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9jb21wb25lbnRzL21vZGFsX2FkbW9uX2FjdGl2ZS9hZG1vbi1hY3RpdmUvYWRtb24tYWN0aXZlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZCIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGUtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 96053:
/*!**************************************************************!*\
  !*** ./src/app/home/components/sidebar/sidebar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _modal_window_modal_window_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-window/modal-window.component */ 11671);
/* harmony import */ var _arcgis_core_WebMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @arcgis/core/WebMap */ 2991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login/login.service */ 6817);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/home.component */ 52093);
/* harmony import */ var src_app_view_services_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/services/map.service */ 39569);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);















const _c0 = ["sidenav"];
function SidebarComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SidebarComponent_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.toggle360View());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matTooltipPosition", "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r1.homeComponent.activatedViewPanoramic ? "icon-activated" : "icon");
  }
}
function SidebarComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SidebarComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.viewMapPot());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matTooltipPosition", "left");
  }
}
function SidebarComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SidebarComponent_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r12.viewDashboard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matTooltipPosition", "left");
  }
}
function SidebarComponent_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SidebarComponent_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r14.openSettingsLayer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Configuraci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function SidebarComponent_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SidebarComponent_button_25_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.reload());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Cerrar sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function SidebarComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.project);
  }
}
class SidebarComponent {
  constructor(dialog, loginService, homeComponent, mapService, _snackBar) {
    this.dialog = dialog;
    this.loginService = loginService;
    this.homeComponent = homeComponent;
    this.mapService = mapService;
    this._snackBar = _snackBar;
    this.projectEnvironment = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
    this.project = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.project;
    this.version = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.version;
    this.documentationUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.documentationUrl;
    this.potActivated = false;
    this.facActivated = false;
  }
  toggle() {
    this.sidenav.toggle();
    this.homeComponent.sidenavView = !this.homeComponent.sidenavView;
  }
  openUserManual() {
    window.open(this.documentationUrl, "_blank");
  }
  reload() {
    window.location.reload();
  }
  openSettingsLayer() {
    this.dialog.open(_modal_window_modal_window_component__WEBPACK_IMPORTED_MODULE_1__.ModalWindowComponent, {
      autoFocus: false
    });
  }
  displayInitial360Message() {
    if (!this.mapService.currentScene) {
      this._snackBar.open("Seleccione un marcador en el mapa para activar la vista 360", " cerrar", {
        duration: 7000,
        horizontalPosition: "center",
        verticalPosition: "top",
        panelClass: 'custom-panel'
      });
    }
  }
  toggle360View() {
    if (this.homeComponent.activatedViewPanoramic) {
      this.homeComponent.changeViewMap();
    } else {
      this.displayInitial360Message();
      this.homeComponent.changeViewMixed();
    }
    this.toggle();
  }
  viewDashboard() {
    if (this.homeComponent.activatedViewMap) {
      this.homeComponent.activatedViewMap = false;
      this.homeComponent.activatedViewPanoramic = false;
      this.homeComponent.activatedViewDashboard = true;
    } else {
      this.homeComponent.activatedViewMap = true;
      this.homeComponent.activatedViewPanoramic = false;
      this.homeComponent.activatedViewDashboard = false;
    }
    this.toggle();
  }
  viewMapPot() {
    let webMapActual = this.mapService.getViewMap().map;
    const webMapIni = new _arcgis_core_WebMap__WEBPACK_IMPORTED_MODULE_2__["default"]({
      portalItem: {
        id: this.projectEnvironment.mapId
      }
    });
    const webMapPot = new _arcgis_core_WebMap__WEBPACK_IMPORTED_MODULE_2__["default"]({
      portalItem: {
        id: this.projectEnvironment.mapIdPot
      }
    });
    if (webMapActual.portalItem.id === this.projectEnvironment.mapIdPot) {
      this.mapService.getViewMap().map = webMapIni;
      this.potActivated = !this.potActivated;
    } else {
      this.mapService.getViewMap().map = webMapPot;
      this.potActivated = !this.potActivated;
    }
    this.homeComponent.changeViewMap();
  }
  viewMapFact() {
    let webMapActual = this.mapService.getViewMap().map;
    const webMapIni = new _arcgis_core_WebMap__WEBPACK_IMPORTED_MODULE_2__["default"]({
      portalItem: {
        id: this.projectEnvironment.mapId
      }
    });
    const webMapFact = new _arcgis_core_WebMap__WEBPACK_IMPORTED_MODULE_2__["default"]({
      portalItem: {
        id: this.projectEnvironment.mapIdfact
      }
    });
    if (webMapActual.portalItem.id === this.projectEnvironment.mapIdfact) {
      this.mapService.getViewMap().map = webMapIni;
      this.facActivated = !this.facActivated;
    } else {
      this.mapService.getViewMap().map = webMapFact;
      this.facActivated = !this.facActivated;
    }
    this.homeComponent.changeViewMap();
  }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
  return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_view_services_map_service__WEBPACK_IMPORTED_MODULE_5__.MapService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar));
};
SidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: SidebarComponent,
  selectors: [["app-sidebar"]],
  viewQuery: function SidebarComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    }
  },
  decls: 33,
  vars: 11,
  consts: [[1, "sidenav-container"], ["mode", "side", 1, "sidenav"], ["sidenav", ""], [1, "top-content"], ["mat-icon-button", "", "class", "sideNav-button", "matTooltip", "Vista 360", 3, "matTooltipPosition", "click", 4, "ngIf"], ["mat-icon-button", "", "class", "widgetButton", "class", "sideNav-button", "matTooltip", "Ver POT", 3, "matTooltipPosition", "click", 4, "ngIf"], ["mat-icon-button", "", "class", "sideNav-button", "matTooltip", "Ver avance de facturaci\u00F3n", 3, "matTooltipPosition", "click", 4, "ngIf"], [1, "footer-content"], [1, "menu-icon"], ["mat-icon-button", "", 1, "sideNav-button", 3, "matMenuTriggerFor"], ["src", "assets/img/SVG/infoIcon.svg", 1, "icon"], [3, "xPosition"], ["menuLogin", "matMenu"], [1, "menu-title"], [1, "menu-content"], ["mat-button", "", "class", "footer-button", 3, "click", 4, "ngIf"], ["mat-button", "", 1, "footer-button", 3, "click"], [1, "footer-button-icon"], ["style", "font-size: small;", 4, "ngIf"], [2, "font-size", "small"], [2, "font-size", "x-small", "font-style", "italic"], ["href", "https://realtix.co/wordpress/"], ["mat-icon-button", "", "matTooltip", "Vista 360", 1, "sideNav-button", 3, "matTooltipPosition", "click"], ["src", "assets/img/SVG/360Icon.svg"], ["mat-icon-button", "", "matTooltip", "Ver POT", 1, "sideNav-button", 3, "matTooltipPosition", "click"], ["src", "assets/img/SVG/potIcon.svg", 1, "icon"], ["mat-icon-button", "", "matTooltip", "Ver avance de facturaci\u00F3n", 1, "sideNav-button", 3, "matTooltipPosition", "click"], ["src", "assets/img/PREDIAL.svg", 1, "icon"]],
  template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-sidenav-container", 0)(1, "mat-sidenav", 1, 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SidebarComponent_button_4_Template, 2, 3, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, SidebarComponent_button_5_Template, 2, 1, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, SidebarComponent_button_6_Template, 2, 1, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 7)(8, "div", 8)(9, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-menu", 11, 12)(13, "div", 13)(14, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, SidebarComponent_button_19_Template, 5, 0, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_20_listener() {
        return ctx.openUserManual();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Ayuda");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "mat-icon", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "help_outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, SidebarComponent_button_25_Template, 5, 0, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, SidebarComponent_span_26_Template, 2, 1, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, " Powered by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " Realidad 5.0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.projectEnvironment.modules.view360 && !ctx.homeComponent.activatedViewDashboard);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.projectEnvironment.modules.mapPot && !ctx.homeComponent.activatedViewDashboard);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.projectEnvironment.modules.dashboard);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("xPosition", "before");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.projectEnvironment.login ? "person" : "public");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.projectEnvironment.login ? ctx.loginService.userName + " " + ctx.loginService.userLastname : ctx.project);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.projectEnvironment.login && ctx.loginService.getUserRol() == "Administrador");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.projectEnvironment.login);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.projectEnvironment.login);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("RealGIS v. ", ctx.version, "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatIconButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavContainer, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip],
  styles: [".sidenav-container[_ngcontent-%COMP%] {\n    height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n    overflow: hidden;\n    width: 63px;\n    background-color: #d7e3ff;\n}\n.top-content[_ngcontent-%COMP%]{\n    margin-top: 5px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.sideNav-button[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 38px;\n    width: 38px;\n}\n\n.sideNav-button[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n    filter: brightness(130%);\n    \n}\n\n.icon[_ngcontent-%COMP%] {\n    height: 38px;\n    width: 38px;\n}\n\n.icon-activated[_ngcontent-%COMP%] {\n    height: 38px;\n    width: 38px;\n    filter: brightness(120%) hue-rotate(180deg);\n}\n\n.sideNav-button[_ngcontent-%COMP%]    + .sideNav-button[_ngcontent-%COMP%] {\n    margin-top: 5px;\n}\n\n.footer-content[_ngcontent-%COMP%] {\n    color: white;\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n}\n\n.menu-icon[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 5px;\n}\n\n.menu-title[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    height: 32px;\n    margin: 8px;\n}\n\n.menu-content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n\n\n.footer-button-icon[_ngcontent-%COMP%] {\n    font-size: 22px !important;\n    height: 22px !important;\n    width: 22px !important;\n}\n\n\n.footer-button[_ngcontent-%COMP%] {\n    height: 28px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLCtEQUErRDtBQUNuRTs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUEsc0RBQXNEO0FBQ3REO0lBQ0ksMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUEseUVBQXlFO0FBQ3pFO0lBQ0ksdUJBQXVCO0FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiA2M3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkN2UzZmY7XG59XG4udG9wLWNvbnRlbnR7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2lkZU5hdi1idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgd2lkdGg6IDM4cHg7XG59XG5cbi5zaWRlTmF2LWJ1dHRvbjpob3ZlciAuaWNvbiB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEzMCUpO1xuICAgIC8qIGh1ZS1yb3RhdGUoMjAwZGVnKTsgIHRoaXMgd2lsbCBjaGFuZ2UgdGhlIGNvbG9yIG9mIHRoZSBpY29uKi9cbn1cblxuLmljb24ge1xuICAgIGhlaWdodDogMzhweDtcbiAgICB3aWR0aDogMzhweDtcbn1cblxuLmljb24tYWN0aXZhdGVkIHtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgd2lkdGg6IDM4cHg7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyMCUpIGh1ZS1yb3RhdGUoMTgwZGVnKTtcbn1cblxuLnNpZGVOYXYtYnV0dG9uICsgLnNpZGVOYXYtYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5mb290ZXItY29udGVudCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWVudS1pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLm1lbnUtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIG1hcmdpbjogOHB4O1xufVxuXG4ubWVudS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4vKiB0aGlzIHNvbHZlcyB0aGUgaXNzdWUgd2l0aCB0aGUgaGVpZ2ggb2YgdGhlIGljb25zICovXG4uZm9vdGVyLWJ1dHRvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDIycHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMjJweCAhaW1wb3J0YW50O1xufVxuXG4vKiB0aGlzIG1ha2VzIHRoZSBidXR0b25zIHNob3J0ZXIgc28gdGhlIHNwYWNlIGJldHdlZW4gbWFrZXMgbW9yZSBzZW5zZSAqL1xuLmZvb3Rlci1idXR0b24ge1xuICAgIGhlaWdodDogMjhweCAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 52093);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ 34260);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 96053);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ 73378);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/modal/modal.component */ 7920);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material/material.module */ 90898);
/* harmony import */ var _view_view_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/view.module */ 63070);
/* harmony import */ var _components_modal_remove_active_modal_remove_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/modal-remove-active/modal-remove.component */ 11106);
/* harmony import */ var _components_modal_layer_modal_layer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal-layer/modal-layer.component */ 17327);
/* harmony import */ var _components_modal_category_modal_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/modal-category/modal-category.component */ 43297);
/* harmony import */ var _components_modal_admon_active_admon_active_admon_active_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/modal_admon_active/admon-active/admon-active.component */ 25311);
/* harmony import */ var _components_modal_forms_modal_forms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/modal-forms/modal-forms.component */ 67094);
/* harmony import */ var _components_modal_window_modal_window_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/modal-window/modal-window.component */ 11671);
/* harmony import */ var _components_modal_workspace_modal_workspace_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/modal-workspace/modal-workspace.component */ 73160);
/* harmony import */ var _components_modal_addfield_modal_addfield_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/modal-addfield/modal-addfield.component */ 4971);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/login/login.component */ 41024);
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/filter/filter.component */ 98376);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tree */ 53453);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _components_modal_form_user_modal_form_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/modal-form-user/modal-form-user.component */ 38767);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _components_modal_new_user_modal_new_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/modal-new-user/modal-new-user.component */ 11018);
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/confirm-dialog/confirm-dialog.component */ 29405);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! angular-split */ 28828);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/scrolling */ 76328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _view_components_map_view_map_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../view/components/map-view/map-view.component */ 46288);







































class HomeModule {}
HomeModule.ɵfac = function HomeModule_Factory(t) {
  return new (t || HomeModule)();
};
HomeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({
  type: HomeModule
});
HomeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_5__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButtonModule, _view_view_module__WEBPACK_IMPORTED_MODULE_6__.ViewModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_27__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginatorModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatNativeDateModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__.MatSlideToggleModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__.MatProgressBarModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__.MatTreeModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__.MatTooltipModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__.MatTabsModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__.MatCheckboxModule, angular_split__WEBPACK_IMPORTED_MODULE_37__.AngularSplitModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_38__.ScrollingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__.ModalComponent, _components_modal_remove_active_modal_remove_component__WEBPACK_IMPORTED_MODULE_7__.ModalRemoveComponent, _components_modal_layer_modal_layer_component__WEBPACK_IMPORTED_MODULE_8__.ModalLayerComponent, _components_modal_category_modal_category_component__WEBPACK_IMPORTED_MODULE_9__.ModalCategoryComponent, _components_modal_admon_active_admon_active_admon_active_component__WEBPACK_IMPORTED_MODULE_10__.AdmonActiveComponent, _components_modal_forms_modal_forms_component__WEBPACK_IMPORTED_MODULE_11__.ModalFormsComponent, _components_modal_window_modal_window_component__WEBPACK_IMPORTED_MODULE_12__.ModalWindowComponent, _components_modal_workspace_modal_workspace_component__WEBPACK_IMPORTED_MODULE_13__.ModalWorkspaceComponent, _components_modal_addfield_modal_addfield_component__WEBPACK_IMPORTED_MODULE_14__.ModalAddfieldComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__.LoginComponent, _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_16__.FilterComponent, _components_modal_form_user_modal_form_user_component__WEBPACK_IMPORTED_MODULE_17__.ModalFormUserComponent, _components_modal_new_user_modal_new_user_component__WEBPACK_IMPORTED_MODULE_18__.ModalNewUserComponent, _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_19__.ConfirmDialogComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_5__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButtonModule, _view_view_module__WEBPACK_IMPORTED_MODULE_6__.ViewModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_27__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginatorModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatNativeDateModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__.MatSlideToggleModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__.MatProgressBarModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__.MatTreeModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__.MatTooltipModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__.MatTabsModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__.MatCheckboxModule, angular_split__WEBPACK_IMPORTED_MODULE_37__.AngularSplitModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_38__.ScrollingModule]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetComponentScope"](_components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, [_view_components_map_view_map_view_component__WEBPACK_IMPORTED_MODULE_20__.MapViewComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent], []);

/***/ }),

/***/ 47761:
/*!*******************************************************************!*\
  !*** ./src/app/home/services/category_layers/category.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryService": () => (/* binding */ CategoryService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);






class CategoryService {
  constructor(http) {
    this.http = http;
    // Define API
    //apiURL = environment.apiUrl;
    this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    /*========================================
    CRUD Methods for consuming RESTful API
    =========================================*/
    // Http Optionsrealgis_cc
    this.httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  // HttpClient API get() method => Fetch layer list
  getCategories() {
    return this.http.get(this.apiURL + '/getcategoriacapa').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // HttpClient API get() method => Fetch layer
  getCategory(id) {
    return this.http.get(this.apiURL + '/categoria_capa/' + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // HttpClient API post() method => Create layer
  createCategory(category) {
    return this.http.post(this.apiURL + '/categoria_capa/0', JSON.stringify(category), this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // HttpClient API put() method => Update layer
  updateCategory(id, category) {
    return this.http.put(this.apiURL + '/categoria_capa/' + id, JSON.stringify(category), this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // HttpClient API delete() method => Delete layer
  deleteCategory(id) {
    return this.http.delete(this.apiURL + '/categoria_capa/' + id, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // Error handling
  handleError(error) {
    let errorMessage = 'Hola categoria';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Codigo Error(Category): ${error.status}\nMensaje Error: ${error.message}`;
    }
    window.alert(errorMessage);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errorMessage);
  }
}
CategoryService.ɵfac = function CategoryService_Factory(t) {
  return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
CategoryService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: CategoryService,
  factory: CategoryService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 95722:
/*!********************************************************!*\
  !*** ./src/app/home/services/filter/filter.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterService": () => (/* binding */ FilterService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);





class FilterService {
  constructor(http) {
    this.http = http;
    // URL API
    this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getCampos() {
    return this.http.get(this.apiURL + '/getformulariocapturacampo').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  getActivos() {
    return this.http.get(this.apiURL + '/getformulariocaptura').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  getCamposResultado(formCapId) {
    return this.http.get(this.apiURL + '/getFormularioCapturaCampoParm?formulario_captura_id=' + formCapId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  getActivosResultados(formCapId) {
    return this.http.get(this.apiURL + /formulario_captura/ + formCapId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Hay un error en la busqueda debido al servidor!\nCodigo Error: ${error.status}\nMessage: ${error.message}`;
      window.location.reload();
    }
    window.alert(errorMessage);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(errorMessage);
  }
}
FilterService.ɵfac = function FilterService_Factory(t) {
  return new (t || FilterService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
};
FilterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: FilterService,
  factory: FilterService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 21322:
/*!***********************************************************!*\
  !*** ./src/app/home/services/forms/field-form.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldFormService": () => (/* binding */ FieldFormService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);






class FieldFormService {
  constructor(http) {
    this.http = http;
    // Define API
    this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    /*========================================
    CRUD Methods for consuming RESTful API
    =========================================*/
    // Http Options
    this.httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  // HttpClient API get() method => Fetch forms list
  getFieldForms() {
    return this.http.get(this.apiURL + '/getformulariocampo').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // HttpClient API get() method => Fetch form
  getFieldForm(formId) {
    return this.http.post(this.apiURL + '/getformularioid', JSON.stringify(formId), this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // HttpClient API post() method => Creando Campo
  // tslint:disable-next-line: no-shadowed-variable
  createFieldForm(fieldForm) {
    return this.http.post(this.apiURL + '/formulario_campo/0', JSON.stringify(fieldForm), this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // HttpClient API put() method => Update form
  updateFieldForm(id, fieldForm) {
    return this.http.put(this.apiURL + '/formulario_campo/' + id, JSON.stringify(fieldForm), this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // HttpClient API delete() method => Delete form
  deleteFieldForm(id) {
    return this.http.delete(this.apiURL + '/formulario_campo/' + id, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  createOption(option) {
    return this.http.post(this.apiURL + '/formulario_campo_opcion/0', JSON.stringify(option), this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  getOptions(id) {
    return this.http.get(this.apiURL + '/getformulariocampoopcionParm?formulario_campo_id=' + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code (Campo): ${error.status}\nMessage (Campo): ${error.message}`;
    }
    window.alert(errorMessage);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errorMessage);
  }
}
FieldFormService.ɵfac = function FieldFormService_Factory(t) {
  return new (t || FieldFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
FieldFormService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: FieldFormService,
  factory: FieldFormService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 46235:
/*!*****************************************************!*\
  !*** ./src/app/home/services/forms/form.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormService": () => (/* binding */ FormService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);






class FormService {
  constructor(http) {
    this.http = http;
    // Define API
    this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    /*========================================
    CRUD Methods for consuming RESTful API
    =========================================*/
    // Http Options
    this.httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  // HttpClient API get() method => Fetch forms list
  getForms() {
    return this.http.get(this.apiURL + '/getformulario').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  getFormsUser(idUser) {
    return this.http.get(this.apiURL + '/getformulariousuarioParm?usuario_realgisId=' + idUser).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // HttpClient API get() method => Fetch form
  getForm(id) {
    return this.http.get(this.apiURL + '/formulario/' + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // HttpClient API post() method => Create form
  createForm(form) {
    return this.http.post(this.apiURL + '/formulario/0', JSON.stringify(form), this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // HttpClient API put() method => Update form
  updateForm(id, form) {
    return this.http.put(this.apiURL + '/formulario/' + id, JSON.stringify(form), this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // HttpClient API delete() method => Delete form
  deleteForm(id) {
    return this.http.delete(this.apiURL + '/formulario/' + id, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code (form): ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errorMessage);
  }
}
FormService.ɵfac = function FormService_Factory(t) {
  return new (t || FormService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
FormService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: FormService,
  factory: FormService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 18123:
/*!*************************************************************!*\
  !*** ./src/app/home/services/forms/object-types.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectTypesService": () => (/* binding */ ObjectTypesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);






class ObjectTypesService {
  constructor(http) {
    this.http = http;
    // Define API
    this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    /*========================================
    CRUD Methods for consuming RESTful API
    =========================================*/
    // Http Options
    this.httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  // HttpClient API get() method => Fetch forms list
  getObjectTypes() {
    return this.http.get(this.apiURL + '/gettipoobjeto').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // HttpClient API get() method => Fetch form
  getObjectType(id) {
    return this.http.get(this.apiURL + '/tipo_objeto/' + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // HttpClient API post() method => Create form
  createObjectType(objectType) {
    return this.http.post(this.apiURL + '/tipo_objeto/0', JSON.stringify(objectType), this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // HttpClient API put() method => Update form
  updateObjectType(id, objectType) {
    return this.http.put(this.apiURL + '/tipo_objeto/' + id, JSON.stringify(objectType), this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // HttpClient API delete() method => Delete form
  deleteObjectType(id) {
    return this.http.delete(this.apiURL + '/tipo_objeto/' + id, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errorMessage);
  }
}
ObjectTypesService.ɵfac = function ObjectTypesService_Factory(t) {
  return new (t || ObjectTypesService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
ObjectTypesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: ObjectTypesService,
  factory: ObjectTypesService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 13737:
/*!*******************************************************!*\
  !*** ./src/app/home/services/layers/layer.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayerService": () => (/* binding */ LayerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);






class LayerService {
  constructor(http) {
    this.http = http;
    // Define API
    this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    /*========================================
    CRUD Methods for consuming RESTful API
    =========================================*/
    // Http Options
    this.httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  // HttpClient API get() method => Fetch layer list
  getLayers() {
    return this.http.get(this.apiURL + '/getcapa').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // HttpClient API get() method => Fetch layer
  getLayer(id) {
    return this.http.get(this.apiURL + '/capa/' + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // HttpClient API post() method => Create layer
  createLayer(layer) {
    return this.http.post(this.apiURL + '/capa/0', JSON.stringify(layer), this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // HttpClient API put() method => Update layer
  updateLayer(id, layer) {
    return this.http.put(this.apiURL + '/capa/' + id, JSON.stringify(layer), this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // HttpClient API delete() method => Delete layer
  deleteLayer(id) {
    return this.http.delete(this.apiURL + '/capa/' + id, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Codigo Error (layer): ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errorMessage);
  }
}
LayerService.ɵfac = function LayerService_Factory(t) {
  return new (t || LayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
LayerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: LayerService,
  factory: LayerService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6817:
/*!******************************************************!*\
  !*** ./src/app/home/services/login/login.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);






class LoginService {
  constructor(http) {
    this.http = http;
    // URL API
    this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        "Content-Type": "application/json"
      })
    };
  }
  getuserId() {
    return this.userId;
  }
  getUserRol() {
    return this.userRol;
  }
  login(user) {
    return this.http.post(this.apiURL + "/getUsuarioRealGis", user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Hay un error en la validacion del usuario debido al servidor!\nCodigo Error: ${error.status}\nMessage: ${error.message}`;
      window.location.reload();
    }
    window.alert(errorMessage);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errorMessage);
  }
}
LoginService.ɵfac = function LoginService_Factory(t) {
  return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
LoginService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: LoginService,
  factory: LoginService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 43472:
/*!******************************************************!*\
  !*** ./src/app/home/services/users/users.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersService": () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);






class UsersService {
  constructor(http) {
    this.http = http;
    this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        "Content-Type": "application/json"
      })
    };
  }
  getUsers() {
    return this.http.get(this.apiURL + '/getUsuarioRealgisTodos').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  assignFormUser(form_user) {
    return this.http.post(this.apiURL + "/formulario_usuario/0", form_user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  createNewUser(user) {
    return this.http.post(this.apiURL + "/getUsuarioRealgis_Rol", user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  getUser(idUser) {
    return this.http.get(this.apiURL + '/usuario_realgis/' + idUser).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  editUser(user) {
    console.log(user);
    return this.http.post(this.apiURL + "/getUsuarioRealgisActualiza", user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  disableUser(user) {
    return this.http.post(this.apiURL + "/getUsuarioRealgisInhabilita", user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code (form): ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errorMessage);
  }
}
UsersService.ɵfac = function UsersService_Factory(t) {
  return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
UsersService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: UsersService,
  factory: UsersService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 90898:
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ 19837);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


















class MaterialModule {}
MaterialModule.ɵfac = function MaterialModule_Factory(t) {
  return new (t || MaterialModule)();
};
MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MaterialModule
});
MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__.MatButtonToggleModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__.MatButtonToggleModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__.MatButtonToggleModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionModule],
    exports: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__.MatButtonToggleModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionModule]
  });
})();

/***/ }),

/***/ 46288:
/*!****************************************************************!*\
  !*** ./src/app/view/components/map-view/map-view.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapViewComponent": () => (/* binding */ MapViewComponent)
/* harmony export */ });
/* harmony import */ var _arcgis_core_views_MapView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @arcgis/core/views/MapView */ 73084);
/* harmony import */ var _arcgis_core_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @arcgis/core/Map */ 72596);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _home_components_modal_workspace_modal_workspace_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../home/components/modal-workspace/modal-workspace.component */ 73160);
/* harmony import */ var _home_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../home/components/filter/filter.component */ 98376);
/* harmony import */ var _arcgis_core_widgets_ScaleBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @arcgis/core/widgets/ScaleBar */ 88330);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _widgets_home_bar_home_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../widgets/home-bar/home-bar.component */ 86208);
/* harmony import */ var _widgets_directiva_directive_widget_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../widgets/directiva/directive-widget.directive */ 40693);
/* harmony import */ var _arcgis_core_layers_GeoJSONLayer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @arcgis/core/layers/GeoJSONLayer.js */ 77299);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_panoramic_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/panoramic.service */ 30541);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/map.service */ 39569);















const _c0 = ["map"];
function MapViewComponent_ng_template_2_Template(rf, ctx) {}
class MapViewComponent {
  constructor(dialog, panoramicService, _snackBar, mapService, viewContainer) {
    this.dialog = dialog;
    this.panoramicService = panoramicService;
    this._snackBar = _snackBar;
    this.mapService = mapService;
    this.viewContainer = viewContainer;
    this.view = null;
    this.measureLineActive = false;
    this.measurePolygonActive = false;
    this.idMap = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.mapId;
    this.urlPortal = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.portalUrl;
    this.view360 = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.modules.view360;
    this.apiKey = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiKeyArcGIS;
    this.mapReady = false;
  }
  ngOnInit() {
    this.chargeMap().then(() => {
      this.addWidgets();
      //this hides hotspot layer from the layer list
      const hotSpotLayer = this.view.map.allLayers.find(function (layer) {
        return layer.title.toLowerCase().includes("hotspot");
      });
      if (hotSpotLayer) {
        hotSpotLayer.listMode = "hide";
      }
    });
  }
  ngOnDestroy() {
    document.getElementById("coordenadas").innerHTML = "";
    document.getElementById("scaleBar").innerHTML = "";
  }
  chargeMap() {
    const container = this.mapViewEl.nativeElement;
    const upllayer = new _arcgis_core_layers_GeoJSONLayer_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
      url: "./assets/layers/upl.geojson",
      visible: false,
      title: "Unidad de Planeamiento Local"
    });
    const map = new _arcgis_core_Map__WEBPACK_IMPORTED_MODULE_1__["default"]({
      layers: [upllayer],
      basemap: "streets-vector"
    });
    // const webmap = new WebMap({
    //   portalItem: {
    //     id: this.idMap,
    //   },
    // });
    const viewMap = new _arcgis_core_views_MapView__WEBPACK_IMPORTED_MODULE_0__["default"]({
      map: map,
      container: container,
      center: [-74.08175, 4.60971],
      zoom: 10
    });
    // viewMap.on("pointer-move", function (event) {
    //   const point: Point = viewMap.toMap({
    //     x: event.x,
    //     y: event.y,
    //   });
    //   document.getElementById("coordenadas").innerHTML =
    //     point.latitude.toFixed(5) + " , " + point.longitude.toFixed(5);
    // });
    this.view = viewMap;
    this.mapService.setViewMap(this.view);
    //this removes the default zoom controllers
    this.view.ui.remove("zoom");
    return this.view.when();
  }
  addWidgets() {
    new _arcgis_core_widgets_ScaleBar__WEBPACK_IMPORTED_MODULE_4__["default"]({
      view: this.view,
      container: "scaleBar",
      unit: "metric"
    });
    this.appDirectiveWidget = new _widgets_directiva_directive_widget_directive__WEBPACK_IMPORTED_MODULE_7__.WidgetDirective(this.viewContainer);
    const elementDom = this.appDirectiveWidget.viewContainerRef.createComponent(_widgets_home_bar_home_bar_component__WEBPACK_IMPORTED_MODULE_6__.HomeBarComponent);
    this.view.ui.add(elementDom.location.nativeElement, "bottom-right");
    this.view.popup.dockEnabled = true;
  }
  openWorkspace() {
    this.dialog.open(_home_components_modal_workspace_modal_workspace_component__WEBPACK_IMPORTED_MODULE_2__.ModalWorkspaceComponent, {
      data: {}
    });
  }
  openFilter() {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.closeOnNavigation = false;
    if (this.panoramicService.getPanoramic()) {
      this.dialog.open(_home_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_3__.FilterComponent, dialogConfig);
    } else {
      this._snackBar.open("Active la vista mixta para buscar activos", "", {
        duration: 1000,
        horizontalPosition: "center",
        verticalPosition: "top"
      });
    }
  }
}
MapViewComponent.ɵfac = function MapViewComponent_Factory(t) {
  return new (t || MapViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_panoramic_service__WEBPACK_IMPORTED_MODULE_9__.PanoramicService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_map_service__WEBPACK_IMPORTED_MODULE_10__.MapService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewContainerRef));
};
MapViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: MapViewComponent,
  selectors: [["app-view-map"]],
  viewQuery: function MapViewComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_widgets_directiva_directive_widget_directive__WEBPACK_IMPORTED_MODULE_7__.WidgetDirective, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.mapViewEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.appDirectiveWidget = _t.first);
    }
  },
  decls: 3,
  vars: 0,
  consts: [["id", "map", 1, "map"], ["map", ""], ["appDirectiveWidget", ""]],
  template: function MapViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, MapViewComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
    }
  },
  styles: ["@import url(https://js.arcgis.com/4.23/@arcgis/core/assets/esri/themes/light/main.css);.map[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n.esri-view[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.measure[_ngcontent-%COMP%] {\n  width: 45px;\n}\n\n.buttonLine[_ngcontent-%COMP%] {\n  background: #e3322c;\n}\n\n.buttonPolygon[_ngcontent-%COMP%] {\n  background: #e3322c;\n}\n\n.buttonClear[_ngcontent-%COMP%] {\n  background: #e3322c;\n}\n\n.colorRed[_ngcontent-%COMP%] {\n  color: red\n}\n\n.tools[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.buttonLayer[_ngcontent-%COMP%] {\n  background: #e3322c;\n  font-size: 22px;\n  text-align: center;\n  justify-content: center;\n  border-radius: 13px;\n  width: 35px;\n  height: 35px;\n}\n\n.buttonFilter[_ngcontent-%COMP%] {\n  background: #e3322c;\n  font-size: 22px;\n  text-align: center;\n  justify-content: center;\n  border-radius: 13px;\n  width: 35px;\n  height: 35px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlldy9jb21wb25lbnRzL21hcC12aWV3L21hcC12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtBQUNkIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMjMvQGFyY2dpcy9jb3JlL2Fzc2V0cy9lc3JpL3RoZW1lcy9saWdodC9tYWluLmNzcyc7XG5cbi5tYXAge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5lc3JpLXZpZXcge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tZWFzdXJlIHtcbiAgd2lkdGg6IDQ1cHg7XG59XG5cbi5idXR0b25MaW5lIHtcbiAgYmFja2dyb3VuZDogI2UzMzIyYztcbn1cblxuLmJ1dHRvblBvbHlnb24ge1xuICBiYWNrZ3JvdW5kOiAjZTMzMjJjO1xufVxuXG4uYnV0dG9uQ2xlYXIge1xuICBiYWNrZ3JvdW5kOiAjZTMzMjJjO1xufVxuXG4uY29sb3JSZWQge1xuICBjb2xvcjogcmVkXG59XG5cbi50b29scyB7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4uYnV0dG9uTGF5ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTMzMjJjO1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5idXR0b25GaWx0ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTMzMjJjO1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 38560:
/*!****************************************************************************!*\
  !*** ./src/app/view/components/panoramic-view/panoramic-view.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanoramicViewComponent": () => (/* binding */ PanoramicViewComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_panoramic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/panoramic.service */ 30541);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/map.service */ 39569);





class PanoramicViewComponent {
  constructor(panoramicService, dialog, mapService) {
    this.panoramicService = panoramicService;
    this.dialog = dialog;
    this.mapService = mapService;
  }
  ngOnInit() {
    if (!document.getElementById("krpanoSWFObject")) {
      embedpano({
        swf: './assets/panoramic/tour.swf',
        xml: './assets/panoramic/tour.xml ',
        target: 'pano',
        html5: 'only',
        mobilescale: 1.0,
        passQueryParameters: true,
        onready: this.panoramicReady,
        panoramicService: this.panoramicService,
        mapService: this.mapService,
        dialog: this.dialog
      });
    }
    ;
  }
  panoramicReady(panoramic) {
    this.mapService.getViewMap().rotation = 0;
    this.mapService.getViewMap().constraints.rotationEnabled = false;
    this.panoramicService.setPanoramic(panoramic);
    this.mapService.addMarkersLayer(panoramic);
    // This variable contains the date of the virtual tour, this is passed to krpano using "set", and is shown in vtourskin.xml --DS
    panoramic.set("myKrpVar", src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imagesDate);
    //this calls the last scene when the view is closed an re-opened --DS
    if (this.mapService.currentScene) {
      let xml = this.mapService.currentScene.split('_')[1] + '.xml';
      this.panoramicService.loadScene(xml, this.mapService.currentScene);
    }
  }
  ngOnDestroy() {
    this.mapService.getViewMap().constraints.rotationEnabled = true;
  }
}
PanoramicViewComponent.ɵfac = function PanoramicViewComponent_Factory(t) {
  return new (t || PanoramicViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_panoramic_service__WEBPACK_IMPORTED_MODULE_1__.PanoramicService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_map_service__WEBPACK_IMPORTED_MODULE_2__.MapService));
};
PanoramicViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: PanoramicViewComponent,
  selectors: [["app-view-panoramic"]],
  decls: 1,
  vars: 0,
  consts: [["id", "pano", 1, "pano"]],
  template: function PanoramicViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
    }
  },
  styles: [".pano[_ngcontent-%COMP%]{\n    height: 100%;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlldy9jb21wb25lbnRzL3Bhbm9yYW1pYy12aWV3L3Bhbm9yYW1pYy12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbm97XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 94966:
/*!*************************************************!*\
  !*** ./src/app/view/services/active.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveService": () => (/* binding */ ActiveService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);






class ActiveService {
  constructor(http) {
    this.http = http;
    // Define API
    this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    /*========================================
    CRUD Methods for consuming RESTful API
    =========================================*/
    // Http Options
    this.httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  // HttpClient API get() method => Fetch active list
  getAllActives() {
    return this.http.get(this.apiURL + '/getformulariocaptura').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // HttpClient API get() method => Fetch active
  getActive(id) {
    return this.http.get(this.apiURL + '/formulario_captura/' + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // HttpClient API post() method => Create active
  createActive(active) {
    return this.http.post(this.apiURL + '/formulario_captura/0', JSON.stringify(active), this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  getActivesFilter(filters) {
    return this.http.post(this.apiURL + '/pBuscarFormularioCaptura', JSON.stringify(filters), this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  createCapture(capture) {
    return this.http.post(this.apiURL + '/formulario_captura_campo/0', JSON.stringify(capture), this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // HttpClient API put() method => Update active
  updateActive(id, active) {
    return this.http.put(this.apiURL + '/formulario_captura/' + id, JSON.stringify(active), this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // HttpClient API delete() method => Delete active
  deleteActive(id) {
    return this.http.delete(this.apiURL + '/formulario_captura/' + id, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  // Error handling
  handleError(error) {
    let errorMessage = 'Intente nuevamente';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Codigo Error (captura): ${error.status} Message: ${error.message}`;
    }
    window.alert(errorMessage);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errorMessage);
  }
}
ActiveService.ɵfac = function ActiveService_Factory(t) {
  return new (t || ActiveService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
ActiveService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: ActiveService,
  factory: ActiveService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 39569:
/*!**********************************************!*\
  !*** ./src/app/view/services/map.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapService": () => (/* binding */ MapService)
/* harmony export */ });
/* harmony import */ var _arcgis_core_Graphic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @arcgis/core/Graphic */ 26763);
/* harmony import */ var _arcgis_core_core_Collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @arcgis/core/core/Collection */ 28586);
/* harmony import */ var _arcgis_core_geometry_Point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @arcgis/core/geometry/Point */ 72062);
/* harmony import */ var _arcgis_core_renderers_SimpleRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @arcgis/core/renderers/SimpleRenderer */ 79191);
/* harmony import */ var _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @arcgis/core/layers/FeatureLayer */ 88749);
/* harmony import */ var _arcgis_core_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @arcgis/core/core/reactiveUtils */ 7521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _active_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./active.service */ 94966);








class MapService {
  constructor(activeService) {
    this.activeService = activeService;
    this.currentCategory = '';
    this.currentLayer = '';
    this.currentForm = '';
    this.currentFormId = ''; // este es el id del formulario
    this.markersSource = new _arcgis_core_core_Collection__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.newScene = false;
    this.showPano = false;
  }
  setViewMap(map) {
    this.mapView = map;
  }
  getViewMap() {
    return this.mapView;
  }
  activeScene(krpano) {
    let setActiveMarker = () => {
      this.currentScene = krpano.get('scene[get(xml.scene)].name');
      let query = this.layer.createQuery();
      query.where = `LOWER(scene) ='${this.currentScene}'`;
      this.layer.queryFeatures(query).then(function (response) {
        if (response) {
          this.newScene = true;
          let activeMarker = response.features[0].geometry;
          this.getHorizontalDirection(krpano, activeMarker);
          this.mapView.goTo(activeMarker); // aca se pasa la geometria del punto --DS
          this.mapView.zoom = 19;
        }
      }.bind(this));
    };
    krpano.set('events.onnewscene', setActiveMarker);
  }
  drawMarker(feature, hlookat) {
    this.mapView.graphics.removeAll();
    const symbol = {
      type: "picture-marker",
      url: "assets/img/SVG/RealGISicon_compass.svg",
      width: 32,
      height: 32,
      angle: hlookat
    };
    let directionGraphic = new _arcgis_core_Graphic__WEBPACK_IMPORTED_MODULE_0__["default"]({
      geometry: feature,
      //@ts-ignore
      symbol: symbol
    });
    this.mapView.graphics.add(directionGraphic);
    this.newScene = false;
    this.lastHlookAt = hlookat;
  }
  getHorizontalDirection(krpano, feature) {
    let viewChange = () => {
      // this line is mandatory to get values between 0 and 360 --DS
      krpano.call("adjusthlookat(180)");
      let hlookat = krpano.get('view.hlookat');
      if (hlookat !== this.lastHlookAt || this.newScene) {
        this.drawMarker(feature, hlookat);
      }
    };
    krpano.set('events.onviewchange', viewChange);
  }
  addMarkersLayer(krpano) {
    this.layer = this.mapView.map.allLayers.find(function (layer) {
      return layer.title.toLowerCase().includes('hotspot') && layer.type === 'feature';
    });
    this.layer.visible = true;
    this.layer.outFields = ["*"];
    this.mapView.whenLayerView(this.layer).then(layerView => {
      this.view = layerView;
    });
    this.layer.when(() => {
      return this.layer.queryExtent();
    }).then(response => {
      this.mapView.goTo(response.extent);
    });
    this.activeScene(krpano);
    //this is simbology based on zoom level --DS
    _arcgis_core_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_5__.when(() => this.mapView.stationary === true, () => {
      let radius;
      if (this.mapView.zoom > 19) {
        radius = this.mapView.zoom - 10;
      } else {
        radius = 5;
      }
      this.layer.renderer.symbol.size = radius;
    });
    this.mapView.on('click', function (event) {
      const opts = {
        include: this.layer
      };
      this.mapView.hitTest(event, opts).then(response => {
        if (response.results.length) {
          if (!this.showPano) {
            this.showPano = true;
          }
          const graphic = response.results[0].graphic;
          let sceneXml = graphic.attributes.xml_origen;
          let sceneName = graphic.attributes.scene;
          krpano.call(`loadpanoscene(xml/${sceneXml},${sceneName}, null, MERGE, NOBLEND);`);
        }
      });
    }.bind(this));
  }
  removeMarkers() {
    this.layer.visible = false;
    this.newScene = false;
    this.mapView.graphics.removeAll();
    this.showPano = false;
  }
  addActives() {
    if (this.currentFormId != "") {
      let activeSymbol = {
        type: 'simple-marker',
        color: 'yellow',
        size: 12,
        style: 'triangle',
        outline: {
          color: 'black',
          width: 0.4
        }
      };
      var filter = {
        formulario_id: this.currentFormId
      };
      let activesSource = new _arcgis_core_core_Collection__WEBPACK_IMPORTED_MODULE_1__["default"]();
      activesSource.removeAll();
      this.activeService.getActivesFilter(filter).subscribe(data => {
        Object.entries(data["SDTFormularioCapturaFiltro"]).forEach(([key, value]) => {
          let marker = new _arcgis_core_Graphic__WEBPACK_IMPORTED_MODULE_0__["default"]({
            geometry: new _arcgis_core_geometry_Point__WEBPACK_IMPORTED_MODULE_2__["default"]({
              latitude: value["formulario_captura_latitud"],
              longitude: value["formulario_captura_longitud"]
            })
          });
          activesSource.add(marker);
        });
        let activesLayer = new _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__["default"]({
          source: activesSource,
          objectIdField: 'ObjectID',
          geometryType: 'point',
          renderer: new _arcgis_core_renderers_SimpleRenderer__WEBPACK_IMPORTED_MODULE_3__["default"]({
            symbol: activeSymbol
          }),
          popupEnabled: false,
          visible: true,
          title: 'Activos'
        });
        this.mapView.map.layers.find(function (layer) {
          if (layer.title === 'Activos') {
            this.mapView.map.remove(layer);
          }
          return true;
        }.bind(this));
        this.mapView.map.add(activesLayer);
      });
    }
  }
  setCurrentCategory(category) {
    this.currentCategory = category;
  }
  setCurrentLayer(layer) {
    this.currentLayer = layer;
  }
  setCurrentForm(form) {
    this.currentForm = form;
  }
  setCurrentFormId(formId) {
    this.currentFormId = formId;
  }
  getCurrentCategory() {
    return this.currentCategory;
  }
  getCurrentLayer() {
    return this.currentLayer;
  }
  getCurrentForm() {
    return this.currentForm;
  }
  getCurrentFormId() {
    return this.currentFormId;
  }
}
MapService.ɵfac = function MapService_Factory(t) {
  return new (t || MapService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_active_service__WEBPACK_IMPORTED_MODULE_6__.ActiveService));
};
MapService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: MapService,
  factory: MapService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 30541:
/*!****************************************************!*\
  !*** ./src/app/view/services/panoramic.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanoramicService": () => (/* binding */ PanoramicService)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.service */ 39569);
/* harmony import */ var _active_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./active.service */ 94966);




class PanoramicService {
  constructor(mapService, activeService) {
    this.mapService = mapService;
    this.activeService = activeService;
    this.createActive = false;
  }
  setPanoramic(panoramic) {
    this.panoramic = panoramic;
  }
  getPanoramic() {
    return this.panoramic;
  }
  setCreateActive(createActive) {
    this.createActive = createActive;
  }
  getCreateActive() {
    return this.createActive;
  }
  loadScene(xml, scenename) {
    this.panoramic.call(`loadpanoscene(xml/${xml},${scenename}, null, MERGE, NOBLEND);`);
  }
  //Se crean los hotspots del activo
  /* private createHotspots(ath, atv, scene) {
    var hs_name = "hs_" + scene;
    this.panoramic.call("addhotspot(" + hs_name + ")");
    this.panoramic.set(
      "hotspot[" + hs_name + "].url",
      "./assets/panoramic/skin/vtourskin_hotspot.png"
    );
    this.panoramic.set("hotspot[" + hs_name + "].ath", ath);
    this.panoramic.set("hotspot[" + hs_name + "].atv", atv);
    this.panoramic.set(
      "hotspot[" + hs_name + "].loadstyle('skin_hotspotstyle')"
    );
       if (this.panoramic.get("device.html5")) {
      this.panoramic.set(
        "hotspot[" + hs_name + "].onclick",
        function (scene) {
          this.panoramic.call("loadscene(" + scene + ", null, MERGE);");
        }.bind(this, scene, this.panoramic)
      );
    } else {
      this.panoramic.set(
        "hotspot[" + hs_name + "].onclick",
        "js( alert(calc('hotspot \"' + name + '\" clicked')) );"
      );
    }
  } */
  /*  addHotspots() {
     if (this.panoramic) {
       var scene = this.panoramic.get("scene[get(xml.scene)]");
       var sceneDown = this.panoramic.get("scene").getItem(scene.index - 1);
       var sceneUp = this.panoramic.get("scene").getItem(scene.index + 1);
           var ath = this.panoramic.get("view.hlookat");
       var atv = this.panoramic.get("view.vlookat");
       var style = "skin_hotspotstyle";
           if (sceneUp !== undefined) {
         this.createHotspots(ath, atv, sceneUp.name);
       }
           if (sceneDown !== undefined) {
         ath = -1 * ath;
         this.createHotspots(ath, atv, sceneDown.name);
       }
     }
   } */
  addActive(dialog, ModalComponent, ModalRemoveComponent) {
    this.panoramic.call("screentosphere(mouse.x,mouse.y,m_ath,m_atv);");
    var posX = this.panoramic.get("m_ath");
    var posY = this.panoramic.get("m_atv");
    var uniqname = "hs" + Date.now();
    var scene = this.panoramic.get("scene[get(xml.scene)]");
    var view = this.panoramic.get("view");
    var hlookat = view.hlookat;
    var vlookat = view.vlookat;
    var fov = view.fov;
    var lat = scene.lat;
    var lng = scene.lng;
    var name = scene.name;
    dialog.open(ModalComponent, {
      data: {
        scene: name,
        posX: posX,
        posY: posY,
        lat: lat,
        lng: lng
      }
    }).afterClosed().subscribe(response => {
      if (response) {
        let id = response.data.formulario_captura_id;
        let nameActive = response.data.formulario_captura_nombre;
        this.panoramic.call("addhotspot( hs_" + id + ");");
        this.panoramic.set("hotspot[ hs_" + id + "].url", "./assets/img/property.png");
        this.panoramic.call("set(hotspot[ hs_" + id + "].ath," + posX + ");");
        this.panoramic.call("set(hotspot[ hs_" + id + "].atv, " + posY + ");");
        this.panoramic.call("hotspot[ hs_" + id + "].loadstyle('hotspot_ani_white');");
        this.panoramic.set("hotspot[ hs_" + id + "].onclick", function () {
          const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogConfig();
          dialogConfig.disableClose = true;
          dialogConfig.autoFocus = false;
          dialogConfig.closeOnNavigation = false;
          dialogConfig.data = {
            id: id,
            name: nameActive,
            lat: lat,
            lng: lng
          };
          dialog.open(ModalRemoveComponent, dialogConfig);
        }.bind(this));
      }
    });
  }
  //Crea los hotspots en el tour de los activos creados
  addPoints(dialog, ModalRemoveComponent) {
    var filter = {
      "formulario_id": this.mapService.getCurrentFormId()
    };
    this.activeService.getActivesFilter(filter).subscribe(data => {
      var panoramic = this.panoramic;
      Object.entries(data["SDTFormularioCapturaFiltro"]).forEach(function ([key, val]) {
        var scene = panoramic.get("scene[get(xml.scene)]");
        if (scene) {
          if (scene.name == val["formulario_captura_scene"]) {
            panoramic.call("addhotspot( hs_" + val["formulario_captura_id"] + ");");
            panoramic.set("hotspot[ hs_" + val["formulario_captura_id"] + "].url", "./assets/img/property.png");
            panoramic.call("set(hotspot[ hs_" + val["formulario_captura_id"] + "].atv," + val["formulario_captura_y"] + ");");
            panoramic.call("set(hotspot[ hs_" + val["formulario_captura_id"] + "].ath, " + val["formulario_captura_x"] + ");");
            panoramic.call("hotspot[ hs_" + val["formulario_captura_id"] + "].loadstyle('hotspot_ani_white');");
            panoramic.set("hotspot[ hs_" + val["formulario_captura_id"] + "].onclick", function () {
              dialog.open(ModalRemoveComponent, {
                autoFocus: false,
                data: {
                  id: val["formulario_captura_id"],
                  name: val["formulario_captura_nombre"],
                  lat: val["formulario_captura_latitud"],
                  lng: val["formulario_captura_longitud"],
                  hash: val["gx_md5_hash"]
                }
              });
            }.bind(this));
          }
        }
      });
    });
  }
  deleteHotspot(id) {
    this.panoramic.call("removehotspot( hs_" + id + ");");
  }
}
PanoramicService.ɵfac = function PanoramicService_Factory(t) {
  return new (t || PanoramicService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_map_service__WEBPACK_IMPORTED_MODULE_0__.MapService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_active_service__WEBPACK_IMPORTED_MODULE_1__.ActiveService));
};
PanoramicService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: PanoramicService,
  factory: PanoramicService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 63070:
/*!*************************************!*\
  !*** ./src/app/view/view.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewModule": () => (/* binding */ ViewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ 42642);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _components_map_view_map_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/map-view/map-view.component */ 46288);
/* harmony import */ var _components_panoramic_view_panoramic_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/panoramic-view/panoramic-view.component */ 38560);
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/map.service */ 39569);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material/material.module */ 90898);
/* harmony import */ var _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/widgets.module */ 50546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);









class ViewModule {}
ViewModule.ɵfac = function ViewModule_Factory(t) {
  return new (t || ViewModule)();
};
ViewModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: ViewModule
});
ViewModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [_services_map_service__WEBPACK_IMPORTED_MODULE_2__.MapService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__.MatGridListModule, _material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_4__.WidgetsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ViewModule, {
    declarations: [_components_map_view_map_view_component__WEBPACK_IMPORTED_MODULE_0__.MapViewComponent, _components_panoramic_view_panoramic_view_component__WEBPACK_IMPORTED_MODULE_1__.PanoramicViewComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__.MatGridListModule, _material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_4__.WidgetsModule],
    exports: [_components_map_view_map_view_component__WEBPACK_IMPORTED_MODULE_0__.MapViewComponent, _components_panoramic_view_panoramic_view_component__WEBPACK_IMPORTED_MODULE_1__.PanoramicViewComponent]
  });
})();

/***/ }),

/***/ 72085:
/*!**********************************************************!*\
  !*** ./src/app/widgets/add-layer/add-layer.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddLayerComponent": () => (/* binding */ AddLayerComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _arcgis_core_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @arcgis/core/request */ 1897);
/* harmony import */ var _arcgis_core_Graphic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @arcgis/core/Graphic */ 26763);
/* harmony import */ var _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @arcgis/core/layers/FeatureLayer */ 88749);
/* harmony import */ var _arcgis_core_layers_support_Field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @arcgis/core/layers/support/Field */ 23973);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _view_services_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../view/services/map.service */ 39569);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../title-bar/title-bar.component */ 57436);









class AddLayerComponent {
  constructor(mapService) {
    this.mapService = mapService;
    this.portalUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.portalUrl;
  }
  ngOnInit() {}
  uploadFile(e) {
    let fileName = e.target.value.toLowerCase().split(".");
    const type = fileName[1];
    fileName = fileName[0].replace("c:\\fakepath\\", "");
    this.uploadStatus = "Agregando: " + fileName + "." + type;
    let filetype, idObject;
    switch (type) {
      case "geojson":
        filetype = "geojson";
        idObject = "ObjectId";
        break;
      case "zip":
        filetype = "shapefile";
        idObject = "FID";
        break;
      case "csv":
        filetype = "csv";
        break;
      case "gpx":
        filetype = "gpx";
        break;
    }
    var params = {
      name: fileName,
      targetSR: this.mapService.getViewMap().spatialReference,
      maxRecordCount: 1000,
      enforceInputFileSizeLimit: true,
      enforceOutputJsonSizeLimit: true,
      generalize: true,
      maxAllowableOffset: 10,
      reducePrecision: false,
      numberOfDigitsAfterDecimal: 2
    };
    const myContent = {
      filetype: filetype,
      publishParameters: JSON.stringify(params),
      f: "json"
    };
    const form = document.getElementById("uploadForm");
    var formData = new FormData();
    var file = e.target.files[0];
    formData.append("file", file);
    (0,_arcgis_core_request__WEBPACK_IMPORTED_MODULE_1__["default"])("https://www.arcgis.com/sharing/rest/content/features/generate", {
      query: myContent,
      body: formData,
      responseType: "json",
      method: "post"
    }).then(function (response) {
      var layerName = response.data.featureCollection.layers[0].layerDefinition.name;
      this.addFileToMap(response.data.featureCollection, idObject, layerName);
      this.uploadStatus = "Agregado: " + layerName;
    }.bind(this)).catch(function (error) {
      this.uploadStatus = "Error: " + error.message;
    }.bind(this));
  }
  addFileToMap(features, idObject, layerName) {
    var sourceGraphics = [];
    var layers = features.layers.map(function (layer) {
      var graphics = layer.featureSet.features.map(function (feature) {
        var graph = _arcgis_core_Graphic__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(feature);
        return graph;
      });
      sourceGraphics = sourceGraphics.concat(graphics);
      var featureLayer = new _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_3__["default"]({
        objectIdField: idObject,
        source: graphics,
        fields: layer.layerDefinition.fields.map(function (field) {
          return _arcgis_core_layers_support_Field__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON(field);
        })
      });
      return featureLayer;
    });
    layers[0].title = layerName;
    this.mapService.getViewMap().map.addMany(layers);
    this.mapService.getViewMap().goTo(sourceGraphics).catch(function (error) {
      if (error.name != "AbortError") {
        console.error(error);
      }
    });
    this.mapService.getViewMap().popup.defaultPopupTemplateEnabled = true;
  }
}
AddLayerComponent.ɵfac = function AddLayerComponent_Factory(t) {
  return new (t || AddLayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_view_services_map_service__WEBPACK_IMPORTED_MODULE_5__.MapService));
};
AddLayerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: AddLayerComponent,
  selectors: [["app-add-layer"]],
  decls: 21,
  vars: 3,
  consts: [[3, "title", "icon"], ["name", "content", 1, "styleContent"], [2, "text-align", "center"], ["id", "uploadForm", 1, "uploadForm", 3, "change"], ["type", "file", "name", "file", "id", "inFile", 1, "input-custom"], ["for", "inFile", 1, "label-input"], ["id", "status-file", 1, "styleStatus"], ["id", "upload-status", 1, "upload-status"]],
  template: function AddLayerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-title-bar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1)(2, "p", 2)(3, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "SELECCIONA UN ARCHIVO COMPATIBLE:");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ul")(6, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "SHAPEFILE (COMPRIMIDO EN .ZIP)");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "GPX");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "GEO JSON");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "CSV");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AddLayerComponent_Template_form_change_14_listener($event) {
        return ctx.uploadFile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " BUSCAR ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 6)(19, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Importar Capa")("icon", "library_add");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.uploadStatus);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_6__.TitleBarComponent],
  styles: [".styleContent[_ngcontent-%COMP%] {\n    width: 200px;\n    background: white;\n    margin: 5px;\n}\n\n.input-custom[_ngcontent-%COMP%] {\n    width: 0.1px;\n    height: 0.1px;\n    opacity: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: -1;\n}\n\n.label-input[_ngcontent-%COMP%] {\n\n    cursor: pointer;\n    padding: 5px 25px;\n    text-align: center;\n    border-radius: 5%;\n    background-color: rgb(0,74,137);\n    color: white;\n    border: none;\n    text-decoration: none;\n    font-size: 14px;\n    text-align: center;\n}\n\n.uploadForm[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.styleStatus[_ngcontent-%COMP%]{\n    font-size: x-small;\n    height: auto;\n    contain: content;\n    width: auto;\n    word-break: break-all;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2lkZ2V0cy9hZGQtbGF5ZXIvYWRkLWxheWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBOztJQUVJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxxQkFBcUI7QUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R5bGVDb250ZW50IHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbi5pbnB1dC1jdXN0b20ge1xuICAgIHdpZHRoOiAwLjFweDtcbiAgICBoZWlnaHQ6IDAuMXB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogLTE7XG59XG5cbi5sYWJlbC1pbnB1dCB7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogNXB4IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDc0LDEzNyk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVwbG9hZEZvcm0ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN0eWxlU3RhdHVze1xuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgY29udGFpbjogY29udGVudDtcbiAgICB3aWR0aDogYXV0bztcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 80109:
/*!**********************************************************************!*\
  !*** ./src/app/widgets/basemap-gallery/basemap-gallery.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasemapGalleryComponent": () => (/* binding */ BasemapGalleryComponent)
/* harmony export */ });
/* harmony import */ var _arcgis_core_widgets_BasemapGallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @arcgis/core/widgets/BasemapGallery */ 84859);
/* harmony import */ var _arcgis_core_Basemap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @arcgis/core/Basemap */ 51186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _view_services_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../view/services/map.service */ 39569);
/* harmony import */ var _title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../title-bar/title-bar.component */ 57436);





class BasemapGalleryComponent {
  constructor(mapService) {
    this.mapService = mapService;
  }
  ngOnInit() {
    let basemapCCH = new _arcgis_core_Basemap__WEBPACK_IMPORTED_MODULE_1__["default"]({
      portalItem: {
        id: "11dd85011fab42e18f656c43144396f2" //BaseMap Huila Imagenes Satelitales + Imagery Google
      }
    });

    this.basemapGallery = new _arcgis_core_widgets_BasemapGallery__WEBPACK_IMPORTED_MODULE_0__["default"]({
      view: this.mapService.getViewMap(),
      container: 'divBasemapGallery'
    });
  }
}
BasemapGalleryComponent.ɵfac = function BasemapGalleryComponent_Factory(t) {
  return new (t || BasemapGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_view_services_map_service__WEBPACK_IMPORTED_MODULE_2__.MapService));
};
BasemapGalleryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: BasemapGalleryComponent,
  selectors: [["app-basemap-gallery"]],
  decls: 2,
  vars: 2,
  consts: [[3, "title", "icon"], ["id", "divBasemapGallery", 1, "BasemapGallery"]],
  template: function BasemapGalleryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-title-bar", 0)(1, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Galeria de Mapas base")("icon", "dataset");
    }
  },
  dependencies: [_title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_3__.TitleBarComponent],
  styles: [".BasemapGallery[_ngcontent-%COMP%]{\n    width: auto;\n    max-height: 300px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2lkZ2V0cy9iYXNlbWFwLWdhbGxlcnkvYmFzZW1hcC1nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLkJhc2VtYXBHYWxsZXJ5e1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 40693:
/*!*****************************************************************!*\
  !*** ./src/app/widgets/directiva/directive-widget.directive.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetDirective": () => (/* binding */ WidgetDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class WidgetDirective {
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }
}
WidgetDirective.ɵfac = function WidgetDirective_Factory(t) {
  return new (t || WidgetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
};
WidgetDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: WidgetDirective,
  selectors: [["", "appDirectiveWidget", ""]]
});

/***/ }),

/***/ 86208:
/*!********************************************************!*\
  !*** ./src/app/widgets/home-bar/home-bar.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeBarComponent": () => (/* binding */ HomeBarComponent)
/* harmony export */ });
/* harmony import */ var _arcgis_core_widgets_Zoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @arcgis/core/widgets/Zoom */ 35042);
/* harmony import */ var _arcgis_core_widgets_Locate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @arcgis/core/widgets/Locate */ 49341);
/* harmony import */ var _arcgis_core_widgets_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @arcgis/core/widgets/Home */ 84210);
/* harmony import */ var _arcgis_core_symbols_PictureMarkerSymbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @arcgis/core/symbols/PictureMarkerSymbol */ 79409);
/* harmony import */ var _arcgis_core_Graphic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @arcgis/core/Graphic */ 26763);
/* harmony import */ var _arcgis_core_widgets_Compass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @arcgis/core/widgets/Compass */ 80687);
/* harmony import */ var _arcgis_core_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @arcgis/core/core/reactiveUtils */ 7521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _view_services_map_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../view/services/map.service */ 39569);
/* harmony import */ var src_app_home_components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/home/components/home/home.component */ 52093);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84522);













class HomeBarComponent {
  constructor(iconRegistry, sanitizer, mapService, homeComponent) {
    this.mapService = mapService;
    this.homeComponent = homeComponent;
    iconRegistry.addSvgIconInNamespace("homeBar", "compass", sanitizer.bypassSecurityTrustResourceUrl("assets/img/SVG/RealGISicon_compass.svg"));
    iconRegistry.addSvgIconInNamespace("homeBar", "locate", sanitizer.bypassSecurityTrustResourceUrl("assets/img/SVG/RealGISicon_locate.svg"));
    iconRegistry.addSvgIconInNamespace("homeBar", "home", sanitizer.bypassSecurityTrustResourceUrl("assets/img/SVG/RealGISicon_home.svg"));
    iconRegistry.addSvgIconInNamespace("homeBar", "left", sanitizer.bypassSecurityTrustResourceUrl("assets/img/SVG/RealGISicon_arrow_left.svg"));
    iconRegistry.addSvgIconInNamespace("homeBar", "rigth", sanitizer.bypassSecurityTrustResourceUrl("assets/img/SVG/RealGISicon_arrow_rigth.svg"));
    iconRegistry.addSvgIconInNamespace("homeBar", "zoomin", sanitizer.bypassSecurityTrustResourceUrl("assets/img/SVG/RealGISicon_add.svg"));
    iconRegistry.addSvgIconInNamespace("homeBar", "zoomout", sanitizer.bypassSecurityTrustResourceUrl("assets/img/SVG/RealGISicon_subtract.svg"));
  }
  ngOnInit() {
    this.watchNorth();
    this.controlZoom = new _arcgis_core_widgets_Zoom__WEBPACK_IMPORTED_MODULE_0__["default"]({
      view: this.mapService.getViewMap()
    });
    // this.valorZoom = this.mapService.getViewMap().zoom;
    this.location = new _arcgis_core_widgets_Locate__WEBPACK_IMPORTED_MODULE_1__["default"]({
      view: this.mapService.getViewMap(),
      graphic: new _arcgis_core_Graphic__WEBPACK_IMPORTED_MODULE_4__["default"]({
        symbol: new _arcgis_core_symbols_PictureMarkerSymbol__WEBPACK_IMPORTED_MODULE_3__["default"]({
          url: "./assets/img/SVG/RealGISicon_ubication_blue.svg",
          width: "40px",
          height: "40px"
        })
      })
    });
    this.home = new _arcgis_core_widgets_Home__WEBPACK_IMPORTED_MODULE_2__["default"]({
      view: this.mapService.getViewMap(),
      viewpoint: this.mapService.getViewMap().viewpoint
    });
    this.compass = new _arcgis_core_widgets_Compass__WEBPACK_IMPORTED_MODULE_5__["default"]({
      view: this.mapService.getViewMap()
    });
  }
  zoomIn() {
    this.controlZoom.zoomIn();
  }
  zoomOut() {
    this.controlZoom.zoomOut();
  }
  changeZoom(value) {
    this.mapService.getViewMap().zoom = value;
  }
  locate() {
    this.location.locate();
  }
  goHome() {
    this.home.go();
  }
  resetNorth() {
    this.compass.reset();
  }
  watchNorth() {
    const view = this.mapService.getViewMap();
    _arcgis_core_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_6__.watch(() => view.rotation, rotation => {
      this.compassRotation = rotation;
    });
  }
}
HomeBarComponent.ɵfac = function HomeBarComponent_Factory(t) {
  return new (t || HomeBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_view_services_map_service__WEBPACK_IMPORTED_MODULE_7__.MapService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_home_components_home_home_component__WEBPACK_IMPORTED_MODULE_8__.HomeComponent));
};
HomeBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: HomeBarComponent,
  selectors: [["app-home-bar"]],
  decls: 14,
  vars: 0,
  consts: [["id", "homeBar", 1, "styleBar"], ["homeBar", ""], ["mat-icon-button", "", 1, "buttonBar", 3, "click"]],
  template: function HomeBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0, 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomeBarComponent_Template_button_click_2_listener() {
        return ctx.goHome();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "home");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomeBarComponent_Template_button_click_5_listener() {
        return ctx.locate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "my_location");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomeBarComponent_Template_button_click_8_listener() {
        return ctx.zoomIn();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomeBarComponent_Template_button_click_11_listener() {
        return ctx.zoomOut();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "remove");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatIconButton],
  styles: [".styleBar[_ngcontent-%COMP%] {\n    display: inline-grid;\n    background-color: #ffffff87;\n    width: 35px;\n    height: auto;\n    border-radius: 15px;\n    place-content: center;\n    box-shadow: none;\n}\n\n\n.buttonBar[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n}\n\n.iconButton[_ngcontent-%COMP%] {\n    border-radius: 50%;\n}\n\n.slidecontainer[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 48px;\n    height: 130px;\n}\n\n.rotated[_ngcontent-%COMP%] {\n    transform: rotate(270deg);\n    width: 130px;\n}\n\ninput[type=\"range\"][_ngcontent-%COMP%] {\n    -webkit-appearance: none;\n    appearance: none;\n    background: transparent;\n    cursor: grab;\n}\n\n\n\ninput[type=\"range\"][_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n    background-color: #032040 ;\n    border-radius: 2rem;\n    height: 0.5rem;\n}\n\n\ninput[type=\"range\"][_ngcontent-%COMP%]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    \n    appearance: none;\n    \n    margin-top: -6px;\n    background-color:#F5F5F5 ;\n    box-shadow: 0 0 4px 0 black;\n    -webkit-transition: background .3s ease-in-out;\n    transition: background .3s ease-in-out;\n    \n    border-radius: 50%;\n    height: 1.2rem;\n    width: 1.2rem;\n}\n\n\ninput[type=\"range\"][_ngcontent-%COMP%]::-moz-range-track {\n    background-color: #032040 ;\n    border-radius: 2rem;\n    height: 0.5rem;\n}\n\n\n\ninput[type=\"range\"][_ngcontent-%COMP%]::-moz-range-thumb {\n    background-color:#F5F5F5;\n    \n    border: none;\n    box-shadow: 0 0 4px 0 black;\n    -moz-transition: background .3s ease-in-out;\n    transition: background .3s ease-in-out;\n    border-radius: 50%;\n    height: 1.2rem;\n    width: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2lkZ2V0cy9ob21lLWJhci9ob21lLWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBLGlFQUFpRTtBQUNqRSxpQkFBaUI7QUFDakI7SUFDSSwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLDhDQUFzQztJQUF0QyxzQ0FBc0M7SUFDdEMscUVBQXFFO0lBQ3JFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsYUFBYTtBQUNqQjtBQUNBLHVDQUF1QztBQUN2QyxpQkFBaUI7QUFDakI7SUFDSSwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUEsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQjtJQUNJLHdCQUF3QjtJQUN4QixxRUFBcUU7SUFDckUsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQiwyQ0FBc0M7SUFBdEMsc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsYUFBYTtBQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIi5zdHlsZUJhciB7XG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjg3O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG5cbi5idXR0b25CYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbn1cblxuLmljb25CdXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnNsaWRlY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiAxMzBweDtcbn1cblxuLnJvdGF0ZWQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gICAgd2lkdGg6IDEzMHB4O1xufVxuXG5pbnB1dFt0eXBlPVwicmFuZ2VcIl0ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogZ3JhYjtcbn1cblxuLyoqKioqKioqIENocm9tZSwgU2FmYXJpLCBPcGVyYSBhbmQgRWRnZSBDaHJvbWl1bSBzdHlsZXMgKioqKioqKiovXG4vKiBzbGlkZXIgdHJhY2sgKi9cbmlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzIwNDAgO1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgaGVpZ2h0OiAwLjVyZW07XG59XG5cbi8qIHNsaWRlciB0aHVtYiAqL1xuaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC8qIE92ZXJyaWRlIGRlZmF1bHQgbG9vayAqL1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLyogQ2VudGVycyB0aHVtYiBvbiB0aGUgdHJhY2sgKi9cbiAgICBtYXJnaW4tdG9wOiAtNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6I0Y1RjVGNSA7XG4gICAgYm94LXNoYWRvdzogMCAwIDRweCAwIGJsYWNrO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2UtaW4tb3V0O1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL1NWRy9SZWFsR0lTaWNvbl9zY3JvbGwuc3ZnXCIpOyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDEuMnJlbTtcbiAgICB3aWR0aDogMS4ycmVtO1xufVxuLyoqKioqKioqKioqIEZpcmVmb3ggc3R5bGVzICoqKioqKioqKioqL1xuLyogc2xpZGVyIHRyYWNrICovXG5pbnB1dFt0eXBlPVwicmFuZ2VcIl06Oi1tb3otcmFuZ2UtdHJhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzIwNDAgO1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgaGVpZ2h0OiAwLjVyZW07XG59XG5cbi8qIHNsaWRlciB0aHVtYiAqL1xuLyogc2xpZGVyIHRodW1iICovXG5pbnB1dFt0eXBlPVwicmFuZ2VcIl06Oi1tb3otcmFuZ2UtdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6I0Y1RjVGNTtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9TVkcvUmVhbEdJU2ljb25fc2Nyb2xsLnN2Z1wiKTsgKi9cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAwIDRweCAwIGJsYWNrO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDEuMnJlbTtcbiAgICB3aWR0aDogMS4ycmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3106:
/*!**************************************************************!*\
  !*** ./src/app/widgets/layers-list/layers-list.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayersListComponent": () => (/* binding */ LayersListComponent)
/* harmony export */ });
/* harmony import */ var _arcgis_core_widgets_LayerList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @arcgis/core/widgets/LayerList */ 78422);
/* harmony import */ var _arcgis_core_widgets_Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @arcgis/core/widgets/Slider */ 86440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _view_services_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../view/services/map.service */ 39569);
/* harmony import */ var _title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../title-bar/title-bar.component */ 57436);





class LayersListComponent {
  constructor(mapService) {
    this.mapService = mapService;
  }
  ngOnInit() {
    this.layerList = new _arcgis_core_widgets_LayerList__WEBPACK_IMPORTED_MODULE_0__["default"]({
      view: this.mapService.getViewMap(),
      container: 'divLayersList',
      listItemCreatedFunction: event => {
        const item = event.item;
        const slider = new _arcgis_core_widgets_Slider__WEBPACK_IMPORTED_MODULE_1__["default"]({
          min: 0,
          max: 100,
          values: [item.layer.opacity * 100],
          precision: 0
        });
        item.panel = {
          content: ["Opacidad", slider],
          title: "Opacidad",
          className: "esri-icon-environment-settings"
        };
        slider.on("thumb-drag", event => {
          const {
            value
          } = event;
          item.layer.opacity = value / 100;
        });
      }
    });
  }
}
LayersListComponent.ɵfac = function LayersListComponent_Factory(t) {
  return new (t || LayersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_view_services_map_service__WEBPACK_IMPORTED_MODULE_2__.MapService));
};
LayersListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: LayersListComponent,
  selectors: [["app-layers-list"]],
  decls: 2,
  vars: 2,
  consts: [[3, "title", "icon"], ["id", "divLayersList", 1, "LayersList"]],
  template: function LayersListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-title-bar", 0)(1, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Lista de Capas")("icon", "layers");
    }
  },
  dependencies: [_title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_3__.TitleBarComponent],
  styles: [".LayersList[_ngcontent-%COMP%]{\n    max-height: 300px;\n    width: 280px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2lkZ2V0cy9sYXllcnMtbGlzdC9sYXllcnMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIuTGF5ZXJzTGlzdHtcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogMjgwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 84320:
/*!**************************************************************!*\
  !*** ./src/app/widgets/measurement/measurement.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeasurementComponent": () => (/* binding */ MeasurementComponent)
/* harmony export */ });
/* harmony import */ var _arcgis_core_widgets_Measurement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @arcgis/core/widgets/Measurement */ 61444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _view_services_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../view/services/map.service */ 39569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../title-bar/title-bar.component */ 57436);








function MeasurementComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Resultado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class MeasurementComponent {
  constructor(mapService) {
    this.mapService = mapService;
    this.measurementWidget = new _arcgis_core_widgets_Measurement__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  ngOnDestroy() {
    this.measurementWidget.clear();
  }
  ngOnInit() {
    this.measurementWidget.view = this.mapService.getViewMap();
    this.measurementWidget.areaUnit = "metric";
    this.measurementWidget.linearUnit = "metric";
    this.measurementWidget.container = 'measurementWidget';
  }
  measureDistance() {
    this.measurementWidget.activeTool = "distance";
  }
  measureArea() {
    this.measurementWidget.activeTool = "area";
  }
}
MeasurementComponent.ɵfac = function MeasurementComponent_Factory(t) {
  return new (t || MeasurementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_view_services_map_service__WEBPACK_IMPORTED_MODULE_1__.MapService));
};
MeasurementComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: MeasurementComponent,
  selectors: [["app-measurement"]],
  decls: 15,
  vars: 3,
  consts: [[3, "title", "icon"], ["id", "divMeasurement"], [3, "click"], ["mat-list-item", "", 3, "click"], ["id", "results", 1, "results"], ["class", "titleResult", 4, "ngIf"], ["id", "measurementWidget", 1, "measurementWidget"], [1, "titleResult"]],
  template: function MeasurementComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-title-bar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "mat-action-list")(3, "mat-list-item", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MeasurementComponent_Template_mat_list_item_click_3_listener() {
        return ctx.measureArea();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "square_foot");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " \u00C1rea ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-list-item", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MeasurementComponent_Template_mat_list_item_click_8_listener() {
        return ctx.measureDistance();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "straighten");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Distancia ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, MeasurementComponent_div_13_Template, 2, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Medici\u00F3n")("icon", "straighten");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.measurementWidget.activeTool);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatActionList, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListItem, _title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_2__.TitleBarComponent],
  styles: [".titleResult[_ngcontent-%COMP%] {\n  background-color:#d7e3ff;\n  color: black;\n  text-align: center;\n  height: 35px;\n  display: grid;\n  align-items: center;\n}\n\n.results[_ngcontent-%COMP%] {\n  padding-top: 5%;\n}\n\n.measurementWidget[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.icon[_ngcontent-%COMP%]{\n  height: 30px;\n}\n\n.divClearButton[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-bottom: 5%;\n  padding-top: 5%;\n}\n\n.clear[_ngcontent-%COMP%]{\n  color: #d7e3ff;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2lkZ2V0cy9tZWFzdXJlbWVudC9tZWFzdXJlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZCIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZVJlc3VsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6I2Q3ZTNmZjtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMzVweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJlc3VsdHMge1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG5cbi5tZWFzdXJlbWVudFdpZGdldCB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLmljb257XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmRpdkNsZWFyQnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuLmNsZWFye1xuICBjb2xvcjogI2Q3ZTNmZjtcbiAgaGVpZ2h0OiAyMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 59066:
/*!****************************************************************!*\
  !*** ./src/app/widgets/overview-map/overview-map.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverviewMapComponent": () => (/* binding */ OverviewMapComponent)
/* harmony export */ });
/* harmony import */ var _arcgis_core_Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @arcgis/core/Map */ 72596);
/* harmony import */ var _arcgis_core_views_MapView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @arcgis/core/views/MapView */ 73084);
/* harmony import */ var _arcgis_core_core_promiseUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @arcgis/core/core/promiseUtils */ 30801);
/* harmony import */ var _arcgis_core_Graphic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @arcgis/core/Graphic */ 26763);
/* harmony import */ var _arcgis_core_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @arcgis/core/core/reactiveUtils */ 7521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_view_services_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/services/map.service */ 39569);
/* harmony import */ var _title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../title-bar/title-bar.component */ 57436);








class OverviewMapComponent {
  constructor(mapService) {
    this.mapService = mapService;
  }
  ngOnInit() {
    this.createOveriew().then(() => {
      this.setUp();
    });
  }
  createOveriew() {
    const overviewMap = new _arcgis_core_Map__WEBPACK_IMPORTED_MODULE_0__["default"]({
      basemap: "topo-vector"
    });
    // esta es la vista del mapa overview
    this.view = new _arcgis_core_views_MapView__WEBPACK_IMPORTED_MODULE_1__["default"]({
      container: 'overviewDiv',
      map: overviewMap,
      constraints: {
        rotationEnabled: false
      }
    });
    // esta es la vista del mapa principal
    this.mainView = this.mapService.getViewMap();
    this.view.ui.components = [];
    return this.view.when();
  }
  setUp() {
    const extentDebouncer = _arcgis_core_core_promiseUtils__WEBPACK_IMPORTED_MODULE_2__.debounce(() => {
      this.view.goTo({
        center: this.mainView.center,
        scale: this.mainView.scale * 2.2 * Math.max(this.mainView.width / this.view.width, this.mainView.height / this.view.height)
      });
      return this.view.when();
    });
    const extentGraphic = new _arcgis_core_Graphic__WEBPACK_IMPORTED_MODULE_3__["default"]({
      geometry: null,
      symbol: {
        // @ts-ignore
        type: "simple-fill",
        color: [0, 0, 0, 0.5],
        outline: null
      }
    });
    this.view.graphics.add(extentGraphic);
    _arcgis_core_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_4__.watch(() => [this.mainView.stationary, this.mainView.extent], ([stationary, extent]) => {
      if (stationary) {
        extentDebouncer().then(() => {
          extentGraphic.geometry = extent;
        });
      }
    }, {
      initial: true
    });
  }
}
OverviewMapComponent.ɵfac = function OverviewMapComponent_Factory(t) {
  return new (t || OverviewMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_view_services_map_service__WEBPACK_IMPORTED_MODULE_5__.MapService));
};
OverviewMapComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: OverviewMapComponent,
  selectors: [["app-overview-map"]],
  decls: 3,
  vars: 2,
  consts: [[3, "title", "icon"], ["id", "overviewDiv", 1, "overview"], ["id", "extentDiv"]],
  template: function OverviewMapComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-title-bar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Vista General")("icon", "zoom_in_map");
    }
  },
  dependencies: [_title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_6__.TitleBarComponent],
  styles: [".overview[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 200px;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.extentDiv[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2lkZ2V0cy9vdmVydmlldy1tYXAvb3ZlcnZpZXctbWFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWiIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVydmlldyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgei1pbmRleDogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmV4dGVudERpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 45783:
/*!**************************************************!*\
  !*** ./src/app/widgets/print/print.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintComponent": () => (/* binding */ PrintComponent)
/* harmony export */ });
/* harmony import */ var _arcgis_core_widgets_Print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @arcgis/core/widgets/Print */ 73280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_view_services_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/view/services/map.service */ 39569);
/* harmony import */ var _title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../title-bar/title-bar.component */ 57436);




class PrintComponent {
  constructor(mapService) {
    this.mapService = mapService;
  }
  ngOnInit() {
    this.setUpPrint();
  }
  setUpPrint() {
    new _arcgis_core_widgets_Print__WEBPACK_IMPORTED_MODULE_0__["default"]({
      view: this.mapService.getViewMap(),
      container: "printContainer",
      // this is gisrealidad5 print service.
      printServiceUrl: "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task" //https://gisrealidad5.com/server/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task
    });
  }
}

PrintComponent.ɵfac = function PrintComponent_Factory(t) {
  return new (t || PrintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_view_services_map_service__WEBPACK_IMPORTED_MODULE_1__.MapService));
};
PrintComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: PrintComponent,
  selectors: [["app-print"]],
  decls: 2,
  vars: 2,
  consts: [[3, "title", "icon"], ["id", "printContainer"]],
  template: function PrintComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-title-bar", 0)(1, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Exportar Salida Gr\u00E1fica")("icon", "print");
    }
  },
  dependencies: [_title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_2__.TitleBarComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 30177:
/*!****************************************************!*\
  !*** ./src/app/widgets/search/search.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _view_services_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../view/services/map.service */ 39569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../title-bar/title-bar.component */ 57436);

















function SearchComponent_mat_tab_3_mat_hint_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Sin circulo registral.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SearchComponent_mat_tab_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-tab", 23)(1, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function SearchComponent_mat_tab_3_Template_form_input_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.inputForm($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-form-field")(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "C\u00E9dula Catastral Anterior");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function SearchComponent_mat_tab_3_Template_input_keypress_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.onKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-form-field")(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "C\u00F3digo Predial Nacional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 27, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function SearchComponent_mat_tab_3_Template_input_keypress_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.onKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-form-field")(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Matr\u00EDcula Inmobiliaria");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 28, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function SearchComponent_mat_tab_3_Template_input_keypress_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.onKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, SearchComponent_mat_tab_3_mat_hint_17_Template, 2, 0, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.catastralForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.matriculaActiva);
  }
}
function SearchComponent_mat_optgroup_10_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const layer_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", layer_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", layer_r15.title, " ");
  }
}
function SearchComponent_mat_optgroup_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-optgroup", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SearchComponent_mat_optgroup_10_mat_option_1_Template, 2, 2, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", group_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", group_r13.layers);
  }
}
function SearchComponent_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", field_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", field_r16.alias, " ");
  }
}
function SearchComponent_div_43_b_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r17.searchResults.length, " ");
  }
}
function SearchComponent_div_43_b_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r18.searchResults.length, " ");
  }
}
function SearchComponent_div_43_b_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " (>1000) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SearchComponent_div_43_mat_progress_bar_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 39);
  }
}
function SearchComponent_div_43_mat_list_item_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 41)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-menu", null, 42)(7, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SearchComponent_div_43_mat_list_item_11_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      const result_r24 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r26.viewAttributesFeature(result_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "table_rows");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Ver Atributos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SearchComponent_div_43_mat_list_item_11_Template_button_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      const result_r24 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r28.zoomFeature(result_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "zoom_in_map");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Acercar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SearchComponent_div_43_mat_list_item_11_Template_button_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      const result_r24 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r29.removeFeature(result_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Limpiar Selecci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const result_r24 = ctx.$implicit;
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", result_r24.layer.title, ".", result_r24.uid, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r25);
  }
}
function SearchComponent_div_43_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No se encontraron resultados con los parametros dados");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SearchComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 31)(2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Resultados: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SearchComponent_div_43_b_4_Template, 2, 1, "b", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SearchComponent_div_43_b_5_Template, 2, 1, "b", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SearchComponent_div_43_b_6_Template, 2, 0, "b", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, SearchComponent_div_43_mat_progress_bar_8_Template, 1, 0, "mat-progress-bar", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-list", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, SearchComponent_div_43_mat_list_item_11_Template, 22, 3, "mat-list-item", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, SearchComponent_div_43_span_12_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.searchResults.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.searchResults.length > 0 && ctx_r3.searchResults.length <= 1000);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.searchResults.length > 1000);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.progressBar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.searchResults);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.searchResults.length === 0);
  }
}
class SearchComponent {
  constructor(mapService) {
    this.mapService = mapService;
    this.sqlForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      capa: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      atributo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      condicion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      valor: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
    });
    this.catastralForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      codigo_ant: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      codigo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      matricula: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
    });
    this.viewCatastral = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.modules.searchCatastral;
    this.layerControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('');
    this.selectForm = 0;
    this.progressBar = false;
    this.searchResults = [];
    this.validCatastral = false;
    this.showResultsSection = false;
    this.matriculaActiva = false;
  }
  ngOnInit() {
    this.layers = this.mapService.getViewMap().map.allLayers;
  }
  ngOnDestroy() {
    this.clear();
  }
  // this searches for features based on user inputs
  searchFeatures() {
    this.searchResults = [];
    this.progressBar = true;
    let consulta = "";
    switch (this.selectForm) {
      case 0:
        consulta = `${Object.keys(this.catastralForm.value)[0]} = '${Object.values(this.catastralForm.value)[0]}'`;
        this.layers.forEach(layer => {
          if (layer.title.includes("Terreno") || layer.title.includes("Predio")) {
            layer.queryFeatures({
              returnGeometry: true,
              outFields: ["*"],
              where: consulta,
              start: 0,
              num: 1000
            }).then(response => {
              if (response.features.length != 0) {
                this.searchResults = response.features;
              }
              this.progressBar = false;
            });
          }
        });
        break;
      case 1:
        const {
          atributo
        } = this.sqlForm.value;
        const searchValue = this.sqlForm.value.valor.toLowerCase();
        const fieldName = atributo.type === 'string' ? `Lower(${atributo.name}) ${this.sqlForm.value.condicion}` : `${atributo.name} ${this.sqlForm.value.condicion}`;
        consulta = searchValue && fieldName ? `${fieldName} ${this.sqlForm.value.condicion == 'like' ? `'%${searchValue}%'` : `'${searchValue}'`}` : '';
        this.sqlForm.value.capa.queryFeatures({
          returnGeometry: true,
          outFields: ["*"],
          where: consulta || "1=1",
          start: 0,
          num: 1000
        }).then(response => {
          this.progressBar = false;
          if (response.features.length) {
            this.searchResults = response.features;
          }
        });
        break;
    }
    this.showResultsSection = true;
  }
  onKeyDown(event) {
    if (!/^\d$/.test(event.key)) {
      event.preventDefault();
    }
  }
  inputForm(event) {
    if (event.target.id == 'mat-input-3') {
      this.matriculaActiva = true;
    }
    if (event.target.value != "") {
      this.validCatastral = true;
      Object.keys(this.catastralForm.controls).forEach(element => {
        if (element != event.target.attributes[3].nodeValue) {
          this.catastralForm.controls[element].disable();
        }
      });
    } else {
      this.matriculaActiva = false;
      this.validCatastral = false;
      Object.keys(this.catastralForm.controls).forEach(element => {
        this.catastralForm.controls[element].enable();
      });
    }
  }
  viewAttributesFeature(feature) {
    if (this.mapService.getViewMap().popup.visible) {
      this.mapService.getViewMap().popup.visible = false;
    }
    this.mapService.getViewMap().popup.dockEnabled = true;
    this.mapService.getViewMap().popup.spinnerEnabled = true;
    this.mapService.getViewMap().popup.collapseEnabled = false;
    this.mapService.getViewMap().popup.highlightEnabled = false;
    this.mapService.getViewMap().popup.dockOptions = {
      buttonEnabled: false,
      position: 'bottom-center'
    };
    this.mapService.getViewMap().popup.open({
      features: [feature]
    });
  }
  // this zooms to the found feature
  zoomFeature(feature) {
    const viewMap = this.mapService.getViewMap();
    const popup = viewMap.popup;
    const layer = feature.layer || feature.sourceLayer.layer;
    viewMap.goTo(feature);
    popup.visible ? popup.close() : null;
    viewMap.whenLayerView(layer).then(layerView => {
      this.highlightItem ? this.highlightItem.remove() : null;
      this.highlightItem = layerView.highlight(feature);
    });
  }
  clear() {
    this.searchResults = [];
    this.showResultsSection = false;
    this.progressBar = false;
    this.validCatastral = false;
    this.sqlForm.setValue({
      capa: "",
      atributo: "",
      condicion: "",
      valor: ""
    });
    this.catastralForm.setValue({
      codigo_ant: "",
      codigo: "",
      matricula: ""
    });
    Object.keys(this.catastralForm.controls).forEach(element => {
      this.catastralForm.controls[element].enable();
    });
    if (this.highlightItem) {
      this.highlightItem.remove();
    }
  }
  removeFeature(feature) {
    this.searchResults = this.searchResults.filter(item => item !== feature);
  }
  //this filters shown layers so hotspot is not visible 
  filterLayers(layers) {
    let filteredLayers = layers.items.filter(item => {
      return !item.title.toLowerCase().includes("hotspot");
    });
    return filteredLayers;
  }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) {
  return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_view_services_map_service__WEBPACK_IMPORTED_MODULE_1__.MapService));
};
SearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SearchComponent,
  selectors: [["app-search"]],
  decls: 44,
  vars: 9,
  consts: [[3, "title", "icon"], ["id", "divSearch", 1, "search"], [3, "selectedIndex", "selectedIndexChange"], ["label", "Catastral", 4, "ngIf"], ["label", "Avanzada "], [1, "formContainer", 3, "formGroup"], ["formControlName", "capa"], [3, "label", 4, "ngFor", "ngForOf"], ["formControlName", "atributo"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "condicion"], ["value", ">="], ["value", ">"], ["value", "<"], ["value", "<="], ["value", "="], ["value", "<>"], ["value", "like"], ["matInput", "", "placeholder", "Valor", "formControlName", "valor"], [1, "actionsButtons"], ["mat-raised-button", "", "type", "submit", 1, "buttonAction", 3, "disabled", "click"], ["mat-raised-button", "", 1, "buttonAction", 3, "click"], [4, "ngIf"], ["label", "Catastral"], [1, "formContainer", 3, "formGroup", "input"], ["matInput", "", "placeholder", "C\u00E9dula Catastral Anterior", "formControlName", "codigo_ant", 3, "keypress"], ["input", ""], ["matInput", "", "placeholder", "C\u00F3digo Predial Nacional", "formControlName", "codigo", 3, "keypress"], ["matInput", "", "placeholder", "Matr\u00EDcula Inmobiliaria", "formControlName", "matricula", 3, "keypress"], [3, "label"], [3, "value"], [1, "titleResult"], ["id", "titleResultado"], ["id", "results", 1, "listResults"], ["mode", "indeterminate", 4, "ngIf"], [2, "max-height", "300px", "overflow-y", "auto"], ["results", ""], ["class", "itemResult", 4, "ngFor", "ngForOf"], ["class", "noDataMessage", 4, "ngIf"], ["mode", "indeterminate"], [1, "itemResult"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "noDataMessage"]],
  template: function SearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-title-bar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "mat-tab-group", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectedIndexChange", function SearchComponent_Template_mat_tab_group_selectedIndexChange_2_listener($event) {
        return ctx.selectForm = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SearchComponent_mat_tab_3_Template, 18, 2, "mat-tab", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-tab", 4)(5, "form", 5)(6, "mat-form-field")(7, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Capa");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-select", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, SearchComponent_mat_optgroup_10_Template, 2, 2, "mat-optgroup", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field")(12, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Atributo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-select", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, SearchComponent_mat_option_15_Template, 2, 2, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-form-field")(17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Condici\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-select", 10)(20, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Mayor o igual");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Mayor que");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Menor que");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Menor o igual");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Igual a");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Diferente");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Contiene");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-form-field")(35, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Valor");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 19)(39, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_39_listener() {
        return ctx.searchFeatures();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Buscar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_41_listener() {
        return ctx.clear();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Limpiar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, SearchComponent_div_43_Template, 13, 6, "div", 22);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Busqueda")("icon", "assets/img/SVG/searchIcon.svg");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selectedIndex", ctx.selectForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.viewCatastral);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.sqlForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.filterLayers(ctx.layers));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.sqlForm.value.capa.fields);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !(ctx.sqlForm.valid || ctx.validCatastral));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showResultsSection);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabGroup, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatHint, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOptgroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__.MatProgressBar, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuTrigger, _title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_2__.TitleBarComponent],
  styles: [".search[_ngcontent-%COMP%] {\n  width: auto;\n  overflow-y: hidden;\n  height: auto;\n}\n\n.actionsButtons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 10px 0px 5px 0px;\n}\n\n.buttonAction[_ngcontent-%COMP%] {\n  background-color: #d7e3ff ;\n  color: white;\n  border: none;\n  text-decoration: none;\n  font-size: 14px;\n  text-align: center;\n  border-radius: 3px;\n}\n\n.titleResult[_ngcontent-%COMP%] {\n  background-color: #d7e3ff;\n  color: white;\n  text-align: center;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.listResults[_ngcontent-%COMP%] {\n  text-align: center;\n  height: auto;\n  background-color: white;\n  overflow-y: auto;\n  \n}\n\n.formContainer[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n}\n\n.itemResult[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.noDataMessage[_ngcontent-%COMP%]{\n  margin: 5px;\n  display: flex;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2lkZ2V0cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtBQUNkIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaCB7XG4gIHdpZHRoOiBhdXRvO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmFjdGlvbnNCdXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDVweCAwcHg7XG59XG5cbi5idXR0b25BY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdlM2ZmIDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnRpdGxlUmVzdWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZTNmZjtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5saXN0UmVzdWx0cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgLyogbWF4LXdpZHRoOiAyMDBweDsgKi9cbn1cblxuLmZvcm1Db250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5pdGVtUmVzdWx0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5ub0RhdGFNZXNzYWdle1xuICBtYXJnaW46IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDI1MHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 10497:
/*!****************************************************!*\
  !*** ./src/app/widgets/select/select.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectComponent": () => (/* binding */ SelectComponent)
/* harmony export */ });
/* harmony import */ var _home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _arcgis_core_widgets_Sketch_SketchViewModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @arcgis/core/widgets/Sketch/SketchViewModel */ 86315);
/* harmony import */ var _arcgis_core_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @arcgis/core/layers/GraphicsLayer */ 32870);
/* harmony import */ var _arcgis_core_geometry_geometryEngineAsync__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @arcgis/core/geometry/geometryEngineAsync */ 51050);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var geojson__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! geojson */ 91576);
/* harmony import */ var geojson__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(geojson__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jszip */ 41308);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _view_services_map_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../view/services/map.service */ 39569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../title-bar/title-bar.component */ 57436);
























function SelectComponent_div_27_mat_expansion_panel_5_mat_list_item_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-list-item", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "button", 31)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "mat-menu", null, 32)(7, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SelectComponent_div_27_mat_expansion_panel_5_mat_list_item_24_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10);
      const result_r7 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r9.viewAttributesFeature(result_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "table_rows");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Ver Atributos");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SelectComponent_div_27_mat_expansion_panel_5_mat_list_item_24_Template_button_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10);
      const result_r7 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r11.mapService.getViewMap().goTo(result_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "zoom_in");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Acercar");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SelectComponent_div_27_mat_expansion_panel_5_mat_list_item_24_Template_button_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10);
      const result_r7 = restoredCtx.$implicit;
      const group_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r12.removeFeature(result_r7, group_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Limpiar Selecci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const result_r7 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", result_r7.layer.title, ".", result_r7.uid, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matMenuTriggerFor", _r8);
  }
}
function SelectComponent_div_27_mat_expansion_panel_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-expansion-panel", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SelectComponent_div_27_mat_expansion_panel_5_Template_mat_expansion_panel_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r14.clickButton = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-expansion-panel-header")(2, "mat-panel-title")(3, "mat-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SelectComponent_div_27_mat_expansion_panel_5_Template_mat_checkbox_click_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15);
      const group_r3 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r16.changeCheck(group_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SelectComponent_div_27_mat_expansion_panel_5_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r17.clickButton = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "mat-menu", null, 26)(12, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SelectComponent_div_27_mat_expansion_panel_5_Template_button_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15);
      const group_r3 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r18.mapService.getViewMap().goTo(group_r3.features));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "zoom_in");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Acercar");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SelectComponent_div_27_mat_expansion_panel_5_Template_button_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15);
      const group_r3 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r19.removeGroup(group_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Limpiar Selecci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "mat-list", null, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, SelectComponent_div_27_mat_expansion_panel_5_mat_list_item_24_Template, 22, 3, "mat-list-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](11);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r1.clickButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", group_r3.check);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" \u00A0", group_r3.features[0].layer.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", group_r3.features.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matMenuTriggerFor", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", group_r3.features);
  }
}
function SelectComponent_div_27_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 33)(1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SelectComponent_div_27_div_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r20.downloadGeoJSON());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
}
function SelectComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Resultados");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, SelectComponent_div_27_mat_expansion_panel_5_Template, 25, 6, "mat-expansion-panel", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, SelectComponent_div_27_div_6_Template, 4, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.resultSelect);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.download);
  }
}
class SelectComponent {
  constructor(iconRegistry, sanitizer, mapService) {
    this.mapService = mapService;
    this.selectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
      selectionForm: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('')
    });
    this.sketchGraphic = new _arcgis_core_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.resultSelect = [];
    this.clickButton = false;
    this.download = _environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.modules.allowdownload;
    iconRegistry.addSvgIcon("circle", sanitizer.bypassSecurityTrustResourceUrl("assets/img/SVG/selectbyCircle.svg"));
    iconRegistry.addSvgIcon("rectangle", sanitizer.bypassSecurityTrustResourceUrl("assets/img/SVG/selectbyRectangle.svg"));
    iconRegistry.addSvgIcon("polygon", sanitizer.bypassSecurityTrustResourceUrl("assets/img/SVG/selectbyPolygon.svg"));
    iconRegistry.addSvgIcon("point", sanitizer.bypassSecurityTrustResourceUrl("assets/img/SVG/selectbyPoint.svg"));
    iconRegistry.addSvgIcon("polyline", sanitizer.bypassSecurityTrustResourceUrl("assets/img/SVG/selectbyLine.svg"));
  }
  ngOnDestroy() {
    this.clearResults();
  }
  ngOnInit() {}
  startSelect() {
    var _this = this;
    const sketch = new _arcgis_core_widgets_Sketch_SketchViewModel__WEBPACK_IMPORTED_MODULE_1__["default"]({
      view: this.mapService.getViewMap(),
      layer: this.sketchGraphic
    });
    sketch.create(this.selectForm.value.selectionForm);
    sketch.on("create", /*#__PURE__*/function () {
      var _ref = (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (event) {
        if (event.state === "complete") {
          const geometries = _this.sketchGraphic.graphics.map(function (graphic) {
            return graphic.geometry;
          });
          const queryGeometry = yield _arcgis_core_geometry_geometryEngineAsync__WEBPACK_IMPORTED_MODULE_3__.union(geometries.toArray());
          _this.selectFeatures(queryGeometry);
          _this.sketchGraphic.remove(event.graphic);
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  selectFeatures(geometry) {
    let layerGroup;
    this.mapService.getViewMap().layerViews.forEach(layer => {
      if (layer.layer.type == "group") {
        layerGroup = layer;
      }
      layerGroup.layerViews.items.forEach(layerView => {
        if (layerView.layer.type == "feature") {
          layerView.layer.outFields = ["*"];
          layerView.layer.popupTemplate.overwriteActions = true;
          layerView.queryFeatures({
            geometry: geometry,
            returnGeometry: true,
            returnQueryGeometry: false,
            outFields: ["*"]
          }).then(result => {
            if (result.features.length > 0) {
              result.highlight = layerView.highlight(result.features);
              result.check = true;
              result.layerView = layerView;
              this.resultSelect.push(result);
            }
          });
        }
      });
    });
  }
  changeCheck(group) {
    this.clickButton = true;
    if (group.check) {
      group.highlight.remove();
    } else {
      group.layerView.highlight(group.features);
    }
    group.check = !group.check;
  }
  viewAttributesFeature(feature) {
    if (this.mapService.getViewMap().popup.visible) {
      this.mapService.getViewMap().popup.visible = false;
    }
    this.mapService.getViewMap().popup.dockEnabled = true;
    this.mapService.getViewMap().popup.spinnerEnabled = true;
    this.mapService.getViewMap().popup.collapseEnabled = false;
    this.mapService.getViewMap().popup.highlightEnabled = false;
    this.mapService.getViewMap().popup.dockOptions = {
      buttonEnabled: false,
      position: 'bottom-center'
    };
    this.mapService.getViewMap().popup.open({
      features: [feature]
    });
  }
  downloadGeoJSON() {
    const zip = new (jszip__WEBPACK_IMPORTED_MODULE_6___default())();
    const layerNames = this.getUniqueLayerNames();
    layerNames.forEach(layerName => {
      const fileName = layerName + '.geojson';
      const featureCollection = this.collectSelectedFeaturesAsFeatureCollection(fileName, layerName);
      const geoJSONData = JSON.stringify(featureCollection);
      zip.file(fileName, geoJSONData);
    });
    zip.generateAsync({
      type: "blob"
    }).then(function (content) {
      (0,file_saver__WEBPACK_IMPORTED_MODULE_4__.saveAs)(content, "layers_WGS84.zip");
    });
  }
  getUniqueLayerNames() {
    const layerNames = [];
    this.resultSelect.forEach(group => {
      if (layerNames.indexOf(group.layerView.layer.title) === -1) {
        layerNames.push(group.layerView.layer.title);
      }
    });
    return layerNames;
  }
  collectSelectedFeaturesAsFeatureCollection(fileName, layerName) {
    const selectedFeatures = [];
    this.resultSelect.forEach(group => {
      if (group.layerView.layer.title === layerName) {
        group.features.forEach(feature => {
          let coordinates = [];
          const geometryType = feature.geometry.type.charAt(0).toUpperCase() + feature.geometry.type.slice(1);
          if (geometryType === 'Point') {
            coordinates = [feature.geometry.x, feature.geometry.y];
          } else if (geometryType === 'Polygon') {
            const rings = feature.geometry.rings.map(ring => {
              ring.push(ring[0]);
              return ring;
            });
            coordinates = rings;
          } else if (geometryType === 'LineString') {
            coordinates = [feature.geometry.paths.map(path => {
              return path.map(point => [point[0], point[1]]);
            })];
          }
          const properties = feature.attributes;
          const selectedFeature = {
            type: 'Feature',
            geometry: {
              type: geometryType,
              coordinates: coordinates
            },
            properties: properties
          };
          selectedFeatures.push(selectedFeature);
        });
      }
    });
    const featureCollection = {
      type: 'FeatureCollection',
      features: selectedFeatures,
      name: fileName
    };
    return featureCollection;
  }
  removeFeature(feature, group) {
    if (group.features.length === 1) {
      this.removeGroup(group);
    } else {
      group.features = group.features.filter(item => item !== feature);
      group.highlight.remove();
      group.highlight = group.layerView.highlight(group.features);
    }
  }
  removeGroup(group) {
    group.highlight.remove();
    this.resultSelect = this.resultSelect.filter(item => item !== group);
  }
  clearResults() {
    this.resultSelect.forEach(group => {
      group.highlight.remove();
    });
    this.resultSelect = [];
  }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) {
  return new (t || SelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_view_services_map_service__WEBPACK_IMPORTED_MODULE_8__.MapService));
};
SelectComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: SelectComponent,
  selectors: [["app-select"]],
  decls: 28,
  vars: 4,
  consts: [[3, "title", "icon"], ["id", "divSelect", 1, "select"], ["id", "selection", 1, "selection"], [3, "formGroup"], ["appearance", "fill"], ["placeholder", "Seleccionar", "formControlName", "selectionForm", "appearance", "fill", 3, "selectionChange"], ["value", "point"], ["svgIcon", "point"], ["value", "rectangle"], ["svgIcon", "rectangle"], ["value", "polygon"], ["svgIcon", "polygon"], ["value", "circle"], ["svgIcon", "circle"], ["value", "polyline"], ["svgIcon", "polyline"], ["mat-raised-button", "", "type", "submit", 1, "buttonAction", 3, "click"], ["id", "results", "class", "listResults", 4, "ngIf"], ["id", "results", 1, "listResults"], ["id", "results", 1, "results"], [1, "titleResult"], [3, "disabled", "click", 4, "ngFor", "ngForOf"], ["class", "contenedor", 4, "ngIf"], [3, "disabled", "click"], ["color", "primary", 3, "checked", "click"], ["mat-icon-button", "", 3, "matMenuTriggerFor", "click"], ["menuGroup", "matMenu"], ["mat-menu-item", "", 3, "click"], ["results", ""], ["class", "itemResult", 4, "ngFor", "ngForOf"], [1, "itemResult"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menuItem", "matMenu"], [1, "contenedor"], ["mat-icon-button", "", "aria-label", "Download selected element", "matTooltip", "Descargar", "title", "Descargar", 3, "click"], [1, "custom-icon"]],
  template: function SelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-title-bar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "form", 3)(4, "mat-form-field", 4)(5, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Seleccionar");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "mat-select", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectionChange", function SelectComponent_Template_mat_select_selectionChange_7_listener() {
        return ctx.startSelect();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "mat-select-trigger");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, " Realiza la selecci\u00F3n ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "mat-option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "mat-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Seleccionar por punto ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "mat-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "mat-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Seleccionar por rect\u00E1ngulo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "mat-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Seleccionar por pol\u00EDgono ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "mat-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Seleccionar por c\u00EDrculo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "mat-option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "mat-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Seleccionar por l\u00EDnea ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SelectComponent_Template_button_click_25_listener() {
        return ctx.clearResults();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "Limpiar");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, SelectComponent_div_27_Template, 7, 2, "div", 17);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", "Selecci\u00F3n")("icon", "assets/img/SVG/selectIcon.svg");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.selectForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.resultSelect.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckbox, _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatListItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuTrigger, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__.MatExpansionPanelDescription, _title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_9__.TitleBarComponent],
  styles: [".buttonAction[_ngcontent-%COMP%] {\n  background-color: rgb(0, 74, 137);\n  color: white;\n  border: none;\n  text-decoration: none;\n  font-size: 14px;\n  text-align: center;\n  border-radius: 3px;\n  margin-bottom: 5px;\n}\n\n.contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 15px;\n  margin-bottom: 10px;\n}\n\n.custom-icon[_ngcontent-%COMP%] {\n  color: #d7e3ff;\n  font-size: 30px;\n}\n\n\n.titleResult[_ngcontent-%COMP%] {\n  background-color:#d7e3ff;\n  color: white;\n  text-align: center;\n  height: 35px;\n  display: grid;\n  align-items: center;\n}\n\n.listResults[_ngcontent-%COMP%] {\n  height: auto;\n  background-color: white;\n  overflow-y: auto;\n}\n\n.itemResult[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.selection[_ngcontent-%COMP%] {\n  text-align-last: center;\n  padding-top: 5%;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.results[_ngcontent-%COMP%] {\n  padding-top: 5%;\n}\n\n.select[_ngcontent-%COMP%]{\n  overflow-y: hidden;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2lkZ2V0cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOzs7QUFHQTtFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uQWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDc0LCAxMzcpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jdXN0b20taWNvbiB7XG4gIGNvbG9yOiAjZDdlM2ZmO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cblxuLnRpdGxlUmVzdWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjojZDdlM2ZmO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzNXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubGlzdFJlc3VsdHMge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uaXRlbVJlc3VsdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uc2VsZWN0aW9uIHtcbiAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnJlc3VsdHMge1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG5cbi5zZWxlY3R7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2lkdGg6IGF1dG87XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 57436:
/*!**********************************************************!*\
  !*** ./src/app/widgets/title-bar/title-bar.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitleBarComponent": () => (/* binding */ TitleBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);





class TitleBarComponent {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
  }
  ngOnInit() {}
  closeDialog() {
    this.dialogRef.close();
  }
}
TitleBarComponent.ɵfac = function TitleBarComponent_Factory(t) {
  return new (t || TitleBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef));
};
TitleBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TitleBarComponent,
  selectors: [["app-title-bar"]],
  inputs: {
    title: "title",
    icon: "icon"
  },
  decls: 7,
  vars: 2,
  consts: [["cdkDrag", "", "cdkDragRootElement", ".cdk-overlay-pane", "cdkDragBoundary", ".cdk-overlay-container", "cdkDragHandle", "", 1, "bar", 2, "background-color", "#d7e3ff", "color", "black"], [1, "barIcon"], ["mat-icon-button", "", "matTooltip", "Cerrar", 1, "closeButton", 3, "click"]],
  template: function TitleBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TitleBarComponent_Template_button_click_4_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.icon, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
    }
  },
  dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatIconButton, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDragHandle],
  styles: [".bar[_ngcontent-%COMP%] {\n    color: white;\n    font-size: medium;\n    display: flex;\n    height: 35px;\n    align-items: center;\n    cursor: move;\n    background-color: #d7e3ff;\n}\n\n.closeButton[_ngcontent-%COMP%] {\n    margin-left: auto;\n    padding-right: 0%;\n}\n\n\n.icon[_ngcontent-%COMP%] { \n    height: 24px;\n    width: 24px;\n}\n\n.mat-mdc-icon-button[_ngcontent-%COMP%] {\n    --mat-mdc-button-persistent-ripple-color: transparent;\n    --mat-mdc-button-ripple-color: transparent;\n}\n\n.barIcon[_ngcontent-%COMP%] {\n    margin-left: 5px;\n    margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2lkZ2V0cy90aXRsZS1iYXIvdGl0bGUtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBLDJDQUEyQztBQUMzQztJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxREFBcUQ7SUFDckQsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QiIsInNvdXJjZXNDb250ZW50IjpbIi5iYXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogbW92ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdlM2ZmO1xufVxuXG4uY2xvc2VCdXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIHBhZGRpbmctcmlnaHQ6IDAlO1xufVxuXG4vKiBiaWdnZXIgaWNvbiBleGNlZWRzIG1hdC1pY29uIGNvbnRhaW5lciAqL1xuLmljb24geyBcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgd2lkdGg6IDI0cHg7XG59XG5cbi5tYXQtbWRjLWljb24tYnV0dG9uIHtcbiAgICAtLW1hdC1tZGMtYnV0dG9uLXBlcnNpc3RlbnQtcmlwcGxlLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLW1hdC1tZGMtYnV0dG9uLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5iYXJJY29uIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 50546:
/*!*******************************************!*\
  !*** ./src/app/widgets/widgets.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetsModule": () => (/* binding */ WidgetsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _home_bar_home_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-bar/home-bar.component */ 86208);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _directiva_directive_widget_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directiva/directive-widget.directive */ 40693);
/* harmony import */ var _basemap_gallery_basemap_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basemap-gallery/basemap-gallery.component */ 80109);
/* harmony import */ var _title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title-bar/title-bar.component */ 57436);
/* harmony import */ var _layers_list_layers_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layers-list/layers-list.component */ 3106);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ 30177);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select/select.component */ 10497);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _measurement_measurement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./measurement/measurement.component */ 84320);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 64865);
/* harmony import */ var _add_layer_add_layer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-layer/add-layer.component */ 72085);
/* harmony import */ var _overview_map_overview_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./overview-map/overview-map.component */ 59066);
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./print/print.component */ 45783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);





























class WidgetsModule {}
WidgetsModule.ɵfac = function WidgetsModule_Factory(t) {
  return new (t || WidgetsModule)();
};
WidgetsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: WidgetsModule
});
WidgetsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__.MatBottomSheetModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__.MatSliderModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDividerModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__.DragDropModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__.MatProgressBarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__.MatCheckboxModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_26__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__.MatExpansionModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](WidgetsModule, {
    declarations: [_home_bar_home_bar_component__WEBPACK_IMPORTED_MODULE_0__.HomeBarComponent, _directiva_directive_widget_directive__WEBPACK_IMPORTED_MODULE_1__.WidgetDirective, _basemap_gallery_basemap_gallery_component__WEBPACK_IMPORTED_MODULE_2__.BasemapGalleryComponent, _title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_3__.TitleBarComponent, _layers_list_layers_list_component__WEBPACK_IMPORTED_MODULE_4__.LayersListComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_5__.SearchComponent, _select_select_component__WEBPACK_IMPORTED_MODULE_6__.SelectComponent, _measurement_measurement_component__WEBPACK_IMPORTED_MODULE_7__.MeasurementComponent, _add_layer_add_layer_component__WEBPACK_IMPORTED_MODULE_8__.AddLayerComponent, _overview_map_overview_map_component__WEBPACK_IMPORTED_MODULE_9__.OverviewMapComponent, _print_print_component__WEBPACK_IMPORTED_MODULE_10__.PrintComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__.MatBottomSheetModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__.MatSliderModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDividerModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__.DragDropModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__.MatProgressBarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__.MatCheckboxModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_26__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__.MatExpansionModule],
    exports: [_home_bar_home_bar_component__WEBPACK_IMPORTED_MODULE_0__.HomeBarComponent]
  });
})();

/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  apiUrl: "",
  project: "Zipaquirá",
  login: false,
  version: "3.3",
  portalUrl: "https://gisrealidad5.com/portal/",
  mapId: "b59ec7c5772240b4abcaae57d072a301",
  mapIdPot: "ab41fdd5f9184f3fa251c49b456c287f",
  mapIdfact: "a82bb4fb3c6f455e8893cbba05f4dc5b",
  apiKeyArcGIS: null,
  imagesDate: "Diciembre 2023",
  dashboardUrl: "https://gisrealidad5.com/portal/apps/dashboards/a82bb4fb3c6f455e8893cbba05f4dc5b",
  documentationUrl: "https://drive.google.com/file/d/1a1nHHbRTxpW2emJ2EqGXbiKfciuRICR7/view?usp=sharing",
  modules: {
    view360: true,
    baseMapGallery: true,
    layerList: true,
    search: true,
    searchCatastral: true,
    select: true,
    measurement: true,
    tableAttribute: false,
    addLayer: true,
    overviewMap: true,
    print: true,
    dashboard: true,
    editor: false,
    mapPot: false,
    allowdownload: true
  }
};

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 41993:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 41993;
module.exports = webpackEmptyAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map