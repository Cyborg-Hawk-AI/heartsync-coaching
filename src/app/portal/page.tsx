import { Heart, Calendar, CreditCard, MessageCircle, User, Settings, LogOut, Clock, CheckCircle } from 'lucide-react';

export default function Portal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-pink-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-pink-600" />
              <span className="text-2xl font-bold text-gray-900">HeartSync Portal</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-pink-600 transition-colors">
                <Settings className="h-6 w-6" />
              </button>
              <button className="text-gray-700 hover:text-pink-600 transition-colors">
                <LogOut className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-pink-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, John!</h1>
              <p className="text-gray-600">Your relationship transformation journey continues</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sessions Completed</h3>
              <p className="text-3xl font-bold text-pink-600">12</p>
              <p className="text-sm text-gray-600">Out of 20 planned</p>
            </div>
            
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Progress Score</h3>
              <p className="text-3xl font-bold text-green-600">85%</p>
              <p className="text-sm text-gray-600">Excellent progress!</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Next Session</h3>
              <p className="text-lg font-bold text-blue-600">Tomorrow 2:00 PM</p>
              <p className="text-sm text-gray-600">Communication Mastery</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Sessions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="h-6 w-6 text-pink-600 mr-2" />
                Upcoming Sessions
              </h2>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Communication Mastery</h3>
                      <p className="text-gray-600">Advanced conversation techniques</p>
                    </div>
                    <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
                      Tomorrow
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>2:00 PM - 3:00 PM</span>
                  </div>
                  <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors">
                    Join Session
                  </button>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Relationship Strategy</h3>
                      <p className="text-gray-600">Understanding women&apos;s psychology</p>
                    </div>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      Next Week
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Friday 10:00 AM - 11:00 AM</span>
                  </div>
                  <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                    Reschedule
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Messages */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <MessageCircle className="h-6 w-6 text-pink-600 mr-2" />
                Recent Messages
              </h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-pink-500 pl-4 py-2">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">Great progress on your approach!</h4>
                    <span className="text-sm text-gray-500">2 hours ago</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Your confidence has improved significantly. Keep practicing the techniques we discussed...
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">Homework for next session</h4>
                    <span className="text-sm text-gray-500">1 day ago</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Please practice the conversation starters we covered. Focus on active listening...
                  </p>
                </div>
              </div>
              
              <button className="mt-4 w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors">
                Send Message
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors flex items-center justify-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Session
                </button>
                <button className="w-full border border-pink-600 text-pink-600 py-3 rounded-lg hover:bg-pink-50 transition-colors flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Send Message
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Make Payment
                </button>
              </div>
            </div>

            {/* Progress Tracking */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Your Progress</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Communication Skills</span>
                    <span className="text-sm text-gray-600">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-pink-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Confidence Building</span>
                    <span className="text-sm text-gray-600">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-pink-600 h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Relationship Strategy</span>
                    <span className="text-sm text-gray-600">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-pink-600 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Achievements</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700">Completed Communication Module</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700">First Successful Date</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700">Confidence Milestone</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
