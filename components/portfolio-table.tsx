"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, Filter, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { mockPortfolios } from "@/lib/mock-data"

// Tech stack options for filtering
const techOptions = [
  "React",
  "Next.js",
  "Vue",
  "Angular",
  "Svelte",
  "TailwindCSS",
  "SCSS",
  "TypeScript",
  "JavaScript",
  "Three.js",
  "GSAP",
]

export default function PortfolioTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTechs, setSelectedTechs] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [sortConfig, setSortConfig] = useState<{
    key: string
    direction: "ascending" | "descending"
  } | null>(null)

  const itemsPerPage = 6

  // Improved filter: search across author, description, and techStack
  const filteredPortfolios = mockPortfolios.filter((portfolio) => {
    const term = searchTerm.trim().toLowerCase()
    const matchesSearch =
      portfolio.author.toLowerCase().includes(term) ||
      portfolio.description.toLowerCase().includes(term) ||
      portfolio.techStack.some((tech) => tech.toLowerCase().includes(term))

    const matchesTech = selectedTechs.length === 0 || selectedTechs.some((tech) => portfolio.techStack.includes(tech))

    return matchesSearch && matchesTech
  })

  // Sort portfolios if sort config is set
  const sortedPortfolios = [...filteredPortfolios].sort((a, b) => {
    if (!sortConfig) return 0

    const aValue = a[sortConfig.key as keyof typeof a]
    const bValue = b[sortConfig.key as keyof typeof b]

    if (typeof aValue === "string" && typeof bValue === "string") {
      if (sortConfig.direction === "ascending") {
        return aValue.localeCompare(bValue)
      } else {
        return bValue.localeCompare(aValue)
      }
    }

    return 0
  })

  // Paginate portfolios
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentPortfolios = sortedPortfolios.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(sortedPortfolios.length / itemsPerPage)

  // Handle sort
  const requestSort = (key: string) => {
    let direction: "ascending" | "descending" = "ascending"

    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }

    setSortConfig({ key, direction })
  }

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedTechs])

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            type="text"
            placeholder="Search portfolios..."
            className="pl-12 bg-white/5 border-white/10 rounded-xl text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10 rounded-xl text-base">
                <Filter className="mr-2 h-5 w-5" />
                Filter by Tech
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-slate-800 border-white/10 rounded-xl">
              {techOptions.map((tech) => (
                <DropdownMenuCheckboxItem
                  key={tech}
                  checked={selectedTechs.includes(tech)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedTechs([...selectedTechs, tech])
                    } else {
                      setSelectedTechs(selectedTechs.filter((t) => t !== tech))
                    }
                  }}
                  className="rounded-lg"
                >
                  {tech}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {selectedTechs.length > 0 && (
            <Button variant="ghost" onClick={() => setSelectedTechs([])} className="text-gray-400 hover:text-white rounded-xl text-base">
              Clear Filters
            </Button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="text-base text-gray-400 font-light">
        Showing <span className="font-semibold text-white">{currentPortfolios.length}</span> of <span className="font-semibold text-white">{filteredPortfolios.length}</span> portfolios
      </div>

      {/* Portfolio Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPortfolios.map((portfolio, index) => (
          <motion.div
            key={portfolio.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/60 transition-all hover:shadow-2xl shadow-lg"
          >
            <div className="relative aspect-video overflow-hidden group rounded-t-2xl">
              <img
                src={portfolio.screenshot || "/placeholder.svg"}
                alt={`${portfolio.author}'s portfolio`}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4 rounded-t-2xl">
                <a
                  href={portfolio.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-base font-medium hover:bg-white/20 transition-colors shadow"
                >
                  <ExternalLink size={16} /> Live Site
                </a>
                <a
                  href={portfolio.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-base font-medium hover:bg-white/20 transition-colors shadow"
                >
                  <Github size={16} /> Source
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-lg">{portfolio.author}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {portfolio.techStack.slice(0, 3).map((tech, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300 font-medium">
                    {tech}
                  </span>
                ))}
                {portfolio.techStack.length > 3 && (
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300 font-medium">
                    +{portfolio.techStack.length - 3} more
                  </span>
                )}
              </div>
              <p className="text-base text-gray-400 line-clamp-2 font-light">{portfolio.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-10">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="bg-white/5 border-white/10 hover:bg-white/10 rounded-xl"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className={
                  currentPage === page
                    ? "bg-purple-600 hover:bg-purple-700 rounded-xl text-white font-bold"
                    : "bg-white/5 border-white/10 hover:bg-white/10 rounded-xl text-white"
                }
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="bg-white/5 border-white/10 hover:bg-white/10 rounded-xl"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      )}

      {/* Empty State */}
      {currentPortfolios.length === 0 && (
        <div className="text-center py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 mb-6 shadow-lg"
          >
            <Search className="h-10 w-10 text-gray-400" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-3 text-white">No portfolios found</h3>
          <p className="text-gray-400 max-w-md mx-auto text-lg font-light">
            Try adjusting your search or filter criteria to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  )
}
