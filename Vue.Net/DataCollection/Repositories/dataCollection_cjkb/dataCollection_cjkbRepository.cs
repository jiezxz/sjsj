/*
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *Repository提供数据库操作，如果要增加数据库操作请在当前目录下Partial文件夹dataCollection_cjkbRepository编写代码
 */
using DataCollection.IRepositories;
using VOL.Core.BaseProvider;
using VOL.Core.EFDbContext;
using VOL.Core.Extensions.AutofacManager;
using VOL.Entity.DomainModels;

namespace DataCollection.Repositories
{
    public partial class dataCollection_cjkbRepository : RepositoryBase<dataCollection_cjkb> , IdataCollection_cjkbRepository
    {
    public dataCollection_cjkbRepository(VOLContext dbContext)
    : base(dbContext)
    {

    }
    public static IdataCollection_cjkbRepository Instance
    {
      get {  return AutofacContainerModule.GetService<IdataCollection_cjkbRepository>(); } }
    }
}
