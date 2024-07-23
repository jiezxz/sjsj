/*
 *Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,此处任何更改都可能导致被代码生成器覆盖
 *所有业务编写全部应在Partial文件夹下Sc_glqService与ISc_glqService中编写
 */
using DataCollection.IRepositories;
using DataCollection.IServices;
using VOL.Core.BaseProvider;
using VOL.Core.Extensions.AutofacManager;
using VOL.Entity.DomainModels;

namespace DataCollection.Services
{
    public partial class Sc_glqService : ServiceBase<Sc_glq, ISc_glqRepository>
    , ISc_glqService, IDependency
    {
    public Sc_glqService(ISc_glqRepository repository)
    : base(repository)
    {
    Init(repository);
    }
    public static ISc_glqService Instance
    {
      get { return AutofacContainerModule.GetService<ISc_glqService>(); } }
    }
 }
