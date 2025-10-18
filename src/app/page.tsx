import { Heart, Star, Users, MessageCircle, CreditCard, User, Phone, Mail, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-pink-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-pink-600" />
              <span className="text-2xl font-bold text-gray-900">HeartSync</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-pink-600 transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors">Contact</a>
              <a href="#portal" className="text-gray-700 hover:text-pink-600 transition-colors">Portal</a>
            </div>
            <button className="md:hidden">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The Woman Whisperer
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Unlock the secrets of women&apos;s hearts. Your personal relationship coach who can predict and guide you through any romantic situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors shadow-lg">
                Start Your Journey
              </button>
              <button className="border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50 transition-colors">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Your SuperGirl</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A relationship coach with almost clairvoyant abilities to predict women&apos;s actions and guide men to their perfect match.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-8 mb-8">
                <div className="w-32 h-32 bg-pink-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <User className="h-16 w-16 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Relationship SuperHero</h3>
                <p className="text-gray-600 mb-6">
                  With years of experience as both a love coach and personal therapist, I&apos;ve helped countless men understand the complex world of women&apos;s emotions and actions. My ability to predict and guide relationship dynamics has earned me the title of &quot;The Woman Whisperer.&quot;
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600">5.0 Rating (200+ clients)</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Clairvoyant Insights</h4>
                  <p className="text-gray-600">Predict and understand women&apos;s actions before they happen</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Proven Results</h4>
                  <p className="text-gray-600">200+ successful relationships guided to marriage</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <MessageCircle className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Personal Approach</h4>
                  <p className="text-gray-600">One-on-one coaching tailored to your unique situation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive relationship coaching designed to help you find and keep the woman of your dreams.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Relationship Strategy</h3>
              <p className="text-gray-600 mb-6">
                Personalized coaching to understand women&apos;s psychology and build lasting connections.
              </p>
              <div className="text-2xl font-bold text-pink-600 mb-2">$150/hour</div>
              <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors">
                Book Session
              </button>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Communication Mastery</h3>
              <p className="text-gray-600 mb-6">
                Learn the art of conversation that makes women fall in love with your words.
              </p>
              <div className="text-2xl font-bold text-pink-600 mb-2">$200/hour</div>
              <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors">
                Book Session
              </button>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Marriage Preparation</h3>
              <p className="text-gray-600 mb-6">
                Complete guidance from dating to engagement to your wedding day.
              </p>
              <div className="text-2xl font-bold text-pink-600 mb-2">$500/session</div>
              <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors">
                Book Session
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your love life? Let&apos;s start your journey to finding the perfect relationship.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">coach@heartsync.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">Available Worldwide (Virtual Sessions)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors font-semibold">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Client Portal Section */}
      <section id="portal" className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Portal</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access your personalized coaching dashboard, schedule sessions, and track your progress.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Existing Clients</h3>
              <p className="text-gray-600 mb-6">
                Log in to your portal to access your coaching materials, session recordings, and schedule new appointments.
              </p>
              <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors font-semibold">
                Login to Portal
              </button>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">New Client Registration</h3>
              <p className="text-gray-600 mb-6">
                Ready to start your journey? Register for your first consultation and begin transforming your love life.
              </p>
              <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors font-semibold">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Secure Payments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Safe and secure payment processing for all your coaching sessions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 text-center">
              <CreditCard className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Credit Cards</h3>
              <p className="text-gray-600">Visa, Mastercard, American Express</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 text-center">
              <div className="h-12 w-12 bg-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">PayPal</h3>
              <p className="text-gray-600">Quick and secure payments</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 text-center">
              <div className="h-12 w-12 bg-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bank Transfer</h3>
              <p className="text-gray-600">Direct bank payments available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-pink-400" />
                <span className="text-2xl font-bold">HeartSync</span>
              </div>
              <p className="text-gray-400">
                Your personal relationship coach and the woman whisperer for men seeking love.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Relationship Strategy</li>
                <li>Communication Mastery</li>
                <li>Marriage Preparation</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(555) 123-4567</li>
                <li>coach@heartsync.com</li>
                <li>Virtual Sessions Available</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Twitter</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HeartSync Coaching. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}