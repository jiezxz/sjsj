using VOL.Entity.MappingConfiguration;
using VOL.Entity.DomainModels;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace VOL.Entity.MappingConfiguration
{
    public class dataCollection_cjkbMapConfig : EntityMappingConfiguration<dataCollection_cjkb>
    {
        public override void Map(EntityTypeBuilder<dataCollection_cjkb>
        builderTable)
        {
          //b.Property(x => x.StorageName).HasMaxLength(45);
        }
     }
}

