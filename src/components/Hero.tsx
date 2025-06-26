
import { CheckCircle, Zap, Palette, Star, Circle, Triangle } from "lucide-react";
import Button from "./Button";
import Card from "./Card";

const Hero = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Task Management",
      description: "Create, complete, and organize your tasks with ease"
    },
    {
      icon: Zap,
      title: "API Integration",
      description: "Seamless data fetching with loading and error states"
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Beautiful, responsive UI with dark/light theme support"
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/20">
      {/* Animated floating objects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-bounce">
          <Circle className="w-8 h-8 text-purple-400/60 animate-pulse" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce delay-1000">
          <Star className="w-6 h-6 text-blue-400/60 animate-spin" style={{ animationDuration: '8s' }} />
        </div>
        <div className="absolute top-60 left-1/4 animate-bounce delay-500">
          <Triangle className="w-5 h-5 text-indigo-400/60 animate-pulse" />
        </div>
        <div className="absolute bottom-40 right-10 animate-bounce delay-700">
          <Circle className="w-7 h-7 text-pink-400/60" />
        </div>
        <div className="absolute bottom-60 left-16 animate-bounce delay-300">
          <Star className="w-4 h-4 text-cyan-400/60 animate-spin" style={{ animationDuration: '6s' }} />
        </div>
        <div className="absolute top-32 right-1/3 animate-bounce delay-1200">
          <Triangle className="w-6 h-6 text-emerald-400/60 animate-pulse" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          {/* Glass container for main heading */}
          <div className="backdrop-blur-sm bg-white/30 dark:bg-black/30 rounded-3xl p-8 mb-8 border border-white/20 shadow-xl">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Master React Development
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              A comprehensive React application showcasing component architecture, state management, 
              hooks, API integration, and modern styling with Tailwind CSS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => document.getElementById('tasks')?.scrollIntoView({ behavior: 'smooth' })} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Try Task Manager
              </Button>
              <Button variant="secondary" size="lg" onClick={() => document.getElementById('api-demo')?.scrollIntoView({ behavior: 'smooth' })} className="backdrop-blur-sm bg-white/50 dark:bg-black/50 border border-white/30 hover:bg-white/60 dark:hover:bg-black/60 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                View API Demo
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="backdrop-blur-sm bg-white/40 dark:bg-black/40 rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-12 w-12 text-purple-600 dark:text-purple-400 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;