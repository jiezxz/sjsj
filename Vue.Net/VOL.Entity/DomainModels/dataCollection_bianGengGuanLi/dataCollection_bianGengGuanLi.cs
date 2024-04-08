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
    [Entity(TableCnName = "4M变更管理清单",TableName = "dataCollection_bianGengGuanLi")]
    public partial class dataCollection_bianGengGuanLi:BaseEntity
    {
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
       ///工序
       /// </summary>
       [Display(Name ="工序")]
       [Column(TypeName="int")]
       [Editable(true)]
       public int? gongXu { get; set; }

       /// <summary>
       ///生产线
       /// </summary>
       [Display(Name ="生产线")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string shengChanXian { get; set; }

       /// <summary>
       ///型号
       /// </summary>
       [Display(Name ="型号")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string xingHao { get; set; }

       /// <summary>
       ///申请人
       /// </summary>
       [Display(Name ="申请人")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string sqr { get; set; }

       /// <summary>
       ///调整日期
       /// </summary>
       [Display(Name ="调整日期")]
       [Column(TypeName="date")]
       [Editable(true)]
       public DateTime? tiaoZhengRiQi { get; set; }

       /// <summary>
       ///调整时间
       /// </summary>
       [Display(Name ="调整时间")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string tiaoZhengShiJian { get; set; }

       /// <summary>
       ///联络事由
       /// </summary>
       [Display(Name ="联络事由")]
       [Column(TypeName="int")]
       [Editable(true)]
       public int? lianLuoShiYou { get; set; }

       /// <summary>
       ///异常原因
       /// </summary>
       [Display(Name ="异常原因")]
       [MaxLength(16)]
       [Column(TypeName="text(16)")]
       [Editable(true)]
       public string yiChangYuanYin { get; set; }

       /// <summary>
       ///指标及缺陷
       /// </summary>
       [Display(Name ="指标及缺陷")]
       [MaxLength(16)]
       [Column(TypeName="text(16)")]
       [Editable(true)]
       public string tzyxdxgzbjqx { get; set; }

       /// <summary>
       ///调整前参数
       /// </summary>
       [Display(Name ="调整前参数")]
       [MaxLength(16)]
       [Column(TypeName="text(16)")]
       [Editable(true)]
       public string tiaoZhengQianCanShu { get; set; }

       /// <summary>
       ///调整后参数
       /// </summary>
       [Display(Name ="调整后参数")]
       [MaxLength(16)]
       [Column(TypeName="text(16)")]
       [Editable(true)]
       public string tiaoZhengHouCanShu { get; set; }

       /// <summary>
       ///重要度
       /// </summary>
       [Display(Name ="重要度")]
       [Column(TypeName="int")]
       [Editable(true)]
       public int? zhongYaoDao { get; set; }

       /// <summary>
       ///变更项目
       /// </summary>
       [Display(Name ="变更项目")]
       [MaxLength(16)]
       [Column(TypeName="text(16)")]
       [Editable(true)]
       public string bianGengXiangMu { get; set; }

       /// <summary>
       ///控制形式
       /// </summary>
       [Display(Name ="控制形式")]
       [Column(TypeName="int")]
       [Editable(true)]
       public int? kongZhiXingShi { get; set; }

       /// <summary>
       ///起始批号
       /// </summary>
       [Display(Name ="起始批号")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string qiShiPiHao { get; set; }

       /// <summary>
       ///接收日期
       /// </summary>
       [Display(Name ="接收日期")]
       [Column(TypeName="date")]
       [Editable(true)]
       public DateTime? jieShouRiQi { get; set; }

       /// <summary>
       ///接收时间
       /// </summary>
       [Display(Name ="接收时间")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string jieShouShiJian { get; set; }

       /// <summary>
       ///确认时间
       /// </summary>
       [Display(Name ="确认时间")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string queRenShiJian { get; set; }

       /// <summary>
       ///开始正常批支号
       /// </summary>
       [Display(Name ="开始正常批支号")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string kaiShiZhengChangPiZhiHao { get; set; }

       /// <summary>
       ///确认结果
       /// </summary>
       [Display(Name ="确认结果")]
       [Column(TypeName="int")]
       [Editable(true)]
       public int? queRenJieGuo { get; set; }

       /// <summary>
       ///班长确认
       /// </summary>
       [Display(Name ="班长确认")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string banZhangQueRen { get; set; }

       /// <summary>
       ///工程师复核
       /// </summary>
       [Display(Name ="工程师复核")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string gongChengShiFuHe { get; set; }

       /// <summary>
       ///评估完成时间
       /// </summary>
       [Display(Name ="评估完成时间")]
       [Column(TypeName="date")]
       [Editable(true)]
       public DateTime? pingGuWanChengShiJian { get; set; }

       /// <summary>
       ///创建人ID
       /// </summary>
       [Display(Name ="创建人ID")]
       [Column(TypeName="int")]
       [Editable(true)]
       public int? CreateID { get; set; }

       /// <summary>
       ///申请时间
       /// </summary>
       [Display(Name ="申请时间")]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? CreateDate { get; set; }

       /// <summary>
       ///修改人ID
       /// </summary>
       [Display(Name ="修改人ID")]
       [Column(TypeName="int")]
       [Editable(true)]
       public int? ModifyID { get; set; }

       /// <summary>
       ///修改人
       /// </summary>
       [Display(Name ="修改人")]
       [MaxLength(255)]
       [Column(TypeName="nvarchar(255)")]
       [Editable(true)]
       public string Modifier { get; set; }

       /// <summary>
       ///修改时间
       /// </summary>
       [Display(Name ="修改时间")]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? ModifyDate { get; set; }

       /// <summary>
       ///创建人
       /// </summary>
       [Display(Name ="创建人")]
       [MaxLength(255)]
       [Column(TypeName="nvarchar(255)")]
       public string Creator { get; set; }

       /// <summary>
       ///是否进行流程审批
       /// </summary>
       [Display(Name ="是否进行流程审批")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string sfxjlcsp { get; set; }

       /// <summary>
       ///内部变更评审是否进行
       /// </summary>
       [Display(Name ="内部变更评审是否进行")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string nbbgpssfjx { get; set; }

       /// <summary>
       ///变更状况
       /// </summary>
       [Display(Name ="变更状况")]
       [MaxLength(500)]
       [Column(TypeName="nvarchar(500)")]
       [Editable(true)]
       public string bgzk { get; set; }

       
    }
}