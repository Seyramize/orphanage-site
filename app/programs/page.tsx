import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Heart, Users, Palette, Music, Dumbbell, Briefcase, Home } from "lucide-react"
import Link from "next/link"

export default function ProgramsPage() {
  const programs = [
    {
      icon: GraduationCap,
      title: "Education Support",
      description: "Comprehensive academic support from elementary through high school",
      details: [
        "On-site tutoring and homework assistance",
        "College preparation programs",
        "Scholarship opportunities",
        "Special needs education support",
      ],
      ageRange: "Ages 5-18",
      category: "Academic",
    },
    {
      icon: Heart,
      title: "Counseling & Mental Health",
      description: "Professional therapy and emotional support services",
      details: [
        "Individual and group therapy sessions",
        "Trauma-informed care",
        "Crisis intervention support",
        "Family reunification counseling",
      ],
      ageRange: "All Ages",
      category: "Health",
    },
    {
      icon: Briefcase,
      title: "Life Skills Training",
      description: "Preparing teens for independent living and career success",
      details: [
        "Financial literacy education",
        "Job interview preparation",
        "Resume writing workshops",
        "Independent living skills",
      ],
      ageRange: "Ages 14-18",
      category: "Life Skills",
    },
    {
      icon: Palette,
      title: "Arts & Creative Expression",
      description: "Fostering creativity and self-expression through various art forms",
      details: [
        "Visual arts and painting classes",
        "Drama and theater programs",
        "Creative writing workshops",
        "Art therapy sessions",
      ],
      ageRange: "Ages 6-18",
      category: "Creative",
    },
    {
      icon: Music,
      title: "Music Program",
      description: "Building confidence and skills through musical education",
      details: [
        "Individual instrument lessons",
        "Choir and group performances",
        "Music theory education",
        "Recording studio access",
      ],
      ageRange: "Ages 7-18",
      category: "Creative",
    },
    {
      icon: Dumbbell,
      title: "Sports & Recreation",
      description: "Physical fitness and team-building through sports activities",
      details: [
        "Basketball and soccer teams",
        "Swimming lessons",
        "Martial arts classes",
        "Outdoor adventure programs",
      ],
      ageRange: "Ages 8-18",
      category: "Physical",
    },
    {
      icon: Users,
      title: "Mentorship Program",
      description: "One-on-one guidance from caring adult mentors",
      details: [
        "Weekly mentor meetings",
        "Career exploration activities",
        "Community service projects",
        "Leadership development",
      ],
      ageRange: "Ages 12-18",
      category: "Social",
    },
    {
      icon: Home,
      title: "Family Reunification",
      description: "Supporting families to safely reunite when possible",
      details: [
        "Family therapy sessions",
        "Supervised visitation programs",
        "Parent education classes",
        "Transition planning support",
      ],
      ageRange: "All Ages",
      category: "Family",
    },
  ]

  const categories = ["All", "Academic", "Health", "Life Skills", "Creative", "Physical", "Social", "Family"]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">Our Programs</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Comprehensive support services designed to help every child reach their full potential and prepare for a
              successful future.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Comprehensive Care</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Our holistic approach addresses every aspect of a child's development
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const IconComponent = program.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="h-10 w-10 text-primary" />
                      <div className="flex gap-2">
                        <Badge variant="secondary">{program.category}</Badge>
                        <Badge variant="outline">{program.ageRange}</Badge>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {program.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Program Success */}
      {/* <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">Program Success Stories</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our comprehensive programs have helped thousands of children overcome challenges and achieve their
                  dreams. From academic excellence to creative expression, we provide the tools and support needed for
                  success.
                </p>
                <p>
                  95% of our high school graduates go on to college or vocational training, and 87% of our program
                  participants report improved self-confidence and life skills within their first year.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">College Enrollment</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">87%</div>
                  <div className="text-sm text-muted-foreground">Improved Confidence</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/children-engaged-in-educational-activities-at-an-.jpg"
                alt="Children engaged in educational activities"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Support Our Programs</h2>
          <p className="text-lg mb-8 text-pretty leading-relaxed opacity-90">
            Your donation helps us maintain and expand these vital programs that transform children's lives every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/donate">Fund Programs</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/staff">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  )
}
