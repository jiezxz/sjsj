/*
 *Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,此处任何更改都可能导致被代码生成器覆盖
 *所有业务编写全部应在Partial文件夹下dataCollection_staffService与IdataCollection_staffService中编写
 */
using DataCollection.IRepositories;
using DataCollection.IServices;
using VOL.Core.BaseProvider;
using VOL.Core.Extensions.AutofacManager;
using VOL.Entity.DomainModels;

namespace DataCollection.Services
{
    public partial class dataCollection_staffService : ServiceBase<dataCollection_staff, IdataCollection_staffRepository>
    , IdataCollection_staffService, IDependency
    {
    public dataCollection_staffService(IdataCollection_staffRepository repository)
    : base(repository)
    {
    Init(repository);
    }
    public static IdataCollection_staffService Instance
    {
      get { return AutofacContainerModule.GetService<IdataCollection_staffService>(); } }
    }
 }
