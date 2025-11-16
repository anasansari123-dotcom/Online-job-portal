"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  ArrowLeft, 
  MapPin, 
  DollarSign, 
  Clock, 
  Building2, 
  Users, 
  Bookmark,
  Share2,
  CheckCircle,
  Star,
  Calendar,
  Briefcase,
  GraduationCap,
  Award
} from "lucide-react";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

export default function JobDetail() {
  const params = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  // Mock job data - in a real app, this would be fetched based on params.id
  const job = {
    id: params.id,
    title: "Senior React Developer",
    company: "TechCorp",
    logo: "/api/placeholder/80/80",
    location: "San Francisco, CA",
    salary: "$120,000 - $150,000",
    type: "Full-time",
    category: "Technology",
    posted: "2 days ago",
    applications: 24,
    views: 156,
    remote: false,
    urgent: false,
    description: `We are looking for a Senior React Developer to join our growing team. You will be responsible for developing and maintaining high-quality web applications using React, TypeScript, and modern web technologies.

As a Senior React Developer at TechCorp, you will work closely with our product and design teams to create exceptional user experiences. You'll have the opportunity to work on challenging projects, mentor junior developers, and contribute to our technical architecture decisions.

Our company culture is built on collaboration, innovation, and continuous learning. We offer competitive compensation, comprehensive benefits, and opportunities for professional growth.`,
    
    requirements: [
      "5+ years of experience with React and JavaScript",
      "Strong proficiency in TypeScript",
      "Experience with state management libraries (Redux, Zustand, or similar)",
      "Familiarity with modern build tools (Webpack, Vite, etc.)",
      "Experience with testing frameworks (Jest, React Testing Library)",
      "Knowledge of responsive design and CSS frameworks",
      "Experience with version control (Git)",
      "Strong problem-solving and communication skills"
    ],
    
    responsibilities: [
      "Develop and maintain high-quality React applications",
      "Collaborate with design and product teams to implement user interfaces",
      "Write clean, maintainable, and well-tested code",
      "Participate in code reviews and technical discussions",
      "Mentor junior developers and share knowledge",
      "Contribute to technical architecture decisions",
      "Optimize applications for maximum speed and scalability",
      "Stay up-to-date with latest React and web development trends"
    ],
    
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company matching",
      "Flexible work hours and remote work options",
      "Professional development budget",
      "Unlimited PTO policy",
      "Top-tier equipment and tools",
      "Team building events and company retreats"
    ],
    
    companyInfo: {
      name: "TechCorp",
      size: "201-500 employees",
      industry: "Technology",
      website: "https://techcorp.com",
      description: "TechCorp is a leading technology company focused on building innovative solutions that transform how businesses operate. Founded in 2015, we've grown from a small startup to a company of over 200 employees, serving clients worldwide.",
      rating: 4.5,
      reviews: 127
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleApply = () => {
    if (isApplied) {
      setIsApplied(false);
    } else {
      setShowApplicationForm(true);
    }
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    // Handle application submission
    console.log("Application submitted");
    setIsApplied(true);
    setShowApplicationForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/jobs" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Jobs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-gray-400" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
                    <p className="text-blue-600 font-medium text-lg">{job.company}</p>
                    <div className="flex items-center text-gray-600 mt-2 space-x-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {job.salary}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleBookmark}
                    className={`p-2 rounded-lg ${
                      isBookmarked 
                        ? "bg-blue-100 text-blue-600" 
                        : "bg-gray-100 text-gray-400 hover:text-blue-600"
                    }`}
                  >
                    <Bookmark className="h-5 w-5" />
                  </button>
                  <button className="p-2 bg-gray-100 text-gray-400 rounded-lg hover:text-blue-600">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <span>Posted {job.posted}</span>
                  <span>{job.applications} applications</span>
                  <span>{job.views} views</span>
                </div>
                <div className="flex items-center space-x-2">
                  {job.urgent && (
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                      Urgent
                    </span>
                  )}
                  {job.remote && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Remote
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Job Description</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h2>
              <ul className="space-y-2">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsibilities */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Responsibilities</h2>
              <ul className="space-y-2">
                {job.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Benefits & Perks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {job.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <Award className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Button */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              {isApplied ? (
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Application Submitted!</h3>
                  <p className="text-gray-600 mb-4">We'll review your application and get back to you soon.</p>
                  <button
                    onClick={() => setIsApplied(false)}
                    className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700"
                  >
                    Withdraw Application
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    onClick={handleApply}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold mb-4"
                  >
                    Apply for this job
                  </button>
                  <p className="text-sm text-gray-600 text-center">
                    You'll be redirected to complete your application
                  </p>
                </div>
              )}
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About {job.companyInfo.name}</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{job.companyInfo.size}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{job.companyInfo.industry}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-2" />
                  <span className="text-sm text-gray-600">
                    {job.companyInfo.rating} ({job.companyInfo.reviews} reviews)
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-4">{job.companyInfo.description}</p>
              <a
                href={job.companyInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Visit Company Website →
              </a>
            </div>

            {/* Job Stats */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Applications</span>
                  <span className="text-sm font-medium text-gray-900">{job.applications}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Views</span>
                  <span className="text-sm font-medium text-gray-900">{job.views}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Posted</span>
                  <span className="text-sm font-medium text-gray-900">{job.posted}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Type</span>
                  <span className="text-sm font-medium text-gray-900">{job.type}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Form Modal */}
        {showApplicationForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Apply for this job</h3>
              <form onSubmit={handleApplicationSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cover Letter
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us why you're interested in this position..."
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expected Salary
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., $120,000 - $140,000"
                  />
                </div>
                <div className="flex items-center justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}
