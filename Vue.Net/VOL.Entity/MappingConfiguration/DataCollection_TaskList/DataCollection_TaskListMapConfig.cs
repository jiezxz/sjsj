using VOL.Entity.MappingConfiguration;
using VOL.Entity.DomainModels;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace VOL.Entity.MappingConfiguration
{
    public class DataCollection_TaskListMapConfig : EntityMappingConfiguration<DataCollection_TaskList>
    {
        public override void Map(EntityTypeBuilder<DataCollection_TaskList>
        builderTable)
        {
          //b.Property(x => x.StorageName).HasMaxLength(45);
        }
     }
}

