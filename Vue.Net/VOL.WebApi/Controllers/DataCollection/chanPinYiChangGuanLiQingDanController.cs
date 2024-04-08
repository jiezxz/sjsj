/*
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *如果要增加方法请在当前目录下Partial文件夹chanPinYiChangGuanLiQingDanController编写
 */
using Microsoft.AspNetCore.Mvc;
using VOL.Core.Controllers.Basic;
using VOL.Entity.AttributeManager;
using DataCollection.IServices;
namespace DataCollection.Controllers
{
    [Route("api/chanPinYiChangGuanLiQingDan")]
    [PermissionTable(Name = "chanPinYiChangGuanLiQingDan")]
    public partial class chanPinYiChangGuanLiQingDanController : ApiBaseController<IchanPinYiChangGuanLiQingDanService>
    {
        public chanPinYiChangGuanLiQingDanController(IchanPinYiChangGuanLiQingDanService service)
        : base(service)
        {
        }
    }
}

