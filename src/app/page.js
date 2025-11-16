import Link from "next/link";
import { Search, Briefcase, Users, TrendingUp, ArrowRight } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your <span className="text-blue-600">Dream Job</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with top employers, discover amazing opportunities, and take the next step in your career journey.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for jobs, companies, or keywords..."
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Search
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/jobs" className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 flex items-center justify-center">
              Browse Jobs
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose JobPortal?</h2>
            <p className="text-lg text-gray-600">We make job hunting simple and effective</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Search</h3>
              <p className="text-gray-600">Find relevant jobs with our intelligent search and filtering system</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Top Companies</h3>
              <p className="text-gray-600">Connect with leading companies and startups across various industries</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Growth</h3>
              <p className="text-gray-600">Track your applications and get personalized job recommendations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Jobs Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trending Jobs</h2>
            <p className="text-lg text-gray-600">Discover the most popular job opportunities right now</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Senior React Developer", company: "TechCorp", location: "San Francisco, CA", salary: "$120k - $150k", type: "Full-time" },
              { title: "Product Manager", company: "StartupXYZ", location: "New York, NY", salary: "$100k - $130k", type: "Full-time" },
              { title: "UX Designer", company: "DesignStudio", location: "Remote", salary: "$80k - $110k", type: "Full-time" },
              { title: "Data Scientist", company: "DataCorp", location: "Seattle, WA", salary: "$110k - $140k", type: "Full-time" },
              { title: "Marketing Manager", company: "GrowthCo", location: "Austin, TX", salary: "$70k - $90k", type: "Full-time" },
              { title: "DevOps Engineer", company: "CloudTech", location: "Remote", salary: "$95k - $125k", type: "Full-time" }
            ].map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h3>
                <p className="text-blue-600 font-medium mb-2">{job.company}</p>
                <p className="text-gray-600 text-sm mb-2">{job.location}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-semibold">{job.salary}</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{job.type}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/jobs" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
              View All Jobs
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of professionals who found their dream jobs with us</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup?role=jobseeker" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100">
              I'm Looking for Jobs
            </Link>
            <Link href="/signup?role=recruiter" className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700">
              I'm Hiring
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}