"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Briefcase, 
  User, 
  Bell, 
  TrendingUp, 
  Clock, 
  MapPin, 
  DollarSign,
  Filter,
  Star,
  Eye,
  Bookmark
} from "lucide-react";
import Navigation from "../../../components/Navigation";

export default function JobSeekerDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const appliedJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp",
      location: "San Francisco, CA",
      salary: "$120k - $150k",
      status: "Under Review",
      appliedDate: "2024-01-15",
      type: "Full-time"
    },
    {
      id: 2,
      title: "Product Manager",
      company: "StartupXYZ",
      location: "New York, NY",
      salary: "$100k - $130k",
      status: "Interview Scheduled",
      appliedDate: "2024-01-12",
      type: "Full-time"
    },
    {
      id: 3,
      title: "UX Designer",
      company: "DesignStudio",
      location: "Remote",
      salary: "$80k - $110k",
      status: "Rejected",
      appliedDate: "2024-01-10",
      type: "Full-time"
    }
  ];

  const recommendedJobs = [
    {
      id: 4,
      title: "Frontend Developer",
      company: "WebTech",
      location: "Seattle, WA",
      salary: "$90k - $120k",
      type: "Full-time",
      match: 95,
      posted: "2 days ago"
    },
    {
      id: 5,
      title: "Full Stack Developer",
      company: "DevCorp",
      location: "Austin, TX",
      salary: "$85k - $115k",
      type: "Full-time",
      match: 88,
      posted: "1 week ago"
    },
    {
      id: 6,
      title: "React Native Developer",
      company: "MobileFirst",
      location: "Remote",
      salary: "$95k - $125k",
      type: "Full-time",
      match: 92,
      posted: "3 days ago"
    }
  ];

  const categories = ["All", "Technology", "Design", "Marketing", "Sales", "Finance"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation userRole="jobseeker" userName="John Doe" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-6 text-white mb-8">
          <h1 className="text-2xl font-bold mb-2">Welcome back, John!</h1>
          <p className="text-blue-100">Here&apos;s what&apos;s happening with your job search</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Applied Jobs</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Interviews</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Profile Views</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Applied Jobs */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Applied Jobs</h2>
                  <Link href="/jobseeker/applied-jobs" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View all
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {appliedJobs.map((job) => (
                    <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                          <p className="text-blue-600 font-medium">{job.company}</p>
                          <div className="flex items-center text-sm text-gray-600 mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                            <DollarSign className="h-4 w-4 ml-4 mr-1" />
                            {job.salary}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            job.status === "Under Review" ? "bg-yellow-100 text-yellow-800" :
                            job.status === "Interview Scheduled" ? "bg-blue-100 text-blue-800" :
                            "bg-red-100 text-red-800"
                          }`}>
                            {job.status}
                          </span>
                          <p className="text-xs text-gray-500 mt-1">Applied {job.appliedDate}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Jobs */}
          <div>
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Recommended for You</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recommendedJobs.map((job) => (
                    <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-sm font-semibold text-gray-900">{job.title}</h3>
                        <div className="flex items-center space-x-1">
                          <Bookmark className="h-4 w-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
                          <Eye className="h-4 w-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
                        </div>
                      </div>
                      <p className="text-blue-600 font-medium text-sm">{job.company}</p>
                      <div className="flex items-center text-xs text-gray-600 mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {job.location}
                        <DollarSign className="h-3 w-3 ml-2 mr-1" />
                        {job.salary}
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${job.match}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-600 ml-2">{job.match}% match</span>
                        </div>
                        <span className="text-xs text-gray-500">{job.posted}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/jobs" className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700">
                  View All Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/jobseeker/profile" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <User className="h-6 w-6 text-blue-600 mr-3" />
              <div>
                <h3 className="font-medium text-gray-900">Update Profile</h3>
                <p className="text-sm text-gray-600">Keep your profile fresh</p>
              </div>
            </Link>
            <Link href="/jobs" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <Search className="h-6 w-6 text-green-600 mr-3" />
              <div>
                <h3 className="font-medium text-gray-900">Search Jobs</h3>
                <p className="text-sm text-gray-600">Find new opportunities</p>
              </div>
            </Link>
            <Link href="/jobseeker/applied-jobs" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <Briefcase className="h-6 w-6 text-purple-600 mr-3" />
              <div>
                <h3 className="font-medium text-gray-900">Track Applications</h3>
                <p className="text-sm text-gray-600">Monitor your progress</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
