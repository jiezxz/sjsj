/*
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *如果要增加方法请在当前目录下Partial文件夹dataCollection_IPQCInspectionController编写
 */
using Microsoft.AspNetCore.Mvc;
using VOL.Core.Controllers.Basic;
using VOL.Entity.AttributeManager;
using DataCollection.IServices;
namespace DataCollection.Controllers
{
    [Route("api/dataCollection_IPQCInspection")]
    [PermissionTable(Name = "dataCollection_IPQCInspection")]
    public partial class dataCollection_IPQCInspectionController : ApiBaseController<IdataCollection_IPQCInspectionService>
    {
        public dataCollection_IPQCInspectionController(IdataCollection_IPQCInspectionService service)
        : base(service)
        {
        }
    }
}

