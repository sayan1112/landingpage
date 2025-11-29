import { ShoppingBag, Briefcase, MessageSquare, TrendingUp, Shield, Zap } from 'lucide-react';

export default function Features() {
  const mainFeatures = [
    {
      icon: ShoppingBag,
      title: 'Products',
      description: 'Buy and sell essential campus items',
      details: 'Textbooks, calculators, chargers, tech accessories, drawing tools, extension boards, and creative gear.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Briefcase,
      title: 'Services',
      description: 'Offer your skills and book micro-services',
      details: 'PPT designing, coding help, tutoring, notes scanning, photography, video editing, resume design, and more.',
      color: 'from-slate-700 to-slate-800'
    },
    {
      icon: MessageSquare,
      title: 'Requests',
      description: 'Post what you need urgently',
      details: 'Need an HDMI cable? Physics notes? Python debugging? Post a request and get instant responses from peers.',
      color: 'from-blue-400 to-blue-500'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Earn Micro-Income',
      description: 'Monetize your skills and assets while helping fellow students'
    },
    {
      icon: Shield,
      title: 'Campus-Only',
      description: 'Safe, trusted community with verified student members only'
    },
    {
      icon: Zap,
      title: 'Instant Connect',
      description: 'Get what you need fast with real-time notifications and responses'
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            THREE WAYS TO
            <br />
            <span className="text-blue-600">CONNECT & TRADE</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A complete micro-commerce ecosystem designed specifically for campus life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {mainFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-lg font-medium text-slate-700 mb-3">{feature.description}</p>
                <p className="text-slate-600 leading-relaxed">{feature.details}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-12 text-center">Why Students Choose SkillLink</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold">{benefit.title}</h4>
                  <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
