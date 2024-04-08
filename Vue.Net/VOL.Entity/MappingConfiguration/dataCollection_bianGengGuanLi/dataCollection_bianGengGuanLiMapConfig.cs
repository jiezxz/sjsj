using VOL.Entity.MappingConfiguration;
using VOL.Entity.DomainModels;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace VOL.Entity.MappingConfiguration
{
    public class dataCollection_bianGengGuanLiMapConfig : EntityMappingConfiguration<dataCollection_bianGengGuanLi>
    {
        public override void Map(EntityTypeBuilder<dataCollection_bianGengGuanLi>
        builderTable)
        {
          //b.Property(x => x.StorageName).HasMaxLength(45);
        }
     }
}

