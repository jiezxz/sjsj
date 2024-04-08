using VOL.Entity.MappingConfiguration;
using VOL.Entity.DomainModels;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace VOL.Entity.MappingConfiguration
{
    public class chanPinYiChangGuanLiQingDanMapConfig : EntityMappingConfiguration<chanPinYiChangGuanLiQingDan>
    {
        public override void Map(EntityTypeBuilder<chanPinYiChangGuanLiQingDan>
        builderTable)
        {
          //b.Property(x => x.StorageName).HasMaxLength(45);
        }
     }
}

