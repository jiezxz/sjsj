/*
 *所有关于DataCollection_TaskList类的业务代码应在此处编写
*可使用repository.调用常用方法，获取EF/Dapper等信息
*如果需要事务请使用repository.DbContextBeginTransaction
*也可使用DBServerProvider.手动获取数据库相关信息
*用户信息、权限、角色等使用UserContext.Current操作
*DataCollection_TaskListService对增、删、改查、导入、导出、审核业务代码扩展参照ServiceFunFilter
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
using System.Collections.Generic;

namespace DataCollection.Services
{
    public partial class DataCollection_TaskListService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IDataCollection_TaskListRepository _repository;//访问数据库

        [ActivatorUtilitiesConstructor]
        public DataCollection_TaskListService(
            IDataCollection_TaskListRepository dbRepository,
            IHttpContextAccessor httpContextAccessor
            )
        : base(dbRepository)
        {
            _httpContextAccessor = httpContextAccessor;
            _repository = dbRepository;
            //多租户会用到这init代码，其他情况可以不用
            //base.Init(dbRepository);
        }

        /// <summary>
        /// 重写查询
        /// </summary>
        /// <param name="pageData"></param>
        /// <returns></returns>
        public override PageGridData<DataCollection_TaskList> GetPageData(PageDataOptions options)
        {
            GetPageDataOnExecuted = (PageGridData<DataCollection_TaskList> grid) =>
            {
                //可对查询的结果的数据操作
                //List<DataCollection_TaskList> sellOrders = grid.rows;
                //foreach (var item in grid.rows)
                //{
                //    item.IsItOverdue = "0";
                //    if (item.EndTime<item.CompletionTime)
                //    {
                //        item.IsItOverdue = "1";
                //    }
                //}
            };
            return base.GetPageData(options);
        }

    }
}
