import React, { useState } from "react";

interface HandsKenyaProfileProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

const HandsKenyaProfile: React.FC<HandsKenyaProfileProps> = ({ setIsModalOpen }) => {
  const [expanded, setExpanded] = useState(false);

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "modal-background") {
      setIsModalOpen(false);
    }
  };

  return (
    <div
      id="modal-background"
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-md"
      onClick={closeModal}
    >
      <div
        className="relative w-11/12 max-w-7xl p-8 bg-white/20 backdrop-blur-xl rounded-xl shadow-xl overflow-y-auto"
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-orange-500">
            Hands Kenya Ltd Profile
          </h2>
          <p className="text-gray-200 mt-2">
            Discover our vision, mission, values, and what makes us the leading supply company in Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar */}
          <aside className="md:col-span-1 bg-blue-600/30 rounded-xl p-4 shadow-lg">
            <h3 className="text-2xl font-semibold text-orange-500 mb-4">
              Contact Information
            </h3>
            <p className="text-white mb-2">
              <strong>Headquarters:</strong> Nairobi County
            </p>
            <p className="text-white mb-2">
              <strong>Subsidiary:</strong> Voi
            </p>
            <p className="text-white mb-2">
              <strong>Phone:</strong> 0720 405 800 / 0720893488
            </p>
            <p className="text-white mb-2">
              <strong>Email:</strong> handslimited7@gmail.com
            </p>
            <p className="text-white">
              <strong>Bank:</strong> Cooperative Bank, Embakasi Branch
            </p>
          </aside>

          {/* Content Area */}
          <main className="md:col-span-2 space-y-6">
            {/* Vision and Mission - Translucent Cards */}
            <div className="p-6 bg-white/30 rounded-xl shadow-md hover:bg-blue-600 transition duration-300">
              <h3 className="text-2xl font-semibold text-orange-500 mb-4">
                Vision
              </h3>
              <p className="text-white leading-relaxed">
                To be the leading company in the region in General Supplies /
                Merchandizing, and provision of goods and services that
                transform the lives of our clients and consumers in the Eastern
                African market.
              </p>
            </div>

            <div className="p-6 bg-white/30 rounded-xl shadow-md hover:bg-blue-600 transition duration-300">
              <h3 className="text-2xl font-semibold text-orange-500 mb-4">
                Mission Statement
              </h3>
              <p className="text-white leading-relaxed">
                To create value for our clients through adopting best practices
                in the timely supply of goods and services.
              </p>
            </div>

            {/* Values - Highlight Boxes */}
            <div className="p-6 bg-gradient-to-r from-orange-500 via-blue-600 to-blue-800 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Core Values
              </h3>
              <ul className="list-disc list-inside text-gray-200 space-y-2">
                <li>Integrity</li>
                <li>Teamwork</li>
                <li>Professionalism</li>
                <li>Commitment</li>
                <li>Gender equity</li>
                <li>Equal opportunity</li>
                <li>Entrepreneurial spirit</li>
                <li>Customer care</li>
                <li>Caring and giving back to the community</li>
              </ul>
            </div>

            {/* Products and Services - Accordion */}
            <div className="p-6 bg-white/30 rounded-xl shadow-md">
              <button
                className="w-full text-left text-orange-500 font-semibold text-xl mb-4"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Hide" : "Show"} Products and Services
              </button>
              {expanded && (
                <div className="text-white space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Products:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Computers, laptops, and accessories</li>
                      <li>General stationery and office supplies</li>
                      <li>Furniture and office equipment</li>
                      <li>Construction tools and materials</li>
                      <li>Electrical appliances and systems</li>
                      <li>Pharmaceuticals and hospital equipment</li>
                      <li>Petroleum products: Tar and bitumen</li>
                      <li>Motor vehicles: 4x4 trucks</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Services:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Transport and logistics</li>
                      <li>Marketing and training</li>
                      <li>Feasibility studies</li>
                      <li>Trade fairs, conferences, and exhibitions</li>
                      <li>Distribution and supply of goods and services</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Competitive Advantage and Motto - Quote Style */}
            <blockquote className="p-6 bg-blue-800/50 rounded-xl shadow-md text-gray-100">
              <h3 className="text-2xl font-semibold text-orange-500 mb-4">
                Competitive Advantage
              </h3>
              <p>
                Hands Kenya Ltd is the leading supply company in Kenya and the
                region due to:
              </p>
              <ul className="list-disc list-inside pl-6 space-y-2">
                <li>Strong financial base</li>
                <li>Top-quality staff</li>
                <li>Wide product selection at affordable pricing</li>
                <li>Commitment to quality work ensuring consistency</li>
              </ul>
              <p className="mt-4 italic">
                Motto: "Transforming lives using Hands."
              </p>
            </blockquote>
          </main>
        </div>
      </div>
    </div>
  );
};

export default HandsKenyaProfile;