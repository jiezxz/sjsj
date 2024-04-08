/*
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *如果要增加方法请在当前目录下Partial文件夹dataCollection_9SInspectionController编写
 */
using Microsoft.AspNetCore.Mvc;
using VOL.Core.Controllers.Basic;
using VOL.Entity.AttributeManager;
using DataCollection.IServices;
namespace DataCollection.Controllers
{
    [Route("api/dataCollection_9SInspection")]
    [PermissionTable(Name = "dataCollection_9SInspection")]
    public partial class dataCollection_9SInspectionController : ApiBaseController<IdataCollection_9SInspectionService>
    {
        public dataCollection_9SInspectionController(IdataCollection_9SInspectionService service)
        : base(service)
        {
        }
    }
}

