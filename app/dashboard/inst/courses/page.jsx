import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusCircle, Users } from "lucide-react"; // Using lucide-react for icons

// Make sure you have lucide-react installed: npm install lucide-react

// Updated dummy data for an instructor's courses
const instructorCourses = [
  {
    title: "Modern React from Scratch",
    status: "Published",
    imageUrl: "https://placehold.co/600x400/3498db/ffffff?text=React",
    studentsEnrolled: 125,
    category: "Web Dev",
  },
  {
    title: "Advanced Python for Data Science",
    status: "Published",
    imageUrl: "https://placehold.co/600x400/e74c3c/ffffff?text=Python",
    studentsEnrolled: 88,
    category: "Data Science",
  },
  {
    title: "UI/UX Design Fundamentals",
    status: "Draft",
    imageUrl: "https://placehold.co/600x400/9b59b6/ffffff?text=UI/UX",
    studentsEnrolled: 0,
    category: "Design",
  },
  {
    title: "Next.js 14: The Full Course",
    status: "Published",
    imageUrl: "https://placehold.co/600x400/2c3e50/ffffff?text=Next.js",
    studentsEnrolled: 210,
    category: "Web Dev",
  },
];

export default function InstructorDashboardPage() {
  return (
    <div className="container mx-auto px-4">
      <header className="flex flex-col items-start justify-between gap-4 mb-12 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            My Courses 
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Manage your courses, view enrollments, and track student progress.
          </p>
        </div>
        <Button size="lg">
          <PlusCircle className="mr-2 h-5 w-5" />
          Create New Course
        </Button>
      </header>

      <main className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {instructorCourses.map((course) => (
          <Card key={course.title} className="flex flex-col overflow-hidden">
            <img
              src={course.imageUrl}
              alt={`${course.title} thumbnail`}
              className="h-56 w-full object-cover"
            />
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{course.title}</CardTitle>
                <Badge variant={course.status === "Published" ? "default" : "secondary"}>
                  {course.status}
                </Badge>
              </div>
              <CardDescription className="pt-2">{course.category}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="mr-2 h-4 w-4" />
                <span>{course.studentsEnrolled} students enrolled</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Manage Course
              </Button>
            </CardFooter>
          </Card>
        ))}
      </main>
    </div>
  );
}