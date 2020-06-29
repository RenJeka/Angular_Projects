using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessonPlanner_DataLayer
{
    public class LessonsContext: DbContext
    {
        public LessonsContext() : base ("name=default")
        {

        }

        public DbSet<Lesson> Lessons { get; set; }

    }
}
