import { ShoppingBag, Briefcase, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
      <nav className="absolute top-0 w-full z-50 px-6 lg:px-12 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold text-slate-900">SkillLink</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Features</a>
            <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">How It Works</a>
            <button className="px-6 py-2.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              EVERYTHING
              <br />
              <span className="text-blue-600">FOR CAMPUS</span>
              <br />
              LIFE
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              Buy and sell products, book micro-services, and post urgent requests —
              all in one unified campus marketplace.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all hover:scale-105 shadow-lg">
                Join Now
              </button>
              <button className="px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-50 transition-all border-2 border-slate-200">
                Learn More
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-slate-700">Products</span>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-slate-700">Services</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-slate-700">Requests</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-slate-900 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <div className="bg-gradient-to-br from-blue-500 to-slate-700 p-12 aspect-[4/3] flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 text-slate-900" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Campus Marketplace</h3>
                  <p className="text-blue-100">Connect. Trade. Grow.</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-400 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
