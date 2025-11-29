import { Search, Heart, MessageCircle, Star } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Browse or Post',
      description: 'Explore products and services, or list your own items and skills. Post urgent requests for instant help.'
    },
    {
      icon: Heart,
      title: 'Reserve & Book',
      description: 'Found what you need? Reserve a product, book a service, or respond to a request with just one tap.'
    },
    {
      icon: MessageCircle,
      title: 'Connect & Exchange',
      description: 'Chat with the provider, coordinate meetup, and complete the exchange via UPI or cash on campus.'
    },
    {
      icon: Star,
      title: 'Rate & Review',
      description: 'After completion, rate your experience to help build a trusted community marketplace.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            HOW IT
            <br />
            <span className="text-blue-600">WORKS</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Simple, fast, and built for students by students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-5xl font-bold text-slate-100">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200"></div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-slate-900">
              Complete End-to-End Platform
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-lg text-slate-700">Provider dashboard to manage all your listings and bookings</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-lg text-slate-700">Real-time order status updates and notifications</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-lg text-slate-700">Smart search with categories and filters</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-lg text-slate-700">Rating system to maintain quality and trust</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-lg text-slate-700">Flexible payment: UPI or cash on campus</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-white shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-300">LIVE STATUS</span>
                </div>
                <h4 className="text-3xl font-bold">Active Campus Network</h4>
                <div className="space-y-4 pt-4">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-400">Products Listed</span>
                      <span className="text-2xl font-bold text-blue-400">240+</span>
                    </div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-400">Services Offered</span>
                      <span className="text-2xl font-bold text-blue-400">150+</span>
                    </div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-400">Requests Fulfilled</span>
                      <span className="text-2xl font-bold text-blue-400">500+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
