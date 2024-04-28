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
    [Entity(TableCnName = "部门任务清单",TableName = "DataCollection_TaskList")]
    public partial class DataCollection_TaskList:BaseEntity
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
       ///部门
       /// </summary>
       [Display(Name ="部门")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string BuMen { get; set; }

       /// <summary>
       ///佐证资料
       /// </summary>
       [Display(Name ="佐证资料")]
       [MaxLength(255)]
       [Column(TypeName="nvarchar(255)")]
       [Editable(true)]
       public string Attachment { get; set; }

       /// <summary>
       ///进行状态
       /// </summary>
       [Display(Name ="进行状态")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string Status { get; set; }

       /// <summary>
       ///是否超期
       /// </summary>
       [Display(Name ="是否超期")]
       [MaxLength(10)]
       [Column(TypeName="nchar(10)")]
       [Editable(true)]
       public string IsItOverdue { get; set; }

       /// <summary>
       ///紧急度
       /// </summary>
       [Display(Name ="紧急度")]
       [Column(TypeName="int")]
       public int? Urgency { get; set; }

       /// <summary>
       ///责任人
       /// </summary>
       [Display(Name ="责任人")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string ResponsiblePerson { get; set; }

       /// <summary>
       ///任务名称
       /// </summary>
       [Display(Name ="任务名称")]
       [MaxLength(255)]
       [Column(TypeName="nvarchar(255)")]
       [Editable(true)]
       public string TaskName { get; set; }

       /// <summary>
       ///任务内容
       /// </summary>
       [Display(Name ="任务内容")]
       [MaxLength(16)]
       [Column(TypeName="text(16)")]
       [Editable(true)]
       public string TaskContent { get; set; }

       /// <summary>
       ///启动状态
       /// </summary>
       [Display(Name ="启动状态")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string StartSsatus { get; set; }

       /// <summary>
       ///提出时间
       /// </summary>
       [Display(Name ="提出时间")]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? ProposeTime { get; set; }

       /// <summary>
       ///进度描述
       /// </summary>
       [Display(Name ="进度描述")]
       [MaxLength(16)]
       [Column(TypeName="text(16)")]
       [Editable(true)]
       public string TaskRemarks { get; set; }

       /// <summary>
       ///开始时间
       /// </summary>
       [Display(Name ="开始时间")]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? StartTime { get; set; }

       /// <summary>
       ///截止时间
       /// </summary>
       [Display(Name ="截止时间")]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? EndTime { get; set; }

       /// <summary>
       ///完成时间
       /// </summary>
       [Display(Name ="完成时间")]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? CompletionTime { get; set; }

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