"use client"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Briefcase, Clock, DollarSign, Search, Heart } from "lucide-react"

interface Job {
  id: number
  title: string
  company: string
  location: string
  type: string
  salary: string
  description: string
  skills: string[]
  postedDate: string
  applicants: number
}

const jobPostings: Job[] = [
  {
    id: 1,
    title: "Lead Leathercraft Artisan",
    company: "Artisan Collective Co.",
    location: "Remote",
    type: "Full-time",
    salary: "$45,000 - $60,000",
    description:
      "We're seeking an experienced leathercraft artisan to lead our design team and mentor junior craftspeople. You'll oversee product development and quality control.",
    skills: ["Leather stitching", "Design", "Team leadership", "Quality control"],
    postedDate: "2 days ago",
    applicants: 12,
  },
  {
    id: 2,
    title: "Macramé Designer",
    company: "Boho Home Designs",
    location: "New York, NY",
    type: "Part-time",
    salary: "$25/hour",
    description:
      "Create unique macramé patterns and designs for our seasonal collections. Work with our creative team to bring new ideas to life.",
    skills: ["Macramé", "Pattern design", "Creativity"],
    postedDate: "1 week ago",
    applicants: 8,
  },
  {
    id: 3,
    title: "Jewelry Production Manager",
    company: "Bead & Sparkle Studios",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$50,000 - $65,000",
    description:
      "Manage production workflow, inventory, and team coordination for our beaded jewelry line. Ensure quality standards are met.",
    skills: ["Project management", "Beading", "Inventory management", "Leadership"],
    postedDate: "3 days ago",
    applicants: 15,
  },
  {
    id: 4,
    title: "Sewing & Alterations Specialist",
    company: "Stitch & Style Boutique",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$35,000 - $48,000",
    description:
      "Perform garment alterations and custom sewing projects. Must have experience with hand-stitching and machine sewing.",
    skills: ["Hand sewing", "Machine sewing", "Garment alteration", "Attention to detail"],
    postedDate: "5 days ago",
    applicants: 10,
  },
  {
    id: 5,
    title: "Sustainable Fashion Craftsperson",
    company: "EcoStitch Collective",
    location: "Portland, OR",
    type: "Full-time",
    salary: "$40,000 - $55,000",
    description:
      "Create upcycled and sustainable fashion pieces from reclaimed fabrics. Join our mission to reduce textile waste.",
    skills: ["Upcycling", "Sewing", "Sustainability", "Fashion design"],
    postedDate: "1 week ago",
    applicants: 18,
  },
  {
    id: 6,
    title: "Freelance Pattern Designer",
    company: "Craft Pattern Hub",
    location: "Remote",
    type: "Contract",
    salary: "$30-50/design",
    description:
      "Design and document craft patterns for macramé, weaving, and beading projects. Work on flexible timeline.",
    skills: ["Pattern design", "Documentation", "Creativity", "Communication"],
    postedDate: "4 days ago",
    applicants: 22,
  },
]

export default function JobPostingsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("All")
  const [favorites, setFavorites] = useState<number[]>([])

  const jobTypes = ["All", "Full-time", "Part-time", "Contract", "Remote"]

  const filteredJobs = jobPostings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === "All" || job.type.includes(selectedType)
    return matchesSearch && matchesType
  })

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    )
  }

  return (
    <div className="py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Sulong Job Postings</h1>
        <p className="text-gray-600 mt-2 max-w-2xl">
          Explore opportunities in the handmade crafts industry. Find your next role
          and join a community of talented artisans and craftspeople.
        </p>
      </header>

      {/* CTA for Job Seekers */}
      <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 mb-8">
        <p className="text-gray-700 mb-3">
          <strong>💼 Looking to post a job?</strong> If you're hiring talented
          craftspeople, list your opportunity to reach our community.
        </p>
        <button className="px-4 py-2 bg-cyan-700 text-white rounded-lg hover:bg-cyan-800 transition-colors">
          Post a Job
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6 sticky top-4">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>

            {/* Search */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Jobs
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Job title or company..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-700"
                />
              </div>
            </div>

            {/* Job Type Filter */}
            <div>
              <h3 className="font-medium text-sm text-gray-700 mb-3">Job Type</h3>
              <div className="space-y-2">
                {jobTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedType === type
                        ? "bg-cyan-700 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Job Listings */}
        <main className="lg:col-span-3">
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              Showing {filteredJobs.length} of {jobPostings.length} jobs
            </p>
          </div>

          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <article
                  key={job.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <p className="text-gray-600 text-sm">{job.company}</p>
                    </div>
                    <button
                      onClick={() => toggleFavorite(job.id)}
                      className={`p-2 rounded-full transition-colors ${
                        favorites.includes(job.id)
                          ? "bg-red-100 text-red-600"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      <Heart className="w-5 h-5" fill={favorites.includes(job.id) ? "currentColor" : "none"} />
                    </button>
                  </div>

                  <p className="text-gray-700 mb-4">{job.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Briefcase className="w-4 h-4 text-gray-400" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="w-4 h-4 text-gray-400" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span>{job.postedDate}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <p className="text-xs text-gray-500">{job.applicants} applicants</p>
                    <Link
                      href={`/job-postings/${job.id}`}
                      className="px-4 py-2 bg-cyan-700 text-white rounded-lg hover:bg-cyan-800 transition-colors text-sm font-medium"
                    >
                      View Details & Apply
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No jobs match your search criteria.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}