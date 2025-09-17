"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Heart, CreditCard, Shield, Users, GraduationCap, Home, Utensils, Gift } from "lucide-react"

export default function DonatePage() {
  const [donationType, setDonationType] = useState("one-time")
  const [amount, setAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [donationPurpose, setDonationPurpose] = useState("general")
  const [isProcessing, setIsProcessing] = useState(false)

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000]

  const donationPurposes = [
    {
      id: "general",
      title: "General Support",
      description: "Support our overall mission and daily operations",
      icon: Heart,
    },
    {
      id: "education",
      title: "Education Programs",
      description: "Fund tutoring, school supplies, and college preparation",
      icon: GraduationCap,
    },
    {
      id: "housing",
      title: "Housing & Facilities",
      description: "Maintain safe, comfortable living spaces for children",
      icon: Home,
    },
    {
      id: "food",
      title: "Food & Nutrition",
      description: "Provide healthy meals and nutrition programs",
      icon: Utensils,
    },
    {
      id: "programs",
      title: "Special Programs",
      description: "Fund arts, sports, and life skills programs",
      icon: Users,
    },
    {
      id: "emergency",
      title: "Emergency Fund",
      description: "Help children in crisis situations",
      icon: Shield,
    },
  ]

  const impactExamples = [
    { amount: 25, impact: "Provides school supplies for one child for a month" },
    { amount: 50, impact: "Covers nutritious meals for one child for a week" },
    { amount: 100, impact: "Funds counseling sessions for one child for a month" },
    { amount: 250, impact: "Supports one child's education expenses for a semester" },
    { amount: 500, impact: "Provides comprehensive care for one child for a month" },
    { amount: 1000, impact: "Funds a child's college scholarship for one semester" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Thank you for your donation! You will receive a confirmation email shortly.")
    setIsProcessing(false)
  }

  const selectedAmount = customAmount || amount
  const selectedImpact = impactExamples.find((example) => example.amount.toString() === selectedAmount)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">Make a Difference Today</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Your donation directly impacts the lives of children in our care. Every contribution, no matter the size,
              helps us provide love, education, and opportunities for a brighter future.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Donation Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Heart className="h-6 w-6 text-primary" />
                    Donation Details
                  </CardTitle>
                  <CardDescription>
                    Choose your donation amount and how you'd like to support our mission
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Donation Type */}
                    <div className="space-y-4">
                      <Label className="text-base font-semibold">Donation Type</Label>
                      <RadioGroup value={donationType} onValueChange={setDonationType} className="flex gap-6">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="one-time" id="one-time" />
                          <Label htmlFor="one-time">One-time</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="monthly" id="monthly" />
                          <Label htmlFor="monthly">Monthly</Label>
                          <Badge variant="secondary" className="ml-2">
                            Recommended
                          </Badge>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Amount Selection */}
                    <div className="space-y-4">
                      <Label className="text-base font-semibold">Donation Amount</Label>
                      <div className="grid grid-cols-3 gap-3">
                        {predefinedAmounts.map((presetAmount) => (
                          <Button
                            key={presetAmount}
                            type="button"
                            variant={amount === presetAmount.toString() ? "default" : "outline"}
                            onClick={() => {
                              setAmount(presetAmount.toString())
                              setCustomAmount("")
                            }}
                            className="h-12"
                          >
                            ${presetAmount}
                          </Button>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="custom-amount">Custom Amount</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                            $
                          </span>
                          <Input
                            id="custom-amount"
                            type="number"
                            placeholder="Enter amount"
                            value={customAmount}
                            onChange={(e) => {
                              setCustomAmount(e.target.value)
                              setAmount("")
                            }}
                            className="pl-8"
                            min="1"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Impact Display */}
                    {selectedImpact && (
                      <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Gift className="h-5 w-5 text-primary" />
                          <span className="font-semibold text-primary">Your Impact</span>
                        </div>
                        <p className="text-muted-foreground">
                          ${selectedAmount} {selectedImpact.impact.toLowerCase()}
                        </p>
                      </div>
                    )}

                    {/* Donation Purpose */}
                    <div className="space-y-4">
                      <Label className="text-base font-semibold">How would you like your donation used?</Label>
                      <RadioGroup value={donationPurpose} onValueChange={setDonationPurpose} className="space-y-3">
                        {donationPurposes.map((purpose) => {
                          const IconComponent = purpose.icon
                          return (
                            <div
                              key={purpose.id}
                              className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                            >
                              <RadioGroupItem value={purpose.id} id={purpose.id} className="mt-1" />
                              <div className="flex-1">
                                <Label
                                  htmlFor={purpose.id}
                                  className="flex items-center gap-2 font-medium cursor-pointer"
                                >
                                  <IconComponent className="h-4 w-4 text-primary" />
                                  {purpose.title}
                                </Label>
                                <p className="text-sm text-muted-foreground mt-1">{purpose.description}</p>
                              </div>
                            </div>
                          )
                        })}
                      </RadioGroup>
                    </div>

                    {/* Donor Information */}
                    <div className="space-y-4">
                      <Label className="text-base font-semibold">Donor Information</Label>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name *</Label>
                          <Input id="first-name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name *</Label>
                          <Input id="last-name" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <Input id="phone" type="tel" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message (Optional)</Label>
                        <Textarea id="message" placeholder="Share why you're supporting Cajamor Int. & Orphanage Foundation..." />
                      </div>
                    </div>

                    {/* Payment Information */}
                    <div className="space-y-4">
                      <Label className="text-base font-semibold flex items-center gap-2">
                        <CreditCard className="h-4 w-4" />
                        Payment Information
                      </Label>
                      <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number *</Label>
                        <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry *</Label>
                          <Input id="expiry" placeholder="MM/YY" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input id="cvv" placeholder="123" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zip">ZIP Code *</Label>
                          <Input id="zip" placeholder="12345" required />
                        </div>
                      </div>
                    </div>

                    {/* Terms and Privacy */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox id="newsletter" />
                        <Label htmlFor="newsletter" className="text-sm">
                          I would like to receive updates about Cajamor Int. & Orphanage Foundation's work and impact
                        </Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="terms" required />
                        <Label htmlFor="terms" className="text-sm">
                          I agree to the terms and conditions and privacy policy *
                        </Label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" size="lg" className="w-full" disabled={!selectedAmount || isProcessing}>
                      {isProcessing ? (
                        "Processing..."
                      ) : (
                        <>
                          <Heart className="h-4 w-4 mr-2" />
                          Donate ${selectedAmount || "0"} {donationType === "monthly" ? "Monthly" : "Now"}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Security Notice */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Secure Donation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    SSL encrypted and secure
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CreditCard className="h-4 w-4" />
                    PCI compliant payment processing
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Heart className="h-4 w-4" />
                    100% of your donation goes to our programs
                  </div>
                </CardContent>
              </Card>

              {/* Impact Examples */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Your Impact</CardTitle>
                  <CardDescription>See how your donation makes a difference</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {impactExamples.slice(0, 4).map((example) => (
                    <div key={example.amount} className="flex justify-between items-start gap-3 text-sm">
                      <span className="font-semibold text-primary">${example.amount}</span>
                      <span className="text-muted-foreground text-right">{example.impact}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Other Ways to Help */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Other Ways to Help</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Users className="h-4 w-4 mr-2" />
                    Volunteer with Us
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Gift className="h-4 w-4 mr-2" />
                    Donate Items
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Heart className="h-4 w-4 mr-2" />
                    Sponsor a Child
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Information */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Tax Deductible Donation</h2>
          <p className="text-muted-foreground leading-relaxed">
            Cajamor Int. & Orphanage Foundation is a 501(c)(3) nonprofit organization. Your donation is tax-deductible to the full
            extent allowed by law. Tax ID: 12-3456789. You will receive a receipt for your records via email.
          </p>
        </div>
      </section>
    </div>
  )
}
