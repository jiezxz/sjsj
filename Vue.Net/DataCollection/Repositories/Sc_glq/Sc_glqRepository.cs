/*
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *Repository提供数据库操作，如果要增加数据库操作请在当前目录下Partial文件夹Sc_glqRepository编写代码
 */
using DataCollection.IRepositories;
using VOL.Core.BaseProvider;
using VOL.Core.EFDbContext;
using VOL.Core.Extensions.AutofacManager;
using VOL.Entity.DomainModels;

namespace DataCollection.Repositories
{
    public partial class Sc_glqRepository : RepositoryBase<Sc_glq> , ISc_glqRepository
    {
    public Sc_glqRepository(VOLContext dbContext)
    : base(dbContext)
    {

    }
    public static ISc_glqRepository Instance
    {
      get {  return AutofacContainerModule.GetService<ISc_glqRepository>(); } }
    }
}
