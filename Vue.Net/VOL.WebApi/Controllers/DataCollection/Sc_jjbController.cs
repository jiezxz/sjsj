/*
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *如果要增加方法请在当前目录下Partial文件夹Sc_jjbController编写
 */
using Microsoft.AspNetCore.Mvc;
using VOL.Core.Controllers.Basic;
using VOL.Entity.AttributeManager;
using DataCollection.IServices;
namespace DataCollection.Controllers
{
    [Route("api/Sc_jjb")]
    [PermissionTable(Name = "Sc_jjb")]
    public partial class Sc_jjbController : ApiBaseController<ISc_jjbService>
    {
        public Sc_jjbController(ISc_jjbService service)
        : base(service)
        {
        }
    }
}

