using VOL.Entity.MappingConfiguration;
using VOL.Entity.DomainModels;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace VOL.Entity.MappingConfiguration
{
    public class dataCollection_IPQCInspectionMapConfig : EntityMappingConfiguration<dataCollection_IPQCInspection>
    {
        public override void Map(EntityTypeBuilder<dataCollection_IPQCInspection>
        builderTable)
        {
          //b.Property(x => x.StorageName).HasMaxLength(45);
        }
     }
}

