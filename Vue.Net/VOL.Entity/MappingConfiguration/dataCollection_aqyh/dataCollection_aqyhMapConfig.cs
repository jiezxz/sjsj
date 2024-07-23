using VOL.Entity.MappingConfiguration;
using VOL.Entity.DomainModels;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace VOL.Entity.MappingConfiguration
{
    public class dataCollection_aqyhMapConfig : EntityMappingConfiguration<dataCollection_aqyh>
    {
        public override void Map(EntityTypeBuilder<dataCollection_aqyh>
        builderTable)
        {
          //b.Property(x => x.StorageName).HasMaxLength(45);
        }
     }
}

