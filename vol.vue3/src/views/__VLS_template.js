import loading from "@/components/basic/RouterLoading";
import VolMenu from "@/components/basic/VolElementMenu.vue";
import Message from "./index/Message.vue";
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from "./Index.vue";

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'vol-container'?: boolean; } &
{ 'vol-path'?: boolean; } &
{ 'contextMenu'?: boolean; } &
{ 'contextMenu'?: boolean; } &
{ 'contextMenu'?: boolean; } &
{ 'contextMenu'?: boolean; } &
{ 'el-tabs'?: boolean; } &
{ 'el-tabs--top'?: boolean; } &
{ 'el-tabs--border-card'?: boolean; } &
{ 'header-navigation'?: boolean; } &
{ 'el-tabs__header'?: boolean; } &
{ 'el-tabs__item'?: boolean; } &
{ 'el-tabs--top'?: boolean; } &
{ 'el-tabs--border-card'?: boolean; } &
{ 'header-navigation'?: boolean; } &
{ 'el-tabs__header'?: boolean; } &
{ 'el-tabs__item'?: boolean; } &
{ 'header-navigation'?: boolean; } &
{ 'el-tabs__item'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'ElScrollbar', typeof __VLS_localComponents, "ElScrollbar", "elScrollbar", "el-scrollbar"> &
__VLS_WithComponent<'VolMenu', typeof __VLS_localComponents, "VolMenu", "VolMenu", "VolMenu"> &
__VLS_WithComponent<'ElTabs', typeof __VLS_localComponents, "ElTabs", "elTabs", "el-tabs"> &
__VLS_WithComponent<'ElTabPane', typeof __VLS_localComponents, "ElTabPane", "elTabPane", "el-tab-pane"> &
__VLS_WithComponent<'ElButton', typeof __VLS_localComponents, "ElButton", "elButton", "el-button"> &
__VLS_WithComponent<'loading', typeof __VLS_localComponents, "Loading", "loading", "loading"> &
__VLS_WithComponent<'RouterView', typeof __VLS_localComponents, "RouterView", "routerView", "router-view"> &
__VLS_WithComponent<'KeepAlive', typeof __VLS_localComponents, "KeepAlive", "keepAlive", "keep-alive"> &
__VLS_WithComponent<'ElDrawer', typeof __VLS_localComponents, "ElDrawer", "elDrawer", "el-drawer"> &
__VLS_WithComponent<'Message', typeof __VLS_localComponents, "Message", "Message", "Message">;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.img; __VLS_intrinsicElements.img;
__VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i;
__VLS_components.ElScrollbar; __VLS_components.ElScrollbar; __VLS_components.ElScrollbar; __VLS_components.ElScrollbar; __VLS_components.elScrollbar; __VLS_components.elScrollbar; __VLS_components.elScrollbar; __VLS_components.elScrollbar; __VLS_components["el-scrollbar"]; __VLS_components["el-scrollbar"]; __VLS_components["el-scrollbar"]; __VLS_components["el-scrollbar"];
// @ts-ignore
[ElScrollbar, ElScrollbar, ElScrollbar, ElScrollbar,];
__VLS_components.VolMenu; __VLS_components.VolMenu;
// @ts-ignore
[VolMenu, VolMenu,];
__VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a;
__VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span;
__VLS_components.ElTabs; __VLS_components.ElTabs; __VLS_components.elTabs; __VLS_components.elTabs; __VLS_components["el-tabs"]; __VLS_components["el-tabs"];
// @ts-ignore
[ElTabs, ElTabs,];
__VLS_components.ElTabPane; __VLS_components.ElTabPane; __VLS_components.elTabPane; __VLS_components.elTabPane; __VLS_components["el-tab-pane"]; __VLS_components["el-tab-pane"];
// @ts-ignore
[ElTabPane, ElTabPane,];
__VLS_intrinsicElements.ul; __VLS_intrinsicElements.ul;
__VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li;
__VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"];
// @ts-ignore
[ElButton, ElButton, ElButton, ElButton, ElButton, ElButton, ElButton, ElButton,];
__VLS_components.Loading; __VLS_components.Loading; __VLS_components.loading; __VLS_components.loading;
// @ts-ignore
[loading, loading,];
__VLS_components.RouterView; __VLS_components.RouterView; __VLS_components.routerView; __VLS_components.routerView; __VLS_components["router-view"]; __VLS_components["router-view"];
// @ts-ignore
[RouterView, RouterView,];
__VLS_components.KeepAlive; __VLS_components.KeepAlive; __VLS_components.keepAlive; __VLS_components.keepAlive; __VLS_components["keep-alive"]; __VLS_components["keep-alive"];
// @ts-ignore
[KeepAlive, KeepAlive,];
__VLS_components.ElDrawer; __VLS_components.ElDrawer; __VLS_components.ElDrawer; __VLS_components.ElDrawer; __VLS_components.elDrawer; __VLS_components.elDrawer; __VLS_components.elDrawer; __VLS_components.elDrawer; __VLS_components["el-drawer"]; __VLS_components["el-drawer"]; __VLS_components["el-drawer"]; __VLS_components["el-drawer"];
// @ts-ignore
[ElDrawer, ElDrawer, ElDrawer, ElDrawer,];
__VLS_components.Message; __VLS_components.Message;
// @ts-ignore
[Message, Message,];
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, id: ("vol-container"), class: ((['vol-theme-' + __VLS_ctx.theme])), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, id: ("vol-container"), class: ((['vol-theme-' + __VLS_ctx.theme])), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
__VLS_styleScopedClasses = (['vol-theme-' + theme]);
{
const __VLS_5 = __VLS_intrinsicElements["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, class: ("vol-aside"), style: (({ width: __VLS_ctx.menuWidth + 'px' })), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("vol-aside"), style: (({ width: __VLS_ctx.menuWidth + 'px' })), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, class: ("header"), style: (({ width: __VLS_ctx.menuWidth - 1 + 'px' })), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("header"), style: (({ width: __VLS_ctx.menuWidth - 1 + 'px' })), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = __VLS_intrinsicElements["img"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, src: ((__VLS_ctx.logo)), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, src: ((__VLS_ctx.logo)), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
__VLS_directiveFunction(__VLS_ctx.vShow)((!__VLS_ctx.isCollapse));
}
{
const __VLS_20 = __VLS_intrinsicElements["i"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{ onClick: {} as any, }, class: (" collapse-menu"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: (" collapse-menu"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
(__VLS_ctx.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold');
__VLS_styleScopedClasses = (isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold');
let __VLS_25 = { 'click': __VLS_pickEvent(__VLS_24['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_21, typeof __VLS_22>).onClick) };
__VLS_25 = { click: (__VLS_ctx.toggleLeft) };
}
(__VLS_13.slots!).default;
}
{
const __VLS_26 = __VLS_intrinsicElements["div"];
const __VLS_27 = __VLS_elementAsFunctionalComponent(__VLS_26);
const __VLS_28 = __VLS_27({ ...{}, class: ("vol-menu"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_26, typeof __VLS_28> & Record<string, unknown>) => void)({ ...{}, class: ("vol-menu"), });
const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28)!;
let __VLS_30!: __VLS_NormalizeEmits<typeof __VLS_29.emit>;
{
const __VLS_31 = ({} as 'ElScrollbar' extends keyof typeof __VLS_ctx ? { 'ElScrollbar': typeof __VLS_ctx.ElScrollbar; } : 'elScrollbar' extends keyof typeof __VLS_ctx ? { 'ElScrollbar': typeof __VLS_ctx.elScrollbar; } : 'el-scrollbar' extends keyof typeof __VLS_ctx ? { 'ElScrollbar': (typeof __VLS_ctx)["el-scrollbar"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElScrollbar;
const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ ...{}, style: ({}), }));
({} as { ElScrollbar: typeof __VLS_31; }).ElScrollbar;
({} as { ElScrollbar: typeof __VLS_31; }).ElScrollbar;
const __VLS_33 = __VLS_32({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_33> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33)!;
let __VLS_35!: __VLS_NormalizeEmits<typeof __VLS_34.emit>;
{
const __VLS_36 = ({} as 'VolMenu' extends keyof typeof __VLS_ctx ? { 'VolMenu': typeof __VLS_ctx.VolMenu; } : typeof __VLS_resolvedLocalAndGlobalComponents).VolMenu;
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{}, currentMenuId: ((__VLS_ctx.currentMenuId)), onSelect: ((__VLS_ctx.onSelect)), enable: ((true)), openSelect: ((false)), isCollapse: ((__VLS_ctx.isCollapse)), list: ((__VLS_ctx.menuOptions)), }));
({} as { VolMenu: typeof __VLS_36; }).VolMenu;
({} as { VolMenu: typeof __VLS_36; }).VolMenu;
const __VLS_38 = __VLS_37({ ...{}, currentMenuId: ((__VLS_ctx.currentMenuId)), onSelect: ((__VLS_ctx.onSelect)), enable: ((true)), openSelect: ((false)), isCollapse: ((__VLS_ctx.isCollapse)), list: ((__VLS_ctx.menuOptions)), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_38> & Record<string, unknown>) => void)({ ...{}, currentMenuId: ((__VLS_ctx.currentMenuId)), onSelect: ((__VLS_ctx.onSelect)), enable: ((true)), openSelect: ((false)), isCollapse: ((__VLS_ctx.isCollapse)), list: ((__VLS_ctx.menuOptions)), });
const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
let __VLS_40!: __VLS_NormalizeEmits<typeof __VLS_39.emit>;
}
(__VLS_34.slots!).default;
}
(__VLS_29.slots!).default;
}
(__VLS_8.slots!).default;
}
{
const __VLS_41 = __VLS_intrinsicElements["div"];
const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
const __VLS_43 = __VLS_42({ ...{}, class: ("vol-container"), style: (({ left: __VLS_ctx.menuWidth - 1 + 'px' })), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_43> & Record<string, unknown>) => void)({ ...{}, class: ("vol-container"), style: (({ left: __VLS_ctx.menuWidth - 1 + 'px' })), });
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
let __VLS_45!: __VLS_NormalizeEmits<typeof __VLS_44.emit>;
{
const __VLS_46 = __VLS_intrinsicElements["div"];
const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
const __VLS_48 = __VLS_47({ ...{}, class: ("vol-header"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_48> & Record<string, unknown>) => void)({ ...{}, class: ("vol-header"), });
const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48)!;
let __VLS_50!: __VLS_NormalizeEmits<typeof __VLS_49.emit>;
{
const __VLS_51 = __VLS_intrinsicElements["div"];
const __VLS_52 = __VLS_elementAsFunctionalComponent(__VLS_51);
const __VLS_53 = __VLS_52({ ...{}, class: ("project-name"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_51, typeof __VLS_53> & Record<string, unknown>) => void)({ ...{}, class: ("project-name"), });
const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53)!;
let __VLS_55!: __VLS_NormalizeEmits<typeof __VLS_54.emit>;
(__VLS_54.slots!).default;
}
{
const __VLS_56 = __VLS_intrinsicElements["div"];
const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
const __VLS_58 = __VLS_57({ ...{}, class: ("header-text"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_56, typeof __VLS_58> & Record<string, unknown>) => void)({ ...{}, class: ("header-text"), });
const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58)!;
let __VLS_60!: __VLS_NormalizeEmits<typeof __VLS_59.emit>;
{
const __VLS_61 = __VLS_intrinsicElements["div"];
const __VLS_62 = __VLS_elementAsFunctionalComponent(__VLS_61);
const __VLS_63 = __VLS_62({ ...{}, class: ("h-link"), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_61, typeof __VLS_63> & Record<string, unknown>) => void)({ ...{}, class: ("h-link"), });
const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63)!;
let __VLS_65!: __VLS_NormalizeEmits<typeof __VLS_64.emit>;
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.links.filter((c) => {
return !c.icon;
}))!)) {
{
const __VLS_66 = __VLS_intrinsicElements["a"];
const __VLS_67 = __VLS_elementAsFunctionalComponent(__VLS_66);
const __VLS_68 = __VLS_67({ ...{ onClick: {} as any, }, href: ("javascript:void(0)"), key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_66, typeof __VLS_68> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, href: ("javascript:void(0)"), key: ((index)), });
const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68)!;
let __VLS_70!: __VLS_NormalizeEmits<typeof __VLS_69.emit>;
let __VLS_71 = { 'click': __VLS_pickEvent(__VLS_70['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_67, typeof __VLS_68>).onClick) };
__VLS_71 = {
click: $event => {
__VLS_ctx.to(item);
// @ts-ignore
[theme, theme, menuWidth, menuWidth, menuWidth, menuWidth, logo, logo, isCollapse, isCollapse, toggleLeft, currentMenuId, onSelect, isCollapse, menuOptions, currentMenuId, onSelect, isCollapse, menuOptions, currentMenuId, onSelect, isCollapse, menuOptions, menuWidth, menuWidth, links, to,];
}
};
if (!item.icon) {
{
const __VLS_72 = __VLS_intrinsicElements["span"];
const __VLS_73 = __VLS_elementAsFunctionalComponent(__VLS_72);
const __VLS_74 = __VLS_73({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_73));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_72, typeof __VLS_74> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74)!;
let __VLS_76!: __VLS_NormalizeEmits<typeof __VLS_75.emit>;
(item.text);
(__VLS_75.slots!).default;
}
}
else {
{
const __VLS_77 = __VLS_intrinsicElements["i"];
const __VLS_78 = __VLS_elementAsFunctionalComponent(__VLS_77);
const __VLS_79 = __VLS_78({ ...{}, class: ((item.icon)), }, ...__VLS_functionalComponentArgsRest(__VLS_78));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_77, typeof __VLS_79> & Record<string, unknown>) => void)({ ...{}, class: ((item.icon)), });
const __VLS_80 = __VLS_pickFunctionalComponentCtx(__VLS_77, __VLS_79)!;
let __VLS_81!: __VLS_NormalizeEmits<typeof __VLS_80.emit>;
__VLS_styleScopedClasses = (item.icon);
}
}
(__VLS_69.slots!).default;
}
}
(__VLS_64.slots!).default;
}
(__VLS_59.slots!).default;
}
{
const __VLS_82 = __VLS_intrinsicElements["div"];
const __VLS_83 = __VLS_elementAsFunctionalComponent(__VLS_82);
const __VLS_84 = __VLS_83({ ...{}, class: ("header-info"), }, ...__VLS_functionalComponentArgsRest(__VLS_83));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_82, typeof __VLS_84> & Record<string, unknown>) => void)({ ...{}, class: ("header-info"), });
const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_82, __VLS_84)!;
let __VLS_86!: __VLS_NormalizeEmits<typeof __VLS_85.emit>;
{
const __VLS_87 = __VLS_intrinsicElements["div"];
const __VLS_88 = __VLS_elementAsFunctionalComponent(__VLS_87);
const __VLS_89 = __VLS_88({ ...{}, class: ("h-link"), }, ...__VLS_functionalComponentArgsRest(__VLS_88));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_87, typeof __VLS_89> & Record<string, unknown>) => void)({ ...{}, class: ("h-link"), });
const __VLS_90 = __VLS_pickFunctionalComponentCtx(__VLS_87, __VLS_89)!;
let __VLS_91!: __VLS_NormalizeEmits<typeof __VLS_90.emit>;
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.links.filter((c) => {
return c.icon;
}))!)) {
{
const __VLS_92 = __VLS_intrinsicElements["a"];
const __VLS_93 = __VLS_elementAsFunctionalComponent(__VLS_92);
const __VLS_94 = __VLS_93({ ...{ onClick: {} as any, }, href: ("javascript:void(0)"), key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_93));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_92, typeof __VLS_94> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, href: ("javascript:void(0)"), key: ((index)), });
const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94)!;
let __VLS_96!: __VLS_NormalizeEmits<typeof __VLS_95.emit>;
let __VLS_97 = { 'click': __VLS_pickEvent(__VLS_96['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_93, typeof __VLS_94>).onClick) };
__VLS_97 = {
click: $event => {
__VLS_ctx.to(item);
// @ts-ignore
[links, to,];
}
};
if (!item.icon) {
{
const __VLS_98 = __VLS_intrinsicElements["span"];
const __VLS_99 = __VLS_elementAsFunctionalComponent(__VLS_98);
const __VLS_100 = __VLS_99({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_99));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_98, typeof __VLS_100> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_101 = __VLS_pickFunctionalComponentCtx(__VLS_98, __VLS_100)!;
let __VLS_102!: __VLS_NormalizeEmits<typeof __VLS_101.emit>;
(item.text);
(__VLS_101.slots!).default;
}
}
else {
{
const __VLS_103 = __VLS_intrinsicElements["i"];
const __VLS_104 = __VLS_elementAsFunctionalComponent(__VLS_103);
const __VLS_105 = __VLS_104({ ...{}, class: ((item.icon)), }, ...__VLS_functionalComponentArgsRest(__VLS_104));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_103, typeof __VLS_105> & Record<string, unknown>) => void)({ ...{}, class: ((item.icon)), });
const __VLS_106 = __VLS_pickFunctionalComponentCtx(__VLS_103, __VLS_105)!;
let __VLS_107!: __VLS_NormalizeEmits<typeof __VLS_106.emit>;
__VLS_styleScopedClasses = (item.icon);
}
}
(__VLS_95.slots!).default;
}
}
(__VLS_90.slots!).default;
}
{
const __VLS_108 = __VLS_intrinsicElements["div"];
const __VLS_109 = __VLS_elementAsFunctionalComponent(__VLS_108);
const __VLS_110 = __VLS_109({ ...{ onClick: {} as any, }, class: ("h-link"), }, ...__VLS_functionalComponentArgsRest(__VLS_109));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_108, typeof __VLS_110> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("h-link"), });
const __VLS_111 = __VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110)!;
let __VLS_112!: __VLS_NormalizeEmits<typeof __VLS_111.emit>;
let __VLS_113 = { 'click': __VLS_pickEvent(__VLS_112['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_109, typeof __VLS_110>).onClick) };
__VLS_113 = {
click: $event => {
__VLS_ctx.messageModel = true;
// @ts-ignore
[messageModel,];
}
};
{
const __VLS_114 = __VLS_intrinsicElements["a"];
const __VLS_115 = __VLS_elementAsFunctionalComponent(__VLS_114);
const __VLS_116 = __VLS_115({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_115));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_114, typeof __VLS_116> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_117 = __VLS_pickFunctionalComponentCtx(__VLS_114, __VLS_116)!;
let __VLS_118!: __VLS_NormalizeEmits<typeof __VLS_117.emit>;
{
const __VLS_119 = __VLS_intrinsicElements["i"];
const __VLS_120 = __VLS_elementAsFunctionalComponent(__VLS_119);
const __VLS_121 = __VLS_120({ ...{}, class: ("el-icon-message-solid"), }, ...__VLS_functionalComponentArgsRest(__VLS_120));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_119, typeof __VLS_121> & Record<string, unknown>) => void)({ ...{}, class: ("el-icon-message-solid"), });
const __VLS_122 = __VLS_pickFunctionalComponentCtx(__VLS_119, __VLS_121)!;
let __VLS_123!: __VLS_NormalizeEmits<typeof __VLS_122.emit>;
}
(__VLS_117.slots!).default;
}
(__VLS_111.slots!).default;
}
{
const __VLS_124 = __VLS_intrinsicElements["div"];
const __VLS_125 = __VLS_elementAsFunctionalComponent(__VLS_124);
const __VLS_126 = __VLS_125({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_125));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_124, typeof __VLS_126> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_127 = __VLS_pickFunctionalComponentCtx(__VLS_124, __VLS_126)!;
let __VLS_128!: __VLS_NormalizeEmits<typeof __VLS_127.emit>;
{
const __VLS_129 = __VLS_intrinsicElements["img"];
const __VLS_130 = __VLS_elementAsFunctionalComponent(__VLS_129);
const __VLS_131 = __VLS_130({ ...{}, class: ("user-header"), src: ((__VLS_ctx.userImg)), onerror: ((__VLS_ctx.errorImg)), }, ...__VLS_functionalComponentArgsRest(__VLS_130));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_129, typeof __VLS_131> & Record<string, unknown>) => void)({ ...{}, class: ("user-header"), src: ((__VLS_ctx.userImg)), onerror: ((__VLS_ctx.errorImg)), });
const __VLS_132 = __VLS_pickFunctionalComponentCtx(__VLS_129, __VLS_131)!;
let __VLS_133!: __VLS_NormalizeEmits<typeof __VLS_132.emit>;
}
(__VLS_127.slots!).default;
}
{
const __VLS_134 = __VLS_intrinsicElements["div"];
const __VLS_135 = __VLS_elementAsFunctionalComponent(__VLS_134);
const __VLS_136 = __VLS_135({ ...{}, class: ("user"), }, ...__VLS_functionalComponentArgsRest(__VLS_135));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_134, typeof __VLS_136> & Record<string, unknown>) => void)({ ...{}, class: ("user"), });
const __VLS_137 = __VLS_pickFunctionalComponentCtx(__VLS_134, __VLS_136)!;
let __VLS_138!: __VLS_NormalizeEmits<typeof __VLS_137.emit>;
{
const __VLS_139 = __VLS_intrinsicElements["span"];
const __VLS_140 = __VLS_elementAsFunctionalComponent(__VLS_139);
const __VLS_141 = __VLS_140({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_140));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_139, typeof __VLS_141> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_142 = __VLS_pickFunctionalComponentCtx(__VLS_139, __VLS_141)!;
let __VLS_143!: __VLS_NormalizeEmits<typeof __VLS_142.emit>;
(__VLS_ctx.userName);
(__VLS_142.slots!).default;
}
{
const __VLS_144 = __VLS_intrinsicElements["span"];
const __VLS_145 = __VLS_elementAsFunctionalComponent(__VLS_144);
const __VLS_146 = __VLS_145({ ...{}, id: ("index-date"), }, ...__VLS_functionalComponentArgsRest(__VLS_145));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_144, typeof __VLS_146> & Record<string, unknown>) => void)({ ...{}, id: ("index-date"), });
const __VLS_147 = __VLS_pickFunctionalComponentCtx(__VLS_144, __VLS_146)!;
let __VLS_148!: __VLS_NormalizeEmits<typeof __VLS_147.emit>;
}
(__VLS_137.slots!).default;
}
{
const __VLS_149 = __VLS_intrinsicElements["div"];
const __VLS_150 = __VLS_elementAsFunctionalComponent(__VLS_149);
const __VLS_151 = __VLS_150({ ...{}, class: ("settings"), }, ...__VLS_functionalComponentArgsRest(__VLS_150));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_149, typeof __VLS_151> & Record<string, unknown>) => void)({ ...{}, class: ("settings"), });
const __VLS_152 = __VLS_pickFunctionalComponentCtx(__VLS_149, __VLS_151)!;
let __VLS_153!: __VLS_NormalizeEmits<typeof __VLS_152.emit>;
{
const __VLS_154 = __VLS_intrinsicElements["i"];
const __VLS_155 = __VLS_elementAsFunctionalComponent(__VLS_154);
const __VLS_156 = __VLS_155({ ...{ onClick: {} as any, }, style: ({}), class: ("el-icon-s-tools"), }, ...__VLS_functionalComponentArgsRest(__VLS_155));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_154, typeof __VLS_156> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, style: ({}), class: ("el-icon-s-tools"), });
const __VLS_157 = __VLS_pickFunctionalComponentCtx(__VLS_154, __VLS_156)!;
let __VLS_158!: __VLS_NormalizeEmits<typeof __VLS_157.emit>;
let __VLS_159 = { 'click': __VLS_pickEvent(__VLS_158['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_155, typeof __VLS_156>).onClick) };
__VLS_159 = {
click: $event => {
__VLS_ctx.drawer_model = true;
// @ts-ignore
[userImg, errorImg, userImg, errorImg, userName, drawer_model,];
}
};
}
(__VLS_152.slots!).default;
}
(__VLS_85.slots!).default;
}
(__VLS_49.slots!).default;
}
{
const __VLS_160 = __VLS_intrinsicElements["div"];
const __VLS_161 = __VLS_elementAsFunctionalComponent(__VLS_160);
const __VLS_162 = __VLS_161({ ...{}, class: ("vol-path"), }, ...__VLS_functionalComponentArgsRest(__VLS_161));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_160, typeof __VLS_162> & Record<string, unknown>) => void)({ ...{}, class: ("vol-path"), });
const __VLS_163 = __VLS_pickFunctionalComponentCtx(__VLS_160, __VLS_162)!;
let __VLS_164!: __VLS_NormalizeEmits<typeof __VLS_163.emit>;
{
const __VLS_165 = ({} as 'ElTabs' extends keyof typeof __VLS_ctx ? { 'ElTabs': typeof __VLS_ctx.ElTabs; } : 'elTabs' extends keyof typeof __VLS_ctx ? { 'ElTabs': typeof __VLS_ctx.elTabs; } : 'el-tabs' extends keyof typeof __VLS_ctx ? { 'ElTabs': (typeof __VLS_ctx)["el-tabs"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElTabs;
const __VLS_166 = __VLS_asFunctionalComponent(__VLS_165, new __VLS_165({ ...{ onTabClick: {} as any, onTabRemove: {} as any, onContextmenu: {} as any, }, type: ("border-card"), class: ("header-navigation"), modelValue: ((__VLS_ctx.selectId)), strtch: ((false)), }));
({} as { ElTabs: typeof __VLS_165; }).ElTabs;
({} as { ElTabs: typeof __VLS_165; }).ElTabs;
const __VLS_167 = __VLS_166({ ...{ onTabClick: {} as any, onTabRemove: {} as any, onContextmenu: {} as any, }, type: ("border-card"), class: ("header-navigation"), modelValue: ((__VLS_ctx.selectId)), strtch: ((false)), }, ...__VLS_functionalComponentArgsRest(__VLS_166));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_165, typeof __VLS_167> & Record<string, unknown>) => void)({ ...{ onTabClick: {} as any, onTabRemove: {} as any, onContextmenu: {} as any, }, type: ("border-card"), class: ("header-navigation"), modelValue: ((__VLS_ctx.selectId)), strtch: ((false)), });
const __VLS_168 = __VLS_pickFunctionalComponentCtx(__VLS_165, __VLS_167)!;
let __VLS_169!: __VLS_NormalizeEmits<typeof __VLS_168.emit>;
let __VLS_170 = { 'tab-click': __VLS_pickEvent(__VLS_169['tab-click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_166, typeof __VLS_167>).onTabClick) };
__VLS_170 = { "tab-click": (__VLS_ctx.selectNav) };
let __VLS_171 = { 'tab-remove': __VLS_pickEvent(__VLS_169['tab-remove'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_166, typeof __VLS_167>).onTabRemove) };
__VLS_171 = { "tab-remove": (__VLS_ctx.removeNav) };
let __VLS_172 = { 'contextmenu': __VLS_pickEvent(__VLS_169['contextmenu'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_166, typeof __VLS_167>).onContextmenu) };
__VLS_172 = {
contextmenu: $event => {
__VLS_ctx.bindRightClickMenu(false);
// @ts-ignore
[selectId, selectId, selectId, selectNav, removeNav, bindRightClickMenu,];
}
};
for (const [item, navIndex] of __VLS_getVForSourceType((__VLS_ctx.navigation)!)) {
{
const __VLS_173 = ({} as 'ElTabPane' extends keyof typeof __VLS_ctx ? { 'ElTabPane': typeof __VLS_ctx.ElTabPane; } : 'elTabPane' extends keyof typeof __VLS_ctx ? { 'ElTabPane': typeof __VLS_ctx.elTabPane; } : 'el-tab-pane' extends keyof typeof __VLS_ctx ? { 'ElTabPane': (typeof __VLS_ctx)["el-tab-pane"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElTabPane;
const __VLS_174 = __VLS_asFunctionalComponent(__VLS_173, new __VLS_173({ ...{}, type: ("card"), name: ((navIndex + '')), closable: ((navIndex > 0)), key: ((navIndex)), label: ((item.name)), }));
({} as { ElTabPane: typeof __VLS_173; }).ElTabPane;
({} as { ElTabPane: typeof __VLS_173; }).ElTabPane;
const __VLS_175 = __VLS_174({ ...{}, type: ("card"), name: ((navIndex + '')), closable: ((navIndex > 0)), key: ((navIndex)), label: ((item.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_174));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_173, typeof __VLS_175> & Record<string, unknown>) => void)({ ...{}, type: ("card"), name: ((navIndex + '')), closable: ((navIndex > 0)), key: ((navIndex)), label: ((item.name)), });
const __VLS_176 = __VLS_pickFunctionalComponentCtx(__VLS_173, __VLS_175)!;
let __VLS_177!: __VLS_NormalizeEmits<typeof __VLS_176.emit>;
{
const __VLS_178 = __VLS_intrinsicElements["span"];
const __VLS_179 = __VLS_elementAsFunctionalComponent(__VLS_178);
const __VLS_180 = __VLS_179({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_179));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_178, typeof __VLS_180> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_181 = __VLS_pickFunctionalComponentCtx(__VLS_178, __VLS_180)!;
let __VLS_182!: __VLS_NormalizeEmits<typeof __VLS_181.emit>;
(navIndex);
(__VLS_181.slots!).default;
}
(__VLS_176.slots!).default;
}
// @ts-ignore
[navigation,];
}
(__VLS_168.slots!).default;
}
{
const __VLS_183 = __VLS_intrinsicElements["div"];
const __VLS_184 = __VLS_elementAsFunctionalComponent(__VLS_183);
const __VLS_185 = __VLS_184({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_184));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_183, typeof __VLS_185> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_186 = __VLS_pickFunctionalComponentCtx(__VLS_183, __VLS_185)!;
let __VLS_187!: __VLS_NormalizeEmits<typeof __VLS_186.emit>;
__VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.contextMenuVisible));
{
const __VLS_188 = __VLS_intrinsicElements["ul"];
const __VLS_189 = __VLS_elementAsFunctionalComponent(__VLS_188);
const __VLS_190 = __VLS_189({ ...{}, style: (({ left: __VLS_ctx.menuLeft + 'px', top: __VLS_ctx.menuTop + 'px' })), class: ("contextMenu"), }, ...__VLS_functionalComponentArgsRest(__VLS_189));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_188, typeof __VLS_190> & Record<string, unknown>) => void)({ ...{}, style: (({ left: __VLS_ctx.menuLeft + 'px', top: __VLS_ctx.menuTop + 'px' })), class: ("contextMenu"), });
const __VLS_191 = __VLS_pickFunctionalComponentCtx(__VLS_188, __VLS_190)!;
let __VLS_192!: __VLS_NormalizeEmits<typeof __VLS_191.emit>;
{
const __VLS_193 = __VLS_intrinsicElements["li"];
const __VLS_194 = __VLS_elementAsFunctionalComponent(__VLS_193);
const __VLS_195 = __VLS_194({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_194));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_193, typeof __VLS_195> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_196 = __VLS_pickFunctionalComponentCtx(__VLS_193, __VLS_195)!;
let __VLS_197!: __VLS_NormalizeEmits<typeof __VLS_196.emit>;
__VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.visibleItem.all));
{
const __VLS_198 = ({} as 'ElButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.ElButton; } : 'elButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.elButton; } : 'el-button' extends keyof typeof __VLS_ctx ? { 'ElButton': (typeof __VLS_ctx)["el-button"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElButton;
const __VLS_199 = __VLS_asFunctionalComponent(__VLS_198, new __VLS_198({ ...{ onClick: {} as any, }, link: (true), }));
({} as { ElButton: typeof __VLS_198; }).ElButton;
({} as { ElButton: typeof __VLS_198; }).ElButton;
const __VLS_200 = __VLS_199({ ...{ onClick: {} as any, }, link: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_199));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_198, typeof __VLS_200> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, link: (true), });
const __VLS_201 = __VLS_pickFunctionalComponentCtx(__VLS_198, __VLS_200)!;
let __VLS_202!: __VLS_NormalizeEmits<typeof __VLS_201.emit>;
let __VLS_203 = { 'click': __VLS_pickEvent(__VLS_202['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_199, typeof __VLS_200>).onClick) };
__VLS_203 = {
click: $event => {
__VLS_ctx.closeTabs();
// @ts-ignore
[contextMenuVisible, menuLeft, menuTop, menuLeft, menuTop, visibleItem, closeTabs,];
}
};
{
const __VLS_204 = __VLS_intrinsicElements["i"];
const __VLS_205 = __VLS_elementAsFunctionalComponent(__VLS_204);
const __VLS_206 = __VLS_205({ ...{}, class: ("el-icon-close"), }, ...__VLS_functionalComponentArgsRest(__VLS_205));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_204, typeof __VLS_206> & Record<string, unknown>) => void)({ ...{}, class: ("el-icon-close"), });
const __VLS_207 = __VLS_pickFunctionalComponentCtx(__VLS_204, __VLS_206)!;
let __VLS_208!: __VLS_NormalizeEmits<typeof __VLS_207.emit>;
}
(
__VLS_ctx.navigation.length == 2 ? "关闭菜单" : "关闭所有"
);
(__VLS_201.slots!).default;
}
(__VLS_196.slots!).default;
}
{
const __VLS_209 = __VLS_intrinsicElements["li"];
const __VLS_210 = __VLS_elementAsFunctionalComponent(__VLS_209);
const __VLS_211 = __VLS_210({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_210));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_209, typeof __VLS_211> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_212 = __VLS_pickFunctionalComponentCtx(__VLS_209, __VLS_211)!;
let __VLS_213!: __VLS_NormalizeEmits<typeof __VLS_212.emit>;
__VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.visibleItem.left));
{
const __VLS_214 = ({} as 'ElButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.ElButton; } : 'elButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.elButton; } : 'el-button' extends keyof typeof __VLS_ctx ? { 'ElButton': (typeof __VLS_ctx)["el-button"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElButton;
const __VLS_215 = __VLS_asFunctionalComponent(__VLS_214, new __VLS_214({ ...{ onClick: {} as any, }, link: (true), }));
({} as { ElButton: typeof __VLS_214; }).ElButton;
({} as { ElButton: typeof __VLS_214; }).ElButton;
const __VLS_216 = __VLS_215({ ...{ onClick: {} as any, }, link: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_215));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_214, typeof __VLS_216> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, link: (true), });
const __VLS_217 = __VLS_pickFunctionalComponentCtx(__VLS_214, __VLS_216)!;
let __VLS_218!: __VLS_NormalizeEmits<typeof __VLS_217.emit>;
let __VLS_219 = { 'click': __VLS_pickEvent(__VLS_218['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_215, typeof __VLS_216>).onClick) };
__VLS_219 = {
click: $event => {
__VLS_ctx.closeTabs('left');
// @ts-ignore
[navigation, visibleItem, closeTabs,];
}
};
{
const __VLS_220 = __VLS_intrinsicElements["i"];
const __VLS_221 = __VLS_elementAsFunctionalComponent(__VLS_220);
const __VLS_222 = __VLS_221({ ...{}, class: ("el-icon-back"), }, ...__VLS_functionalComponentArgsRest(__VLS_221));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_220, typeof __VLS_222> & Record<string, unknown>) => void)({ ...{}, class: ("el-icon-back"), });
const __VLS_223 = __VLS_pickFunctionalComponentCtx(__VLS_220, __VLS_222)!;
let __VLS_224!: __VLS_NormalizeEmits<typeof __VLS_223.emit>;
}
(__VLS_217.slots!).default;
}
(__VLS_212.slots!).default;
}
{
const __VLS_225 = __VLS_intrinsicElements["li"];
const __VLS_226 = __VLS_elementAsFunctionalComponent(__VLS_225);
const __VLS_227 = __VLS_226({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_226));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_225, typeof __VLS_227> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_228 = __VLS_pickFunctionalComponentCtx(__VLS_225, __VLS_227)!;
let __VLS_229!: __VLS_NormalizeEmits<typeof __VLS_228.emit>;
__VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.visibleItem.right));
{
const __VLS_230 = ({} as 'ElButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.ElButton; } : 'elButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.elButton; } : 'el-button' extends keyof typeof __VLS_ctx ? { 'ElButton': (typeof __VLS_ctx)["el-button"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElButton;
const __VLS_231 = __VLS_asFunctionalComponent(__VLS_230, new __VLS_230({ ...{ onClick: {} as any, }, link: (true), }));
({} as { ElButton: typeof __VLS_230; }).ElButton;
({} as { ElButton: typeof __VLS_230; }).ElButton;
const __VLS_232 = __VLS_231({ ...{ onClick: {} as any, }, link: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_231));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_230, typeof __VLS_232> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, link: (true), });
const __VLS_233 = __VLS_pickFunctionalComponentCtx(__VLS_230, __VLS_232)!;
let __VLS_234!: __VLS_NormalizeEmits<typeof __VLS_233.emit>;
let __VLS_235 = { 'click': __VLS_pickEvent(__VLS_234['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_231, typeof __VLS_232>).onClick) };
__VLS_235 = {
click: $event => {
__VLS_ctx.closeTabs('right');
// @ts-ignore
[visibleItem, closeTabs,];
}
};
{
const __VLS_236 = __VLS_intrinsicElements["i"];
const __VLS_237 = __VLS_elementAsFunctionalComponent(__VLS_236);
const __VLS_238 = __VLS_237({ ...{}, class: ("el-icon-right"), }, ...__VLS_functionalComponentArgsRest(__VLS_237));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_236, typeof __VLS_238> & Record<string, unknown>) => void)({ ...{}, class: ("el-icon-right"), });
const __VLS_239 = __VLS_pickFunctionalComponentCtx(__VLS_236, __VLS_238)!;
let __VLS_240!: __VLS_NormalizeEmits<typeof __VLS_239.emit>;
}
(__VLS_233.slots!).default;
}
(__VLS_228.slots!).default;
}
{
const __VLS_241 = __VLS_intrinsicElements["li"];
const __VLS_242 = __VLS_elementAsFunctionalComponent(__VLS_241);
const __VLS_243 = __VLS_242({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_242));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_241, typeof __VLS_243> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_244 = __VLS_pickFunctionalComponentCtx(__VLS_241, __VLS_243)!;
let __VLS_245!: __VLS_NormalizeEmits<typeof __VLS_244.emit>;
__VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.visibleItem.other));
{
const __VLS_246 = ({} as 'ElButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.ElButton; } : 'elButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.elButton; } : 'el-button' extends keyof typeof __VLS_ctx ? { 'ElButton': (typeof __VLS_ctx)["el-button"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElButton;
const __VLS_247 = __VLS_asFunctionalComponent(__VLS_246, new __VLS_246({ ...{ onClick: {} as any, }, link: (true), }));
({} as { ElButton: typeof __VLS_246; }).ElButton;
({} as { ElButton: typeof __VLS_246; }).ElButton;
const __VLS_248 = __VLS_247({ ...{ onClick: {} as any, }, link: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_247));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_246, typeof __VLS_248> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, link: (true), });
const __VLS_249 = __VLS_pickFunctionalComponentCtx(__VLS_246, __VLS_248)!;
let __VLS_250!: __VLS_NormalizeEmits<typeof __VLS_249.emit>;
let __VLS_251 = { 'click': __VLS_pickEvent(__VLS_250['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_247, typeof __VLS_248>).onClick) };
__VLS_251 = {
click: $event => {
__VLS_ctx.closeTabs('other');
// @ts-ignore
[visibleItem, closeTabs,];
}
};
{
const __VLS_252 = __VLS_intrinsicElements["i"];
const __VLS_253 = __VLS_elementAsFunctionalComponent(__VLS_252);
const __VLS_254 = __VLS_253({ ...{}, class: ("el-icon-right"), }, ...__VLS_functionalComponentArgsRest(__VLS_253));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_252, typeof __VLS_254> & Record<string, unknown>) => void)({ ...{}, class: ("el-icon-right"), });
const __VLS_255 = __VLS_pickFunctionalComponentCtx(__VLS_252, __VLS_254)!;
let __VLS_256!: __VLS_NormalizeEmits<typeof __VLS_255.emit>;
}
(__VLS_249.slots!).default;
}
(__VLS_244.slots!).default;
}
(__VLS_191.slots!).default;
}
(__VLS_186.slots!).default;
}
(__VLS_163.slots!).default;
}
{
const __VLS_257 = __VLS_intrinsicElements["div"];
const __VLS_258 = __VLS_elementAsFunctionalComponent(__VLS_257);
const __VLS_259 = __VLS_258({ ...{}, class: ("vol-main"), id: ("vol-main"), }, ...__VLS_functionalComponentArgsRest(__VLS_258));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_257, typeof __VLS_259> & Record<string, unknown>) => void)({ ...{}, class: ("vol-main"), id: ("vol-main"), });
const __VLS_260 = __VLS_pickFunctionalComponentCtx(__VLS_257, __VLS_259)!;
let __VLS_261!: __VLS_NormalizeEmits<typeof __VLS_260.emit>;
if (__VLS_ctx.permissionInited) {
{
const __VLS_262 = ({} as 'ElScrollbar' extends keyof typeof __VLS_ctx ? { 'ElScrollbar': typeof __VLS_ctx.ElScrollbar; } : 'elScrollbar' extends keyof typeof __VLS_ctx ? { 'ElScrollbar': typeof __VLS_ctx.elScrollbar; } : 'el-scrollbar' extends keyof typeof __VLS_ctx ? { 'ElScrollbar': (typeof __VLS_ctx)["el-scrollbar"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElScrollbar;
const __VLS_263 = __VLS_asFunctionalComponent(__VLS_262, new __VLS_262({ ...{}, style: ({}), }));
({} as { ElScrollbar: typeof __VLS_262; }).ElScrollbar;
({} as { ElScrollbar: typeof __VLS_262; }).ElScrollbar;
const __VLS_264 = __VLS_263({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_263));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_262, typeof __VLS_264> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_265 = __VLS_pickFunctionalComponentCtx(__VLS_262, __VLS_264)!;
let __VLS_266!: __VLS_NormalizeEmits<typeof __VLS_265.emit>;
{
const __VLS_267 = ({} as 'Loading' extends keyof typeof __VLS_ctx ? { 'loading': typeof __VLS_ctx.Loading; } : 'loading' extends keyof typeof __VLS_ctx ? { 'loading': typeof __VLS_ctx.loading; } : typeof __VLS_resolvedLocalAndGlobalComponents).loading;
const __VLS_268 = __VLS_asFunctionalComponent(__VLS_267, new __VLS_267({ ...{}, }));
({} as { loading: typeof __VLS_267; }).loading;
({} as { loading: typeof __VLS_267; }).loading;
const __VLS_269 = __VLS_268({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_268));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_267, typeof __VLS_269> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_270 = __VLS_pickFunctionalComponentCtx(__VLS_267, __VLS_269)!;
let __VLS_271!: __VLS_NormalizeEmits<typeof __VLS_270.emit>;
__VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.$store.getters.isLoading()));
}
{
const __VLS_272 = ({} as 'RouterView' extends keyof typeof __VLS_ctx ? { 'RouterView': typeof __VLS_ctx.RouterView; } : 'routerView' extends keyof typeof __VLS_ctx ? { 'RouterView': typeof __VLS_ctx.routerView; } : 'router-view' extends keyof typeof __VLS_ctx ? { 'RouterView': (typeof __VLS_ctx)["router-view"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).RouterView;
const __VLS_273 = __VLS_asFunctionalComponent(__VLS_272, new __VLS_272({ ...{}, }));
({} as { RouterView: typeof __VLS_272; }).RouterView;
({} as { RouterView: typeof __VLS_272; }).RouterView;
const __VLS_274 = __VLS_273({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_273));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_272, typeof __VLS_274> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_275 = __VLS_pickFunctionalComponentCtx(__VLS_272, __VLS_274)!;
let __VLS_276!: __VLS_NormalizeEmits<typeof __VLS_275.emit>;
{
const [{ Component }] = __VLS_getSlotParams((__VLS_275.slots!).default);
{
const __VLS_277 = ({} as 'KeepAlive' extends keyof typeof __VLS_ctx ? { 'KeepAlive': typeof __VLS_ctx.KeepAlive; } : 'keepAlive' extends keyof typeof __VLS_ctx ? { 'KeepAlive': typeof __VLS_ctx.keepAlive; } : 'keep-alive' extends keyof typeof __VLS_ctx ? { 'KeepAlive': (typeof __VLS_ctx)["keep-alive"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).KeepAlive;
const __VLS_278 = __VLS_asFunctionalComponent(__VLS_277, new __VLS_277({ ...{}, }));
({} as { KeepAlive: typeof __VLS_277; }).KeepAlive;
({} as { KeepAlive: typeof __VLS_277; }).KeepAlive;
const __VLS_279 = __VLS_278({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_278));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_277, typeof __VLS_279> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_280 = __VLS_pickFunctionalComponentCtx(__VLS_277, __VLS_279)!;
let __VLS_281!: __VLS_NormalizeEmits<typeof __VLS_280.emit>;
if (!__VLS_ctx.$route.meta || (__VLS_ctx.$route.meta && !__VLS_ctx.$route.meta.hasOwnProperty('keepAlive'))) {
{
const __VLS_282 = (Component);
const __VLS_283 = __VLS_asFunctionalComponent(__VLS_282, new __VLS_282({ ...{}, key: ((__VLS_ctx.$route.name)), }));
const __VLS_284 = __VLS_283({ ...{}, key: ((__VLS_ctx.$route.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_283));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_282, typeof __VLS_284> & Record<string, unknown>) => void)({ ...{}, key: ((__VLS_ctx.$route.name)), });
const __VLS_285 = __VLS_pickFunctionalComponentCtx(__VLS_282, __VLS_284)!;
let __VLS_286!: __VLS_NormalizeEmits<typeof __VLS_285.emit>;
}
// @ts-ignore
[permissionInited, $store, $route, $route, $route, $route, $route, $route,];
}
(__VLS_280.slots!).default;
}
if (__VLS_ctx.$route.meta && __VLS_ctx.$route.meta.hasOwnProperty('keepAlive')) {
{
const __VLS_287 = (Component);
const __VLS_288 = __VLS_asFunctionalComponent(__VLS_287, new __VLS_287({ ...{}, key: ((__VLS_ctx.$route.name)), }));
const __VLS_289 = __VLS_288({ ...{}, key: ((__VLS_ctx.$route.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_288));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_287, typeof __VLS_289> & Record<string, unknown>) => void)({ ...{}, key: ((__VLS_ctx.$route.name)), });
const __VLS_290 = __VLS_pickFunctionalComponentCtx(__VLS_287, __VLS_289)!;
let __VLS_291!: __VLS_NormalizeEmits<typeof __VLS_290.emit>;
}
// @ts-ignore
[$route, $route, $route, $route, $route,];
}
__VLS_275.slots!['' /* empty slot name completion */];
}
}
(__VLS_265.slots!).default;
}
}
(__VLS_260.slots!).default;
}
(__VLS_44.slots!).default;
}
{
const __VLS_292 = ({} as 'ElDrawer' extends keyof typeof __VLS_ctx ? { 'ElDrawer': typeof __VLS_ctx.ElDrawer; } : 'elDrawer' extends keyof typeof __VLS_ctx ? { 'ElDrawer': typeof __VLS_ctx.elDrawer; } : 'el-drawer' extends keyof typeof __VLS_ctx ? { 'ElDrawer': (typeof __VLS_ctx)["el-drawer"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElDrawer;
const __VLS_293 = __VLS_asFunctionalComponent(__VLS_292, new __VLS_292({ ...{}, title: ("选择主题"), modelValue: ((__VLS_ctx.drawer_model)), direction: ("rtl"), destroyOnClose: (true), }));
({} as { ElDrawer: typeof __VLS_292; }).ElDrawer;
({} as { ElDrawer: typeof __VLS_292; }).ElDrawer;
const __VLS_294 = __VLS_293({ ...{}, title: ("选择主题"), modelValue: ((__VLS_ctx.drawer_model)), direction: ("rtl"), destroyOnClose: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_293));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_292, typeof __VLS_294> & Record<string, unknown>) => void)({ ...{}, title: ("选择主题"), modelValue: ((__VLS_ctx.drawer_model)), direction: ("rtl"), destroyOnClose: (true), });
const __VLS_295 = __VLS_pickFunctionalComponentCtx(__VLS_292, __VLS_294)!;
let __VLS_296!: __VLS_NormalizeEmits<typeof __VLS_295.emit>;
{
const __VLS_297 = __VLS_intrinsicElements["div"];
const __VLS_298 = __VLS_elementAsFunctionalComponent(__VLS_297);
const __VLS_299 = __VLS_298({ ...{}, class: ("theme-selector"), }, ...__VLS_functionalComponentArgsRest(__VLS_298));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_297, typeof __VLS_299> & Record<string, unknown>) => void)({ ...{}, class: ("theme-selector"), });
const __VLS_300 = __VLS_pickFunctionalComponentCtx(__VLS_297, __VLS_299)!;
let __VLS_301!: __VLS_NormalizeEmits<typeof __VLS_300.emit>;
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.theme_color)!)) {
{
const __VLS_302 = __VLS_intrinsicElements["div"];
const __VLS_303 = __VLS_elementAsFunctionalComponent(__VLS_302);
const __VLS_304 = __VLS_303({ ...{ onClick: {} as any, }, class: ("item"), key: ((index)), style: (({ background: item.color })), }, ...__VLS_functionalComponentArgsRest(__VLS_303));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_302, typeof __VLS_304> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("item"), key: ((index)), style: (({ background: item.color })), });
const __VLS_305 = __VLS_pickFunctionalComponentCtx(__VLS_302, __VLS_304)!;
let __VLS_306!: __VLS_NormalizeEmits<typeof __VLS_305.emit>;
let __VLS_307 = { 'click': __VLS_pickEvent(__VLS_306['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_303, typeof __VLS_304>).onClick) };
__VLS_307 = {
click: $event => {
__VLS_ctx.changeTheme(item.name);
// @ts-ignore
[drawer_model, drawer_model, drawer_model, theme_color, changeTheme,];
}
};
{
const __VLS_308 = __VLS_intrinsicElements["div"];
const __VLS_309 = __VLS_elementAsFunctionalComponent(__VLS_308);
const __VLS_310 = __VLS_309({ ...{}, style: (({ background: item.leftColor })), class: ("t-left"), }, ...__VLS_functionalComponentArgsRest(__VLS_309));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_308, typeof __VLS_310> & Record<string, unknown>) => void)({ ...{}, style: (({ background: item.leftColor })), class: ("t-left"), });
const __VLS_311 = __VLS_pickFunctionalComponentCtx(__VLS_308, __VLS_310)!;
let __VLS_312!: __VLS_NormalizeEmits<typeof __VLS_311.emit>;
__VLS_directiveFunction(__VLS_ctx.vShow)((item.leftColor));
}
{
const __VLS_313 = __VLS_intrinsicElements["div"];
const __VLS_314 = __VLS_elementAsFunctionalComponent(__VLS_313);
const __VLS_315 = __VLS_314({ ...{}, class: ("t-right"), }, ...__VLS_functionalComponentArgsRest(__VLS_314));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_313, typeof __VLS_315> & Record<string, unknown>) => void)({ ...{}, class: ("t-right"), });
const __VLS_316 = __VLS_pickFunctionalComponentCtx(__VLS_313, __VLS_315)!;
let __VLS_317!: __VLS_NormalizeEmits<typeof __VLS_316.emit>;
}
(__VLS_305.slots!).default;
}
}
(__VLS_300.slots!).default;
}
(__VLS_295.slots!).default;
}
{
const __VLS_318 = ({} as 'ElDrawer' extends keyof typeof __VLS_ctx ? { 'ElDrawer': typeof __VLS_ctx.ElDrawer; } : 'elDrawer' extends keyof typeof __VLS_ctx ? { 'ElDrawer': typeof __VLS_ctx.elDrawer; } : 'el-drawer' extends keyof typeof __VLS_ctx ? { 'ElDrawer': (typeof __VLS_ctx)["el-drawer"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElDrawer;
const __VLS_319 = __VLS_asFunctionalComponent(__VLS_318, new __VLS_318({ ...{}, title: ("消息列表"), modelValue: ((__VLS_ctx.messageModel)), direction: ("rtl"), destroyOnClose: (true), }));
({} as { ElDrawer: typeof __VLS_318; }).ElDrawer;
({} as { ElDrawer: typeof __VLS_318; }).ElDrawer;
const __VLS_320 = __VLS_319({ ...{}, title: ("消息列表"), modelValue: ((__VLS_ctx.messageModel)), direction: ("rtl"), destroyOnClose: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_319));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_318, typeof __VLS_320> & Record<string, unknown>) => void)({ ...{}, title: ("消息列表"), modelValue: ((__VLS_ctx.messageModel)), direction: ("rtl"), destroyOnClose: (true), });
const __VLS_321 = __VLS_pickFunctionalComponentCtx(__VLS_318, __VLS_320)!;
let __VLS_322!: __VLS_NormalizeEmits<typeof __VLS_321.emit>;
{
const __VLS_323 = ({} as 'Message' extends keyof typeof __VLS_ctx ? { 'Message': typeof __VLS_ctx.Message; } : typeof __VLS_resolvedLocalAndGlobalComponents).Message;
const __VLS_324 = __VLS_asFunctionalComponent(__VLS_323, new __VLS_323({ ...{}, list: ((__VLS_ctx.messageList)), }));
({} as { Message: typeof __VLS_323; }).Message;
({} as { Message: typeof __VLS_323; }).Message;
const __VLS_325 = __VLS_324({ ...{}, list: ((__VLS_ctx.messageList)), }, ...__VLS_functionalComponentArgsRest(__VLS_324));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_323, typeof __VLS_325> & Record<string, unknown>) => void)({ ...{}, list: ((__VLS_ctx.messageList)), });
const __VLS_326 = __VLS_pickFunctionalComponentCtx(__VLS_323, __VLS_325)!;
let __VLS_327!: __VLS_NormalizeEmits<typeof __VLS_326.emit>;
}
(__VLS_321.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["vol-aside"];
__VLS_styleScopedClasses["header"];
__VLS_styleScopedClasses["collapse-menu"];
__VLS_styleScopedClasses["vol-menu"];
__VLS_styleScopedClasses["vol-container"];
__VLS_styleScopedClasses["vol-header"];
__VLS_styleScopedClasses["project-name"];
__VLS_styleScopedClasses["header-text"];
__VLS_styleScopedClasses["h-link"];
__VLS_styleScopedClasses["header-info"];
__VLS_styleScopedClasses["h-link"];
__VLS_styleScopedClasses["h-link"];
__VLS_styleScopedClasses["el-icon-message-solid"];
__VLS_styleScopedClasses["user-header"];
__VLS_styleScopedClasses["user"];
__VLS_styleScopedClasses["settings"];
__VLS_styleScopedClasses["el-icon-s-tools"];
__VLS_styleScopedClasses["vol-path"];
__VLS_styleScopedClasses["header-navigation"];
__VLS_styleScopedClasses["contextMenu"];
__VLS_styleScopedClasses["el-icon-close"];
__VLS_styleScopedClasses["el-icon-back"];
__VLS_styleScopedClasses["el-icon-right"];
__VLS_styleScopedClasses["el-icon-right"];
__VLS_styleScopedClasses["vol-main"];
__VLS_styleScopedClasses["theme-selector"];
__VLS_styleScopedClasses["item"];
__VLS_styleScopedClasses["t-left"];
__VLS_styleScopedClasses["t-right"];
}
var __VLS_slots!: {};
// @ts-ignore
[messageModel, messageModel, messageModel, messageList, messageList, messageList,];
return __VLS_slots;
}
