/*
 *接口编写处...
*如果接口需要做Action的权限验证，请在Action上使用属性
*如: [ApiActionPermission("dataCollection_bianGengGuanLi",Enums.ActionPermissionOptions.Search)]
 */
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Http;
using VOL.Entity.DomainModels;
using DataCollection.IServices;
using VOL.Core.ManageUser;

namespace DataCollection.Controllers
{
    public partial class dataCollection_bianGengGuanLiController
    {
        private readonly IdataCollection_bianGengGuanLiService _service;//访问业务代码
        private readonly IHttpContextAccessor _httpContextAccessor;
        [ActivatorUtilitiesConstructor]
        public dataCollection_bianGengGuanLiController(
            IdataCollection_bianGengGuanLiService service,
            IHttpContextAccessor httpContextAccessor
        )
        : base(service)
        {
            _service = service;
            _httpContextAccessor = httpContextAccessor;
        }
        /// <summary>
        /// 新增操作（权限重写同上）
        /// </summary>
        /// <param name="saveModel"></param>
        /// <returns></returns>
        //[ApiActionPermission("SellOrder", ActionPermissionOptions.Add)]
        [HttpPost, Route("Add")]
        public override ActionResult Add([FromBody] SaveModel saveModel)
        {
            saveModel.MainData.Add("sqr", UserContext.Current.UserInfo.UserTrueName);
            return base.Add(saveModel);
        }
        /// <summary>
        ///编译操作（权限重写同上）
        /// </summary>
        /// <param name="saveModel"></param>
        /// <returns></returns>
       // [ApiActionPermission(ActionPermissionOptions.Update)]
        [HttpPost, Route("Update")]
        public override ActionResult Update([FromBody] SaveModel saveModel)
        {
            return base.Update(saveModel);
        }



    }
}
