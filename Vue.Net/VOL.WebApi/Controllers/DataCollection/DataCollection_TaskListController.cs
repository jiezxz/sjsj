/*
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *如果要增加方法请在当前目录下Partial文件夹DataCollection_TaskListController编写
 */
using Microsoft.AspNetCore.Mvc;
using VOL.Core.Controllers.Basic;
using VOL.Entity.AttributeManager;
using DataCollection.IServices;
namespace DataCollection.Controllers
{
    [Route("api/DataCollection_TaskList")]
    [PermissionTable(Name = "DataCollection_TaskList")]
    public partial class DataCollection_TaskListController : ApiBaseController<IDataCollection_TaskListService>
    {
        public DataCollection_TaskListController(IDataCollection_TaskListService service)
        : base(service)
        {
        }
    }
}

