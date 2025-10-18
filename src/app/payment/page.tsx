import { Heart, CreditCard, Shield, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Payment() {
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
            <Link href="/" className="text-gray-700 hover:text-pink-600 transition-colors flex items-center">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Secure Payment</h1>
          <p className="text-xl text-gray-600">Complete your coaching session payment</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Payment Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Details</h2>
            
            <form className="space-y-6">
              {/* Session Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Session Type</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                  <option>Relationship Strategy - $150/hour</option>
                  <option>Communication Mastery - $200/hour</option>
                  <option>Marriage Preparation - $500/session</option>
                </select>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Session Duration</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                  <option>1 Hour</option>
                  <option>1.5 Hours</option>
                  <option>2 Hours</option>
                </select>
              </div>

              {/* Card Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                <input 
                  type="text" 
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                  <input 
                    type="text" 
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                  <input 
                    type="text" 
                    placeholder="123"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded" />
                <label className="ml-2 text-sm text-gray-700">
                  Save card for future payments
                </label>
              </div>

              <button type="submit" className="w-full bg-pink-600 text-white py-4 rounded-lg hover:bg-pink-700 transition-colors font-semibold text-lg">
                Pay $150.00
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Order Details */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-gray-900">Relationship Strategy Session</h3>
                    <p className="text-sm text-gray-600">1 hour session</p>
                  </div>
                  <span className="font-semibold text-gray-900">$150.00</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Processing Fee</span>
                  <span className="text-gray-600">$4.50</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-gray-900">$154.50</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Features */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Security & Trust</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">256-bit SSL encryption</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">PCI DSS compliant</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Secure payment processing</span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Accepted Payment Methods</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">VISA</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">MC</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">AMEX</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">PP</div>
                </div>
              </div>
            </div>

            {/* Money Back Guarantee */}
            <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">100% Satisfaction Guarantee</h2>
              <p className="text-gray-700 mb-4">
                If you're not completely satisfied with your coaching session, we'll provide a full refund within 24 hours.
              </p>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-700">No questions asked refund policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
