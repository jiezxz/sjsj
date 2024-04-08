/*
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *如果要增加方法请在当前目录下Partial文件夹dataCollection_bianGengGuanLiController编写
 */
using Microsoft.AspNetCore.Mvc;
using VOL.Core.Controllers.Basic;
using VOL.Entity.AttributeManager;
using DataCollection.IServices;
namespace DataCollection.Controllers
{
    [Route("api/dataCollection_bianGengGuanLi")]
    [PermissionTable(Name = "dataCollection_bianGengGuanLi")]
    public partial class dataCollection_bianGengGuanLiController : ApiBaseController<IdataCollection_bianGengGuanLiService>
    {
        public dataCollection_bianGengGuanLiController(IdataCollection_bianGengGuanLiService service)
        : base(service)
        {
        }
    }
}

