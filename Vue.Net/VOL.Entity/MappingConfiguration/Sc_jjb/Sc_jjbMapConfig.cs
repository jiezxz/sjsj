using VOL.Entity.MappingConfiguration;
using VOL.Entity.DomainModels;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace VOL.Entity.MappingConfiguration
{
    public class Sc_jjbMapConfig : EntityMappingConfiguration<Sc_jjb>
    {
        public override void Map(EntityTypeBuilder<Sc_jjb>
        builderTable)
        {
          //b.Property(x => x.StorageName).HasMaxLength(45);
        }
     }
}

