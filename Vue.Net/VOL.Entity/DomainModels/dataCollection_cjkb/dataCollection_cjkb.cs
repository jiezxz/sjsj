using Newtonsoft.Json;
/*
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *如果数据库字段发生变化，请在代码生器重新生成此Model
 */
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VOL.Entity.SystemModels;

namespace VOL.Entity.DomainModels
{
    [Entity(TableCnName = "车间看板",TableName = "dataCollection_cjkb")]
    public partial class dataCollection_cjkb:BaseEntity
    {
        /// <summary>
       ///工厂
       /// </summary>
       [Display(Name ="工厂")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string gongChang { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Key]
       [Display(Name ="id")]
       [Column(TypeName="uniqueidentifier")]
       [Editable(true)]
       [Required(AllowEmptyStrings=false)]
       public Guid id { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="CreateID")]
       [JsonIgnore]
       [Column(TypeName="int")]
       [Editable(true)]
       public int? CreateID { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="ModifyID")]
       [JsonIgnore]
       [Column(TypeName="int")]
       [Editable(true)]
       public int? ModifyID { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="Modifier")]
       [MaxLength(255)]
       [JsonIgnore]
       [Column(TypeName="nvarchar(255)")]
       [Editable(true)]
       public string Modifier { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="ModifyDate")]
       [JsonIgnore]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? ModifyDate { get; set; }

       /// <summary>
       ///生产线
       /// </summary>
       [Display(Name ="生产线")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string shengChanXian { get; set; }

       /// <summary>
       ///订单号
       /// </summary>
       [Display(Name ="订单号")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string dingDanHao { get; set; }

       /// <summary>
       ///规格
       /// </summary>
       [Display(Name ="规格")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string guiGe { get; set; }

       /// <summary>
       ///今日出勤人数
       /// </summary>
       [Display(Name ="今日出勤人数")]
       [Column(TypeName="int")]
       [Editable(true)]
       public int? jrcqrs { get; set; }

       /// <summary>
       ///异物管控
       /// </summary>
       [Display(Name ="异物管控")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string ywgk { get; set; }

       /// <summary>
       ///母卷日目标
       /// </summary>
       [Display(Name ="母卷日目标")]
       [DisplayFormat(DataFormatString="18,2")]
       [Column(TypeName="decimal")]
       [Editable(true)]
       public decimal? mj_rmb { get; set; }

       /// <summary>
       ///母卷实绩
       /// </summary>
       [Display(Name ="母卷实绩")]
       [DisplayFormat(DataFormatString="18,2")]
       [Column(TypeName="decimal")]
       [Editable(true)]
       public decimal? mj_sj { get; set; }

       /// <summary>
       ///母卷达成率
       /// </summary>
       [Display(Name ="母卷达成率")]
       [DisplayFormat(DataFormatString="18,2")]
       [Column(TypeName="decimal")]
       [Editable(true)]
       public decimal? mj_dcl { get; set; }

       /// <summary>
       ///母卷对比昨日
       /// </summary>
       [Display(Name ="母卷对比昨日")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string mj_dbzt { get; set; }

       /// <summary>
       ///运转率日目标
       /// </summary>
       [Display(Name ="运转率日目标")]
       [DisplayFormat(DataFormatString="18,2")]
       [Column(TypeName="decimal")]
       [Editable(true)]
       public decimal? yzl_rmb { get; set; }

       /// <summary>
       ///运转率实绩
       /// </summary>
       [Display(Name ="运转率实绩")]
       [DisplayFormat(DataFormatString="18,2")]
       [Column(TypeName="decimal")]
       [Editable(true)]
       public decimal? yzl_sj { get; set; }

       /// <summary>
       ///运转率达成率
       /// </summary>
       [Display(Name ="运转率达成率")]
       [DisplayFormat(DataFormatString="18,2")]
       [Column(TypeName="decimal")]
       [Editable(true)]
       public decimal? yzl_dcl { get; set; }

       /// <summary>
       ///运转率对比昨天
       /// </summary>
       [Display(Name ="运转率对比昨天")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string yzl_dbzt { get; set; }

       /// <summary>
       ///A率日目标
       /// </summary>
       [Display(Name ="A率日目标")]
       [DisplayFormat(DataFormatString="18,2")]
       [Column(TypeName="decimal")]
       [Editable(true)]
       public decimal? al_rmb { get; set; }

       /// <summary>
       ///A率实绩
       /// </summary>
       [Display(Name ="A率实绩")]
       [DisplayFormat(DataFormatString="18,2")]
       [Column(TypeName="decimal")]
       [Editable(true)]
       public decimal? al_sj { get; set; }

       /// <summary>
       ///A率达成率
       /// </summary>
       [Display(Name ="A率达成率")]
       [DisplayFormat(DataFormatString="18,2")]
       [Column(TypeName="decimal")]
       [Editable(true)]
       public decimal? al_dcl { get; set; }

       /// <summary>
       ///A率对比昨天
       /// </summary>
       [Display(Name ="A率对比昨天")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string al_dbzt { get; set; }

       /// <summary>
       ///收率日目标
       /// </summary>
       [Display(Name ="收率日目标")]
       [DisplayFormat(DataFormatString="18,2")]
       [Column(TypeName="decimal")]
       [Editable(true)]
       public decimal? sl_rmb { get; set; }

       /// <summary>
       ///收率实绩
       /// </summary>
       [Display(Name ="收率实绩")]
       [DisplayFormat(DataFormatString="18,2")]
       [Column(TypeName="decimal")]
       [Editable(true)]
       public decimal? sl_sj { get; set; }

       /// <summary>
       ///收率达成率
       /// </summary>
       [Display(Name ="收率达成率")]
       [DisplayFormat(DataFormatString="18,2")]
       [Column(TypeName="decimal")]
       [Editable(true)]
       public decimal? sl_dcl { get; set; }

       /// <summary>
       ///收率对比昨天
       /// </summary>
       [Display(Name ="收率对比昨天")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string sl_dbzt { get; set; }

       /// <summary>
       ///今日出勤人员
       /// </summary>
       [Display(Name ="今日出勤人员")]
       [MaxLength(16)]
       [Column(TypeName="text(16)")]
       [Editable(true)]
       public string jrcqry { get; set; }

       /// <summary>
       ///创建人
       /// </summary>
       [Display(Name ="创建人")]
       [MaxLength(255)]
       [Column(TypeName="nvarchar(255)")]
       [Editable(true)]
       public string Creator { get; set; }

       /// <summary>
       ///创建时间
       /// </summary>
       [Display(Name ="创建时间")]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? CreateDate { get; set; }

       
    }
}
