/*****************************************************************************************
 **  Author:jxx 2022
 **  QQ:283591387
 **完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
 **常用示例见：http://v2.volcore.xyz/document/vueDev
 **后台操作见：http://v2.volcore.xyz/document/netCoreDev
 *****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import gridHeader from '../../../components/editor/App_ExpertGridHeader.vue'
let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: gridHeader,
    gridBody: '',
    gridFooter: '',
    //新建、编辑弹出框扩展组件
    modelHeader: '',
    modelBody: '',
    modelFooter: ''
  },
  tableAction: '', //指定某张表的权限(这里填写表名,默认不用填写)
  buttons: {
    view: [],
    box: [],
    detail: []
  }, //扩展的按钮
  methods: {
    //下面这些方法可以保留也可以删除
    onInit() { //框架初始化配置前，
      //示例：在按钮的最前面添加一个按钮
      //   this.buttons.unshift({  //也可以用push或者splice方法来修改buttons数组
      //     name: '按钮', //按钮名称
      //     icon: 'el-icon-document', //按钮图标vue2版本见iview文档icon，vue3版本见element ui文档icon(注意不是element puls文档)
      //     type: 'primary', //按钮样式vue2版本见iview文档button，vue3版本见element ui文档button
      //     onClick: function () {
      //       this.$Message.success('点击了按钮');
      //     }
      //   });

      //示例：设置修改新建、编辑弹出框字段标签的长度
      // this.boxOptions.labelWidth = 150;
      this.editFormOptions.splice(0, 0, [{
        colSize: 12,
        render: (h) => {
          return ( <
            div style = "display:flex;margin-bottom:-4px;line-height:20px;padding-bottom:2px;border-bottom:1px solid #e4e4e4;" >
            <
            div style = "height: 14px; background: #1794f8; width: 4px; border-radius: 10px;margin-top: 2px;" > < /div> <
            div style = "padding-left: 6px; font-weight: bold; font-size: 13px;" >
            班组信息 <
            /div> < /
            div >
          );
        }
      }]);
      this.editFormOptions.splice(4, 0, [{
        colSize: 12,
        render: (h) => {
          return ( <
            div style = "display:flex;margin-bottom:-4px;line-height:20px;padding-bottom:2px;border-bottom:1px solid #e4e4e4;" >
            <
            div style = "height: 14px; background: #1794f8; width: 4px; border-radius: 10px;margin-top: 2px;" > < /div> <
            div style = "padding-left: 6px; font-weight: bold; font-size: 13px;" >
            产线信息1 <
            /div> < /
            div >
          );
        }
      }]);
      this.editFormOptions.splice(9, 0, [{
        colSize: 12,
        render: (h) => {
          return ( <
            div style = "display:flex;margin-bottom:-4px;line-height:20px;padding-bottom:2px;border-bottom:1px solid #e4e4e4;" >
            <
            div style = "height: 14px; background: #1794f8; width: 4px; border-radius: 10px;margin-top: 2px;" > < /div> <
            div style = "padding-left: 6px; font-weight: bold; font-size: 13px;" >
            产线信息2 <
            /div> < /
            div >
          );
        }
      }]);
    },
    onInited() {
      //框架初始化配置后
      //如果要配置明细表,在此方法操作
      //this.detailOptions.columns.forEach(column=>{ });
    },
    searchBefore(param) {
      //界面查询前,可以给param.wheres添加查询参数
      //返回false，则不会执行查询
      return true;
    },
    searchAfter(result) {
      //查询后，result返回的查询数据,可以在显示到表格前处理表格的值
      return true;
    },
    addBefore(formData) {
      //flag 用于判断是否拦截发送 true 不拦截 false
      let flag = false
      //flag1 用于判断是否找到相同班组 做完循环，发现ab不是已有班组，直接新增
      let flag1 = false
      let table = this.$refs.table.$refs.table.data
      table.some((items, index) => {
        //如果是同一产线班别的数据进入判断
        if (items.chanxian === formData.mainData.chanxian && items.chanxianS === formData.mainData.chanxianS && items.banbie === formData.mainData.banbie && items.banbieS === formData.mainData.banbieS) {
          //flag1设置为ture拦截新建
          flag1 = true
          table.some(item => {
            console.log('进入循环', item, formData)
            // if (item.jiaojieren === formData.mainData.jiaojieren) {
            //   console.log('交接人相同')
            //   if (item.jiebanren === formData.mainData.jiebanren) {
            //     console.log('接班人相同')
            if (item.chanxian === formData.mainData.chanxian) {
              console.log('产线相同')
              if (item.chanxianS === formData.mainData.chanxianS) {
                console.log('产线s相同')
                if (item.banbie === formData.mainData.banbie) {
                  console.log('班别相同')
                  if (item.banbieS === formData.mainData.banbieS) {
                    console.log('班别s相同')
                    var dd = new Date(formData.mainData.riqi);
                    //获取用户输入的日期 计算出昨天的日期 去比对是否存在昨天日期的数据
                    console.log("用户输入的日期", formData.mainData.riqi);
                    dd.setDate(dd.getDate() - 1);
                    var y = dd.getFullYear();
                    var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
                    var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
                    let yestoday = y + "-" + m + "-" + d;
                    dd = new Date()
                    var y = dd.getFullYear();
                    var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
                    var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
                    let nowday = y + "-" + m + "-" + d;
                    console.log(yestoday, "+", item.riqi)
                    if (item.riqi === yestoday) {
                      console.log('时间相同')
                      //昨天的数据存在 直接新建
                      flag = true
                      return true
                    } else {
                      console.log('判断不满足')
                      console.log(this.$store.state)
                      if (this.$store.state.userInfo.role_Id === 5 || this.$store.state.userInfo.role_Id === 1) {
                        console.log('主任账号')
                        console.log(this.$refs)
                        /* flag = true
                        return true */
                        this.$refs.gridHeader.state = 1
                        this.$refs.gridHeader.jiebanren = formData.mainData.jiebanren
                        this.$refs.gridHeader.jiaojieren = formData.mainData.jiaojieren
                        this.$refs.gridHeader.form = formData
                        this.$refs.gridHeader.date = yestoday
                        this.$refs.gridHeader.open()
                      } else {
                        this.$refs.gridHeader.state = 0
                        this.$refs.gridHeader.open()
                      }
                      //   }
                      // }
                    }
                  }
                }
              }
            }
          })
        }

      })
      if (!flag1) {
        flag = true
      }
      return flag
      //新建保存前formData为对象，包括明细表，可以给给表单设置值，自己输出看formData的值
    },
    updateBefore(formData) {

      //编辑保存前formData为对象，包括明细表、删除行的Id
      return true;
    },
    rowClick({
      row,
      column,
      event
    }) {
      //查询界面点击行事件
      // this.$refs.table.$refs.table.toggleRowSelection(row); //单击行时选中当前行;
    },
    modelOpenAfter(row) {
      //点击编辑、新建按钮弹出框后，可以在此处写逻辑，如，从后台获取数据
      //(1)判断是编辑还是新建操作： this.currentAction=='Add';
      //(2)给弹出框设置默认值
      //(3)this.editFormFields.字段='xxx';
      //如果需要给下拉框设置默认值，请遍历this.editFormOptions找到字段配置对应data属性的key值
      //看不懂就把输出看：console.log(this.editFormOptions)

      //先给所有字段加上禁止编辑
      this.editFormOptions.forEach(item => {
        item.forEach(x => {
          x.disabled = true
        })
      })
      //当前是否为新建
      let isAdd = this.currentAction == 'Add';
      //新建时设置除了文件编号都可以编辑
      if (isAdd) {
        this.editFormOptions.forEach(item => {
          item.forEach(x => {
            x.disabled = false
            if (x.field == 'DocumentNumber') {
              x.disabled = true
            }
          })
        })
      }
    }
  }
};
export default extension;
