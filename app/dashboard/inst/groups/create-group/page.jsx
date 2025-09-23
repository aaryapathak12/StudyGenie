import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";

// Dummy data for courses to associate with the group
const availableCourses = [
  { id: "crs-001", title: "Modern React from Scratch" },
  { id: "crs-002", title: "Advanced Python for Data Science" },
  { id: "crs-003", title: "Next.js 14: The Full Course" },
];

export default function CreateGroupPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Create a New Group</CardTitle>
          <CardDescription>
            Fill out the details below to start a new student group.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="group-name">Group Name</Label>
            <Input id="group-name" placeholder="e.g., Fall 2025 Web Dev Cohort" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="group-description">Group Description</Label>
            <Textarea
              id="group-description"
              placeholder="Provide a brief description of the group's purpose..."
              rows={4}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="associated-course">Associated Course</Label>
            <Select>
              <SelectTrigger id="associated-course">
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                {availableCourses.map((course) => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button size="lg" className="w-full sm:w-auto">
            <PlusCircle className="mr-2 h-5 w-5" />
            Create Group
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
