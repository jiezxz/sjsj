/*
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *如果要增加方法请在当前目录下Partial文件夹Sc_glqController编写
 */
using Microsoft.AspNetCore.Mvc;
using VOL.Core.Controllers.Basic;
using VOL.Entity.AttributeManager;
using DataCollection.IServices;
namespace DataCollection.Controllers
{
    [Route("api/Sc_glq")]
    [PermissionTable(Name = "Sc_glq")]
    public partial class Sc_glqController : ApiBaseController<ISc_glqService>
    {
        public Sc_glqController(ISc_glqService service)
        : base(service)
        {
        }
    }
}

