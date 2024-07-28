/*
 *Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,此处任何更改都可能导致被代码生成器覆盖
 *所有业务编写全部应在Partial文件夹下Sc_jjbService与ISc_jjbService中编写
 */
using DataCollection.IRepositories;
using DataCollection.IServices;
using VOL.Core.BaseProvider;
using VOL.Core.Extensions.AutofacManager;
using VOL.Entity.DomainModels;

namespace DataCollection.Services
{
    public partial class Sc_jjbService : ServiceBase<Sc_jjb, ISc_jjbRepository>
    , ISc_jjbService, IDependency
    {
    public Sc_jjbService(ISc_jjbRepository repository)
    : base(repository)
    {
    Init(repository);
    }
    public static ISc_jjbService Instance
    {
      get { return AutofacContainerModule.GetService<ISc_jjbService>(); } }
    }
 }
