/*
 *所有关于dataCollection_tjyc类的业务代码应在此处编写
*可使用repository.调用常用方法，获取EF/Dapper等信息
*如果需要事务请使用repository.DbContextBeginTransaction
*也可使用DBServerProvider.手动获取数据库相关信息
*用户信息、权限、角色等使用UserContext.Current操作
*dataCollection_tjycService对增、删、改查、导入、导出、审核业务代码扩展参照ServiceFunFilter
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

namespace DataCollection.Services
{
    public partial class dataCollection_tjycService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IdataCollection_tjycRepository _repository;//访问数据库

        [ActivatorUtilitiesConstructor]
        public dataCollection_tjycService(
            IdataCollection_tjycRepository dbRepository,
            IHttpContextAccessor httpContextAccessor
            )
        : base(dbRepository)
        {
            _httpContextAccessor = httpContextAccessor;
            _repository = dbRepository;
            //多租户会用到这init代码，其他情况可以不用
            //base.Init(dbRepository);
        }

        public object yctjmrhz(dataCollection_tjyc t)
        {

            string sql = @"   select
CONVERT(VARCHAR(100), riQi, 23) riQi, scx, banCi,
zcscsc = 12 - convert(decimal(6, 2), convert(decimal(6, 2), datediff(minute, tjsj, sjsj)) / 60), --正常生产时长 = 12小时 - 停机时长
tjsc = convert(decimal(6, 2), convert(decimal(6, 2), datediff(minute, tjsj, sjsj)) / 60), --停机时长 = 收卷时间 - 停机时间

qjsc = convert(decimal(6, 2), convert(decimal(6, 2), datediff(minute, tjsj, qjwc)) / 60), --清洁时长 = 等于清洁完成 - 停机时间
cmsc = convert(decimal(6, 2), convert(decimal(6, 2), datediff(minute, qjwc, cmwc)) / 60), --穿膜时长 = 穿膜完成 - 清洁完成

tssc = convert(decimal(6, 2), convert(decimal(6, 2), datediff(minute, cmwc, tswc)) / 60),--提速时长 = 提速完成 - 穿膜完成
tiaoSSC = convert(decimal(6, 2), convert(decimal(6, 2), datediff(minute,tswc , tisoShiWC)) / 60),--调试时长 = 调试完成 - 提速完成
sbwxsj = convert(decimal(6, 2), convert(decimal(6, 2), datediff(minute, tzwxsj, wxzcsj)) / 60),--设备维修时间 = 设备维修正常时间 - 通知设备维修时间
zdyc,
ycsj2h = (case when convert(decimal(6, 2),  convert(decimal(6, 2), datediff(minute, tjsj, sjsj)) / 60)> 2
then convert(decimal(6, 2),  convert(decimal(6, 2), datediff(minute, tjsj, sjsj)) / 60)
else null end
),--停机时长大于2H
cyry--参与人员
from[dbo].[dataCollection_tjyc]


            where
CONVERT(varchar(7), riQi, 120) = CONVERT(varchar(7), CONVERT(DATE, '" + t.riQi+@"', 120), 120)

order by riQi,scx";
          
            return   repository.DapperContext.QueryList<tj1Model>(sql, new { });
        }

        /// <summary>
        /// 统计1输出model
        /// </summary>
        public class tj1Model {
            public string riQi { get; set; }
            public string scx { get; set; }
            public string banCi { get; set; }
            public double zcscsc { get; set; }
            public double tjsc { get; set; }
            public double qjsc { get; set; }
            public double cmsc { get; set; }
            public double tssc { get; set; }
            public double tiaoSSC { get; set; }
            public double sbwxsj { get; set; }
            public string zdyc { get; set; }
            public double ycsj2h { get; set; }

            public string cyry { get; set; }
        }
    }
}
