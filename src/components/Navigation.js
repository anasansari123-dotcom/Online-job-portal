"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  Briefcase, 
  User, 
  Building2, 
  Menu, 
  X, 
  Search,
  Bell,
  LogOut,
  Settings,
  HelpCircle
} from "lucide-react";

export default function Navigation({ userRole = null, userName = null }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getNavigationItems = () => {
    if (!userRole) {
      return [
        { name: "Home", href: "/" },
        { name: "Jobs", href: "/jobs" },
        { name: "FAQ", href: "/faq" },
        { name: "Contact", href: "/contact" }
      ];
    }

    if (userRole === "jobseeker") {
      return [
        { name: "Dashboard", href: "/jobseeker/dashboard" },
        { name: "Jobs", href: "/jobs" },
        { name: "Applied Jobs", href: "/jobseeker/applied-jobs" },
        { name: "Profile", href: "/jobseeker/profile" }
      ];
    }

    if (userRole === "recruiter") {
      return [
        { name: "Dashboard", href: "/recruiter/dashboard" },
        { name: "Post Job", href: "/recruiter/post-job" },
        { name: "My Jobs", href: "/recruiter/jobs" },
        { name: "Applications", href: "/recruiter/applications" }
      ];
    }

    if (userRole === "admin") {
      return [
        { name: "Dashboard", href: "/admin/dashboard" },
        { name: "Users", href: "/admin/users" },
        { name: "Jobs", href: "/admin/jobs" },
        { name: "Reports", href: "/admin/reports" }
      ];
    }

    return [];
  };

  const navigationItems = getNavigationItems();

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Briefcase className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">JobPortal</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            {userRole ? (
              <>
                {/* Search for job seekers */}
                {userRole === "jobseeker" && (
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                )}
                
                {/* Notifications */}
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Bell className="h-5 w-5" />
                </button>
                
                {/* User menu */}
                <div className="flex items-center space-x-2">
                  {userRole === "jobseeker" && <User className="h-8 w-8 text-gray-400" />}
                  {userRole === "recruiter" && <Building2 className="h-8 w-8 text-gray-400" />}
                  {userRole === "admin" && <Settings className="h-8 w-8 text-gray-400" />}
                  <span className="text-sm font-medium text-gray-700">
                    {userName || (userRole === "jobseeker" ? "Job Seeker" : userRole === "recruiter" ? "Recruiter" : "Admin")}
                  </span>
                </div>
              </>
            ) : (
              <>
                <Link href="/faq" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  FAQ
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
                <Link href="/login" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Login
                </Link>
                <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-400 hover:text-gray-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {!userRole && (
                <>
                  <Link
                    href="/faq"
                    className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <Link
                      href="/login"
                      className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md text-sm font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="block px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md text-sm font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
