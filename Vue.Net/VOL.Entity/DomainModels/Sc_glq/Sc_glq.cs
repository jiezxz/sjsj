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
    [Entity(TableCnName = "过滤器更换",TableName = "Sc_glq")]
    public partial class Sc_glq:BaseEntity
    {
        /// <summary>
       ///文件编号
       /// </summary>
       [Display(Name ="文件编号")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string DocumentNumber { get; set; }

       /// <summary>
       ///序号
       /// </summary>
       [Key]
       [Display(Name ="序号")]
       [Column(TypeName="int")]
       [Editable(true)]
       [Required(AllowEmptyStrings=false)]
       public int id { get; set; }

       /// <summary>
       ///过滤网精度(um)
       /// </summary>
       [Display(Name ="过滤网精度(um)")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string jingdu { get; set; }

       /// <summary>
       ///开始使用时间
       /// </summary>
       [Display(Name ="开始使用时间")]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? starttime { get; set; }

       /// <summary>
       ///结束使用时间
       /// </summary>
       [Display(Name ="结束使用时间")]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? endtime { get; set; }

       /// <summary>
       ///班别
       /// </summary>
       [Display(Name ="班别")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string banbie { get; set; }

       /// <summary>
       ///班次
       /// </summary>
       [Display(Name ="班次")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string banci { get; set; }

       /// <summary>
       ///过滤器身份编号
       /// </summary>
       [Display(Name ="过滤器身份编号")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string guolvqID { get; set; }

       /// <summary>
       ///使用后初始压力(Mpa)
       /// </summary>
       [Display(Name ="使用后初始压力(Mpa)")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string startPr { get; set; }

       /// <summary>
       ///更换前最终压力(Mpa)
       /// </summary>
       [Display(Name ="更换前最终压力(Mpa)")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string endPr { get; set; }

       /// <summary>
       ///合计使用周期(天)
       /// </summary>
       [Display(Name ="合计使用周期(天)")]
       [MaxLength(150)]
       [Column(TypeName="varchar(150)")]
       [Editable(true)]
       public string zhouqi { get; set; }

       /// <summary>
       ///合计使用周期(小时)
       /// </summary>
       [Display(Name ="合计使用周期(小时)")]
       [MaxLength(250)]
       [Column(TypeName="varchar(250)")]
       [Editable(true)]
       public string xiaoshi { get; set; }

       /// <summary>
       ///更换原因
       /// </summary>
       [Display(Name ="更换原因")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string ghyuanyin { get; set; }

       /// <summary>
       ///设备更换人
       /// </summary>
       [Display(Name ="设备更换人")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string ghren { get; set; }

       /// <summary>
       ///工艺确认/调试人
       /// </summary>
       [Display(Name ="工艺确认/调试人")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string gyren { get; set; }

       /// <summary>
       ///生产班长确认
       /// </summary>
       [Display(Name ="生产班长确认")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string banzhang { get; set; }

       /// <summary>
       ///备注
       /// </summary>
       [Display(Name ="备注")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string beizhu { get; set; }

       /// <summary>
       ///创建者ID
       /// </summary>
       [Display(Name ="创建者ID")]
       [Column(TypeName="int")]
       public int? CreateID { get; set; }

       /// <summary>
       ///创建人
       /// </summary>
       [Display(Name ="创建人")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
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
       ///修改人名称
       /// </summary>
       [Display(Name ="修改人名称")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       public string Modifier { get; set; }

       /// <summary>
       ///修改时间
       /// </summary>
       [Display(Name ="修改时间")]
       [Column(TypeName="datetime")]
       public DateTime? ModifyDate { get; set; }

       /// <summary>
       ///线别
       /// </summary>
       [Display(Name ="线别")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string xianbie { get; set; }

       
    }
}