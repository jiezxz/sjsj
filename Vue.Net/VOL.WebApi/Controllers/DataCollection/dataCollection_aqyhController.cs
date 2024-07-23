/*
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *如果要增加方法请在当前目录下Partial文件夹dataCollection_aqyhController编写
 */
using Microsoft.AspNetCore.Mvc;
using VOL.Core.Controllers.Basic;
using VOL.Entity.AttributeManager;
using DataCollection.IServices;
namespace DataCollection.Controllers
{
    [Route("api/dataCollection_aqyh")]
    [PermissionTable(Name = "dataCollection_aqyh")]
    public partial class dataCollection_aqyhController : ApiBaseController<IdataCollection_aqyhService>
    {
        public dataCollection_aqyhController(IdataCollection_aqyhService service)
        : base(service)
        {
        }
    }
}

