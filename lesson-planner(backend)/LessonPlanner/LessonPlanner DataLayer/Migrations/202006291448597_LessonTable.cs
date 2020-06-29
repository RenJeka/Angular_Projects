namespace LessonPlanner_DataLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class LessonTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Lessons",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        IsCompleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Lessons");
        }
    }
}
