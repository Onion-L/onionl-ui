import {
  computed,
  createBlock,
  defineComponent,
  normalizeClass,
  openBlock,
  renderSlot,
  resolveDynamicComponent,
  withCtx
} from "./chunk-5TCDO6LD.js";

// node_modules/.pnpm/onionl-ui@0.0.1-aplha.2_@typescript-eslint+eslint-plugin@8.14.0_@typescript-eslint+parser@8.1_ccrf43ap4wuibnwy4mpqdncf6e/node_modules/onionl-ui/dist/es/utils/install.mjs
function useInstall(comp) {
  ;
  comp.install = (app) => {
    app.component(comp.name, comp);
  };
  return comp;
}

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

// node_modules/.pnpm/onionl-ui@0.0.1-aplha.2_@typescript-eslint+eslint-plugin@8.14.0_@typescript-eslint+parser@8.1_ccrf43ap4wuibnwy4mpqdncf6e/node_modules/onionl-ui/dist/es/components/button/src/button.vue2.mjs
var _sfc_main = defineComponent({
  ...{
    name: "OlButton"
  },
  __name: "button",
  props: {
    type: { default: "primary" },
    size: { default: "sm" },
    to: {}
  },
  setup(__props) {
    const props = __props;
    const customeStyles = computed(() => {
      const sizeCls = props.size ? `ol-button__size-${props.size}` : "";
      const typeCls = props.type ? `ol-button__type-${props.type}` : "";
      return clsx_default(sizeCls, typeCls);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.to ? "a" : "button"), {
        to: _ctx.to,
        class: normalizeClass(["ol-button", [customeStyles.value]])
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["to", "class"]);
    };
  }
});

// node_modules/.pnpm/onionl-ui@0.0.1-aplha.2_@typescript-eslint+eslint-plugin@8.14.0_@typescript-eslint+parser@8.1_ccrf43ap4wuibnwy4mpqdncf6e/node_modules/onionl-ui/dist/es/components/button/index.mjs
var OlButton = useInstall(_sfc_main);

// node_modules/.pnpm/onionl-ui@0.0.1-aplha.2_@typescript-eslint+eslint-plugin@8.14.0_@typescript-eslint+parser@8.1_ccrf43ap4wuibnwy4mpqdncf6e/node_modules/onionl-ui/dist/es/onionl-ui/components.mjs
var Components = [OlButton];

// node_modules/.pnpm/onionl-ui@0.0.1-aplha.2_@typescript-eslint+eslint-plugin@8.14.0_@typescript-eslint+parser@8.1_ccrf43ap4wuibnwy4mpqdncf6e/node_modules/onionl-ui/dist/es/onionl-ui/install-maker.mjs
function installMaker(Components2) {
  return {
    install(app) {
      Components2.forEach((comp) => {
        app.use(comp);
      });
    }
  };
}

// node_modules/.pnpm/onionl-ui@0.0.1-aplha.2_@typescript-eslint+eslint-plugin@8.14.0_@typescript-eslint+parser@8.1_ccrf43ap4wuibnwy4mpqdncf6e/node_modules/onionl-ui/dist/es/onionl-ui/installer.mjs
var installer = installMaker(Components);

// node_modules/.pnpm/onionl-ui@0.0.1-aplha.2_@typescript-eslint+eslint-plugin@8.14.0_@typescript-eslint+parser@8.1_ccrf43ap4wuibnwy4mpqdncf6e/node_modules/onionl-ui/dist/es/onionl-ui/index.mjs
var install = installer.install;
export {
  OlButton,
  installer as default,
  install
};
//# sourceMappingURL=onionl-ui.js.map
