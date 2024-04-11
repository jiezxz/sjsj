/*
 *Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,此处任何更改都可能导致被代码生成器覆盖
 *所有业务编写全部应在Partial文件夹下dataCollection_AppVersionService与IdataCollection_AppVersionService中编写
 */
using DataCollection.IRepositories;
using DataCollection.IServices;
using VOL.Core.BaseProvider;
using VOL.Core.Extensions.AutofacManager;
using VOL.Entity.DomainModels;

namespace DataCollection.Services
{
    public partial class dataCollection_AppVersionService : ServiceBase<dataCollection_AppVersion, IdataCollection_AppVersionRepository>
    , IdataCollection_AppVersionService, IDependency
    {
    public dataCollection_AppVersionService(IdataCollection_AppVersionRepository repository)
    : base(repository)
    {
    Init(repository);
    }
    public static IdataCollection_AppVersionService Instance
    {
      get { return AutofacContainerModule.GetService<IdataCollection_AppVersionService>(); } }
    }
 }
