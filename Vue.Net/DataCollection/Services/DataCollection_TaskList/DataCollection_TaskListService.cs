/*
 *Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,此处任何更改都可能导致被代码生成器覆盖
 *所有业务编写全部应在Partial文件夹下DataCollection_TaskListService与IDataCollection_TaskListService中编写
 */
using DataCollection.IRepositories;
using DataCollection.IServices;
using VOL.Core.BaseProvider;
using VOL.Core.Extensions.AutofacManager;
using VOL.Entity.DomainModels;

namespace DataCollection.Services
{
    public partial class DataCollection_TaskListService : ServiceBase<DataCollection_TaskList, IDataCollection_TaskListRepository>
    , IDataCollection_TaskListService, IDependency
    {
    public DataCollection_TaskListService(IDataCollection_TaskListRepository repository)
    : base(repository)
    {
    Init(repository);
    }
    public static IDataCollection_TaskListService Instance
    {
      get { return AutofacContainerModule.GetService<IDataCollection_TaskListService>(); } }
    }
 }
