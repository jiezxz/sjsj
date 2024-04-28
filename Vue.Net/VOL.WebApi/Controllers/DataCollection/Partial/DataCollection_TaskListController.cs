/*
 *接口编写处...
*如果接口需要做Action的权限验证，请在Action上使用属性
*如: [ApiActionPermission("DataCollection_TaskList",Enums.ActionPermissionOptions.Search)]
 */
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Http;
using VOL.Entity.DomainModels;
using DataCollection.IServices;
using VOL.Core.Filters;
using Microsoft.AspNetCore.Authorization;

namespace DataCollection.Controllers
{
    public partial class DataCollection_TaskListController
    {
        private readonly IDataCollection_TaskListService _service;//访问业务代码
        private readonly IHttpContextAccessor _httpContextAccessor;

        [ActivatorUtilitiesConstructor]
        public DataCollection_TaskListController(
            IDataCollection_TaskListService service,
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
            return base.GetPageData(loadData);

        }
    }
}
