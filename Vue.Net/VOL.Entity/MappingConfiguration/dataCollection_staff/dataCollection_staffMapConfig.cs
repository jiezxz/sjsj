using VOL.Entity.MappingConfiguration;
using VOL.Entity.DomainModels;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace VOL.Entity.MappingConfiguration
{
    public class dataCollection_staffMapConfig : EntityMappingConfiguration<dataCollection_staff>
    {
        public override void Map(EntityTypeBuilder<dataCollection_staff>
        builderTable)
        {
          //b.Property(x => x.StorageName).HasMaxLength(45);
        }
     }
}

