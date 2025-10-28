import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, FileText, Calendar, MessageCircle } from "lucide-react";

const Dashboard = () => {
  const favorites = [
    { name: "Max", breed: "Golden Retriever", emoji: "🐕" },
    { name: "Luna", breed: "Persian Cat", emoji: "🐱" },
  ];

  const applications = [
    { pet: "Max", status: "Under Review", date: "2025-10-15" },
    { pet: "Bella", status: "Approved", date: "2025-10-10" },
  ];

  const appointments = [
    { pet: "Max", shelter: "Happy Paws", date: "2025-10-25", time: "2:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-12 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">My Dashboard</h1>
            <p className="text-muted-foreground">Manage your adoption journey</p>
          </div>

          <Tabs defaultValue="favorites" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="favorites">
                <Heart className="mr-2 h-4 w-4" />
                Favorites
              </TabsTrigger>
              <TabsTrigger value="applications">
                <FileText className="mr-2 h-4 w-4" />
                Applications
              </TabsTrigger>
              <TabsTrigger value="appointments">
                <Calendar className="mr-2 h-4 w-4" />
                Appointments
              </TabsTrigger>
              <TabsTrigger value="messages">
                <MessageCircle className="mr-2 h-4 w-4" />
                Messages
              </TabsTrigger>
            </TabsList>

            <TabsContent value="favorites" className="space-y-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {favorites.map((pet, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="text-6xl text-center mb-2">{pet.emoji}</div>
                      <CardTitle>{pet.name}</CardTitle>
                      <CardDescription>{pet.breed}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">View Details</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="applications" className="space-y-4">
              {applications.map((app, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Application for {app.pet}</CardTitle>
                        <CardDescription>Submitted on {app.date}</CardDescription>
                      </div>
                      <Badge variant={app.status === "Approved" ? "default" : "secondary"}>
                        {app.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline">View Application</Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="appointments" className="space-y-4">
              {appointments.map((apt, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>Meeting with {apt.shelter}</CardTitle>
                    <CardDescription>To meet {apt.pet}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm">
                      <span className="font-medium">Date:</span> {apt.date}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Time:</span> {apt.time}
                    </p>
                    <Button variant="outline" className="w-full">Reschedule</Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="messages" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Your Messages</CardTitle>
                  <CardDescription>Conversations with shelters</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">No messages yet. Start a conversation with a shelter!</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
