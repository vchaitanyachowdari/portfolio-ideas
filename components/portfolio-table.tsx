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

  // Filter portfolios based on search term and selected techs
  const filteredPortfolios = mockPortfolios.filter((portfolio) => {
    const matchesSearch = portfolio.author.toLowerCase().includes(searchTerm.toLowerCase())

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
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search portfolios..."
            className="pl-10 bg-white/5 border-white/10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10">
                <Filter className="mr-2 h-4 w-4" />
                Filter by Tech
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-slate-800 border-white/10">
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
                >
                  {tech}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {selectedTechs.length > 0 && (
            <Button variant="ghost" onClick={() => setSelectedTechs([])} className="text-gray-400 hover:text-white">
              Clear Filters
            </Button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-400">
        Showing {currentPortfolios.length} of {filteredPortfolios.length} portfolios
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPortfolios.map((portfolio, index) => (
          <motion.div
            key={portfolio.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
          >
            <div className="relative aspect-video overflow-hidden group">
              <img
                src={portfolio.screenshot || "/placeholder.svg"}
                alt={`${portfolio.author}'s portfolio`}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                <a
                  href={portfolio.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-colors"
                >
                  <ExternalLink size={14} /> Live Site
                </a>
                <a
                  href={portfolio.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-colors"
                >
                  <Github size={14} /> Source
                </a>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">{portfolio.author}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {portfolio.techStack.slice(0, 3).map((tech, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                    {tech}
                  </span>
                ))}
                {portfolio.techStack.length > 3 && (
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                    +{portfolio.techStack.length - 3} more
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-400 line-clamp-2">{portfolio.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="bg-white/5 border-white/10 hover:bg-white/10"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className={
                  currentPage === page
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
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
            className="bg-white/5 border-white/10 hover:bg-white/10"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Empty State */}
      {currentPortfolios.length === 0 && (
        <div className="text-center py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4"
          >
            <Search className="h-8 w-8 text-gray-400" />
          </motion.div>
          <h3 className="text-xl font-bold mb-2">No portfolios found</h3>
          <p className="text-gray-400 max-w-md mx-auto">
            Try adjusting your search or filter criteria to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  )
}
