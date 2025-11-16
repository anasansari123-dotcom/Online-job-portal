"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Filter, 
  MapPin, 
  DollarSign, 
  Clock, 
  Bookmark,
  Briefcase,
  Building2,
  Star
} from "lucide-react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [sortBy, setSortBy] = useState("relevance");

  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp",
      logo: "/api/placeholder/60/60",
      location: "San Francisco, CA",
      salary: "$120k - $150k",
      type: "Full-time",
      category: "Technology",
      posted: "2 days ago",
      description: "We are looking for a senior React developer to join our growing team...",
      requirements: ["5+ years React experience", "TypeScript", "Redux", "Node.js"],
      isBookmarked: false,
      isRemote: false
    },
    {
      id: 2,
      title: "Product Manager",
      company: "StartupXYZ",
      logo: "/api/placeholder/60/60",
      location: "New York, NY",
      salary: "$100k - $130k",
      type: "Full-time",
      category: "Product",
      posted: "1 week ago",
      description: "Lead product strategy and work with cross-functional teams...",
      requirements: ["3+ years PM experience", "Agile", "Analytics", "Leadership"],
      isBookmarked: true,
      isRemote: false
    },
    {
      id: 3,
      title: "UX Designer",
      company: "DesignStudio",
      logo: "/api/placeholder/60/60",
      location: "Remote",
      salary: "$80k - $110k",
      type: "Full-time",
      category: "Design",
      posted: "3 days ago",
      description: "Create beautiful and intuitive user experiences...",
      requirements: ["Figma", "User Research", "Prototyping", "Design Systems"],
      isBookmarked: false,
      isRemote: true
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "DataCorp",
      logo: "/api/placeholder/60/60",
      location: "Seattle, WA",
      salary: "$110k - $140k",
      type: "Full-time",
      category: "Data",
      posted: "5 days ago",
      description: "Analyze complex datasets and build predictive models...",
      requirements: ["Python", "Machine Learning", "SQL", "Statistics"],
      isBookmarked: false,
      isRemote: false
    },
    {
      id: 5,
      title: "Marketing Manager",
      company: "GrowthCo",
      logo: "/api/placeholder/60/60",
      location: "Austin, TX",
      salary: "$70k - $90k",
      type: "Full-time",
      category: "Marketing",
      posted: "1 week ago",
      description: "Drive growth through innovative marketing strategies...",
      requirements: ["Digital Marketing", "Analytics", "Content Strategy", "Team Management"],
      isBookmarked: true,
      isRemote: false
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "CloudTech",
      logo: "/api/placeholder/60/60",
      location: "Remote",
      salary: "$95k - $125k",
      type: "Full-time",
      category: "Technology",
      posted: "4 days ago",
      description: "Manage cloud infrastructure and deployment pipelines...",
      requirements: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      isBookmarked: false,
      isRemote: true
    }
  ];

  const categories = ["All", "Technology", "Design", "Marketing", "Product", "Data", "Sales", "Finance"];
  const jobTypes = ["All", "Full-time", "Part-time", "Contract", "Internship"];
  const locations = ["All", "San Francisco, CA", "New York, NY", "Seattle, WA", "Austin, TX", "Remote"];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !selectedLocation || job.location === selectedLocation || selectedLocation === "All";
    const matchesCategory = !selectedCategory || job.category === selectedCategory || selectedCategory === "All";
    const matchesType = !selectedType || job.type === selectedType || selectedType === "All";
    
    return matchesSearch && matchesLocation && matchesCategory && matchesType;
  });

  const handleBookmark = (jobId) => {
    // Toggle bookmark status
    console.log("Bookmark toggled for job:", jobId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Next Job</h1>
          <p className="text-gray-600">Discover opportunities that match your skills and interests</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Job title, company..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Location */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              {/* Category */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Job Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  {jobTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Jobs List */}
          <div className="lg:col-span-3">
            {/* Sort and Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing {filteredJobs.length} of {jobs.length} jobs
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">Sort by:</span>
                <select
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="relevance">Relevance</option>
                  <option value="date">Date Posted</option>
                  <option value="salary">Salary</option>
                </select>
              </div>
            </div>

            {/* Jobs Grid */}
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                          {job.isRemote && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              Remote
                            </span>
                          )}
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
                        <p className="text-gray-600 text-sm mb-3">{job.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {job.requirements.slice(0, 3).map((req, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                              {req}
                            </span>
                          ))}
                          {job.requirements.length > 3 && (
                            <span className="text-gray-500 text-xs px-2 py-1">
                              +{job.requirements.length - 3} more
                            </span>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Posted {job.posted}</span>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleBookmark(job.id)}
                              className={`p-2 rounded-lg ${
                                job.isBookmarked 
                                  ? "bg-blue-100 text-blue-600" 
                                  : "bg-gray-100 text-gray-400 hover:text-blue-600"
                              }`}
                            >
                              <Bookmark className="h-4 w-4" />
                            </button>
                            <Link
                              href={`/jobs/${job.id}`}
                              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
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
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
