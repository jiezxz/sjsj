/*
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *Repository提供数据库操作，如果要增加数据库操作请在当前目录下Partial文件夹DataCollection_TaskListRepository编写代码
 */
using VOL.DataCollection.IRepositories;
using VOL.Core.BaseProvider;
using VOL.Core.EFDbContext;
using VOL.Core.Extensions.AutofacManager;
using VOL.Entity.DomainModels;

namespace VOL.DataCollection.Repositories
{
    public partial class DataCollection_TaskListRepository : RepositoryBase<DataCollection_TaskList> , IDataCollection_TaskListRepository
    {
    public DataCollection_TaskListRepository(VOLContext dbContext)
    : base(dbContext)
    {

    }
    public static IDataCollection_TaskListRepository Instance
    {
      get {  return AutofacContainerModule.GetService<IDataCollection_TaskListRepository>(); } }
    }
}
