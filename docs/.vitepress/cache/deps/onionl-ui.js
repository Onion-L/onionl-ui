import {
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  defineComponent,
  normalizeClass,
  openBlock,
  renderSlot,
  resolveDynamicComponent,
  unref,
  withCtx
} from "./chunk-5TCDO6LD.js";

// node_modules/.pnpm/onionl-ui@0.0.1-alpha.8_vue@3.5.13_typescript@5.6.3_/node_modules/onionl-ui/es/utils/install.mjs
function useInstall(comp) {
  ;
  comp.install = (app) => {
    app.component(comp.name, comp);
  };
  return comp;
}

// node_modules/.pnpm/onionl-ui@0.0.1-alpha.8_vue@3.5.13_typescript@5.6.3_/node_modules/onionl-ui/es/components/icon/src/icon.vue2.mjs
var _sfc_main = defineComponent({
  ...{
    name: "OlIcon"
  },
  __name: "icon",
  props: {
    icon: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "span",
        {
          class: normalizeClass(_ctx.icon)
        },
        null,
        2
        /* CLASS */
      );
    };
  }
});

// node_modules/.pnpm/onionl-ui@0.0.1-alpha.8_vue@3.5.13_typescript@5.6.3_/node_modules/onionl-ui/es/components/icon/index.mjs
var OlIcon = useInstall(_sfc_main);

// node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// node_modules/.pnpm/onionl-ui@0.0.1-alpha.8_vue@3.5.13_typescript@5.6.3_/node_modules/onionl-ui/es/components/button/src/button.vue2.mjs
var _sfc_main2 = defineComponent({
  ...{
    name: "OlButton"
  },
  __name: "button",
  props: {
    type: { default: "primary" },
    size: { default: "sm" },
    to: {},
    link: { type: Boolean },
    icon: {}
  },
  setup(__props) {
    const props = __props;
    const defaultBtn = clsx_default("ol-button");
    const customeStyles = computed(() => {
      const sizeCls = props.size ? `ol-button__size-${props.size}` : "";
      if (props.to || props.link) {
        const linkCls = "ol-button__type-link";
        return clsx_default(sizeCls, linkCls);
      }
      const typeCls = props.type ? `ol-button__type-${props.type}` : "";
      return clsx_default(defaultBtn, sizeCls, typeCls);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.to ? "a" : "button"), {
        href: _ctx.to,
        class: normalizeClass([customeStyles.value])
      }, {
        default: withCtx(() => [
          _ctx.icon ? (openBlock(), createBlock(unref(OlIcon), {
            key: 0,
            class: normalizeClass(_ctx.icon)
          }, null, 8, ["class"])) : createCommentVNode("v-if", true),
          createBaseVNode("span", null, [
            renderSlot(_ctx.$slots, "default")
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["href", "class"]);
    };
  }
});

// node_modules/.pnpm/onionl-ui@0.0.1-alpha.8_vue@3.5.13_typescript@5.6.3_/node_modules/onionl-ui/es/components/button/index.mjs
var OlButton = useInstall(_sfc_main2);

// node_modules/.pnpm/onionl-ui@0.0.1-alpha.8_vue@3.5.13_typescript@5.6.3_/node_modules/onionl-ui/es/onionl-ui/components.mjs
var Components = [OlButton];

// node_modules/.pnpm/onionl-ui@0.0.1-alpha.8_vue@3.5.13_typescript@5.6.3_/node_modules/onionl-ui/es/onionl-ui/install-maker.mjs
function installMaker(Components2) {
  return {
    install(app) {
      Components2.forEach((comp) => {
        app.use(comp);
      });
    }
  };
}

// node_modules/.pnpm/onionl-ui@0.0.1-alpha.8_vue@3.5.13_typescript@5.6.3_/node_modules/onionl-ui/es/onionl-ui/installer.mjs
var installer = installMaker(Components);

// node_modules/.pnpm/onionl-ui@0.0.1-alpha.8_vue@3.5.13_typescript@5.6.3_/node_modules/onionl-ui/es/onionl-ui/index.mjs
var install = installer.install;
export {
  OlButton,
  installer as default,
  install
};
//# sourceMappingURL=onionl-ui.js.map
