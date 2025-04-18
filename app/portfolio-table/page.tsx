import Header from "@/components/header"
import PortfolioTable from "@/components/portfolio-table"
import Footer from "@/components/footer"

export default function PortfolioTablePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-purple-950 text-white">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Portfolio Collection
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Browse through our curated collection of 130+ developer and designer portfolios
        </p>
        <PortfolioTable />
      </main>
      <Footer />
    </div>
  )
}
