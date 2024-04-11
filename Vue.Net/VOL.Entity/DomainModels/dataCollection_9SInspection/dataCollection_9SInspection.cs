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
    [Entity(TableCnName = "9S巡检",TableName = "dataCollection_9SInspection")]
    public partial class dataCollection_9SInspection:BaseEntity
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
       ///编号
       /// </summary>
       [Key]
       [Display(Name ="编号")]
       [Column(TypeName="int")]
       [Required(AllowEmptyStrings=false)]
       public int id { get; set; }

       /// <summary>
       ///巡检日期
       /// </summary>
       [Display(Name ="巡检日期")]
       [Column(TypeName="date")]
       [Editable(true)]
       public DateTime? xjsj { get; set; }

       /// <summary>
       ///具体位置 
       /// </summary>
       [Display(Name ="具体位置 ")]
       [MaxLength(200)]
       [Column(TypeName="nvarchar(200)")]
       [Editable(true)]
       public string diDian { get; set; }

       /// <summary>
       ///车间/区域
       /// </summary>
       [Display(Name ="车间/区域")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string chanXian { get; set; }

       /// <summary>
       ///问题描述
       /// </summary>
       [Display(Name ="问题描述")]
       [MaxLength(16)]
       [Column(TypeName="text(16)")]
       [Editable(true)]
       public string wtms { get; set; }

       /// <summary>
       ///异常图片
       /// </summary>
       [Display(Name ="异常图片")]
       [MaxLength(200)]
       [Column(TypeName="nvarchar(200)")]
       [Editable(true)]
       public string yctp { get; set; }

       /// <summary>
       ///重复发生2次指摘
       /// </summary>
       [Display(Name ="重复发生2次指摘")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string sfcf { get; set; }

       /// <summary>
       ///长期措施
       /// </summary>
       [Display(Name ="长期措施")]
       [MaxLength(16)]
       [Column(TypeName="text(16)")]
       [Editable(true)]
       public string cqcs { get; set; }

       /// <summary>
       ///改善部门
       /// </summary>
       [Display(Name ="改善部门")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string gsbm { get; set; }

       /// <summary>
       ///责任人
       /// </summary>
       [Display(Name ="责任人")]
       [MaxLength(10)]
       [Column(TypeName="nchar(10)")]
       [Editable(true)]
       public string zrr { get; set; }

       /// <summary>
       ///整改期限
       /// </summary>
       [Display(Name ="整改期限")]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? zgqx { get; set; }

       /// <summary>
       ///整改结果
       /// </summary>
       [Display(Name ="整改结果")]
       [MaxLength(200)]
       [Column(TypeName="nvarchar(200)")]
       [Editable(true)]
       public string zgjg { get; set; }

       /// <summary>
       ///完成状态
       /// </summary>
       [Display(Name ="完成状态")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string wczt { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="CreateID")]
       [Column(TypeName="int")]
       [Editable(true)]
       public int? CreateID { get; set; }

       /// <summary>
       ///巡检人
       /// </summary>
       [Display(Name ="巡检人")]
       [MaxLength(255)]
       [Column(TypeName="nvarchar(255)")]
       [Editable(true)]
       public string Creator { get; set; }

       /// <summary>
       ///提交时间
       /// </summary>
       [Display(Name ="提交时间")]
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
       ///
       /// </summary>
       [Display(Name ="Modifier")]
       [MaxLength(255)]
       [Column(TypeName="nvarchar(255)")]
       [Editable(true)]
       public string Modifier { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="ModifyDate")]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? ModifyDate { get; set; }

       
    }
}