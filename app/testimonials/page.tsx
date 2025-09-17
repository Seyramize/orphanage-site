import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Quote, Star, Heart, Users, Award } from "lucide-react"
import Link from "next/link"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Former Resident, Now College Graduate",
      image: "/young-woman-college-graduate.jpg",
      quote:
        "Cajamor Int. & Orphanage Foundation didn't just give me a place to live - they gave me a family and the tools to succeed. The education support and mentorship I received helped me graduate college with honors. I'm now a social worker, inspired to help other children the way Cajamor Int. & Orphanage Foundation helped me.",
      category: "Alumni Success",
      year: "Resident 2010-2016",
      rating: 5,
    },
    {
      name: "Michael and Lisa Rodriguez",
      role: "Adoptive Parents",
      image: "/hispanic-couple-family.jpg",
      quote:
        "We adopted our daughter Emma through Cajamor Int. & Orphanage Foundation's program. The staff's dedication to matching children with the right families is incredible. They provided ongoing support throughout the process and continue to be there for our family. Emma is thriving, and we couldn't be happier.",
      category: "Adoptive Family",
      year: "Adoption completed 2020",
      rating: 5,
    },
    {
      name: "Dr. Patricia Williams",
      role: "Community Partner & Pediatrician",
      image: "/african-american-female-doctor.jpg",
      quote:
        "As a pediatrician who works closely with Cajamor Int. & Orphanage Foundation, I've seen firsthand the exceptional care they provide. Their holistic approach to child development and trauma-informed care sets them apart. These children receive not just shelter, but genuine love and comprehensive support.",
      category: "Community Partner",
      year: "Partner since 2015",
      rating: 5,
    },
    {
      name: "James Thompson",
      role: "Former Resident, Now Business Owner",
      image: "/young-black-man-entrepreneur.jpg",
      quote:
        "The life skills program at Cajamor Int. & Orphanage Foundation taught me everything from financial literacy to job interview skills. Today, I own my own construction company and employ 15 people. I credit Cajamor Int. & Orphanage Foundation with giving me the foundation and confidence to pursue my dreams.",
      category: "Alumni Success",
      year: "Resident 2008-2014",
      rating: 5,
    },
    {
      name: "Maria Santos",
      role: "Volunteer Mentor",
      image: "/latina-woman-volunteer.jpg",
      quote:
        "Volunteering at Cajamor Int. & Orphanage Foundation has been one of the most rewarding experiences of my life. Watching the children grow, learn, and overcome challenges is inspiring. The staff creates such a supportive environment that brings out the best in everyone - volunteers and children alike.",
      category: "Volunteer",
      year: "Volunteer since 2018",
      rating: 5,
    },
    {
      name: "Robert and Jennifer Kim",
      role: "Monthly Donors",
      image: "/asian-couple-donors.jpg",
      quote:
        "We've been supporting Cajamor Int. & Orphanage Foundation for over 10 years, and we've seen the incredible impact of their work. The transparency in how donations are used and the regular updates about the children's progress make us confident that our contributions are making a real difference.",
      category: "Donor",
      year: "Supporters since 2013",
      rating: 5,
    },
    {
      name: "Amanda Foster",
      role: "Former Resident, Now Teacher",
      image: "/young-woman-teacher.jpg",
      quote:
        "Cajamor Int. & Orphanage Foundation believed in me when I didn't believe in myself. The educational support and counseling helped me overcome trauma and focus on my studies. I'm now a elementary school teacher, and I use the same caring approach I learned at Cajamor Int. & Orphanage Foundation with my students.",
      category: "Alumni Success",
      year: "Resident 2012-2018",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Local Business Owner",
      image: "/asian-business-owner.png",
      quote:
        "Our company has partnered with Cajamor Int. & Orphanage Foundation for job training programs. The young adults who come through their life skills program are well-prepared, motivated, and have strong work ethics. Several of our best employees are Cajamor Int. & Orphanage Foundation graduates.",
      category: "Business Partner",
      year: "Partner since 2017",
      rating: 5,
    },
  ]

  const stats = [
    { icon: Users, value: "98%", label: "Family Satisfaction Rate" },
    { icon: Award, value: "95%", label: "Alumni Success Rate" },
    { icon: Heart, value: "500+", label: "Active Volunteers" },
    { icon: Star, value: "4.9/5", label: "Community Rating" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">Stories of Hope</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Hear from the families, children, volunteers, and community members whose lives have been touched by Cajamor Int. & Orphanage Foundation.
              These stories reflect the real impact of our mission and the power of community support.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Our Impact in Numbers</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              The measurable difference we make in our community
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-3xl font-bold text-primary">{stat.value}</CardTitle>
                    <CardDescription className="font-medium">{stat.label}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">What People Say</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Real stories from real people whose lives have been impacted by Cajamor Int. & Orphanage Foundation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm">{testimonial.role}</CardDescription>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="secondary" className="text-xs">
                          {testimonial.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {testimonial.year}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground leading-relaxed italic pl-6">"{testimonial.quote}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Share Your Story</h2>
          <p className="text-lg mb-8 text-pretty leading-relaxed opacity-90">
            Have you been impacted by Cajamor Int. & Orphanage Foundation? We'd love to hear your story and share how our community continues to
            make a difference in children's lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Share Your Story</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/donate">Support Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
