(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ac57bce"],{"8e0d":function(e,t,c){},a62f:function(e,t,c){"use strict";c("8e0d")},a81b:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),o=function(e){return Object(n["pushScopeId"])("data-v-1e22339c"),e=e(),Object(n["popScopeId"])(),e},a={class:"role-container"},r={class:"role-tree-left flex-col"},i=o((function(){return Object(n["createElementVNode"])("div",{class:"title"},[Object(n["createElementVNode"])("i",{class:"el-icon-user"}),Object(n["createTextVNode"])("角色列表")],-1)})),l={class:"action-group"},d={class:"action-text"},u={class:"role-tree-right flex-col"},s={class:"title"},f=o((function(){return Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("i",{class:"el-icon-folder-opened"}),Object(n["createTextVNode"])("菜单权限")],-1)})),h=Object(n["createTextVNode"])("保存"),p={class:"action-group"},b={class:"action-item"};function j(e,t,c,o,j,O){var v=Object(n["resolveComponent"])("el-tree"),k=Object(n["resolveComponent"])("el-scrollbar"),C=Object(n["resolveComponent"])("el-button"),m=Object(n["resolveComponent"])("el-checkbox");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[Object(n["createElementVNode"])("div",r,[i,Object(n["createVNode"])(k,{class:"el-role-list"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(v,{data:e.tree,onNodeClick:e.nodeClick,"node-key":"id","default-expanded-keys":e.openKeys,"expand-on-click-node":!1,style:{padding:"5px 0","margin-right":"2px"}},{default:Object(n["withCtx"])((function(e){var t=e.data;return[Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("div",d,Object(n["toDisplayString"])(t.roleName),1)])]})),_:1},8,["data","onNodeClick","default-expanded-keys"])]})),_:1})]),Object(n["createElementVNode"])("div",u,[Object(n["createElementVNode"])("div",s,[f,Object(n["createVNode"])(C,{type:"primary",onClick:e.save},{default:Object(n["withCtx"])((function(){return[h]})),_:1},8,["onClick"])]),Object(n["createVNode"])(k,{class:"el-role-list"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(v,{onCheckChange:e.leftCheckChange,onCheck:e.nodeCheck,data:e.roleTree,"show-checkbox":!1,style:{padding:"15px"},"node-key":"id","default-expand-all":"","expand-on-click-node":!1},{default:Object(n["withCtx"])((function(t){var c=t.data;return[Object(n["createElementVNode"])("div",p,[Object(n["createElementVNode"])("div",{class:"action-text",style:Object(n["normalizeStyle"])({width:18*(4-c.lv)+150+"px"})},[Object(n["createVNode"])(m,{modelValue:c.leftCk,"onUpdate:modelValue":function(e){return c.leftCk=e},onChange:function(t){return e.allChange(c)}},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(c.text+(c.isApp?"(app)":"")),1)]})),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])],4),Object(n["createElementVNode"])("div",b,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.actions,(function(t,o){return Object(n["openBlock"])(),Object(n["createBlock"])(m,{key:o,modelValue:t.checked,"onUpdate:modelValue":function(e){return t.checked=e},onChange:function(n){return e.actionChange(c,t.checked)}},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(t.text),1)]})),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])})),128))])])]})),_:1},8,["onCheckChange","onCheck","data"])]})),_:1})])])}var O=c("2909"),v=(c("159b"),c("7db0"),c("4de4"),c("a434"),c("d81d"),c("c1fb")),k=Object(n["defineComponent"])({setup:function(){var e=Object(n["ref"])(-1),t=Object(n["ref"])(!1),c=Object(n["reactive"])([]),o=Object(n["reactive"])([]),a=Object(n["reactive"])([]),r=Object(n["reactive"])([]),i=Object(n["reactive"])([]),l=Object(n["reactive"])([]),d=function(e,t){e.actions.forEach((function(e,c){e.checked=t}))},u=function(e,t){var c=r.find((function(t){return t.id===e.pid}));c&&c.actions.length&&(c.actions[0].checked=e.actions.some((function(e){return e.checked}))||t.halfCheckedNodes.some((function(t){return t.id===e.pid})))},s=function(e){e.actions.forEach((function(t){t.checked=e.leftCk})),e.children&&f(e,e.leftCk)},f=function e(t,c){t.children.forEach((function(t){t.leftCk=c,t.actions.forEach((function(e){e.checked=c})),t.children&&e(t,c)}))},h=function(e,t){t=e.actions.filter((function(e){return e.checked})).length==e.actions.length,e.leftCk=t},p=function(){var t="api/role/getUserChildRoles";v["a"].post(t,{},!0).then((function(t){t.status&&(o.splice(0),o.push.apply(o,Object(O["a"])(t.data)),o.forEach((function(e){0==e.parentId&&(e.lv=1,e.children=[],c.push(e),b(e.id,e))})),l.push(c[0].id),e.value=l[0])}))},b=function e(t,c){o.forEach((function(n){n.parentId==t&&(n.lv=c.lv+1,c.children||(c.children=[]),c.children.push(n),e(n.id,n))}))},j=function(t,c){e.value=t.id,k(t)},k=function(t){e.value=t.id,r.forEach((function(e){e.actions.forEach((function(e){e.checked=!1}))}));var c="/api/role/getUserTreePermission?roleId=".concat(t.id);v["a"].post(c,{},!0).then((function(e){e.status&&e.data.forEach((function(e){if(0!=e.actions.length){var t=r.find((function(t){return t.id==e.id}));t&&e.actions.forEach((function(e){t.actions.forEach((function(t){t.value==e.value&&(t.checked=!0)}))}))}}))}))},C=function e(t,c,n){r.forEach((function(o){o.pid==t&&(o.lv=c.lv+1,n&&(o.rootId=t),c.children||(c.children=[]),c.children.push(o),e(o.id,o,n))}))},m=function(){var e="/api/role/getCurrentTreePermission";v["a"].post(e,{},!0).then((function(e){e.status&&(r.splice(0),a.splice(0),r.push.apply(r,Object(O["a"])(e.data.tree)),a.push.apply(a,Object(O["a"])(e.data.roles)),r.forEach((function(e){0==e.pid&&(e.lv=1,e.children=[],i.push(e),C(e.id,e))})))}))},g=Object(n["getCurrentInstance"])().appContext.config.globalProperties.$message,x=function(){if(e.value<=0)return g.error("请选择角色!");var t=[];r.forEach((function(e){var c=e.actions.filter((function(e){return e.checked}));if(c.length>0){var n=c.map((function(e){return{text:e.text,value:e.value}}));t.push({id:e.id,actions:n})}}));var c="api/role/SavePermission?roleId=".concat(e.value);v["a"].post(c,t,!0).then((function(e){g[e.status?"success":"error"](e.message)}))};return p(),m(),{list:o,nodeClick:j,checked:t,tree:c,selectId:e,openKeys:l,getUserRole:k,roles:a,roleList:r,getCurrentTreePermission:m,leftCheckChange:d,nodeCheck:u,roleTree:i,allChange:s,actionChange:h,save:x}}}),C=(c("a62f"),c("6b0d")),m=c.n(C);const g=m()(k,[["render",j],["__scopeId","data-v-1e22339c"]]);t["default"]=g}}]);