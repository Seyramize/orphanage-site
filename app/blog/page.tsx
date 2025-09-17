"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, Heart, BookOpen, Users, Star } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const blogPosts = [
    {
      id: 1,
      title: "Maria's Journey: From Shy Child to Confident Leader",
      excerpt:
        "Follow Maria's incredible transformation over the past two years at Cajamor Int. & Orphanage Foundation, from a quiet newcomer to a confident young leader inspiring other children.",
      content: "Maria arrived at Cajamor Int. & Orphanage Foundation two years ago as a shy 8-year-old who barely spoke above a whisper...",
      author: "Sarah Johnson",
      authorRole: "Program Director",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "success-stories",
      tags: ["Leadership", "Personal Growth", "Inspiration"],
      image: "/maria-success-story.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "New Educational Programs Launch This Spring",
      excerpt:
        "We're excited to announce three new educational initiatives designed to enhance learning opportunities for our children.",
      content: "This spring, Cajamor Int. & Orphanage Foundation is launching three innovative educational programs...",
      author: "Dr. Michael Chen",
      authorRole: "Education Coordinator",
      date: "2024-01-10",
      readTime: "3 min read",
      category: "programs",
      tags: ["Education", "Programs", "Announcement"],
      image: "/new-educational-programs.jpg",
      featured: false,
    },
    {
      id: 3,
      title: "Community Garden Project Blooms with Success",
      excerpt:
        "Our children have been working hard in the community garden, learning valuable life skills while growing fresh produce for our kitchen.",
      content: "The community garden project has exceeded all our expectations this year...",
      author: "Lisa Rodriguez",
      authorRole: "Life Skills Coordinator",
      date: "2024-01-05",
      readTime: "4 min read",
      category: "activities",
      tags: ["Garden", "Life Skills", "Community"],
      image: "/community-garden-project.jpg",
      featured: false,
    },
    {
      id: 4,
      title: "Thank You to Our Amazing Volunteers",
      excerpt:
        "This month we celebrate the incredible dedication of our volunteer team who make our mission possible every single day.",
      content: "Our volunteers are the heart and soul of Cajamor Int. & Orphanage Foundation...",
      author: "Jennifer Martinez",
      authorRole: "Volunteer Coordinator",
      date: "2023-12-28",
      readTime: "3 min read",
      category: "community",
      tags: ["Volunteers", "Appreciation", "Community"],
      image: "/volunteer-appreciation.jpg",
      featured: false,
    },
    {
      id: 5,
      title: "Holiday Celebration Brings Joy and Wonder",
      excerpt:
        "Our annual holiday celebration was filled with laughter, gifts, and magical moments that our children will treasure forever.",
      content: "The holiday season at Cajamor Int. & Orphanage Foundation is always special...",
      author: "David Thompson",
      authorRole: "Activities Director",
      date: "2023-12-22",
      readTime: "4 min read",
      category: "events",
      tags: ["Holidays", "Celebration", "Joy"],
      image: "/holiday-celebration.jpg",
      featured: true,
    },
    {
      id: 6,
      title: "Building Resilience: Mental Health Support at Cajamor Int. & Orphanage Foundation",
      excerpt:
        "Learn about our comprehensive mental health and counseling services that help our children build emotional resilience and cope with challenges.",
      content: "Mental health support is a cornerstone of our care at Cajamor Int. & Orphanage Foundation...",
      author: "Dr. Amanda Foster",
      authorRole: "Clinical Director",
      date: "2023-12-15",
      readTime: "6 min read",
      category: "health",
      tags: ["Mental Health", "Counseling", "Resilience"],
      image: "/mental-health-support.jpg",
      featured: false,
    },
  ]

  const categories = [
    { id: "all", label: "All Posts", icon: BookOpen },
    { id: "success-stories", label: "Success Stories", icon: Star },
    { id: "programs", label: "Programs", icon: Users },
    { id: "activities", label: "Activities", icon: Heart },
    { id: "community", label: "Community", icon: Users },
    { id: "events", label: "Events", icon: Calendar },
    { id: "health", label: "Health & Wellness", icon: Heart },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">Stories & Updates</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Follow the journeys of our children, learn about our programs, and stay updated with the latest news from
              Cajamor Int. & Orphanage Foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search stories and updates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const IconComponent = category.icon
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <IconComponent className="h-3 w-3" />
                    {category.label}
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "all" && searchTerm === "" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Featured Stories</h2>
              <p className="text-lg text-muted-foreground text-pretty">Inspiring stories from our community</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {blogPosts
                .filter((post) => post.featured)
                .map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-64 object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">{post.category.replace("-", " ")}</Badge>
                        <div className="flex gap-1">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <CardTitle className="text-xl hover:text-primary transition-colors">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </CardTitle>
                      <CardDescription className="text-base">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDate(post.date)}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <Button asChild className="w-full">
                        <Link href={`/blog/${post.id}`}>Read Full Story</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              {selectedCategory === "all" ? "All Stories" : categories.find((c) => c.id === selectedCategory)?.label}
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              {filteredPosts.length} post{filteredPosts.length !== 1 ? "s" : ""} found
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{post.category.replace("-", " ")}</Badge>
                    <div className="flex gap-1">
                      {post.tags.slice(0, 1).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg hover:text-primary transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span className="truncate">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {formatDate(post.date)}
                  </div>
                  <Button asChild size="sm" className="w-full">
                    <Link href={`/blog/${post.id}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
            Subscribe to our newsletter to receive the latest stories, updates, and news from Cajamor Int. & Orphanage Foundation directly in
            your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input placeholder="Enter your email address" type="email" className="flex-1" />
            <Button>Subscribe</Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </section>
    </div>
  )
}
