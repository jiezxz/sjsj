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
    [Entity(TableCnName = "交接班汇报统计表",TableName = "Sc_jjb")]
    public partial class Sc_jjb:BaseEntity
    {
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
       ///文件编号
       /// </summary>
       [Display(Name ="文件编号")]
       [MaxLength(50)]
       [Column(TypeName="nvarchar(50)")]
       [Editable(true)]
       public string DocumentNumber { get; set; }

       /// <summary>
       ///车间
       /// </summary>
       [Display(Name ="车间")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string chejian { get; set; }

       /// <summary>
       ///产线
       /// </summary>
       [Display(Name ="产线")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string chanxian { get; set; }

       /// <summary>
       ///交接人
       /// </summary>
       [Display(Name ="交接人")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string jiaojieren { get; set; }

       /// <summary>
       ///接班人
       /// </summary>
       [Display(Name ="接班人")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string jiebanren { get; set; }

       /// <summary>
       ///产线(白/夜)
       /// </summary>
       [Display(Name ="产线(白/夜)")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string chanxianS { get; set; }

       /// <summary>
       ///班别(白/夜)
       /// </summary>
       [Display(Name ="班别(白/夜)")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string banbie { get; set; }

       /// <summary>
       ///日期
       /// </summary>
       [Display(Name ="日期")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string riqi { get; set; }

       /// <summary>
       ///产品规格
       /// </summary>
       [Display(Name ="产品规格")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string guige { get; set; }

       /// <summary>
       ///挤出量(kg/h)
       /// </summary>
       [Display(Name ="挤出量(kg/h)")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string jichuliang { get; set; }

       /// <summary>
       ///线速度(m/min)
       /// </summary>
       [Display(Name ="线速度(m/min)")]
       [MaxLength(100)]
       [Column(TypeName="varchar(100)")]
       [Editable(true)]
       public string sv { get; set; }

       /// <summary>
       ///收卷长度(m)
       /// </summary>
       [Display(Name ="收卷长度(m)")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string changdu { get; set; }

       /// <summary>
       ///母卷卷数(m²)
       /// </summary>
       [Display(Name ="母卷卷数(m²)")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string mujuan { get; set; }

       /// <summary>
       ///母卷产量(m²)
       /// </summary>
       [Display(Name ="母卷产量(m²)")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string chanliang { get; set; }

       /// <summary>
       ///中间卷基膜面积(m²)
       /// </summary>
       [Display(Name ="中间卷基膜面积(m²)")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string zjjmianji { get; set; }

       /// <summary>
       ///中间卷涂布膜面积(m²)
       /// </summary>
       [Display(Name ="中间卷涂布膜面积(m²)")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string zjjtubumj { get; set; }

       /// <summary>
       ///正常生产时长(min)
       /// </summary>
       [Display(Name ="正常生产时长(min)")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string shichang { get; set; }

       /// <summary>
       ///当班A品产量目标(m²)
       /// </summary>
       [Display(Name ="当班A品产量目标(m²)")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string mubiao { get; set; }

       /// <summary>
       ///A率目标%
       /// </summary>
       [Display(Name ="A率目标%")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string Amubiao { get; set; }

       /// <summary>
       ///当班A品产量(m²)
       /// </summary>
       [Display(Name ="当班A品产量(m²)")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string Achanliang { get; set; }

       /// <summary>
       ///产量目标达成率(%)
       /// </summary>
       [Display(Name ="产量目标达成率(%)")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string dacheng { get; set; }

       /// <summary>
       ///当班实际A率
       /// </summary>
       [Display(Name ="当班实际A率")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string shijiA { get; set; }

       /// <summary>
       ///当班运转率
       /// </summary>
       [Display(Name ="当班运转率")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string yunzhuan { get; set; }

       /// <summary>
       ///当月A品总产量
       /// </summary>
       [Display(Name ="当月A品总产量")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string zonchanliang { get; set; }

       /// <summary>
       ///产线异常情况
       /// </summary>
       [Display(Name ="产线异常情况")]
       [MaxLength(1000)]
       [Column(TypeName="varchar(1000)")]
       [Editable(true)]
       public string yichang { get; set; }

       /// <summary>
       ///应到人数
       /// </summary>
       [Display(Name ="应到人数")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string renshu { get; set; }

       /// <summary>
       ///未到人数
       /// </summary>
       [Display(Name ="未到人数")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string weidaors { get; set; }

       /// <summary>
       ///实到人数
       /// </summary>
       [Display(Name ="实到人数")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string shidaors { get; set; }

       /// <summary>
       ///工伤情况交接
       /// </summary>
       [Display(Name ="工伤情况交接")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string gonshang { get; set; }

       /// <summary>
       ///车间安全情况交接
       /// </summary>
       [Display(Name ="车间安全情况交接")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string anquan { get; set; }

       /// <summary>
       ///交接上级指示或部门文件通知看板更新等管理事宜
       /// </summary>
       [Display(Name ="交接上级指示或部门文件通知看板更新等管理事宜")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string zhishi { get; set; }

       /// <summary>
       ///任务事项交接
       /// </summary>
       [Display(Name ="任务事项交接")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string rwshixiang { get; set; }

       /// <summary>
       ///其他异常情况
       /// </summary>
       [Display(Name ="其他异常情况")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string qitayichang { get; set; }

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

       /// <summary>
       ///产线异常情况
       /// </summary>
       [Display(Name ="产线异常情况")]
       [MaxLength(1000)]
       [Column(TypeName="varchar(1000)")]
       [Editable(true)]
       public string yichangS { get; set; }

       /// <summary>
       ///当班运转率
       /// </summary>
       [Display(Name ="当班运转率")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string yunzhuanS { get; set; }

       /// <summary>
       ///班别
       /// </summary>
       [Display(Name ="班别")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string banbieS { get; set; }

       /// <summary>
       ///日期
       /// </summary>
       [Display(Name ="日期")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string riqiS { get; set; }

       /// <summary>
       ///产品规格
       /// </summary>
       [Display(Name ="产品规格")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string guigeS { get; set; }

       /// <summary>
       ///挤出量(kg/h)
       /// </summary>
       [Display(Name ="挤出量(kg/h)")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string jichuliangS { get; set; }

       /// <summary>
       ///线速度(m/min)
       /// </summary>
       [Display(Name ="线速度(m/min)")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string svS { get; set; }

       /// <summary>
       ///收卷长度(m)
       /// </summary>
       [Display(Name ="收卷长度(m)")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string changduS { get; set; }

       /// <summary>
       ///母卷卷数(m²)
       /// </summary>
       [Display(Name ="母卷卷数(m²)")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string mujuanS { get; set; }

       /// <summary>
       ///当月A品总产量
       /// </summary>
       [Display(Name ="当月A品总产量")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string zonchanliangS { get; set; }

       /// <summary>
       ///母卷产量(m²)
       /// </summary>
       [Display(Name ="母卷产量(m²)")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string chanliangS { get; set; }

       /// <summary>
       ///中间卷涂布膜面积(m²)
       /// </summary>
       [Display(Name ="中间卷涂布膜面积(m²)")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string zjjtubumjS { get; set; }

       /// <summary>
       ///正常生产时长(min)
       /// </summary>
       [Display(Name ="正常生产时长(min)")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string shichangS { get; set; }

       /// <summary>
       ///当班A品产量目标(m²)
       /// </summary>
       [Display(Name ="当班A品产量目标(m²)")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string mubiaoS { get; set; }

       /// <summary>
       ///A率目标%
       /// </summary>
       [Display(Name ="A率目标%")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string AmubiaoS { get; set; }

       /// <summary>
       ///当班A品产量(m²)
       /// </summary>
       [Display(Name ="当班A品产量(m²)")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string AchanliangS { get; set; }

       /// <summary>
       ///产量目标达成率(%)
       /// </summary>
       [Display(Name ="产量目标达成率(%)")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string dachengS { get; set; }

       /// <summary>
       ///当班实际A率
       /// </summary>
       [Display(Name ="当班实际A率")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string shijiAS { get; set; }

       /// <summary>
       ///中间卷基膜面积(m²)
       /// </summary>
       [Display(Name ="中间卷基膜面积(m²)")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string zjjmianjiS { get; set; }

       /// <summary>
       ///9S未完成整改项交接
       /// </summary>
       [Display(Name ="9S未完成整改项交接")]
       [MaxLength(255)]
       [Column(TypeName="varchar(255)")]
       [Editable(true)]
       public string weiwancheng { get; set; }

       
    }
}