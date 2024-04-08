/*
 *接口编写处...
*如果接口需要做Action的权限验证，请在Action上使用属性
*如: [ApiActionPermission("dataCollection_tjyc",Enums.ActionPermissionOptions.Search)]
 */
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Http;
using VOL.Entity.DomainModels;
using DataCollection.IServices;
using DataCollection.Services;
using Microsoft.AspNetCore.Authorization;

namespace DataCollection.Controllers
{
    public partial class dataCollection_tjycController
    {
        private readonly IdataCollection_tjycService _service;//访问业务代码
        private readonly dataCollection_tjycService _Service;//访问业务代码
        private readonly IHttpContextAccessor _httpContextAccessor;

        [ActivatorUtilitiesConstructor]
        public dataCollection_tjycController(
            IdataCollection_tjycService service,
            IHttpContextAccessor httpContextAccessor,
           dataCollection_tjycService Service
        )
        : base(service)
        {
            _Service = Service;
            _service = service;
            _httpContextAccessor = httpContextAccessor;
        }
        //后台App_ExpertController中添加代码，返回table数据
        [AllowAnonymous]
        [HttpPost, Route("yctjmrhz")]
        public IActionResult yctjmrhz([FromBody] dataCollection_tjyc t)
        {

            return Json(_Service.yctjmrhz(t));
        }
     
    }
}
