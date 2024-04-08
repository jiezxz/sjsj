/*
 *Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,此处任何更改都可能导致被代码生成器覆盖
 *所有业务编写全部应在Partial文件夹下dataCollection_cjkbService与IdataCollection_cjkbService中编写
 */
using DataCollection.IRepositories;
using DataCollection.IServices;
using VOL.Core.BaseProvider;
using VOL.Core.Extensions.AutofacManager;
using VOL.Entity.DomainModels;

namespace DataCollection.Services
{
    public partial class dataCollection_cjkbService : ServiceBase<dataCollection_cjkb, IdataCollection_cjkbRepository>
    , IdataCollection_cjkbService, IDependency
    {
    public dataCollection_cjkbService(IdataCollection_cjkbRepository repository)
    : base(repository)
    {
    Init(repository);
    }
    public static IdataCollection_cjkbService Instance
    {
      get { return AutofacContainerModule.GetService<IdataCollection_cjkbService>(); } }
    }
 }
