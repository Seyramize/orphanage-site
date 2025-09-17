import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Target, Eye } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">About Cajamor Int. & Orphanage Foundation</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              For over 25 years, we've been a beacon of hope for children in need, providing not just shelter, but a
              loving family environment where every child can flourish.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Cajamor Int. & Orphanage Foundation was founded in 1998 by Maria and David Thompson, who saw the urgent need for a
                  safe haven for children who had nowhere else to turn. What started as a small home caring for five
                  children has grown into a comprehensive care facility serving over 150 children annually.
                </p>
                <p>
                  Our approach goes beyond providing basic needs. We believe in creating a true family environment where
                  children can heal from past trauma, build confidence, and develop the skills they need to succeed in
                  life. Every child who comes to us becomes part of our extended family.
                </p>
                <p>
                  Today, we're proud to have helped over 2,000 children transition to successful, independent lives.
                  Many of our former residents have gone on to college, started careers, and even returned to volunteer
                  and support the next generation of children in our care.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/warm-orphanage-building-with-children-playing-in-t.jpg"
                alt="Cajamor Int. & Orphanage Foundation building with children playing"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Our Foundation</h2>
            <p className="text-lg text-muted-foreground text-pretty">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-left">
                  To provide a safe, nurturing environment where children can heal, grow, and develop into confident,
                  capable individuals ready to contribute positively to society.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-left">
                  A world where every child has access to love, education, and opportunities to reach their full
                  potential, regardless of their circumstances.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-left">
                  Love, respect, integrity, empowerment, and community. We believe in treating every child with dignity
                  and providing them with the tools they need to succeed.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Our Impact</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              The difference we've made in children's lives over the years
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">2,000+</div>
              <div className="text-muted-foreground">Children Served</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">95%</div>
              <div className="text-muted-foreground">Graduation Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">150</div>
              <div className="text-muted-foreground">Current Residents</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">25</div>
              <div className="text-muted-foreground">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Join Our Mission</h2>
          <p className="text-lg mb-8 text-pretty leading-relaxed opacity-90">
            Help us continue providing hope and opportunity to children in need. Your support makes a real difference in
            their lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/donate">Support Our Work</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/programs">View Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
