(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory(require("vue")))
    : typeof define === "function" && define.amd
    ? define(["vue"], factory)
    : ((global =
        typeof globalThis !== "undefined" ? globalThis : global || self),
      (global.VueRouter = factory(global.vue)));
})(this, function (vue) {
  "use strict";

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false,
    });
    return Constructor;
  }

  var Vue;
  function install(_Vue) {
    Vue = _Vue;
    Vue.mixin({
      beforeCreate: function beforeCreate() {
        // 这里不用原型继承的原因是因为会导致所有的Vue类共享路由
        if (this.$options.router) {
          // 根实例上传递了router
          this._routerRoot = this;
          this._router = this.$options.router;
        } else {
          var _this$$parent;

          // 所有组件上都增加一个routerRoot的指针指向根实例
          this._routerRoot =
            (_this$$parent = this.$parent) === null || _this$$parent === void 0
              ? void 0
              : _this$$parent._router;
        }
      },
    }); // 劫持$router属性，取$router其实是取了根实例上的router

    Object.defineProperty(Vue.prototype, "$router", {
      get: function get() {
        return this._routerRoot._router;
      },
    });
    Vue.component("router-link", {
      render: function render(h) {
        return h(
          "a",
          {
            class: "foo",
          },
          [this.$slots["default"]]
        );
      },
    });
    Vue.component("router-view", {
      render: function render(h) {
        return vue.createVNode("div", null, [vue.createTextVNode("hello")]);
      },
    });
  }

  function createMatcher(routes) {
    function addRoute() {}

    function addRoutes() {}

    function match() {}

    return {
      addRoutes: addRoutes,
      //添加多个路由
      addRoute: addRoute,
      //添加一个路由
      match: match, //给一个路径来返回路由
    };
  }

  var VueRouter = /*#__PURE__*/ _createClass(function VueRouter(options) {
    _classCallCheck(this, VueRouter);

    // 对用户传入的路由表进行映射
    options.routes;
    this.matcher = createMatcher();
  });

  VueRouter.install = install;

  return VueRouter;
});
//# sourceMappingURL=vue.js.map
