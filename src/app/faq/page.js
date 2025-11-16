"use client";

import { useState } from "react";
import Link from "next/link";
import { Briefcase, ArrowLeft, ChevronDown, ChevronUp, Search, HelpCircle, User, Building2, Shield } from "lucide-react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openItems, setOpenItems] = useState({});

  const faqData = {
    general: [
      {
        id: 1,
        question: "What is JobPortal?",
        answer: "JobPortal is a comprehensive job board platform that connects job seekers with employers. We provide tools for job searching, application tracking, and recruitment management for businesses of all sizes."
      },
      {
        id: 2,
        question: "How do I get started on JobPortal?",
        answer: "Getting started is easy! Simply click 'Sign Up' and choose whether you're a job seeker or recruiter. Complete your profile with your information, and you'll be ready to start using our platform."
      },
      {
        id: 3,
        question: "Is JobPortal free to use?",
        answer: "Yes! JobPortal offers free accounts for both job seekers and recruiters. Job seekers can browse jobs, apply for positions, and manage their applications at no cost. Recruiters can post jobs and manage applications with our free tier."
      },
      {
        id: 4,
        question: "How do I contact customer support?",
        answer: "You can reach our customer support team through email at support@jobportal.com, or use the contact form on our website. We typically respond within 24 hours during business days."
      }
    ],
    jobseeker: [
      {
        id: 5,
        question: "How do I apply for a job?",
        answer: "To apply for a job, browse our job listings, click on a job that interests you, and then click the 'Apply for this job' button. You'll be prompted to upload your resume and write a cover letter if needed."
      },
      {
        id: 6,
        question: "Can I track my job applications?",
        answer: "Yes! Once you apply for jobs, you can track all your applications in the 'Applied Jobs' section of your dashboard. You'll see the status of each application and any updates from employers."
      },
      {
        id: 7,
        question: "How do I update my profile?",
        answer: "You can update your profile by going to the 'Profile' section in your dashboard. There you can edit your personal information, work experience, education, skills, and upload a new resume."
      },
      {
        id: 8,
        question: "What file formats are accepted for resumes?",
        answer: "We accept PDF, DOC, and DOCX file formats for resumes. We recommend using PDF format for the best compatibility across different devices and browsers."
      },
      {
        id: 9,
        question: "How do I get job recommendations?",
        answer: "Our platform uses your profile information, skills, and job preferences to provide personalized job recommendations. Make sure your profile is complete and up-to-date for the best recommendations."
      },
      {
        id: 10,
        question: "Can I save jobs to apply later?",
        answer: "Yes! You can bookmark jobs by clicking the bookmark icon on any job listing. You can view all your saved jobs in the 'Saved Jobs' section of your dashboard."
      }
    ],
    recruiter: [
      {
        id: 11,
        question: "How do I post a job?",
        answer: "To post a job, go to your recruiter dashboard and click 'Post Job'. Fill out the job details including title, description, requirements, and location. Once submitted, your job will be reviewed and published within 24 hours."
      },
      {
        id: 12,
        question: "How much does it cost to post a job?",
        answer: "We offer a free tier that allows you to post up to 3 jobs per month. For unlimited job postings and additional features, we have premium plans starting at $99/month."
      },
      {
        id: 13,
        question: "How do I manage job applications?",
        answer: "You can view and manage all applications for your jobs in the 'Applications' section of your dashboard. You can review candidate profiles, update application status, and communicate with applicants."
      },
      {
        id: 14,
        question: "Can I edit or delete a job posting?",
        answer: "Yes, you can edit or delete your job postings at any time from the 'Manage Jobs' section. Changes to job postings will be reflected immediately on the platform."
      },
      {
        id: 15,
        question: "How do I set up my company profile?",
        answer: "Go to the 'Company Profile' section in your dashboard to add your company information, logo, description, and other details. A complete company profile helps attract better candidates."
      },
      {
        id: 16,
        question: "Can I see analytics for my job postings?",
        answer: "Yes! Our analytics dashboard shows you views, applications, and other metrics for each of your job postings. This helps you understand which jobs are performing well."
      }
    ],
    technical: [
      {
        id: 17,
        question: "What browsers are supported?",
        answer: "JobPortal works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your preferred browser for the best experience."
      },
      {
        id: 18,
        question: "Is there a mobile app?",
        answer: "Currently, JobPortal is optimized for mobile browsers. We're working on native mobile apps for iOS and Android, which will be available soon."
      },
      {
        id: 19,
        question: "How do I reset my password?",
        answer: "Click 'Forgot Password' on the login page and enter your email address. We'll send you a link to reset your password. Make sure to check your spam folder if you don't receive the email."
      },
      {
        id: 20,
        question: "Why can't I upload my resume?",
        answer: "Make sure your file is in PDF, DOC, or DOCX format and is under 10MB in size. If you're still having trouble, try using a different browser or clearing your browser cache."
      },
      {
        id: 21,
        question: "How do I delete my account?",
        answer: "To delete your account, go to your profile settings and click 'Delete Account'. This action is permanent and will remove all your data from our platform."
      }
    ]
  };

  const categories = [
    { id: "all", name: "All Questions", icon: HelpCircle },
    { id: "general", name: "General", icon: HelpCircle },
    { id: "jobseeker", name: "Job Seekers", icon: User },
    { id: "recruiter", name: "Recruiters", icon: Building2 },
    { id: "technical", name: "Technical", icon: Shield }
  ];

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getFilteredFAQs = () => {
    let faqs = [];
    
    if (activeCategory === "all") {
      Object.values(faqData).forEach(categoryFAQs => {
        faqs = [...faqs, ...categoryFAQs];
      });
    } else {
      faqs = faqData[activeCategory] || [];
    }

    if (searchTerm) {
      faqs = faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return faqs;
  };

  const filteredFAQs = getFilteredFAQs();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
          <p className="text-gray-600 mt-2">Find answers to common questions about JobPortal</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeCategory === category.id
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="h-4 w-4 mr-3" />
                      {category.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFAQs.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                  <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No FAQs found</h3>
                  <p className="text-gray-600">
                    {searchTerm 
                      ? "Try adjusting your search terms or browse by category."
                      : "No questions available in this category."
                    }
                  </p>
                </div>
              ) : (
                filteredFAQs.map((faq) => (
                  <div key={faq.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      {openItems[faq.id] ? (
                        <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {openItems[faq.id] && (
                      <div className="px-6 pb-4">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Contact Support */}
            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Still have questions?</h3>
              <p className="text-gray-700 mb-4">
                Can't find the answer you're looking for? Our support team is here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 text-center"
                >
                  Contact Support
                </Link>
                <a
                  href="mailto:support@jobportal.com"
                  className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 text-center"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
