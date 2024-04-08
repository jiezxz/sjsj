using VOL.Entity.MappingConfiguration;
using VOL.Entity.DomainModels;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace VOL.Entity.MappingConfiguration
{
    public class dataCollection_9SInspectionMapConfig : EntityMappingConfiguration<dataCollection_9SInspection>
    {
        public override void Map(EntityTypeBuilder<dataCollection_9SInspection>
        builderTable)
        {
          //b.Property(x => x.StorageName).HasMaxLength(45);
        }
     }
}

