import { ArrowRight, Users, TrendingUp, Clock } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="p-12 lg:p-16 space-y-8">
              <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                START YOUR
                <br />
                <span className="text-blue-400">CAMPUS</span>
                <br />
                JOURNEY
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Join hundreds of students already earning, saving, and connecting through SkillLink's micro-commerce ecosystem.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-all hover:scale-105 shadow-lg flex items-center space-x-2">
                  <span>Get Started Free</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">1000+</p>
                  <p className="text-sm text-slate-400">Active Students</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">5000+</p>
                  <p className="text-sm text-slate-400">Transactions</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">&lt;2min</p>
                  <p className="text-sm text-slate-400">Avg Response</p>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[500px] bg-gradient-to-br from-blue-500 to-blue-600 p-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
              <div className="relative text-center space-y-6 text-white">
                <div className="w-24 h-24 bg-white rounded-2xl mx-auto flex items-center justify-center shadow-2xl">
                  <span className="text-5xl font-bold text-blue-600">S</span>
                </div>
                <h3 className="text-3xl font-bold">Premium Campus Network</h3>
                <p className="text-blue-100 text-lg max-w-md">
                  Everything you need for campus life, from essential products to expert services, all in one place.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-8">Trusted by Students at Top Campuses</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
            <div className="text-4xl font-bold text-slate-400">IIT</div>
            <div className="text-4xl font-bold text-slate-400">NIT</div>
            <div className="text-4xl font-bold text-slate-400">BITS</div>
            <div className="text-4xl font-bold text-slate-400">IIIT</div>
            <div className="text-4xl font-bold text-slate-400">DTU</div>
          </div>
        </div>
      </div>
    </section>
  );
}
