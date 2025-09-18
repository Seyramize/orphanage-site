import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, GraduationCap, Home, DollarSign } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  Nurturing Children, <span className="text-primary">Building Futures</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  At Cajamor Int. & Orphanage Foundation, we provide a loving home where children can grow, learn, and thrive. Every
                  child deserves love, education, and the opportunity for a brighter tomorrow.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">Learn Our Story</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/1.jpg"
                alt="Children playing together at Cajamor Int. & Orphanage Foundation"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Our Mission</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            To provide a safe, nurturing environment where children can heal, grow, and develop into confident, capable
            individuals. We believe every child has the potential to achieve greatness when given love, support, and
            opportunities to learn and thrive.
          </p>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">How We Help</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Comprehensive care and support for every child in our family
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Home className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Safe Housing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Comfortable, secure homes where children feel safe and loved</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Quality education and tutoring to help every child reach their potential
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Comprehensive medical and mental health support for all children</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Life Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Training and mentorship to prepare children for independent living</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Get Involved</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              There are many ways to support our mission and make a difference
            </p>
          </div>
          <div className="grid md:grid-cols-1 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Donate</CardTitle>
                <CardDescription>Your contribution directly supports our children's needs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-left space-y-3 text-muted-foreground">
                  <p>
                    We gratefully accept in-kind donations such as clothing (all ages), shoes, school supplies,
                    non-perishable food items, toiletries, and gently used laptops and phones.
                  </p>
                  <p>
                    To donate items, please call <span className="font-medium text-foreground">+233 55 697 6681</span> or <span className="font-medium text-foreground">+1 (406) 599-2615</span> or email
                    <span className="font-medium text-foreground"> bertha.haas1@gmail.com</span> to arrange drop-off or pickup.
                  </p>
                  <p>
                    Monetary gifts are also appreciated. Bank/Mobile Money details will be shared upon request while we finalize our online donation page.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">In the Community</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Recent outreach moments from Cajamor Int. & Orphanage Foundation
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/1.jpg", alt: "Students gathering outside classroom receiving supplies" },
              { src: "/2.jpg", alt: "Children in classroom during outreach program" },
              { src: "/3.jpg", alt: "Children in classroom during outreach program" },
              { src: "/4.jpg", alt: "Children in classroom during outreach program" },
              { src: "/5.jpg", alt: "Children in classroom during outreach program" },
            ].map((img) => (
              <div key={img.src} className="overflow-hidden rounded-lg shadow-md">
                <img src={img.src} alt={img.alt} className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Every Child Deserves a Chance</h2>
          <p className="text-lg mb-8 text-pretty leading-relaxed opacity-90">
            Your support can transform a child's life. Whether through donations, volunteering, or simply spreading
            awareness, you can help us continue our mission of providing hope and opportunity to children in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {false && (
              <Button asChild size="lg" variant="secondary">
                <Link href="/donate">Donate Today</Link>
              </Button>
            )}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
