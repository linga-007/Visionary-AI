import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { 
  BarChart3, 
  TrendingUp, 
  LineChart, 
  Brain, 
  Target, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductForm from './pages/Productform';
import Analysis from './pages/Analyse';

function HomePage() {
  return (
    <div className="min-h-screen bg-black neon-bg">
      {/* Header/Navigation */}
      <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50 border-b border-cyan-500/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BarChart3 className="h-8 w-8 text-primary" />
              <span className="text-3xl font-bold text-primary neon-text tracking-wider">ForecastAI</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-primary hover:text-primary-dark text-lg">Features</a>
              <a href="#how-it-works" className="text-primary hover:text-primary-dark text-lg">How it Works</a>
              <a href="#pricing" className="text-primary hover:text-primary-dark text-lg">Pricing</a>
            </div>
            <div className="flex space-x-4">
              <Link to="/login" className="text-primary hover:text-primary-dark px-6 py-2 text-lg">
                Sign In
              </Link>
              <Link to="/register" className="animate-button splash-effect px-6 py-2 rounded-full text-lg">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative neon-bg">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center opacity-20"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">
              Transform Your Business with AI-Powered Forecasting
            </h1>
            <p className="text-xl text-primary-dark mb-8 font-semibold">
              Make data-driven decisions with our advanced AI forecasting tools. Predict trends, optimize performance, and stay ahead of the competition.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/detail" className="animate-button splash-effect px-8 py-3 rounded-full flex items-center">
                 Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="border border-primary text-primary px-8 py-3 rounded-full hover:bg-primary-dark/30 transition neon-border">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black/50 relative neon-bg">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center opacity-15"></div>
        <div className="container mx-auto px-6 relative">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">
            Powerful Features for Your Business
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8 text-primary" />,
                title: "AI-Powered Analysis",
                description: "Advanced machine learning algorithms analyze your data to provide accurate forecasts"
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-primary" />,
                title: "Real-time Predictions",
                description: "Get instant insights with real-time data processing and forecasting"
              },
              {
                icon: <LineChart className="h-8 w-8 text-primary" />,
                title: "Custom Reports",
                description: "Generate detailed reports tailored to your business needs"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-black/40 p-6 rounded-xl border border-primary/30 hover:border-primary/50 transition feature-card backdrop-blur-sm">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
                <p className="text-primary/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 relative neon-bg">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center opacity-15"></div>
        <div className="container mx-auto px-6 relative">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">
            How ForecastAI Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Connect Your Data",
                description: "Easily integrate your business data sources"
              },
              {
                step: "2",
                title: "AI Analysis",
                description: "Our AI analyzes patterns and trends"
              },
              {
                step: "3",
                title: "Generate Forecasts",
                description: "Get detailed performance predictions"
              },
              {
                step: "4",
                title: "Take Action",
                description: "Make informed business decisions"
              }
            ].map((step, index) => (
              <div key={index} className="text-center backdrop-blur-sm p-6 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-dark-gray text-primary flex items-center justify-center mx-auto mb-4 text-xl font-bold border border-primary neon-border">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{step.title}</h3>
                <p className="text-primary/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-black/50 relative neon-bg">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center opacity-15"></div>
        <div className="container mx-auto px-6 relative">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "49",
                features: ["Basic forecasting", "3 data sources", "Monthly reports", "Email support"]
              },
              {
                name: "Professional",
                price: "99",
                features: ["Advanced forecasting", "10 data sources", "Weekly reports", "Priority support", "API access"]
              },
              {
                name: "Enterprise",
                price: "299",
                features: ["Custom forecasting", "Unlimited sources", "Real-time reports", "24/7 support", "Custom integration"]
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-black/40 rounded-xl p-8 pricing-card backdrop-blur-sm ${index === 1 ? 'border-2 border-primary neon-border' : 'border border-primary/30'}`}>
                <h3 className="text-xl font-semibold mb-2 text-primary">{plan.name}</h3>
                <div className="text-3xl font-bold mb-6 text-primary">${plan.price}<span className="text-lg text-primary/50">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-primary/70">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/register" 
                  className={`w-full py-2 rounded-full animate-button splash-effect block text-center`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/90 text-primary/70 py-12 border-t border-primary/30 relative neon-bg">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557264337-b9715a4ecc2e?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BarChart3 className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-primary">ForecastAI</span>
              </div>
              <p>Empowering businesses with AI-driven forecasting solutions.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Product</h4>
              <ul className="space-y-2">
                <li>Features</li>
                <li>Pricing</li>
                <li>Case Studies</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Company</h4>
              <ul className="space-y-2">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Legal</h4>
              <ul className="space-y-2">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/30 mt-12 pt-8 text-center">
            <p>© 2024 ForecastAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/detail" element={<ProductForm />} />
      <Route path="/analyse" element={<Analysis />} />
    </Routes>
  );
}

export default App;