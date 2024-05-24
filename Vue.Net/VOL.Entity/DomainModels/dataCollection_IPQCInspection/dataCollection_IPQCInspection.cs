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
    [Entity(TableCnName = "IPQC巡检",TableName = "dataCollection_IPQCInspection")]
    public partial class dataCollection_IPQCInspection:BaseEntity
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
       ///工厂
       /// </summary>
       [Display(Name ="工厂")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string gongChang { get; set; }

       /// <summary>
       ///巡检日期
       /// </summary>
       [Display(Name ="巡检日期")]
       [Column(TypeName="date")]
       [Editable(true)]
       public DateTime? xjrq { get; set; }

       /// <summary>
       ///地点
       /// </summary>
       [Display(Name ="地点")]
       [MaxLength(200)]
       [Column(TypeName="nvarchar(200)")]
       [Editable(true)]
       public string diDian { get; set; }

       /// <summary>
       ///产线
       /// </summary>
       [Display(Name ="产线")]
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
       ///是否属于标准化
       /// </summary>
       [Display(Name ="是否属于标准化")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string sfsybzh { get; set; }

       /// <summary>
       ///是否重复
       /// </summary>
       [Display(Name ="是否重复")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string sfcf { get; set; }

       /// <summary>
       ///严重程度
       /// </summary>
       [Display(Name ="严重程度")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string yzcd { get; set; }

       /// <summary>
       ///集团分类
       /// </summary>
       [Display(Name ="集团分类")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string jtfl { get; set; }

       /// <summary>
       ///责任部门
       /// </summary>
       [Display(Name ="责任部门")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string zrbm { get; set; }

       /// <summary>
       ///部门责任人
       /// </summary>
       [Display(Name ="部门责任人")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string bmzrr { get; set; }

       /// <summary>
       ///岗位责任人
       /// </summary>
       [Display(Name ="岗位责任人")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string gwzrr { get; set; }

       /// <summary>
       ///改善前证据
       /// </summary>
       [Display(Name ="改善前证据")]
       [MaxLength(250)]
       [Column(TypeName="nvarchar(250)")]
       [Editable(true)]
       public string gsqzj { get; set; }

       /// <summary>
       ///改善后证据
       /// </summary>
       [Display(Name ="改善后证据")]
       [MaxLength(250)]
       [Column(TypeName="nvarchar(250)")]
       [Editable(true)]
       public string gshzj { get; set; }

       /// <summary>
       ///改善措施
       /// </summary>
       [Display(Name ="改善措施")]
       [MaxLength(500)]
       [Column(TypeName="nvarchar(500)")]
       [Editable(true)]
       public string gscs { get; set; }

       /// <summary>
       ///问题责任人
       /// </summary>
       [Display(Name ="问题责任人")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string wtzrr { get; set; }

       /// <summary>
       ///要求完成日期
       /// </summary>
       [Display(Name ="要求完成日期")]
       [Column(TypeName="date")]
       [Editable(true)]
       public DateTime? yqwcrq { get; set; }

       /// <summary>
       ///整改确认人
       /// </summary>
       [Display(Name ="整改确认人")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string zgqrr { get; set; }

       /// <summary>
       ///整改情况
       /// </summary>
       [Display(Name ="整改情况")]
       [MaxLength(500)]
       [Column(TypeName="nvarchar(500)")]
       [Editable(true)]
       public string zgqk { get; set; }

       /// <summary>
       ///是否关闭
       /// </summary>
       [Display(Name ="是否关闭")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string sfgb { get; set; }

       /// <summary>
       ///备注
       /// </summary>
       [Display(Name ="备注")]
       [MaxLength(16)]
       [Column(TypeName="text(16)")]
       [Editable(true)]
       public string remark { get; set; }

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
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
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
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
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