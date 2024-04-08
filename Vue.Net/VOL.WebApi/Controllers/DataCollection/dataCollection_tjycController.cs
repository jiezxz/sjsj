/*
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *如果要增加方法请在当前目录下Partial文件夹dataCollection_tjycController编写
 */
using Microsoft.AspNetCore.Mvc;
using VOL.Core.Controllers.Basic;
using VOL.Entity.AttributeManager;
using DataCollection.IServices;
namespace DataCollection.Controllers
{
    [Route("api/dataCollection_tjyc")]
    [PermissionTable(Name = "dataCollection_tjyc")]
    public partial class dataCollection_tjycController : ApiBaseController<IdataCollection_tjycService>
    {
        public dataCollection_tjycController(IdataCollection_tjycService service)
        : base(service)
        {
        }
    }
}

