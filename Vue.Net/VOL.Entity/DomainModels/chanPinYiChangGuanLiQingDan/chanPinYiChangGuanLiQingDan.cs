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
    [Entity(TableCnName = "异常管理清单",TableName = "chanPinYiChangGuanLiQingDan")]
    public partial class chanPinYiChangGuanLiQingDan:BaseEntity
    {
        /// <summary>
       ///
       /// </summary>
       [Key]
       [Display(Name ="id")]
       [Column(TypeName="uniqueidentifier")]
       [Required(AllowEmptyStrings=false)]
       public Guid id { get; set; }

       /// <summary>
       ///公司
       /// </summary>
       [Display(Name ="公司")]
       [MaxLength(50)]
       [JsonIgnore]
       [Column(TypeName="varchar(50)")]
       public string gongSi { get; set; }

       /// <summary>
       ///车间
       /// </summary>
       [Display(Name ="车间")]
       [MaxLength(50)]
       [Column(TypeName="varchar(50)")]
       [Editable(true)]
       public string cheJian { get; set; }

       /// <summary>
       ///日期
       /// </summary>
       [Display(Name ="日期")]
       [Column(TypeName="date")]
       [Editable(true)]
       public DateTime? riQi { get; set; }

       /// <summary>
       ///工序
       /// </summary>
       [Display(Name ="工序")]
       [MaxLength(50)]
       [Column(TypeName="varchar(50)")]
       [Editable(true)]
       public string gongXu { get; set; }

       /// <summary>
       ///机台
       /// </summary>
       [Display(Name ="机台")]
       [MaxLength(50)]
       [Column(TypeName="varchar(50)")]
       [Editable(true)]
       public string jiTai { get; set; }

       /// <summary>
       ///型号
       /// </summary>
       [Display(Name ="型号")]
       [MaxLength(50)]
       [Column(TypeName="varchar(50)")]
       [Editable(true)]
       public string xingHao { get; set; }

       /// <summary>
       ///异常分类
       /// </summary>
       [Display(Name ="异常分类")]
       [MaxLength(50)]
       [Column(TypeName="varchar(50)")]
       [Editable(true)]
       public string yiChangFenLei { get; set; }

       /// <summary>
       ///不良数量
       /// </summary>
       [Display(Name ="不良数量")]
       [Column(TypeName="int")]
       [Editable(true)]
       public int? buLiangShuLiang { get; set; }

       /// <summary>
       ///缺陷代码
       /// </summary>
       [Display(Name ="缺陷代码")]
       [MaxLength(50)]
       [Column(TypeName="varchar(50)")]
       [Editable(true)]
       public string queXianDaiMa { get; set; }

       /// <summary>
       ///是否对策
       /// </summary>
       [Display(Name ="是否对策")]
       [Column(TypeName="int")]
       [Editable(true)]
       public int? shiFouDuiCe { get; set; }

       /// <summary>
       ///是否有效
       /// </summary>
       [Display(Name ="是否有效")]
       [Column(TypeName="int")]
       [Editable(true)]
       public int? shiFouYouXiao { get; set; }

       /// <summary>
       ///是否关闭
       /// </summary>
       [Display(Name ="是否关闭")]
       [Column(TypeName="int")]
       [Editable(true)]
       public int? shiFouGuanBi { get; set; }

       /// <summary>
       ///是否重复
       /// </summary>
       [Display(Name ="是否重复")]
       [Column(TypeName="int")]
       [Editable(true)]
       public int? shiFouCongFu { get; set; }

       /// <summary>
       ///恒久改善
       /// </summary>
       [Display(Name ="恒久改善")]
       [Column(TypeName="int")]
       [Editable(true)]
       public int? hengJiuGaiShan { get; set; }

       /// <summary>
       ///问题点
       /// </summary>
       [Display(Name ="问题点")]
       [MaxLength(16)]
       [Column(TypeName="text(16)")]
       [Editable(true)]
       public string wenTiDian { get; set; }

       /// <summary>
       ///原因分析
       /// </summary>
       [Display(Name ="原因分析")]
       [MaxLength(16)]
       [Column(TypeName="text(16)")]
       [Editable(true)]
       public string yuanYinFenXi { get; set; }

       /// <summary>
       ///改善措施
       /// </summary>
       [Display(Name ="改善措施")]
       [MaxLength(16)]
       [Column(TypeName="text(16)")]
       [Editable(true)]
       public string gaiShanCuoShi { get; set; }

       /// <summary>
       ///责任部门
       /// </summary>
       [Display(Name ="责任部门")]
       [MaxLength(50)]
       [Column(TypeName="varchar(50)")]
       [Editable(true)]
       public string zeRenBuMen { get; set; }

       /// <summary>
       ///责任人
       /// </summary>
       [Display(Name ="责任人")]
       [MaxLength(50)]
       [Column(TypeName="varchar(50)")]
       [Editable(true)]
       public string zeRenRen { get; set; }

       /// <summary>
       ///纳期
       /// </summary>
       [Display(Name ="纳期")]
       [Column(TypeName="date")]
       [Editable(true)]
       public DateTime? naQi { get; set; }

       /// <summary>
       ///实际完成时间
       /// </summary>
       [Display(Name ="实际完成时间")]
       [Column(TypeName="date")]
       [Editable(true)]
       public DateTime? shiJiWanChengShiJian { get; set; }

       /// <summary>
       ///超期天数
       /// </summary>
       [Display(Name ="超期天数")]
       [Column(TypeName="int")]
       [Editable(true)]
       public int? chaoQiTianShu { get; set; }

       /// <summary>
       ///按时完成
       /// </summary>
       [Display(Name ="按时完成")]
       [Column(TypeName="int")]
       [Editable(true)]
       public int? anShiWanCheng { get; set; }

       /// <summary>
       ///状态
       /// </summary>
       [Display(Name ="状态")]
       [Column(TypeName="int")]
       [Editable(true)]
       public int? zhuangTai { get; set; }

       /// <summary>
       ///备注
       /// </summary>
       [Display(Name ="备注")]
       [MaxLength(16)]
       [Column(TypeName="text(16)")]
       [Editable(true)]
       public string beiZhu { get; set; }

       /// <summary>
       ///创建人ID
       /// </summary>
       [Display(Name ="创建人ID")]
       [Column(TypeName="int")]
       public int? CreateID { get; set; }

       /// <summary>
       ///创建人
       /// </summary>
       [Display(Name ="创建人")]
       [MaxLength(255)]
       [Column(TypeName="nvarchar(255)")]
       public string Creator { get; set; }

       /// <summary>
       ///创建时间
       /// </summary>
       [Display(Name ="创建时间")]
       [Column(TypeName="datetime")]
       public DateTime? CreateDate { get; set; }

       /// <summary>
       ///修改人ID
       /// </summary>
       [Display(Name ="修改人ID")]
       [Column(TypeName="int")]
       public int? ModifyID { get; set; }

       /// <summary>
       ///修改人
       /// </summary>
       [Display(Name ="修改人")]
       [MaxLength(255)]
       [Column(TypeName="nvarchar(255)")]
       public string Modifier { get; set; }

       /// <summary>
       ///修改时间
       /// </summary>
       [Display(Name ="修改时间")]
       [Column(TypeName="datetime")]
       public DateTime? ModifyDate { get; set; }

       
    }
}
