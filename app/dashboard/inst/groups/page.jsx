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
import { PlusCircle, Users, BookOpen } from "lucide-react"; // Added BookOpen icon
import Link from "next/link";

// Dummy data for the instructor's groups
const instructorGroups = [
  {
    id:1,
    name: "Fall 2025 Web Dev Cohort",
    description: "The main cohort for students enrolled in the 'Modern React' course this semester.",
    imageUrl: "https://placehold.co/600x400/27ae60/ffffff?text=Cohort",
    memberCount: 45,
    associatedCourse: "Modern React from Scratch",
  },
  {
     id:2,
    name: "Python Study Group",
    description: "A supplementary group for advanced learners in the Python data science track.",
    imageUrl: "https://placehold.co/600x400/c0392b/ffffff?text=Study+Group",
    memberCount: 18,
    associatedCourse: "Advanced Python for Data Science",
  },
  {
     id:3,
    name: "Next.js Project Team",
    description: "A dedicated group for the final capstone project of the Next.js course.",
    imageUrl: "https://placehold.co/600x400/2c3e50/ffffff?text=Project+Team",
    memberCount: 8,
    associatedCourse: "Next.js 14: The Full Course",
  },
  {
     id:4,
    name: "UI/UX Beginners",
    description: "A safe space for new designers to share work and get feedback.",
    imageUrl: "https://placehold.co/600x400/8e44ad/ffffff?text=Design+Group",
    memberCount: 32,
    associatedCourse: "UI/UX Design Fundamentals",
  },
];

export default function MyGroupsPage() {
  return (
    <div className="container mx-auto px-4 ">
      <header className="flex flex-col items-start justify-between gap-4 mb-12 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            My Groups
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Manage your student groups, send announcements, and track discussions.
          </p>
        </div>
        <Button size="lg">
          <PlusCircle className="mr-2 h-5 w-5" />
          <Link href='/dashboard/inst/groups/create-group'>
            Create New Group
          </Link>
        </Button>
      </header>

      <main className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {instructorGroups.map((group) => (
          <Card key={group.id} className="flex flex-col overflow-hidden">
            <img
              src={group.imageUrl}
              alt={`${group.name} thumbnail`}
              className="h-56 w-full object-cover"
            />
            <CardHeader>
              <CardTitle>{group.name}</CardTitle>
              <CardDescription className="pt-2">{group.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="mr-2 h-4 w-4" />
                <span>{group.memberCount} members</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <BookOpen className="mr-2 h-4 w-4" />
                 <Badge variant="secondary">{group.associatedCourse}</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Link href="/dashboard/inst/groups/1">
                Manage Group
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </main>
    </div>
  );
}