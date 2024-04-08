using VOL.Entity.MappingConfiguration;
using VOL.Entity.DomainModels;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace VOL.Entity.MappingConfiguration
{
    public class dataCollection_tjycMapConfig : EntityMappingConfiguration<dataCollection_tjyc>
    {
        public override void Map(EntityTypeBuilder<dataCollection_tjyc>
        builderTable)
        {
          //b.Property(x => x.StorageName).HasMaxLength(45);
        }
     }
}

