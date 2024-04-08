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
    [Entity(TableCnName = "停机&设备异常",TableName = "dataCollection_tjyc")]
    public partial class dataCollection_tjyc:BaseEntity
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
       ///生产线
       /// </summary>
       [Display(Name ="生产线")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string scx { get; set; }

       /// <summary>
       ///日期
       /// </summary>
       [Display(Name ="日期")]
       [Column(TypeName="date")]
       [Editable(true)]
       public DateTime? riQi { get; set; }

       /// <summary>
       ///班主
       /// </summary>
       [Display(Name ="班主")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string banZhu { get; set; }

       /// <summary>
       ///班长
       /// </summary>
       [Display(Name ="班长")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string banZhang { get; set; }

       /// <summary>
       ///班次
       /// </summary>
       [Display(Name ="班次")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string banCi { get; set; }

       /// <summary>
       ///停机次数
       /// </summary>
       [Display(Name ="停机次数")]
       [Column(TypeName="int")]
       [Editable(true)]
       public int? ciShu { get; set; }

       /// <summary>
       ///停机位置
       /// </summary>
       [Display(Name ="停机位置")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string weiZhi { get; set; }

       /// <summary>
       ///停机代号
       /// </summary>
       [Display(Name ="停机代号")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string daiHao { get; set; }

       /// <summary>
       ///停机原因
       /// </summary>
       [Display(Name ="停机原因")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string yuanYin { get; set; }

       /// <summary>
       ///停机处理
       /// </summary>
       [Display(Name ="停机处理")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string chuLi { get; set; }

       /// <summary>
       ///主动&异常
       /// </summary>
       [Display(Name ="主动&异常")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string zdyc { get; set; }

       /// <summary>
       ///停机时间
       /// </summary>
       [Display(Name ="停机时间")]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? tjsj { get; set; }

       /// <summary>
       ///清洁完成
       /// </summary>
       [Display(Name ="清洁完成")]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? qjwc { get; set; }

       /// <summary>
       ///穿膜完成
       /// </summary>
       [Display(Name ="穿膜完成")]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? cmwc { get; set; }

       /// <summary>
       ///提速完成
       /// </summary>
       [Display(Name ="提速完成")]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? tswc { get; set; }

       /// <summary>
       ///调试完成
       /// </summary>
       [Display(Name ="调试完成")]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? tisoShiWC { get; set; }

       /// <summary>
       ///收卷时间
       /// </summary>
       [Display(Name ="收卷时间")]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? sjsj { get; set; }

       /// <summary>
       ///通知维修时间
       /// </summary>
       [Display(Name ="通知维修时间")]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? tzwxsj { get; set; }

       /// <summary>
       ///维修正常时间
       /// </summary>
       [Display(Name ="维修正常时间")]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? wxzcsj { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="CreateID")]
       [Column(TypeName="int")]
       [Editable(true)]
       public int? CreateID { get; set; }

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

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="ModifyID")]
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
       ///参与人员
       /// </summary>
       [Display(Name ="参与人员")]
       [MaxLength(16)]
       [Column(TypeName="text(16)")]
       [Editable(true)]
       public string cyry { get; set; }

       
    }
}