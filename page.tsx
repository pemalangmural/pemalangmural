'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Star, Phone, Mail, MapPin, Instagram, Facebook, ChevronLeft, ChevronRight, Filter, Menu, X } from 'lucide-react'

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const portfolioItems = [
    { id: 1, category: 'interior', title: 'Living Room Art', image: '/portfolio-living-room.jpg' },
    { id: 2, category: 'eksterior', title: 'Building Facade', image: '/hero-mural.jpg' },
    { id: 3, category: 'cafe', title: 'Cafe Wall Design', image: '/portfolio-cafe.jpg' },
    { id: 4, category: 'kantor', title: 'Office Interior', image: '/portfolio-office.jpg' },
    { id: 5, category: 'custom', title: 'Custom Character', image: '/hero-mural.jpg' },
    { id: 6, category: 'interior', title: 'Bedroom Mural', image: '/portfolio-living-room.jpg' },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Cafe Owner",
      content: "Amazing work! The mural completely transformed our cafe space. Our customers love it!",
      rating: 5,
      project: "Cafe Interior Mural"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Office Manager",
      content: "Professional and creative. The office mural has boosted our team's creativity and morale.",
      rating: 5,
      project: "Office Wall Art"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      company: "Homeowner",
      content: "Absolutely stunning! The artist captured exactly what I envisioned for my living room.",
      rating: 5,
      project: "Residential Mural"
    }
  ]

  const services = [
    {
      title: "Residential Murals",
      description: "Custom wall art for homes, bedrooms, living rooms, and personal spaces",
      price: "Starting from Rp 5.000.000"
    },
    {
      title: "Commercial Spaces",
      description: "Eye-catching murals for offices, retail stores, restaurants, and hotels",
      price: "Starting from Rp 8.000.000"
    },
    {
      title: "Cafe & Restaurant",
      description: "Themed wall designs that enhance your dining experience and brand identity",
      price: "Starting from Rp 7.000.000"
    },
    {
      title: "Custom Characters",
      description: "Personalized character designs and illustrations for unique wall art",
      price: "Starting from Rp 6.000.000"
    },
    {
      title: "Exterior Building Art",
      description: "Large-scale outdoor murals that make your building stand out",
      price: "Starting from Rp 15.000.000"
    },
    {
      title: "Consultation & Design",
      description: "Professional consultation and custom design services for your project",
      price: "Rp 500.000 / session"
    }
  ]

  const filteredPortfolio = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">Mural Artist</h1>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#about" className="text-gray-900 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#portfolio" className="text-gray-900 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Portfolio</a>
                <a href="#services" className="text-gray-900 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Services</a>
                <a href="#testimonials" className="text-gray-900 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Testimonials</a>
                <a href="#contact" className="text-gray-900 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="text-gray-900 hover:text-yellow-600 block px-3 py-2 text-base font-medium">Home</a>
              <a href="#about" className="text-gray-900 hover:text-yellow-600 block px-3 py-2 text-base font-medium">About</a>
              <a href="#portfolio" className="text-gray-900 hover:text-yellow-600 block px-3 py-2 text-base font-medium">Portfolio</a>
              <a href="#services" className="text-gray-900 hover:text-yellow-600 block px-3 py-2 text-base font-medium">Services</a>
              <a href="#testimonials" className="text-gray-900 hover:text-yellow-600 block px-3 py-2 text-base font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-900 hover:text-yellow-600 block px-3 py-2 text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="/hero-mural.jpg" 
            alt="Hero Mural Art" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Mural Artist
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in-delay">
            Custom Wall Art & Creative Design
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Button 
              size="lg" 
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 text-lg"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Lihat Portfolio
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Pesan Mural
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/artist-portrait.jpg" 
                  alt="Artist Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">About Me</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As a passionate mural artist with over 10 years of experience, I specialize in transforming ordinary walls into extraordinary works of art. My journey began with street art and evolved into creating custom pieces for residential and commercial spaces.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                My artistic philosophy centers on creating pieces that not only beautify spaces but also tell stories and evoke emotions. I work closely with clients to understand their vision and bring it to life through carefully crafted designs that complement their environment.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="text-sm py-2 px-4">Custom Design</Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">Modern Art</Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">Commercial Projects</Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">Residential Art</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore my collection of custom mural artworks, from intimate residential pieces to large-scale commercial installations.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['all', 'interior', 'eksterior', 'cafe', 'kantor', 'custom'].map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'default' : 'outline'}
                className={activeFilter === filter ? 'bg-yellow-600 hover:bg-yellow-700' : ''}
                onClick={() => setActiveFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item, index) => (
              <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional mural services tailored to your unique needs and space requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="text-yellow-600 font-semibold">{service.price}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Client Testimonials</h2>
            <p className="text-lg text-gray-600">
              What our clients say about their experience working with us.
            </p>
          </div>

          <div className="relative">
            <Card className="p-8 md:p-12">
              <div className="flex mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-600 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div>
                  <cite className="font-semibold text-gray-900 not-italic">
                    {testimonials[currentTestimonial].name}
                  </cite>
                  <p className="text-sm text-gray-600">
                    {testimonials[currentTestimonial].company} • {testimonials[currentTestimonial].project}
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="rounded-full"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="rounded-full"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Get In Touch</h2>
            <p className="text-lg text-gray-600">
              Ready to transform your space? Let's discuss your mural project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Book a Consultation</h3>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" type="text" placeholder="Your name" />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" type="text" placeholder="City/Address" />
                  </div>
                  
                  <div>
                    <Label htmlFor="size">Wall Size</Label>
                    <Input id="size" type="text" placeholder="e.g., 3m x 4m" />
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Project Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Tell us about your project ideas..."
                      rows={4}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 text-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-yellow-600" />
                    <span className="text-gray-700">+62 812-3456-7890</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-yellow-600" />
                    <span className="text-gray-700">hello@muralartist.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-yellow-600" />
                    <span className="text-gray-700">Jakarta, Indonesia</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook className="h-5 w-5" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Mural Artist</h3>
            <p className="text-gray-400 mb-4">Transforming spaces with art</p>
            <p className="text-gray-500 text-sm">
              © 2024 Mural Artist. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }
      `}</style>
    </div>
  )
}