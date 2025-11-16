"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Briefcase, 
  User, 
  MapPin, 
  DollarSign, 
  Clock, 
  Eye,
  MessageCircle,
  Calendar,
  CheckCircle,
  XCircle,
  AlertCircle,
  Filter
} from "lucide-react";
import Navigation from "../../../components/Navigation";

export default function AppliedJobs() {
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  const appliedJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp",
      location: "San Francisco, CA",
      salary: "$120k - $150k",
      type: "Full-time",
      appliedDate: "2024-01-20",
      status: "Under Review",
      jobId: 1,
      interviewDate: null,
      notes: "Application submitted successfully"
    },
    {
      id: 2,
      title: "Product Manager",
      company: "StartupXYZ",
      location: "New York, NY",
      salary: "$100k - $130k",
      type: "Full-time",
      appliedDate: "2024-01-18",
      status: "Interview Scheduled",
      jobId: 2,
      interviewDate: "2024-01-25",
      notes: "Phone interview scheduled for next week"
    },
    {
      id: 3,
      title: "UX Designer",
      company: "DesignStudio",
      location: "Remote",
      salary: "$80k - $110k",
      type: "Full-time",
      appliedDate: "2024-01-15",
      status: "Rejected",
      jobId: 3,
      interviewDate: null,
      notes: "Not selected for this position"
    },
    {
      id: 4,
      title: "Frontend Developer",
      company: "WebTech",
      location: "Seattle, WA",
      salary: "$90k - $120k",
      type: "Full-time",
      appliedDate: "2024-01-12",
      status: "Under Review",
      jobId: 4,
      interviewDate: null,
      notes: "Application under consideration"
    },
    {
      id: 5,
      title: "Full Stack Developer",
      company: "DevCorp",
      location: "Austin, TX",
      salary: "$85k - $115k",
      type: "Full-time",
      appliedDate: "2024-01-10",
      status: "Hired",
      jobId: 5,
      interviewDate: "2024-01-22",
      notes: "Congratulations! You got the job!"
    },
    {
      id: 6,
      title: "React Native Developer",
      company: "MobileFirst",
      location: "Remote",
      salary: "$95k - $125k",
      type: "Full-time",
      appliedDate: "2024-01-08",
      status: "Interview Scheduled",
      jobId: 6,
      interviewDate: "2024-01-24",
      notes: "Technical interview scheduled"
    }
  ];

  const statusOptions = [
    { value: "all", label: "All Applications" },
    { value: "Under Review", label: "Under Review" },
    { value: "Interview Scheduled", label: "Interview Scheduled" },
    { value: "Rejected", label: "Rejected" },
    { value: "Hired", label: "Hired" }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "Under Review":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case "Interview Scheduled":
        return <Calendar className="h-5 w-5 text-blue-500" />;
      case "Rejected":
        return <XCircle className="h-5 w-5 text-red-500" />;
      case "Hired":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Under Review":
        return "bg-yellow-100 text-yellow-800";
      case "Interview Scheduled":
        return "bg-blue-100 text-blue-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      case "Hired":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredJobs = appliedJobs.filter(job => 
    filterStatus === "all" || job.status === filterStatus
  );

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.appliedDate) - new Date(a.appliedDate);
    } else if (sortBy === "status") {
      return a.status.localeCompare(b.status);
    } else if (sortBy === "company") {
      return a.company.localeCompare(b.company);
    }
    return 0;
  });

  const statusCounts = appliedJobs.reduce((acc, job) => {
    acc[job.status] = (acc[job.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation userRole="jobseeker" userName="John Doe" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/jobseeker/dashboard" className="flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Applied Jobs</h1>
          <p className="text-gray-600 mt-2">Track the status of your job applications</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Applications</p>
                <p className="text-2xl font-bold text-gray-900">{appliedJobs.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <AlertCircle className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Under Review</p>
                <p className="text-2xl font-bold text-gray-900">{statusCounts["Under Review"] || 0}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Interviews</p>
                <p className="text-2xl font-bold text-gray-900">{statusCounts["Interview Scheduled"] || 0}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Hired</p>
                <p className="text-2xl font-bold text-gray-900">{statusCounts["Hired"] || 0}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <span className="text-sm font-medium text-gray-700">Filter by status:</span>
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {statusOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="date">Date Applied</option>
                <option value="status">Status</option>
                <option value="company">Company</option>
              </select>
            </div>
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-4">
          {sortedJobs.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
              <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No applications found</h3>
              <p className="text-gray-600 mb-6">
                {filterStatus === "all" 
                  ? "You haven't applied to any jobs yet." 
                  : `No applications with status "${filterStatus}" found.`
                }
              </p>
              <Link
                href="/jobs"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                Browse Jobs
              </Link>
            </div>
          ) : (
            sortedJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(job.status)}`}>
                          {job.status}
                        </span>
                      </div>
                      <p className="text-blue-600 font-medium mb-2">{job.company}</p>
                      <div className="flex items-center text-sm text-gray-600 space-x-4 mb-3">
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
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Applied {job.appliedDate}
                        </div>
                        {job.interviewDate && (
                          <div className="flex items-center text-blue-600">
                            <Calendar className="h-4 w-4 mr-1" />
                            Interview: {job.interviewDate}
                          </div>
                        )}
                      </div>
                      {job.notes && (
                        <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-700">{job.notes}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center text-gray-500">
                      {getStatusIcon(job.status)}
                    </div>
                    <Link
                      href={`/jobs/${job.jobId}`}
                      className="text-blue-600 hover:text-blue-700 p-2"
                      title="View Job Details"
                    >
                      <Eye className="h-4 w-4" />
                    </Link>
                    {job.status === "Interview Scheduled" && (
                      <button className="text-green-600 hover:text-green-700 p-2" title="Send Message">
                        <MessageCircle className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        {sortedJobs.length > 0 && (
          <div className="mt-8 flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
                1
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
