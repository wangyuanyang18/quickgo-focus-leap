import { ArrowRight, Smartphone, Zap, Shield, Github, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const platforms = [
    { name: "小红书", color: "bg-red-100 text-red-700" },
    { name: "抖音", color: "bg-orange-100 text-orange-700" },
    { name: "公众号", color: "bg-green-100 text-green-700" },
    { name: "YouTube", color: "bg-red-100 text-red-600" },
    { name: "Reddit", color: "bg-orange-100 text-orange-700" }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-emerald-600" />,
      title: "Lightning Fast",
      description: "Skip homepages entirely. Jump straight to what you're looking for in seconds."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "No Distractions",
      description: "Zero ads, no login required, no tracking. Just pure, focused searching."
    },
    {
      icon: <Github className="w-8 h-8 text-purple-600" />,
      title: "Open Source",
      description: "Fully transparent code. Built by students, for everyone who values digital autonomy."
    }
  ];

  const handlePlatformClick = (platformName: string) => {
    if (platformName === "小红书") {
      window.open("https://www.xiaohongshu.com/user/profile/95311446097", "_blank");
    } else if (platformName === "抖音") {
      window.open("douyin://user/profile/AI2485855953", "_blank");
    } else if (platformName === "公众号") {
      window.open("https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=BlueKuro#wechat_redirect", "_blank");
    } else if (platformName === "Reddit") {
      window.open("https://www.reddit.com/user/yuanyang0510", "_blank");
    } else if (platformName === "YouTube") {
      window.open("https://www.youtube.com/@王远阳", "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Smartphone className="w-4 h-4" />
            Android App
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight animate-fade-in">
            Quick<span className="text-emerald-600">Go</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed animate-fade-in">
            Skip the noise. Search with focus.<br />
            <span className="text-slate-500">Direct access to what matters on your favorite platforms.</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
            {platforms.map((platform, index) => (
              <span 
                key={platform.name}
                className={`px-4 py-2 rounded-full text-sm font-medium ${platform.color} transition-transform hover:scale-105 cursor-pointer`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handlePlatformClick(platform.name)}
              >
                {platform.name}
              </span>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
<a
  href="https://github.com/wangyuanyang18/QuickGo/releases/download/v1.0.0/app-debug.apk"
  download
  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 inline-flex items-center"
>
  Download QuickGo
  <ArrowRight className="w-5 h-5 ml-2" />
</a>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-slate-300 text-slate-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-50 transition-all duration-200"
              onClick={() => window.open("https://github.com/wangyuanyang18/quickgo-focus-leap", "_blank")}
          >
            View on GitHub
            <Github className="w-5 h-5 ml-2" />
          </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Built for <span className="text-emerald-600">Focus</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Every feature designed to respect your time and attention
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
            <div className="inline-flex items-center gap-2 text-emerald-600 mb-6">
              <Heart className="w-6 h-6" />
              <span className="text-lg font-semibold">Made with Purpose</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Your Attention is Sacred
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Designed by a college student who believes technology should serve you, not distract you. 
              QuickGo is built on the principle that users deserve control over their digital experience—
              no ads, no data collection, no artificial engagement tactics.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-2xl font-bold text-emerald-600 mb-2">100%</div>
                <div className="text-slate-600">Open Source</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600 mb-2">0</div>
                <div className="text-slate-600">Ads Forever</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-purple-600 mb-2">∞</div>
                <div className="text-slate-600">User Autonomy</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Take Control?
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Join thousands of users who've reclaimed their focus and saved countless hours
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
              Download Now - It's Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <p className="text-sm text-slate-500 mt-6">
            Available on Android • Open Source • Always Free
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-slate-200">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-slate-600 mb-4">
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>Built with purpose by a college student</span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2024 QuickGo. Open source and proud of it.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
