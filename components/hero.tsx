import Image from "next/image";
import dashboard from "@/public/assets/dashboard.png";
import dell from "@/public/assets/companies/dell.png";
import rakuten from "@/public/assets/companies/rakuten.png";
import ncr from "@/public/assets/companies/ncr.png";
import lattice from "@/public/assets/companies/lattice.png";
import zendesk from "@/public/assets/companies/zendesk.png";
import ted from "@/public/assets/companies/ted.png";
import pacificfunds from "@/public/assets/companies/pacific_funds.png";
import { StaticImageData } from "next/image";

interface Company {
  name: string;
  companyLogo: StaticImageData;
}

export default function HeroSection() {
  const companies: Company[] = [
    { name: "Dell", companyLogo: dell },
    { name: "Zendesk", companyLogo: zendesk },
    { name: "Rakuten", companyLogo: rakuten },
    { name: "Pacific Funds", companyLogo: pacificfunds },
    { name: "NCR", companyLogo: ncr },
    { name: "Lattice", companyLogo: lattice },
    { name: "TED", companyLogo: ted },
  ];

  return (
    <div
      className="relative min-h-screen py-12 md:py-20 text-white text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/hero_bg.jpeg')" }}
    >
    
      <div className="absolute inset-0  bg-opacity-40"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-2 text-sm text-[#F2F4F8] backdrop-blur-sm">
            <span>
              We just raised $20M in Series B.{" "}
              <a
                href="#"
                className="underline-none text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white"
              >
                Learn more
              </a>
            </span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-6 leading-tight">
            Modern analytics
            <br />
            <span className="text-gray-200">for the modern world</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition">
              Download the app
            </button>
            <button className="border border-white px-6 py-3 rounded-full font-medium text-white hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition">
              Talk to an expert
            </button>
          </div>
        </div>

        {/* Dashboard Image */}
        <div className="mt-12">
          <Image
            src={dashboard}
            alt="Analytics dashboard preview"
            width={960}
            height={472}
            className="w-full max-w-4xl mx-auto object-contain"
            priority
          />
        </div>

        {/* Trusted Companies Section */}
        <div className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-100 mt-12 mb-10">
            Trusted by teams at over 1,000 of the world’s leading organizations
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={company.companyLogo}
                  alt={`${company.name} logo`}
                  width={120}
                  height={40}
                  className="max-h-8 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}