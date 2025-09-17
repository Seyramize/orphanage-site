"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Heart, Gift, Music, Utensils, Star } from "lucide-react"
import Link from "next/link"

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const events = [
    {
      id: 1,
      title: "Annual Charity Gala",
      date: "2024-03-15",
      time: "6:00 PM - 10:00 PM",
      location: "Grand Ballroom, Downtown Hotel",
      category: "fundraising",
      description:
        "Join us for an elegant evening of dining, entertainment, and fundraising to support our children's programs.",
      image: "/elegant-charity-gala-event.jpg",
      price: "$150 per person",
      capacity: "200 guests",
      featured: true,
      tags: ["Formal", "Dinner", "Auction"],
    },
    {
      id: 2,
      title: "Spring Family Fun Day",
      date: "2024-04-20",
      time: "10:00 AM - 4:00 PM",
      location: "Cajamor Int. & Orphanage Foundation Campus",
      category: "community",
      description:
        "A day of games, activities, and fun for the whole family. Meet our children and learn about our programs.",
      image: "/family-fun-day-activities.jpg",
      price: "Free",
      capacity: "500 families",
      featured: false,
      tags: ["Family-Friendly", "Free", "Activities"],
    },
    {
      id: 3,
      title: "Children's Art Exhibition",
      date: "2024-05-10",
      time: "2:00 PM - 6:00 PM",
      location: "Community Art Center",
      category: "showcase",
      description:
        "Celebrate the creativity of our children with an exhibition featuring their artwork, music, and performances.",
      image: "/childrens-art-exhibition.jpg",
      price: "Free",
      capacity: "150 guests",
      featured: false,
      tags: ["Art", "Music", "Performance"],
    },
    {
      id: 4,
      title: "Volunteer Appreciation Dinner",
      date: "2024-06-05",
      time: "6:30 PM - 9:00 PM",
      location: "Cajamor Int. & Orphanage Foundation Dining Hall",
      category: "appreciation",
      description:
        "Honoring our dedicated volunteers who make our mission possible. By invitation only for active volunteers.",
      image: "/volunteer-appreciation-dinner.jpg",
      price: "Invitation Only",
      capacity: "80 volunteers",
      featured: false,
      tags: ["Volunteers", "Appreciation", "Dinner"],
    },
    {
      id: 5,
      title: "Back-to-School Supply Drive",
      date: "2024-08-15",
      time: "9:00 AM - 3:00 PM",
      location: "Multiple Locations",
      category: "drive",
      description: "Help us collect school supplies for our children. Drop-off locations throughout the city.",
      image: "/school-supply-drive.jpg",
      price: "Donation Drive",
      capacity: "Community-wide",
      featured: false,
      tags: ["School Supplies", "Community", "Drive"],
    },
    {
      id: 6,
      title: "Holiday Celebration & Gift Drive",
      date: "2024-12-20",
      time: "4:00 PM - 8:00 PM",
      location: "Cajamor Int. & Orphanage Foundation Campus",
      category: "celebration",
      description:
        "Join us for our annual holiday celebration with dinner, entertainment, and gift distribution for our children.",
      image: "/holiday-celebration-event.jpg",
      price: "Free",
      capacity: "300 guests",
      featured: true,
      tags: ["Holiday", "Gifts", "Celebration"],
    },
  ]

  const categories = [
    { id: "all", label: "All Events", icon: Calendar },
    { id: "fundraising", label: "Fundraising", icon: Heart },
    { id: "community", label: "Community", icon: Users },
    { id: "showcase", label: "Showcase", icon: Star },
    { id: "appreciation", label: "Appreciation", icon: Gift },
    { id: "drive", label: "Drives", icon: Utensils },
    { id: "celebration", label: "Celebrations", icon: Music },
  ]

  const filteredEvents =
    selectedCategory === "all" ? events : events.filter((event) => event.category === selectedCategory)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const isUpcoming = (dateString: string) => {
    const eventDate = new Date(dateString)
    const today = new Date()
    return eventDate >= today
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">Upcoming Events</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Join us for special events, fundraisers, and community gatherings that support our mission and celebrate
              our children's achievements.
            </p>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-8 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  <IconComponent className="h-4 w-4" />
                  {category.label}
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {selectedCategory === "all" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Featured Events</h2>
              <p className="text-lg text-muted-foreground text-pretty">Don't miss these special upcoming events</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {events
                .filter((event) => event.featured && isUpcoming(event.date))
                .map((event) => (
                  <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">{event.category}</Badge>
                        <div className="flex gap-1">
                          {event.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {formatDate(event.date)}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          {event.capacity}
                        </div>
                      </div>
                      <div className="flex justify-between items-center pt-4">
                        <span className="font-semibold text-primary">{event.price}</span>
                        <Button>Learn More</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* All Events */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              {selectedCategory === "all" ? "All Events" : categories.find((c) => c.id === selectedCategory)?.label}
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              {filteredEvents.length} event{filteredEvents.length !== 1 ? "s" : ""} found
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  {!isUpcoming(event.date) && (
                    <Badge variant="secondary" className="absolute top-2 right-2">
                      Past Event
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{event.category}</Badge>
                    <div className="flex gap-1">
                      {event.tags.slice(0, 1).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {event.location}
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm font-semibold text-primary">{event.price}</span>
                    <Button size="sm" variant={isUpcoming(event.date) ? "default" : "outline"}>
                      {isUpcoming(event.date) ? "Register" : "View Details"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Hosting */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Host an Event for Cajamor Int. & Orphanage Foundation</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
            Interested in organizing a fundraising event or community gathering to support our mission? We'd love to
            work with you to create something special that benefits our children.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Plan an Event</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/volunteer">Volunteer at Events</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
