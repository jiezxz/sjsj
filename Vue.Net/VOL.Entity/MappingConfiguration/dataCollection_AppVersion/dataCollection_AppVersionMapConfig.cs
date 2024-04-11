using VOL.Entity.MappingConfiguration;
using VOL.Entity.DomainModels;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace VOL.Entity.MappingConfiguration
{
    public class dataCollection_AppVersionMapConfig : EntityMappingConfiguration<dataCollection_AppVersion>
    {
        public override void Map(EntityTypeBuilder<dataCollection_AppVersion>
        builderTable)
        {
          //b.Property(x => x.StorageName).HasMaxLength(45);
        }
     }
}

