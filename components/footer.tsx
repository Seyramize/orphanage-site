"use client"

import Link from "next/link"
import { Heart, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Cajamor Int. & Orphanage Foundation</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Nurturing children, building futures. We provide a loving home, education, and opportunities for every child to thrive.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-primary">Programs</Link></li>
              {false && (
                <>
                  <li><Link href="/events" className="hover:text-primary">Events</Link></li>
                  <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                  <li><Link href="/donate" className="hover:text-primary">Donate</Link></li>
                </>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" /><span>Ntoroso palace, Ghana</span></li>
              <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5 text-muted-foreground" /><span>+233 55 697 6681</span></li>
              <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 text-muted-foreground" /><span>bertha.haas1@gmail.com</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center gap-4 text-muted-foreground">
              <Link href="#" aria-label="Facebook" className="hover:text-primary"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" aria-label="Twitter" className="hover:text-primary"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" aria-label="Instagram" className="hover:text-primary"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" aria-label="YouTube" className="hover:text-primary"><Youtube className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          <p>
            © {year} Cajamor International & Orphanage Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


