(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36709ae8","chunk-392e9ca4","chunk-725003ca"],{"03cc":function(e,t,l){"use strict";l("d0df")},"0b9e":function(e,t,l){},"0d63":function(e,t,l){"use strict";l.r(t);var n=l("7a23"),a=function(e){return Object(n["pushScopeId"])("data-v-0463adc6"),e=e(),Object(n["popScopeId"])(),e},o={class:"vol-dialog"},i=a((function(){return Object(n["createElementVNode"])("i",{class:"el-icon el-icon-full-screen"},null,-1)})),c=[i],r={key:0,class:"dia-footer"},d=a((function(){return Object(n["createElementVNode"])("i",{class:"el-icon-close"},null,-1)})),u=Object(n["createTextVNode"])("关闭");function s(e,t,l,a,i,s){var f=Object(n["resolveComponent"])("el-scrollbar"),p=Object(n["resolveComponent"])("el-button"),b=Object(n["resolveComponent"])("el-dialog");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createVNode"])(b,{modelValue:e.vmodel,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.vmodel=t}),"close-on-click-modal":!1,"close-on-press-escape":!1,width:e.width,fullscreen:e.fullscreen,draggable:e.draggable,modal:e.modal,"before-close":e.handleClose},{header:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("i",{class:Object(n["normalizeClass"])(e.icon)},null,2),Object(n["createTextVNode"])(" "+Object(n["toDisplayString"])(e.title)+" ",1),Object(n["createElementVNode"])("button",{class:"el-dialog__headerbtn",type:"button",style:{right:"35px",color:"var(--el-color-info)"},onClick:t[0]||(t[0]=function(){return e.handleFullScreen&&e.handleFullScreen.apply(e,arguments)})},c)]})),footer:Object(n["withCtx"])((function(){return[e.footer?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",r,[Object(n["renderSlot"])(e.$slots,"footer",{},void 0,!0),e.footer?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(p,{key:0,type:"primary",size:"mini",onClick:t[1]||(t[1]=function(t){return e.handleClose()})},{default:Object(n["withCtx"])((function(){return[d,u]})),_:1}))])):Object(n["createCommentVNode"])("",!0)]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{"max-height":e.contentHeight},{default:Object(n["withCtx"])((function(){return[e.inited?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:0,style:Object(n["normalizeStyle"])([{"min-height":"50px"},{padding:e.padding+"px"}]),class:"srcoll-content"},[Object(n["renderSlot"])(e.$slots,"content",{},void 0,!0),Object(n["renderSlot"])(e.$slots,"default",{},void 0,!0)],4)):Object(n["createCommentVNode"])("",!0)]})),_:3},8,["max-height"])]})),_:3},8,["modelValue","width","fullscreen","draggable","modal","before-close"])])}l("a9e3");var f=Object(n["defineComponent"])({props:{modelValue:!1,lazy:{type:Boolean,default:!1},icon:{type:String,default:"el-icon-warning-outline"},title:{type:String,default:"基本信息"},height:{type:Number,default:200},width:{type:Number,default:650},padding:{type:Number,default:16},modal:{type:Boolean,default:!0},draggable:{type:Boolean,default:!1},mask:{type:Boolean,default:!0},onModelClose:{type:Function,default:function(e){return!0}},footer:{type:Boolean,default:!0}},setup:function(e,t){var l=.95*document.body.clientHeight-60,a=Object(n["ref"])(!0),o=Object(n["ref"])(!1),i=Object(n["ref"])(!1),c=Object(n["ref"])(100);o.value=e.modelValue,i.value=!!t.slots.footer;var r=Object(n["ref"])(200);r.value=e.height;var d=function(l,n){var a=e.onModelClose(!!n);!1!==a&&(o.value=!1,t.emit("update:modelValue",!1),l&&l())},u=function(e){return r.value=l-30,l/-2+"px"};c.value=u(),Object(n["watch"])((function(){return e.modelValue}),(function(e,t){o.value=e})),Object(n["watch"])((function(){return e.height}),(function(e,t){c.value=u()}));var s=Object(n["ref"])(!1),f=function(){s.value=!s.value,t.emit("fullscreen",s.value)};return{handleClose:d,inited:a,vmodel:o,footer:i,top:c,calcHeight:u,contentHeight:r,fullscreen:s,handleFullScreen:f}}}),p=(l("19bb"),l("a80f"),l("d959")),b=l.n(p);const m=b()(f,[["render",s],["__scopeId","data-v-0463adc6"]]);t["default"]=m},1859:function(e,t,l){"use strict";l("e86e")},"19bb":function(e,t,l){"use strict";l("9595")},"1f83":function(e,t,l){},"2c2e":function(e,t,l){"use strict";l("0b9e")},"5d9b":function(e,t,l){"use strict";l("b0c0");var n=l("7a23"),a=function(e){return Object(n["pushScopeId"])("data-v-4dcf96c8"),e=e(),Object(n["popScopeId"])(),e},o={class:"vol-el-menu"},i={key:0,class:"menu-search"},c=a((function(){return Object(n["createElementVNode"])("i",{class:"el-icon-search"},null,-1)}));function r(e,t,l,a,r,d){var u=Object(n["resolveComponent"])("el-option"),s=Object(n["resolveComponent"])("el-select"),f=Object(n["resolveComponent"])("vol-element-menu-child"),p=Object(n["resolveComponent"])("el-sub-menu"),b=Object(n["resolveComponent"])("el-menu-item"),m=Object(n["resolveComponent"])("el-menu");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[e.showSearch?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",i,[Object(n["createVNode"])(s,{placement:"bottom",modelValue:e.searchValue,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.searchValue=t}),clearable:"",filterable:"",remote:"","reserve-keyword":"",placeholder:"请输入关键字搜索...","remote-method":e.remoteMethod,onChange:e.selectChange,loading:e.loading},{prefix:Object(n["withCtx"])((function(){return[c]})),default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.options,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","placeholder","remote-method","onChange","loading"])])):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(m,{close:"vol-el-menu--vertical","default-openeds":e.openedIds,"default-active":e.defaultActive,"unique-opened":!0,onSelect:e.select,collapse:e.isCollapse,onOpen:e.handleOpen,onClose:e.handleClose,onContextmenu:Object(n["withModifiers"])(e.bindRightClickMenu,["prevent"])},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.convertTree(e.list),(function(t){return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[!t.children.length||e.enable&&1!=t.enable?(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:1},[e.enable&&1!=t.enable?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(b,{class:"menu-item-lv1",key:t.id,index:""+t.id},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("i",{class:Object(n["normalizeClass"])(t.icon)},null,2),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(t.name),1)]})),_:2},1032,["index"]))],64)):(Object(n["openBlock"])(),Object(n["createBlock"])(p,{key:t.id,index:""+t.id},{title:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("i",{class:Object(n["normalizeClass"])(["menu-icon",t.icon])},null,2),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(t.name),1)]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{enable:e.enable,list:t.children},null,8,["enable","list"])]})),_:2},1032,["index"]))],64)})),256))]})),_:1},8,["default-openeds","default-active","onSelect","collapse","onOpen","onClose","onContextmenu"])])}var d=l("2909"),u=(l("a9e3"),l("159b"),l("a434"),l("d81d"),l("7db0"),l("fb6a"),l("4de4"),l("c740"),{class:"vol-el-menu-item"});function s(e,t,l,a,o,i){var c=Object(n["resolveComponent"])("el-menu-item"),r=Object(n["resolveComponent"])("vol-element-menu-child",!0),d=Object(n["resolveComponent"])("el-sub-menu");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",u,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(l.list,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[e.children&&e.children.length?(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:0},[e.children.length||l.enable&&1!=e.enable?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(c,{key:e.id,index:""+e.id},{title:Object(n["withCtx"])((function(){return[]})),default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.name),1)]})),_:2},1032,["index"])),!e.children.length||l.enable&&1!=e.enable?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(d,{key:e.id,index:""+e.id},{title:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.name),1)]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(r,{enable:l.enable,list:e.children},null,8,["enable","list"])]})),_:2},1032,["index"]))],64)):(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:1},[l.enable&&1!=e.enable?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(c,{key:e.id,index:""+e.id},{title:Object(n["withCtx"])((function(){return[]})),default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.name),1)]})),_:2},1032,["index"]))],64))],64)})),256))])}var f={name:"vol-element-menu-child",props:{list:{type:Array,default:[]},enable:{type:Boolean,default:!1}}},p=(l("67fa"),l("d959")),b=l.n(p);const m=b()(f,[["render",s],["__scopeId","data-v-4b9b70e0"]]);var h=m,O=l("6c02"),v=Object(n["defineComponent"])({components:{"vol-element-menu-child":h},props:{enable:{type:Boolean,default:!1},isCollapse:{type:Boolean,default:!1},onSelect:{type:Function,default:function(e){}},openSelect:{type:Boolean,default:!0},list:{type:Array,default:[]},rootId:{type:String,default:"0"},currentMenuId:{type:Number,default:0}},setup:function(e){var t=function e(t,l,n){l.children||(l.children=[]),n.forEach((function(a){a.parentId!=t||l.children.some((function(e){return e.id===a.id}))||(l.children.push(a),e(a.id,a,n))}))},l=isNaN(e.rootId)?e.rootId:~~e.rootId;e.list.forEach((function(e){e.icon&&"el-"==e.icon.substring(0,3)||(e.icon="el-icon-menu"),e.children=[],e.isRoot=e.parentId===l}));var a=function(e){var n=[];return e.forEach((function(a){a.parentId===l&&(a.hasOwnProperty("enable")||(a.enable=1),n.push(a),t(a.id,a,e))})),n},o=Object(n["reactive"])([e.currentMenuId]),i=Object(n["ref"])(e.currentMenuId+""),c=Object(n["getCurrentInstance"])().appContext.config.globalProperties.base;Object(n["watch"])((function(){return e.currentMenuId}),(function(t,l){i.value=t+"",o.splice(0),o.push.apply(o,Object(d["a"])(c.getTreeAllParent(t,e.list).map((function(e){return e.id}))))}));var r=Object(O["c"])(),u=!1,s=function(t,l){l=e.list.find((function(e){return e.id==t})),1!=l.linkType?u||(u=!0,setTimeout((function(){u=!1}),20),e.onSelect(t,l),r.push({path:l.path||"",query:l.query})):window.open(l.url||l.path,"_blank")},f=function(t,l){e.openSelect&&s(t,l)},p=function(){},b=function(e){},m=Object(n["getCurrentInstance"])(),h=m.proxy,v=Object(n["ref"])(!1),y=Object(n["ref"])(""),j=Object(n["ref"])([]),g=function(t){t?j.value=e.list.filter((function(e){return(1==e.enable||void 0===e.enable)&&-1!=e.name.indexOf(t)&&(!e.children||!e.children.length)})).map((function(e){return{value:e.id,label:e.name}})).slice(0,7):j.value.length=0},k=function(t){if(t){var l=e.list.findIndex((function(e){return e.id===t}));-1!==l&&(y.value="",h.list.some((function(e){return e.parentId===t}))||s(t,e.list[l]))}},N=Object(n["ref"])(void 0===h.$global.menuSearch||h.$global.menuSearch);return{select:s,convertTree:a,handleOpen:f,handleClose:p,bindRightClickMenu:b,openedIds:o,defaultActive:i,searchValue:y,options:j,remoteMethod:g,loading:v,selectChange:k,showSearch:N}}});l("1859");const y=b()(v,[["render",r],["__scopeId","data-v-4dcf96c8"]]);t["a"]=y},"67fa":function(e,t,l){"use strict";l("1f83")},9595:function(e,t,l){},"9b90":function(e,t,l){},a80f:function(e,t,l){"use strict";l("9b90")},c016:function(e,t,l){"use strict";l.r(t);var n=l("7a23"),a=function(e){return Object(n["pushScopeId"])("data-v-2a9809f8"),e=e(),Object(n["popScopeId"])(),e},o={class:"builder-container"},i={style:{padding:"30px 30px 10px 34px"}},c=Object(n["createTextVNode"])(" 1、如果只是创建目录，父级id填0,其他随便填写; "),r=a((function(){return Object(n["createElementVNode"])("br",null,null,-1)})),d=Object(n["createTextVNode"])(" 2、如果是生成代码，父级id填写【代码生成配置】列表页面的id "),u={class:"addModel",style:{"padding-right":"30px"}},s=a((function(){return Object(n["createElementVNode"])("i",{class:"el-icon-plus"},null,-1)})),f=Object(n["createTextVNode"])(" 确 定"),p={class:"builder-left"},b=a((function(){return Object(n["createElementVNode"])("div",{class:"module-name"},"代码生成配置",-1)})),m={class:"builder-tree"},h={class:"builder-content"},O={style:{height:"100%"}},v={class:"coder-container"},y={class:"coder-item",style:{"padding-top":"7px"}},j=a((function(){return Object(n["createElementVNode"])("div",{style:{color:"red","font-size":"13px"}}," 删除左侧配置菜单:删除行->保存->删除菜单 ",-1)})),g={class:"action"},k=a((function(){return Object(n["createElementVNode"])("i",{class:"el-icon-check"},null,-1)})),N=Object(n["createTextVNode"])("保存 "),C=[k,N],V=a((function(){return Object(n["createElementVNode"])("i",{class:"el-icon-plus"},null,-1)})),x=Object(n["createTextVNode"])("新建 "),w=[V,x],I=a((function(){return Object(n["createElementVNode"])("i",{class:"el-icon-document"},null,-1)})),E=Object(n["createTextVNode"])("生成Vue页面 "),S=[I,E],T=a((function(){return Object(n["createElementVNode"])("i",{class:"el-icon-document"},null,-1)})),B=Object(n["createTextVNode"])("生成app页面 "),_=[T,B],$=a((function(){return Object(n["createElementVNode"])("i",{class:"el-icon-tickets"},null,-1)})),M=Object(n["createTextVNode"])("生成Model "),P=[$,M],D=a((function(){return Object(n["createElementVNode"])("i",{class:"el-icon-document"},null,-1)})),F=Object(n["createTextVNode"])("生成业务类 "),R=[D,F],z=a((function(){return Object(n["createElementVNode"])("i",{class:"el-icon-delete"},null,-1)})),q=Object(n["createTextVNode"])("删除菜单 "),H=[z,q],L={class:"config"},A=Object(n["createTextVNode"])(" 1、如果需要修改表结构，请在数据库修改，再点同步表结构->生成vue页面->生成model。 2、修改编辑行后需要点击生成model、生成vue页面 "),J={class:"coder-item"},G=a((function(){return Object(n["createElementVNode"])("div",{style:{color:"red","font-size":"13px"}}," 数据库表结构发生变化时请点【同步表结构】 ",-1)})),K={class:"action"},U={class:"grid-container",style:{"padding-bottom":"20px"}};function W(e,t,l,a,k,N){var V=Object(n["resolveComponent"])("el-alert"),x=Object(n["resolveComponent"])("vol-form"),I=Object(n["resolveComponent"])("el-button"),E=Object(n["resolveComponent"])("vol-box"),T=Object(n["resolveComponent"])("VolMenu"),B=Object(n["resolveComponent"])("el-scrollbar"),$=Object(n["resolveComponent"])("VolHeader"),M=Object(n["resolveComponent"])("vol-table");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createVNode"])(E,{ref:"add",width:850,height:450,title:"新建配置信息",padding:"10px",modelValue:k.addModel,"onUpdate:modelValue":t[0]||(t[0]=function(e){return k.addModel=e})},{footer:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",null,[Object(n["createVNode"])(I,{type:"primary",size:"small",onClick:N.add},{default:Object(n["withCtx"])((function(){return[s,f]})),_:1},8,["onClick"])])]})),default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",i,[Object(n["createVNode"])(V,{type:"warning",closable:!1},{default:Object(n["withCtx"])((function(){return[c,r,d]})),_:1})]),Object(n["createElementVNode"])("div",u,[Object(n["createVNode"])(x,{ref:"addForm",formRules:k.addOptions,formFields:k.layOutOptins.fields},null,8,["formRules","formFields"])])]})),_:1},8,["modelValue"]),Object(n["createElementVNode"])("div",p,[b,Object(n["createElementVNode"])("div",m,[Object(n["createVNode"])(B,{style:{height:"100%",width:"200px"}},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{list:k.tree,onSelect:N.onSelect},null,8,["list","onSelect"])]})),_:1})])]),Object(n["createElementVNode"])("div",h,[Object(n["createElementVNode"])("div",O,[Object(n["createVNode"])(B,{style:{height:"100%"}},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",v,[Object(n["createElementVNode"])("div",y,[Object(n["createVNode"])($,{icon:"ios-chatbubbles",text:"代码生成器"},{content:Object(n["withCtx"])((function(){return[j]})),default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",g,[Object(n["createElementVNode"])("span",{onClick:t[1]||(t[1]=function(){return N.save&&N.save.apply(N,arguments)})},C),Object(n["createElementVNode"])("span",{onClick:t[2]||(t[2]=function(e){return N.addVisible()})},w),Object(n["createElementVNode"])("span",{onClick:t[3]||(t[3]=function(e){return N.ceateVuePage(0)})},S),Object(n["createElementVNode"])("span",{onClick:t[4]||(t[4]=function(e){return N.ceateVuePage(1)})},_),Object(n["createElementVNode"])("span",{onClick:t[5]||(t[5]=function(){return N.ceateModel&&N.ceateModel.apply(N,arguments)})},P),Object(n["createElementVNode"])("span",{onClick:t[6]||(t[6]=function(){return N.createService&&N.createService.apply(N,arguments)})},R),Object(n["createElementVNode"])("span",{onClick:t[7]||(t[7]=function(){return N.delTree&&N.delTree.apply(N,arguments)})},H)])]})),_:1}),Object(n["createElementVNode"])("div",L,[Object(n["createVNode"])(x,{"label-width":90,ref:"form",formRules:k.layOutOptins.options,formFields:k.layOutOptins.fields},null,8,["formRules","formFields"])])]),Object(n["createVNode"])(V,{type:"warning",closable:!1},{default:Object(n["withCtx"])((function(){return[A]})),_:1}),Object(n["createElementVNode"])("div",J,[Object(n["createVNode"])($,{icon:"md-podium",style:{"border-bottom":"0"},text:"表结构"},{content:Object(n["withCtx"])((function(){return[G]})),default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",K,[Object(n["createElementVNode"])("span",{style:{color:"rgb(23, 156, 216)"},class:"ivu-icon ivu-icon-ios-folder",onClick:t[8]||(t[8]=function(){return N.help&&N.help.apply(N,arguments)})},"代码生成器参数文档"),Object(n["createElementVNode"])("span",{onClick:t[9]||(t[9]=function(){return N.delRow&&N.delRow.apply(N,arguments)}),class:"ivu-icon ivu-icon-md-close"},"删除行数据"),Object(n["createElementVNode"])("span",{onClick:t[10]||(t[10]=function(){return N.syncTable&&N.syncTable.apply(N,arguments)}),class:"ivu-icon ivu-icon-md-sync"},"同步表结构")])]})),_:1}),Object(n["createElementVNode"])("div",U,[Object(n["createVNode"])(M,{ref:"table",paginationHide:!0,tableData:k.data,height:k.tableHeight,columns:k.layOutOptins.columns,color:!1,index:!0,allowEmpty:!0,clickEdit:!0},null,8,["tableData","height","columns"])])])])]})),_:1})])])])}l("a434"),l("7db0"),l("99af"),l("4de4"),l("159b"),l("b0c0");var Q=[{key:1,value:"img"},{key:2,value:"excel"},{key:3,value:"file"},{key:4,value:"date"}],X=[{key:"text",value:"input"},{key:"textarea",value:"textarea"},{key:"switch",value:"switch"},{key:"select",value:"select"},{key:"selectList",value:"select多选"},{key:"date",value:"date"},{key:"datetime",value:"datetime"},{key:"month",value:"年月"},{key:"rate",value:"rate评分"},{key:"time",value:"time"},{key:"checkbox",value:"checkbox多选"},{key:"password",value:"密码输入框"},{key:"radio",value:"radio单选"},{key:"cascader",value:"级联"},{key:"treeSelect",value:"树形级联(多选)tree-select"},{key:"editor",value:"富文本编辑器"},{key:"mail",value:"mail"},{key:"number",value:"number"},{key:"decimal",value:"decimal"},{key:"phone",value:"phone"},{key:"img",value:"img"},{key:"excel",value:"excel"},{key:"file",value:"file"}],Y=[{key:"text",value:"input"},{key:"like",value:"模糊查询"},{key:"textarea",value:"textarea"},{key:"switch",value:"switch"},{key:"select",value:"select"},{key:"selectList",value:"select多选"},{key:"date",value:"date"},{key:"datetime",value:"datetime"},{key:"month",value:"年月"},{key:"time",value:"time"},{key:"cascader",value:"级联"},{key:"checkbox",value:"checkbox"},{key:"radio",value:"radio"},{key:"range",value:"区间查询"},{key:"mail",value:"mail"},{key:"number",value:"number"},{key:"decimal",value:"decimal"},{key:"phone",value:"phone"}],Z={form:{fields:{table_Id:"",parentId:null,namespace:"",columnCNName:"",tableName:"",tableTrueName:"",folderName:"",detailCnName:"",detailName:"",expressField:"",sortName:"",richtitle:"",uploadField:"",uploadMaxCount:"",enable:0,vuePath:"",appPath:"",userPermissionDesc:"开启后当前用户只能操作自己(与下级角色)创建的数据,如:查询、删除、修改等操作"},addOptions:[[{title:"父 级 ID",min:0,field:"parentId",required:!0,type:"number",placeholder:"放在【代码生成配置】列表的文件夹ID下,如果填入【0】就是一级目录"}],[{title:"项目类库",field:"namespace",placeholder:"代码生成后的所在类库(可以自己提前在后台项目中创建一个.netcore类库)",type:"select",required:!0,data:[]}],[{title:"表中文名",field:"columnCNName",required:!0,placeholder:"表对应的中文名字,界面上显示会用到"}],[{title:"实际表名",field:"tableName",required:!0,placeholder:"数据库实际表名或者视图名(多表关联请创建视图再生成代码)"}],[{title:"文件夹名",placeholder:"生成文件所在类库中的文件夹名(文件夹可以不存在);注意只需要填写文件夹名，不是路径",field:"folderName",required:!0}]],options:[[{title:"主 键 ID",field:"table_Id",dataSource:[],readonly:!0,disabled:!0,columnType:"int"},{title:"父 级 ID",field:"parentId",min:0,required:!0,type:"number"},{title:"项目类库",placeholder:"代码生成存放的位置",field:"namespace",type:"select",required:!0,data:[]}],[{title:"表中文名",field:"columnCNName",dataSource:[],required:!0},{title:"表 别 名",placeholder:"默认与实际表名相同",field:"tableName",required:!0},{title:"实际表名",field:"tableTrueName"}],[{title:"文件夹名",placeholder:"生成文件所在类库中的文件夹名(文件夹可以不存在)",field:"folderName",required:!0},{title:"明细表名",field:"detailCnName",placeholder:"明细表中文名字"},{title:"明 细 表",field:"detailName",placeholder:"数据库的表名"}],[{title:"快捷编辑",field:"expressField",placeholder:"快捷编辑字段"},{title:"排序字段",field:"sortName",placeholder:"多个排序字段逗号隔开(默认降序排序),如：Name,Age",colSize:8}],[{title:"Vue路径",field:"vuePath",type:"text",placeholder:"Vue项目所在绝对路径,到views文件夹,如：E:/app/src/views",colSize:6},{title:"app路径",field:"appPath",type:"text",placeholder:"uniapp项目所在绝对路径,到pages文件夹,如：E:/uniapp/pages",colSize:6}]]},columns:[{field:"columnId",title:"ColumnId",width:120,align:"left",edit:{type:"text"},hidden:!0},{field:"table_Id",title:"Table_Id",width:120,align:"left",editor:"text",hidden:!0},{field:"columnCnName",title:"列显示名称",fixed:!0,width:120,align:"left",edit:{type:"text"}},{field:"columnName",title:"列名",fixed:!0,width:120,align:"left",edit:{type:"text"}},{field:"isKey",title:"主键",width:90,align:"left",edit:{type:"switch"}},{field:"sortable",title:"是否排序",width:90,align:"left",edit:{type:"switch",keep:!0}},{field:"enable",title:"app列",width:140,align:"left",edit:{type:"select"},bind:{data:[{key:1,value:"显示/查询/编辑"},{key:2,value:"显示/编辑"},{key:3,value:"显示/查询"},{key:4,value:"显示"},{key:5,value:"查询/编辑"},{key:6,value:"查询"},{key:7,value:"编辑"}]}},{field:"searchRowNo",title:"查询行",width:90,align:"left",edit:{type:"text"}},{field:"searchColNo",title:"查询列",width:90,align:"left",edit:{type:"text"}},{field:"searchType",title:"查询类型",width:150,align:"left",edit:{type:"select"},bind:{data:Y}},{field:"editRowNo",title:"编辑行",width:90,align:"numberbox",edit:{type:"text"}},{field:"editColNo",title:"编辑列",width:90,align:"numberbox",edit:{type:"text"}},{field:"editType",title:"编辑类型",width:150,align:"left",edit:{type:"select"},bind:{data:X}},{field:"dropNo",title:"数据源",width:120,align:"left",bind:{data:[]},edit:{type:"select",data:[]}},{field:"isImage",title:"table列显示类型",hidden:!1,width:130,align:"left",edit:{type:"select"},bind:{data:Q}},{field:"orderNo",title:"列显示顺序",width:120,align:"left",edit:{type:"text"}},{field:"maxlength",title:"字段最大长度",width:130,align:"left",edit:{type:"text"}},{field:"columnType",title:"数据类型",width:120,align:"left",edit:{type:"text"}},{field:"isNull",title:"可为空",width:120,align:"left",edit:{type:"switch",keep:!0}},{field:"isReadDataset",title:"是否只读",width:120,align:"left",edit:{type:"switch",keep:!0}},{field:"isColumnData",title:"数据列",width:120,align:"left",edit:{type:"switch",keep:!0}},{field:"isDisplay",title:"是否显示",width:120,align:"left",edit:{type:"switch",keep:!0}},{field:"columnWidth",title:"table列宽度",width:120,align:"left",edit:{type:"text"}},{field:"colSize",title:"编辑字段宽度colSize",width:180,align:"left",edit:{type:"select"},bind:{data:[{key:0,value:"自动宽度"},{key:2,value:"20%"},{key:3,value:"30%"},{key:4,value:"40%"},{key:6,value:"50%"},{key:8,value:"60%"},{key:10,value:"80%"},{key:12,value:"100%"}]}},{field:"createDate",title:"创建时间",width:120,align:"left"}]},ee=Z,te=l("6e5b"),le=l("0b13"),ne=l("0d63"),ae=l("c5e6"),oe=l("5d9b"),ie={components:{VolForm:te["a"],VolTable:le["a"],VolBox:ne["default"],VolHeader:ae["default"],VolMenu:oe["a"]},data:function(){return{more:{addChild:"addChild",ceateController:"ceateController",addRow:"addRow",delRow:"delRow",delTree:"delTree"},addModel:!1,helpModel:!1,tableHeight:500,addOptions:ee.form.addOptions,layOutOptins:{fields:ee.form.fields,options:ee.form.options,columns:ee.columns},tableInfo:null,data:[],tree:[]}},watch:{"layOutOptins.fields.vuePath":function(e){localStorage.setItem("vuePath",e)},deep:!0},methods:{changeMore:function(e){this[e]()},help:function(){window.open("http://v2.volcore.xyz/document/coder")},addVisible:function(e){this.addModel=!0,this.$refs.form.reset(),this.data.splice(0),e&&(this.layOutOptins.fields.parentId=e)},delTree:function(){var e=this,t=this.layOutOptins.fields.table_Id;if(!t)return this.$message.error("请选择节点");var l=!1;this.$confirm("删除警告?","确认要删除吗",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){l||(l=!0,e.http.post("/api/builder/delTree?table_Id="+t,{},!0).then((function(t){if(!t.status)return e.$message.error(t.message);e.$message.error("删除成功,请刷新页面")})))}))},add:function(){var e=this;this.$refs.form.validate((function(){e.layOutOptins.fields.tableTrueName||(e.layOutOptins.fields.tableTrueName=e.layOutOptins.fields.tableName);var t="parentId="+e.layOutOptins.fields.parentId+"&tableName="+e.layOutOptins.fields.tableName+"&columnCNName="+e.layOutOptins.fields.columnCNName+"&nameSpace="+e.layOutOptins.fields.namespace+"&foldername="+e.layOutOptins.fields.folderName+"&isTreeLoad=false";e.http.post("/api/builder/LoadTableInfo?"+t,{},!0).then((function(t){if(t.status){var l=e.tree.some((function(e){return e.id==t.data.table_Id}));l||e.tree.push({id:t.data.table_Id,pId:t.data.parentId,parentId:t.data.parentId,name:t.data.columnCNName,orderNo:t.data.orderNo}),t.data.tableTrueName||(t.data.tableTrueName=t.data.tableName),e.addModel=!1,e.tableInfo=t.data,e.$refs.form.reset(t.data),e.data=t.data.tableColumns}else e.$message.error(t.message)}))}))},addChild:function(){var e=this.layOutOptins.fields.table_Id;if(!e)return this.$message.error("请选中节点");this.addVisible(e)},addRow:function(){this.data.push({})},delRow:function(){var e=this,t=!1;this.$confirm("删除警告?","确认要删除选择的数据吗",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){t||(t=!0,e.$refs.table.delRow())}))},validateTableInfo:function(e){var t=this;this.$refs.form.validate((function(){if(!t.tableInfo)return t.$message.error("请先加载数据"),!1;if(t.data&&t.data.length>0){var l=t.data.find((function(e){return e.isKey}));if(!l)return t.$message.error("请勾选设置主键"),!1;if(1==l.isNull)return t.$message.error("主键【可为空】必须设置为否"),!1;if("int"!=l.columnType&&"bigint"!=l.columnType&&!t.layOutOptins.fields.sortName)return t.$message.error("主键非自增类型,请设置上面表单的【排序字段】"),!1}for(var n in t.tableInfo)if(t.layOutOptins.fields.hasOwnProperty(n)){var a=t.layOutOptins.fields[n];t.tableInfo[n]=a}e()}))},ceateVuePage:function(e){var t=this;this.validateTableInfo((function(){var l;if(e){if(l=localStorage.getItem("appPath"),!l)return t.$message.error("请先设置app路径,然后再保存!")}else if(l=localStorage.getItem("vuePath"),!l)return t.$message.error("请先设置Vue项目对应Views的绝对路径,然后再保存!");var n="/api/builder/createVuePage?vuePath=".concat(l,"&v3=1&app=").concat(e||0);t.http.post(n,t.tableInfo,!0).then((function(e){t.$Message.info(e)}))}))},createService:function(){var e=this;this.validateTableInfo((function(){var t="tableName="+e.layOutOptins.fields.tableName+"&nameSpace="+e.layOutOptins.fields.namespace+"&foldername="+e.layOutOptins.fields.folderName;e.http.post("/api/builder/CreateServices?"+t,e.tableInfo,!0).then((function(t){e.$Message.info(t)}))}))},ceateModel:function(){var e=this;this.validateTableInfo((function(){e.http.post("/api/builder/CreateModel",e.tableInfo,!0).then((function(t){e.$message.info(t)}))}))},syncTable:function(){var e=this;if(!this.layOutOptins.fields.tableName)return this.$Message.error("请选模块");this.http.post("/api/builder/syncTable?tableName="+this.layOutOptins.fields.tableName,{},!0).then((function(t){if(!t.status)return e.$Message.error(t.message);e.$Message.info(t.message),e.loadTableInfo(e.layOutOptins.fields.table_Id)}))},ceateApiController:function(){},ceateController:function(){},checkSortName:function(){},save:function(){var e=this;if(localStorage.setItem("vuePath",this.layOutOptins.fields.vuePath||""),localStorage.setItem("appPath",this.layOutOptins.fields.appPath||""),this.tableInfo&&this.tableInfo.tableColumns&&this.tableInfo.tableColumns.length&&this.tableInfo.tableColumns.filter((function(e){return 1==e.isKey})).length>1)return this.$Message.error("表结构只能勾选一个主键字段");this.validateTableInfo((function(){e.http.post("/api/builder/Save",e.tableInfo,!0).then((function(t){t.status?(e.$Message.info(t.message),e.tree.forEach((function(t){t.id==e.layOutOptins.fields.table_Id&&(t.name=e.layOutOptins.fields.columnCNName,t.parentId=e.layOutOptins.fields.parentId)})),e.tableInfo=t.data,t.data.vuePath=e.layOutOptins.fields.vuePath,t.data.appPath=e.layOutOptins.fields.appPath,e.$refs.form.reset(t.data),e.data=t.data.tableColumns):e.$Message.error(t.message)}))}))},onSelect:function(e){this.loadTableInfo(e)},onOpenChange:function(e){0!=e.length&&this.loadTableInfo(1==e.length?e[0]:e[e.length-1])},loadTableInfo:function(e){var t=this;this.http.post("/api/builder/LoadTableInfo?table_Id="+e+"&isTreeLoad=true",{},!0).then((function(e){e.data.tableTrueName||(e.data.tableTrueName=e.data.tableName);var l=["sortable","isNull","isReadDataset","isColumnData","isDisplay"];e.data.tableColumns.forEach((function(e){for(var t=0;t<l.length;t++)e[l[t]]=e[l[t]]||0})),t.tableInfo=e.data,t.$refs.form.reset(e.data),t.data=e.data.tableColumns}))},getVuePath:function(e){var t=localStorage.getItem(e);return t&&"null"!=t&&"undefined"!=t||(t=""),t}},mounted:function(){},created:function(){var e=this,t=document.documentElement.clientHeight-170;this.tableHeight=t<400?400:t,this.http.post("/api/Sys_Dictionary/GetBuilderDictionary",{},!0).then((function(t){var l=e.layOutOptins.columns.find((function(e){return"dropNo"==e.field}));if(l){for(var n=[{key:"",value:""}],a=0;a<t.length;a++)n.push({key:t[a],value:t[a]});l.bind.data=n}})),ee.form.fields.vuePath=this.getVuePath("vuePath"),ee.form.fields.appPath=this.getVuePath("appPath"),this.http.post("/api/builder/GetTableTree",{},!1).then((function(t){if(e.tree=JSON.parse(t.list),!t.nameSpace)return e.$message.error("未获取后台项目类库所在命名空间,请确认目录或调试Sys_TableInfoService类GetTableTree方法");for(var l=JSON.parse(t.nameSpace),n=[],a=0;a<l.length;a++)n.push({key:l[a],value:l[a]});e.layOutOptins.options.forEach((function(e){e.forEach((function(e){var t;"namespace"==e.field&&(t=e.data).push.apply(t,n)}))})),e.addOptions.forEach((function(e){e.forEach((function(e){var t;"namespace"==e.field&&(t=e.data).push.apply(t,n)}))}))}))}},ce=(l("03cc"),l("d959")),re=l.n(ce);const de=re()(ie,[["render",W],["__scopeId","data-v-2a9809f8"]]);t["default"]=de},c5e6:function(e,t,l){"use strict";l.r(t);var n=l("7a23"),a={class:"v-header"},o={class:"v-left-text"},i={class:"content"},c={class:"v-right-content"};function r(e,t,l,r,d,u){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[Object(n["createElementVNode"])("div",o,[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(l.title||l.text),1)]),Object(n["createElementVNode"])("div",i,[Object(n["renderSlot"])(e.$slots,"content",{},void 0,!0)]),Object(n["createElementVNode"])("div",c,[Object(n["renderSlot"])(e.$slots,"default",{},void 0,!0)])])}var d={props:{icon:{type:String,default:""},title:{type:String,default:""},text:{type:String,default:"未定义名称"}}},u=(l("2c2e"),l("d959")),s=l.n(u);const f=s()(d,[["render",r],["__scopeId","data-v-236692e0"]]);t["default"]=f},d0df:function(e,t,l){},e86e:function(e,t,l){}}]);