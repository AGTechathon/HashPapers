import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/papers/FeatureCard";
import PapersTable from "@/components/papers/PapersTable";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Decentralized Scientific Research Publishing</h1>
              <p className="text-lg mb-6 text-gray-100">
                Empower researchers with transparent, accessible, and rewarding publishing through blockchain technology and AI verification.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-white text-primary font-medium py-2 px-6 rounded-lg hover:bg-gray-100 transition">
                  Explore Research
                </Button>
                <Button variant="outline" className="border-2 border-white text-white font-medium py-2 px-6 rounded-lg hover:bg-white hover:bg-opacity-10 transition">
                  Publish Paper
                </Button>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="absolute -z-10 w-64 h-64 bg-white bg-opacity-10 rounded-full"></div>
                <svg className="w-72 h-72 text-white" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" fillOpacity="0.2" d="M48.8,-73.2C63.5,-66.2,75.8,-54.8,81.9,-40.5C88.1,-26.2,88.1,-9,84.8,6.9C81.5,22.8,75.1,37.4,65.3,49.9C55.5,62.4,42.3,72.7,27.4,77.3C12.4,81.9,-4.3,80.7,-20.6,76.5C-36.9,72.3,-52.8,65.1,-63.3,53.1C-73.8,41.1,-79,24.4,-80.5,7.5C-82,-9.4,-79.8,-26.4,-72.1,-40.9C-64.4,-55.5,-51.3,-67.5,-36.8,-74.4C-22.3,-81.3,-6.4,-83.1,8.6,-81.4C23.6,-79.7,47.3,-74.5,48.8,-73.2Z" transform="translate(100 100)" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg">
                      <div className="material-icons text-4xl">science</div>
                    </div>
                    <div className="p-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg">
                      <div className="material-icons text-4xl">token</div>
                    </div>
                    <div className="p-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg">
                      <div className="material-icons text-4xl">verified</div>
                    </div>
                    <div className="p-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg">
                      <div className="material-icons text-4xl">storage</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Revolutionizing Scientific Publishing</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our platform combines the power of blockchain and AI to create a transparent, accessible, and rewarding research ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard icon="snippet_folder" title="Blockchain Publishing" description="Securely store research papers on IPFS with metadata recorded on Ethereum/Polygon." />
            <FeatureCard icon="rate_review" title="Transparent Peer Review" description="Reviews stored on-chain for tamper-proof verification and complete transparency." />
            <FeatureCard icon="psychology" title="AI-Assisted Verification" description="AI tools detect plagiarism, check for duplicates, and provide quality ratings." />
            <FeatureCard icon="payments" title="Tokenized Rewards" description="Earn blockchain-based tokens for research contributions and peer reviews." />
          </div>
        </div>
      </section>

      {/* Latest Research Section */}
      <section id="latest-research" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Latest Research Papers</h2>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <span className="material-icons text-sm">add</span>
                Upload Paper
              </Button>
              <a href="/" className="text-primary hover:text-primary-dark font-medium flex items-center">
                View All
                <span className="material-icons text-sm ml-1">arrow_forward</span>
              </a>
            </div>
          </div>
          <PapersTable papers={[]} isLoading={false} />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our decentralized publishing platform simplifies the process while enhancing transparency and impact.
            </p>
          </div>
          {/* Add timeline steps or static content here as needed */}
        </div>
      </section>
    </>
  );
};

export default Home;
