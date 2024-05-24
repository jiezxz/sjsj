
let viewgird = [
  {
    path: '/Sys_Log',
    name: 'sys_Log',
    component: () => import('@/views/system/Sys_Log.vue')
  },
  {
    path: '/Sys_User',
    name: 'Sys_User',
    component: () => import('@/views/system/Sys_User.vue')
  },
  {
    path: '/permission',
    name: 'permission',
    component: () => import('@/views/system/Permission.vue')
  },

  {
    path: '/Sys_Dictionary',
    name: 'Sys_Dictionary',
    component: () => import('@/views/system/Sys_Dictionary.vue')
  },
  {
    path: '/Sys_Role',
    name: 'Sys_Role',
    component: () => import('@/views/system/Sys_Role.vue')
  }, {
    path: '/Sys_Role1',
    name: 'Sys_Role1',
    component: () => import('@/views/system/Sys_Role1.vue')
  }
  , {
    path: '/Sys_DictionaryList',
    name: 'Sys_DictionaryList',
    component: () => import('@/views/system/Sys_DictionaryList.vue')
  }, {
    path: '/FormDesignOptions',
    name: 'FormDesignOptions',
    component: () => import('@/views/system/form/FormDesignOptions.vue')
  }, {
    path: '/FormCollectionObject',
    name: 'FormCollectionObject',
    component: () => import('@/views/system/form/FormCollectionObject.vue')
  }, {
    path: '/Sys_WorkFlow',
    name: 'Sys_WorkFlow',
    component: () => import('@/views/system/flow/Sys_WorkFlow.vue')
  }, {
    path: '/Sys_WorkFlowTable',
    name: 'Sys_WorkFlowTable',
    component: () => import('@/views/system/flow/Sys_WorkFlowTable.vue')
  }, {
    path: '/Sys_QuartzOptions',
    name: 'Sys_QuartzOptions',
    component: () => import('@/views/system/quartz/Sys_QuartzOptions.vue')
  }, {
    path: '/Sys_QuartzLog',
    name: 'Sys_QuartzLog',
    component: () => import('@/views/system/quartz/Sys_QuartzLog.vue')
  }, {
    path: '/Sys_Department',
    name: 'Sys_Department',
    component: () => import('@/views/system/system/Sys_Department.vue')
  }    ,{
        path: '/chanPinYiChangGuanLiQingDan',
        name: 'chanPinYiChangGuanLiQingDan',
        component: () => import('@/views/datacollection/chanpinyichangguanliqingdan/chanPinYiChangGuanLiQingDan.vue')
    }    ,{
        path: '/dataCollection_bianGengGuanLi',
        name: 'dataCollection_bianGengGuanLi',
        component: () => import('@/views/datacollection/datacollection_biangengguanli/dataCollection_bianGengGuanLi.vue')
    }    ,{
        path: '/dataCollection_cjkb',
        name: 'dataCollection_cjkb',
        component: () => import('@/views/datacollection/datacollection_cjkb/dataCollection_cjkb.vue')
    }    ,{
        path: '/dataCollection_staff',
        name: 'dataCollection_staff',
        component: () => import('@/views/datacollection/datacollection_staff/dataCollection_staff.vue')
    }    ,{
        path: '/dataCollection_tjyc',
        name: 'dataCollection_tjyc',
        component: () => import('@/views/datacollection/datacollection_tjyc/dataCollection_tjyc.vue')
    }    ,{
        path: '/dataCollection_9SInspection',
        name: 'dataCollection_9SInspection',
        component: () => import('@/views/datacollection/datacollection_9sinspection/dataCollection_9SInspection.vue')
    }    ,{
        path: '/dataCollection_AppVersion',
        name: 'dataCollection_AppVersion',
        component: () => import('@/views/datacollection/datacollection_appversion/dataCollection_AppVersion.vue')
    }    ,{
        path: '/DataCollection_TaskList',
        name: 'DataCollection_TaskList',
        component: () => import('@/views/datacollection/datacollection_tasklist/DataCollection_TaskList.vue')
    }    ,{
        path: '/dataCollection_IPQCInspection',
        name: 'dataCollection_IPQCInspection',
        component: () => import('@/views/datacollection/datacollection_ipqcinspection/dataCollection_IPQCInspection.vue')
    }]

export default viewgird
