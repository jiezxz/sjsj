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
    [Entity(TableCnName = "环保与职业健康安全隐患排查治理台账",TableName = "dataCollection_aqyh")]
    public partial class dataCollection_aqyh:BaseEntity
    {
        /// <summary>
       ///
       /// </summary>
       [Key]
       [Display(Name ="id")]
       [Column(TypeName="int")]
       [Editable(true)]
       [Required(AllowEmptyStrings=false)]
       public int id { get; set; }

       /// <summary>
       ///文件编号
       /// </summary>
       [Display(Name ="文件编号")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string DocumentNumber { get; set; }

       /// <summary>
       ///检查时间
       /// </summary>
       [Display(Name ="检查时间")]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? checktime { get; set; }

       /// <summary>
       ///检查人员
       /// </summary>
       [Display(Name ="检查人员")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string checkpeople { get; set; }

       /// <summary>
       ///隐患图片(编号)
       /// </summary>
       [Display(Name ="隐患图片(编号)")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string YHpicture { get; set; }

       /// <summary>
       ///整改后照片
       /// </summary>
       [Display(Name ="整改后照片")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string ZGpicture { get; set; }

       /// <summary>
       ///事故(事件)类别
       /// </summary>
       [Display(Name ="事故(事件)类别")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string type { get; set; }

       /// <summary>
       ///事故(事件)严重程度
       /// </summary>
       [Display(Name ="事故(事件)严重程度")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string serious { get; set; }

       /// <summary>
       ///隐患子类
       /// </summary>
       [Display(Name ="隐患子类")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string yinhuan { get; set; }

       /// <summary>
       ///隐患级别
       /// </summary>
       [Display(Name ="隐患级别")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string level { get; set; }

       /// <summary>
       ///厂区
       /// </summary>
       [Display(Name ="厂区")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string changqu { get; set; }

       /// <summary>
       ///隐患部门/岗位
       /// </summary>
       [Display(Name ="隐患部门/岗位")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string yhbumen { get; set; }

       /// <summary>
       ///隐患/不符合内容
       /// </summary>
       [Display(Name ="隐患/不符合内容")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string yhnr { get; set; }

       /// <summary>
       ///整改/纠正措施
       /// </summary>
       [Display(Name ="整改/纠正措施")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string zgcs { get; set; }

       /// <summary>
       ///整改时限
       /// </summary>
       [Display(Name ="整改时限")]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? zgtime { get; set; }

       /// <summary>
       ///整改资金
       /// </summary>
       [Display(Name ="整改资金")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string zgmoney { get; set; }

       /// <summary>
       ///根本原因
       /// </summary>
       [Display(Name ="根本原因")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string gbreason { get; set; }

       /// <summary>
       ///预防措施
       /// </summary>
       [Display(Name ="预防措施")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string yfcs { get; set; }

       /// <summary>
       ///整改责任人
       /// </summary>
       [Display(Name ="整改责任人")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string zgzrr { get; set; }

       /// <summary>
       ///完成时间
       /// </summary>
       [Display(Name ="完成时间")]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? wctime { get; set; }

       /// <summary>
       ///复查结果
       /// </summary>
       [Display(Name ="复查结果")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string fcjg { get; set; }

       /// <summary>
       ///复查人员
       /// </summary>
       [Display(Name ="复查人员")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string fcry { get; set; }

       /// <summary>
       ///备注
       /// </summary>
       [Display(Name ="备注")]
       [MaxLength(250)]
       [Column(TypeName="varchar(250)")]
       [Editable(true)]
       public string bz { get; set; }

       /// <summary>
       ///创建者ID
       /// </summary>
       [Display(Name ="创建者ID")]
       [Column(TypeName="int")]
       [Editable(true)]
       public int? CreateID { get; set; }

       /// <summary>
       ///创建人
       /// </summary>
       [Display(Name ="创建人")]
       [MaxLength(50)]
       [Column(TypeName="varchar(50)")]
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
       ///修改人ID
       /// </summary>
       [Display(Name ="修改人ID")]
       [Column(TypeName="int")]
       [Editable(true)]
       public int? ModifyID { get; set; }

       /// <summary>
       ///修改人名称
       /// </summary>
       [Display(Name ="修改人名称")]
       [MaxLength(50)]
       [Column(TypeName="varchar(50)")]
       [Editable(true)]
       public string Modifier { get; set; }

       /// <summary>
       ///修改时间
       /// </summary>
       [Display(Name ="修改时间")]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? ModifyDate { get; set; }

       
    }
}