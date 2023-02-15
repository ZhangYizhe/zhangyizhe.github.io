exports.ids = [5];
exports.modules = {

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/external.b9085dd.svg";

/***/ }),

/***/ 48:
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: ["text-primary-color dark:text-primary-color-dark h-10 w-10",classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"}})])
          )
        }
      }
    

/***/ }),

/***/ 49:
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: ["text-gray-700 dark:text-gray-200 hover:text-primary-color dark:hover:text-primary-color-dark h-5 w-5",classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3"}})])
          )
        }
      }
    

/***/ }),

/***/ 50:
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: ["text-gray-700 dark:text-gray-200 hover:text-primary-color dark:hover:text-primary-color-dark h-5 w-5",classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"}})])
          )
        }
      }
    

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectCard.vue?vue&type=template&id=3d9a57a0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-4 md:w-1/2 md",staticStyle:{"max-width":"544px"}},[_vm._ssrNode("<div class=\"h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700\">","</div>",[_vm._ssrNode("<div class=\"p-6\">","</div>",[_vm._ssrNode("<div class=\"flex flex-row justify-between items-center\">","</div>",[_vm._ssrNode("<div class=\"my-2\">","</div>",[_c('Folder',{staticClass:"text-indigo-800"})],1),_vm._ssrNode(" <div class=\"flex flex-row justify-between\"><div class=\"mx-1\"><a target=\"_blank\" rel=\"noopener noreferrer\""+(_vm._ssrAttr("href",_vm.projectHref))+" class=\"text-sm text-gray-500 transition hover:text-gray-600\"><span class=\"sr-only\"></span><img"+(_vm._ssrAttr("src",__webpack_require__(47)))+" class=\"w-6 h-6\"></a></div> <div class=\"mx-1\"><a target=\"_blank\" rel=\"noopener noreferrer\""+(_vm._ssrAttr("href",_vm.projectGithub))+" class=\"text-sm text-gray-500 transition hover:text-gray-600\"><span class=\"sr-only\">github</span><img"+(_vm._ssrAttr("src",__webpack_require__(19)))+" class=\"w-6 h-6\"></a></div></div>")],2),_vm._ssrNode(" <h2 class=\"text-2xl font-bold leading-8 tracking-tight mb-3\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.projectTitle)+"\n      ")+"</h2> <p class=\"prose text-gray-500 max-w-none dark:text-gray-400 mb-3\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.projectDescription)+"\n      ")+"</p> <div class=\"flex flex-row justify-between\"><div class=\"text-gray-400 text-sm font-extralight\">"+_vm._ssrEscape("\n          "+_vm._s(_vm.projectTech1)+" • "+_vm._s(_vm.projectTech2)+" • "+_vm._s(_vm.ProjectTech3)+"\n        ")+"</div></div>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProjectCard.vue?vue&type=template&id=3d9a57a0&

// EXTERNAL MODULE: ./assets/icon/folder.svg?inline
var folderinline = __webpack_require__(48);
var folderinline_default = /*#__PURE__*/__webpack_require__.n(folderinline);

// EXTERNAL MODULE: ./assets/icon/external.svg?inline
var externalinline = __webpack_require__(49);
var externalinline_default = /*#__PURE__*/__webpack_require__.n(externalinline);

// EXTERNAL MODULE: ./assets/icon/github.svg?inline
var githubinline = __webpack_require__(50);
var githubinline_default = /*#__PURE__*/__webpack_require__.n(githubinline);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var ProjectCardvue_type_script_lang_js_ = ({
  props: ["title", "description", "href", "github", "tech1", "tech2", "tech3"],
  components: {
    Folder: folderinline_default.a,
    External: externalinline_default.a,
    Github: githubinline_default.a
  },

  data() {
    return {
      projectTitle: this.title,
      projectDescription: this.description,
      projectHref: this.href,
      projectGithub: this.github,
      projectTech1: this.tech1,
      projectTech2: this.tech2,
      ProjectTech3: this.tech3
    };
  }

});
// CONCATENATED MODULE: ./components/ProjectCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProjectCardvue_type_script_lang_js_ = (ProjectCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ProjectCard.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProjectCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "78dfb4f4"
  
)

/* harmony default export */ var ProjectCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=project-card.js.map