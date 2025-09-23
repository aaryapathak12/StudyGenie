import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { ArrowLeft, BookOpen, Check, Edit, Trash2, Users, X } from "lucide-react";
import Link from "next/link";

// This is a dummy function to simulate fetching detailed group data by ID.
const getGroupData = async (groupId) => {
  console.log("Fetching detailed data for group:", groupId); 
  return {
    id: groupId,
    name: "Fall 2025 Web Dev Cohort",
    description: "The main cohort for students enrolled in web development courses this semester.",
    // A group can now have access to multiple courses
    associatedCourses: [
        { id: "crs-react", name: "Modern React from Scratch" },
        { id: "crs-nextjs", name: "Next.js 14: The Full Course" },
        { id: "crs-sql", name: "Introduction to SQL & Databases" },
    ],
    stats: {
        averageScore: "86%",
        assignmentsCompleted: "28/35",
        feedbackProvided: 73,
    },
    members: [
      { id: "u1", name: "Alice Johnson", role: "Student", status: "member", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d", 
        // Course stats are now keyed by course ID
        courseStats: {
          "crs-react": { progress: 95, score: 92, lastActive: "2025-09-22" },
          "crs-nextjs": { progress: 80, score: 88, lastActive: "2025-09-21" },
          "crs-sql": { progress: 100, score: 95, lastActive: "2025-09-20" },
        } 
      },
      { id: "u2", name: "Bob Williams", role: "Student", status: "member", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026705d", 
        courseStats: {
          "crs-react": { progress: 80, score: 85, lastActive: "2025-09-21" },
          "crs-nextjs": { progress: 65, score: 75, lastActive: "2025-09-22" },
          "crs-sql": { progress: 90, score: 88, lastActive: "2025-09-19" },
        }
      },
      { id: "u5", name: "Ethan Davis", role: "TA", status: "member", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026706d", 
        courseStats: {
          "crs-react": { progress: 100, score: 98, lastActive: "2025-09-23" },
          "crs-nextjs": { progress: 100, score: 99, lastActive: "2025-09-23" },
          "crs-sql": { progress: 100, score: 100, lastActive: "2025-09-23" },
        }
      },
    ],
    pendingMembers: [
      { id: "u3", name: "Charlie Brown", role: "Student", status: "pending", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026707d" },
      { id: "u4", name: "Diana Miller", role: "Student", status: "pending", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026708d" },
    ]
  };
};

export default async function GroupDetailsPage({ params }) {
  const group = await getGroupData(params.id);

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="mb-8">
        <Link href="/dashboard/inst/groups" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Groups
        </Link>
      </div>

      <header className="flex flex-col items-start justify-between gap-4 mb-8 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            {group.name}
          </h1>
          <div className="mt-2 flex items-center gap-4 text-muted-foreground">
             <div className="flex items-center text-sm">
                <Users className="mr-2 h-4 w-4"/>
                <span>{group.members.length} members</span>
            </div>
            <div className="flex items-center text-sm">
                <BookOpen className="mr-2 h-4 w-4"/>
                <span>{group.associatedCourses.length} Courses</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
            <Button variant="outline"><Edit className="mr-2 h-4 w-4"/> Edit</Button>
            <Button variant="destructive"><Trash2 className="mr-2 h-4 w-4"/> Delete</Button>
        </div>
      </header>

      <Tabs defaultValue="members" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:w-[520px] sm:grid-cols-4">
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="statistics">Statistics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="members" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Pending Requests ({group.pendingMembers.length})</CardTitle>
              <CardDescription>Accept or reject new students who want to join this group.</CardDescription>
            </CardHeader>
            <CardContent>
               <ul className="divide-y">
                {group.pendingMembers.map((member) => (
                  <li key={member.id} className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={member.avatarUrl} alt={member.name} />
                        <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon"><Check className="h-4 w-4"/></Button>
                        <Button variant="destructive" size="icon"><X className="h-4 w-4"/></Button>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Current Members ({group.members.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {group.members.map((member) => (
                  <li key={member.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={member.avatarUrl} alt={member.name} />
                        <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                     <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">Remove</Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Course-Specific Statistics</CardTitle>
              <CardDescription>Select a course to view detailed student performance.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={group.associatedCourses[0].id} className="w-full">
                <TabsList>
                  {group.associatedCourses.map(course => (
                    <TabsTrigger key={course.id} value={course.id}>{course.name}</TabsTrigger>
                  ))}
                </TabsList>
                {group.associatedCourses.map(course => (
                  <TabsContent key={course.id} value={course.id} className="mt-4">
                    <Table>
                      <TableHeader>
                          <TableRow>
                              <TableHead className="w-[300px]">Student</TableHead>
                              <TableHead>Progress</TableHead>
                              <TableHead className="text-center">Score</TableHead>
                              <TableHead className="text-right">Last Active</TableHead>
                          </TableRow>
                      </TableHeader>
                      <TableBody>
                          {group.members.map((member) => {
                            const stats = member.courseStats[course.id];
                            return (
                              <TableRow key={`${member.id}-${course.id}`}>
                                  <TableCell>
                                      <div className="flex items-center gap-3">
                                          <Avatar>
                                              <AvatarImage src={member.avatarUrl} alt={member.name}/>
                                              <AvatarFallback>{member.name.slice(0,2)}</AvatarFallback>
                                          </Avatar>
                                          <span className="font-medium">{member.name}</span>
                                      </div>
                                  </TableCell>
                                  <TableCell>
                                      <div className="flex items-center gap-3">
                                          <Progress value={stats.progress} className="w-[120px]"/>
                                          <span>{stats.progress}%</span>
                                      </div>
                                  </TableCell>
                                  <TableCell className="text-center">{stats.score}/100</TableCell>
                                  <TableCell className="text-right">{stats.lastActive}</TableCell>
                              </TableRow>
                            )
                          })}
                      </TableBody>
                    </Table>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="statistics" className="mt-6">
          <Card>
            <CardHeader>
                <CardTitle>Overall Performance</CardTitle>
                <CardDescription>A summary of the group's progress across all courses.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="rounded-lg border bg-card p-6 text-card-foreground">
                    <h3 className="text-sm font-medium text-muted-foreground">Average Score</h3>
                    <p className="mt-1 text-3xl font-semibold">{group.stats.averageScore}</p>
                </div>
                 <div className="rounded-lg border bg-card p-6 text-card-foreground">
                    <h3 className="text-sm font-medium text-muted-foreground">Assignments Completed</h3>
                    <p className="mt-1 text-3xl font-semibold">{group.stats.assignmentsCompleted}</p>
                </div>
                 <div className="rounded-lg border bg-card p-6 text-card-foreground">
                    <h3 className="text-sm font-medium text-muted-foreground">Feedback Provided</h3>
                    <p className="mt-1 text-3xl font-semibold">{group.stats.feedbackProvided}</p>
                </div>
            </CardContent>
          </Card>
        </TabsContent>

         <TabsContent value="settings" className="mt-6">
             <Card>
                <CardHeader>
                    <CardTitle>Group Settings</CardTitle>
                    <CardDescription>Manage the group's information and visibility.</CardDescription>
                </CardHeader>
                <CardContent>
                   <p className="text-muted-foreground">Settings form will be here...</p>
                </CardContent>
             </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

