import {
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  defineComponent,
  mergeProps,
  normalizeClass,
  openBlock,
  ref,
  renderSlot,
  resolveDynamicComponent,
  unref,
  useAttrs,
  withCtx
} from "./chunk-5TCDO6LD.js";
import {
  clsx_default
} from "./chunk-E6AZFW2I.js";

// node_modules/.pnpm/onionl-ui@0.0.1-alpha.9_vue@3.5.13_typescript@5.6.3_/node_modules/onionl-ui/es/utils/install.mjs
function useInstall(comp) {
  ;
  comp.install = (app) => {
    app.component(comp.name, comp);
  };
  return comp;
}

// node_modules/.pnpm/onionl-ui@0.0.1-alpha.9_vue@3.5.13_typescript@5.6.3_/node_modules/onionl-ui/es/components/icon/src/icon.vue2.mjs
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

// node_modules/.pnpm/onionl-ui@0.0.1-alpha.9_vue@3.5.13_typescript@5.6.3_/node_modules/onionl-ui/es/components/icon/index.mjs
var OlIcon = useInstall(_sfc_main);

// node_modules/.pnpm/onionl-ui@0.0.1-alpha.9_vue@3.5.13_typescript@5.6.3_/node_modules/onionl-ui/es/components/button/src/button.vue2.mjs
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

// node_modules/.pnpm/onionl-ui@0.0.1-alpha.9_vue@3.5.13_typescript@5.6.3_/node_modules/onionl-ui/es/components/button/index.mjs
var OlButton = useInstall(_sfc_main2);

// node_modules/.pnpm/onionl-ui@0.0.1-alpha.9_vue@3.5.13_typescript@5.6.3_/node_modules/onionl-ui/es/components/input/src/input.vue2.mjs
var _hoisted_1 = { class: "relative inline-block" };
var _hoisted_2 = ["value", "placeholder"];
var _sfc_main3 = defineComponent({
  ...{
    name: "OlInput",
    inheritAttrs: false
  },
  __name: "input",
  props: {
    modelValue: {},
    error: {},
    prefix: {},
    suffix: {},
    className: {},
    placeholder: {}
  },
  setup(__props) {
    const attrs = useAttrs();
    const filteredAttrs = computed(() => {
      const { style, ...rest } = attrs;
      return rest;
    });
    const isFocused = ref(false);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _ctx.prefix ? (openBlock(), createBlock(unref(OlIcon), {
          key: 0,
          icon: _ctx.prefix,
          class: normalizeClass(["ol-input__icon-prefix", { "ol-input__icon-focus": isFocused.value }])
        }, null, 8, ["icon", "class"])) : _ctx.suffix ? (openBlock(), createBlock(unref(OlIcon), {
          key: 1,
          icon: _ctx.suffix,
          class: normalizeClass(["ol-input__icon-suffix", { "ol-input__icon-focus": isFocused.value }])
        }, null, 8, ["icon", "class"])) : createCommentVNode("v-if", true),
        createBaseVNode("input", mergeProps({
          value: _ctx.modelValue,
          placeholder: _ctx.placeholder
        }, filteredAttrs.value, {
          class: ["ol-input", { " pl-10": _ctx.prefix }],
          onBlur: _cache[0] || (_cache[0] = ($event) => isFocused.value = false),
          onFocus: _cache[1] || (_cache[1] = ($event) => isFocused.value = true)
        }), null, 16, _hoisted_2)
      ]);
    };
  }
});

// node_modules/.pnpm/onionl-ui@0.0.1-alpha.9_vue@3.5.13_typescript@5.6.3_/node_modules/onionl-ui/es/components/input/index.mjs
var OlInput = useInstall(_sfc_main3);

// node_modules/.pnpm/onionl-ui@0.0.1-alpha.9_vue@3.5.13_typescript@5.6.3_/node_modules/onionl-ui/es/onionl-ui/components.mjs
var Components = [OlButton, OlIcon, OlInput];

// node_modules/.pnpm/onionl-ui@0.0.1-alpha.9_vue@3.5.13_typescript@5.6.3_/node_modules/onionl-ui/es/onionl-ui/install-maker.mjs
function installMaker(Components2) {
  return {
    install(app) {
      Components2.forEach((comp) => {
        app.use(comp);
      });
    }
  };
}

// node_modules/.pnpm/onionl-ui@0.0.1-alpha.9_vue@3.5.13_typescript@5.6.3_/node_modules/onionl-ui/es/onionl-ui/installer.mjs
var installer = installMaker(Components);

// node_modules/.pnpm/onionl-ui@0.0.1-alpha.9_vue@3.5.13_typescript@5.6.3_/node_modules/onionl-ui/es/onionl-ui/index.mjs
var install = installer.install;
export {
  OlButton,
  OlIcon,
  OlInput,
  installer as default,
  install
};
//# sourceMappingURL=onionl-ui.js.map
