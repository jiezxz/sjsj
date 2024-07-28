/*
 *所有关于Sc_glq类的业务代码应在此处编写
*可使用repository.调用常用方法，获取EF/Dapper等信息
*如果需要事务请使用repository.DbContextBeginTransaction
*也可使用DBServerProvider.手动获取数据库相关信息
*用户信息、权限、角色等使用UserContext.Current操作
*Sc_glqService对增、删、改查、导入、导出、审核业务代码扩展参照ServiceFunFilter
*/
using VOL.Core.BaseProvider;
using VOL.Core.Extensions.AutofacManager;
using VOL.Entity.DomainModels;
using System.Linq;
using VOL.Core.Utilities;
using System.Linq.Expressions;
using VOL.Core.Extensions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Http;
using DataCollection.IRepositories;
using System;

namespace DataCollection.Services
{
    public partial class Sc_glqService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly ISc_glqRepository _repository;//访问数据库

        [ActivatorUtilitiesConstructor]
        public Sc_glqService(
            ISc_glqRepository dbRepository,
            IHttpContextAccessor httpContextAccessor
            )
        : base(dbRepository)
        {
            _httpContextAccessor = httpContextAccessor;
            _repository = dbRepository;
            //多租户会用到这init代码，其他情况可以不用
            //base.Init(dbRepository);
        }
    WebResponseContent webResponse = new WebResponseContent();
    /// <summary>
    /// 新建
    /// </summary>
    /// <param name="Add"></param>
    /// <returns></returns>
    public override WebResponseContent Add(SaveModel saveDataModel)
    {

      // 在保存数据库前的操作，所有数据都验证通过了，这一步执行完就执行数据库保存
      AddOnExecuting = (Sc_glq m, object list) =>
      {
        m.DocumentNumber = GetOrderNo("");

        return webResponse.OK();
      };

      return base.Add(saveDataModel);
    }


    public string GetOrderNo(string gongChang)
    {
      string rule = "";
     
        rule = "CQEJ-E005-";
     
  
      lock (this)
      {
        //lock/redis自增
        DateTime dateNow = (DateTime)DateTime.Now.ToString("yyyy-MM-dd").GetDateTime();//查询当天最新的单号string orderiiomrepository,FindAsIQueryable(x>x.CreateDate > dateNow).0rderByDescending(x=>x.0rderNo).Select(s =>s.0rderNo).FirstorDefault():string rule = $"D lateTime, Nor,ToString("yyyy!!dd")}"if(string,IsMu110rEmpty(orderNo))
        rule += dateNow.ToString("yyMMdd") + "-";
        string DocumentNumber = repository.FindAsIQueryable(x => x.CreateDate > dateNow)
            .OrderByDescending(x => x.DocumentNumber)
            .Select(s => s.DocumentNumber)
            .FirstOrDefault();
        if (string.IsNullOrEmpty(DocumentNumber))
        {
          rule += "001";
        }
        else
        {
          rule += (DocumentNumber.Substring(DocumentNumber.Length - 3).GetInt() + 1).ToString("000");
        }
      }

      return rule;
    }
  }
}