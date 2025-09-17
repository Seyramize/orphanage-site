import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function StaffPage() {
  const leadership = [
    {
      name: "Bertha Akyereko",
      role: "Founder & Executive Director",
      image: "/founder1.jpg",
      bio: "Bertha co-founded Cajamor Int. & Orphanage Foundation with a vision to create a true family environment for children in need. With years of experience in child welfare, she holds a Master's in Social Work and is passionate about trauma-informed care.",
      credentials: [
        "MSW - Master of Social Work",
        "Licensed Clinical Social Worker",
        "Trauma-Informed Care Specialist",
      ],
      email: "bertha.haas1@gmail.com",
      phone: "+1 (406) 599-2615 | +233 55 697 6681",
    },
    {
      name: "Dela Bullen",
      role: "Co-Founder",
      image: "/founder2.jpg",
      bio: "Dela founded Cajamor Int. & Orphanage Foundation with a vision to create a true family environment for children in need. With years of experience in child welfare, she holds a Master's in Social Work and is passionate about trauma-informed care.",
      credentials: [
        "MSW - Master of Social Work",
        "Licensed Clinical Social Worker",
        "Trauma-Informed Care Specialist",
      ],
      email: "dzadzadela23@gmail.com",
      phone: "+1 (201) 852-0523",
    },
  ]

  const board = [
    {
      name: "Nana Berima Twereku Apem",
      role: "Board Chairman",
      department: "Board of Directors",
      image: "/chief.jpg",
      bio: "Nana Berima leads our board of directors with expertise in child psychology and trauma recovery.",
      credentials: ["Paramount Chief"],
      specialties: ["Board Chairman"],
    },
    {
      name: "Grace Adu Gyamfi",
      role: "Board Member",
      department: "Board of Directors",
      image: "/wife.jpg",
      bio: "Grace ensures every child receives quality education support and college preparation guidance.",
      credentials: ["Chief Mother"],
      specialties: ["Board Member"],
    },
    {
      name: "Prince Amankwaa Akyereko",
      role: "Board Member",
      department: "Board of Directors",
      image: "/placeholder-user.jpg",
      bio: "Prince our life skills programs that prepare teens for independent living.",
      credentials: ["Board Member"],
      specialties: ["Board Member"],
    },
    {
      name: "Dela Bullen",
      role: "Board Member",
      department: "Board of Directors",
      image: "/founder2.jpg",
      bio: "Dela guides our life skills programs, supporting teens as they prepare for a successful and independent future.",
      credentials: ["Board Member"],
      specialties: ["Board Member"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">Our Team</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated professionals who make Cajamor Int. & Orphanage Foundation a place where children can heal, grow, and thrive.
              Our team brings together expertise, compassion, and unwavering commitment to every child's success.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Leadership Team</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Our founders and executive leadership who guide Cajamor Int. & Orphanage Foundation's mission
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-2xl">{leader.name}</CardTitle>
                  <CardDescription className="text-lg font-medium text-primary">{leader.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{leader.bio}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Credentials:</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.credentials.map((credential, credIndex) => (
                        <Badge key={credIndex} variant="secondary" className="text-xs">
                          {credential}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 pt-4">
                    <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                      <Mail className="h-4 w-4" />
                      {leader.email}
                    </Button>
                    {(leader.phone?.split("|") || []).map((rawNum, phoneIndex) => {
                      const trimmed = rawNum.trim()
                      const telHref = `tel:${trimmed.replace(/[^\d+]/g, "")}`
                      return (
                        <Button
                          key={phoneIndex}
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2 bg-transparent max-w-full min-w-0"
                        >
                          <a href={telHref} aria-label={`Call ${leader.name} at ${trimmed}`} className="whitespace-normal break-words text-left">
                            <Phone className="h-4 w-4 shrink-0" />
                            {" "}{trimmed}
                          </a>
                        </Button>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Team */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Our Board of Directors</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Our board of directors is dedicated to providing comprehensive care and support to the children of Cajamor Int. & Orphanage Foundation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {board.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <img
                    src={member.image || "/placeholder-user.jpg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">{member.role}</CardDescription>
                  <Badge variant="outline">{member.department}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Credentials:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.credentials.map((credential, credIndex) => (
                        <Badge key={credIndex} variant="secondary" className="text-xs">
                          {credential}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, specIndex) => (
                        <Badge key={specIndex} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      {/* <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Join Our Team</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
            We're always looking for passionate professionals who want to make a difference in children's lives. If
            you're interested in joining our mission, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/careers">View Open Positions</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/volunteer">Volunteer Opportunities</Link>
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  )
}
