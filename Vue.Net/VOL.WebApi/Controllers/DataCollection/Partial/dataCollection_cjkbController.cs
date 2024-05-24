/*
 *接口编写处...
*如果接口需要做Action的权限验证，请在Action上使用属性
*如: [ApiActionPermission("dataCollection_cjkb",Enums.ActionPermissionOptions.Search)]
 */
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Http;
using VOL.Entity.DomainModels;
using DataCollection.IServices;
using Microsoft.AspNetCore.Authorization;
using VOL.Core.Filters;
using VOL.Core.Utilities;

namespace DataCollection.Controllers
{
    public partial class dataCollection_cjkbController
    {
        private readonly IdataCollection_cjkbService _service;//访问业务代码
        private readonly IHttpContextAccessor _httpContextAccessor;

        [ActivatorUtilitiesConstructor]
        public dataCollection_cjkbController(
            IdataCollection_cjkbService service,
            IHttpContextAccessor httpContextAccessor
        )
        : base(service)
        {
            _service = service;
            _httpContextAccessor = httpContextAccessor;
        }

        [ApiActionPermission()]
        [HttpPost, Route("GetPageData"), AllowAnonymous]
        public override ActionResult GetPageData([FromBody] PageDataOptions loadData)
        {
            //string[] adds = new string[1] { "741744490@qq.com" };
            //MailHelper.Send("测试", "测试", adds);
            return base.GetPageData(loadData);
        
        }

      
    }
}
