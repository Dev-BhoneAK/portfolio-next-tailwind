import ShwedagonProject from "./main/career/ShwedagonProject";
import KitchenDisplayProject from "./main/career/KitchenDisplayProject";
import TayProject from "./main/career/TayProject";
import FootballMasterProject from "./main/career/FootballMasterProject";

import portfolioData from "../utils/portfolioData";
import PortfolioCard from "./common/PortfolioCard";

export default function Main() {
  return (
    <main>
      {/* Career Section */}
      <section className="space-y-10 md:space-y-28 mb-24 md:mb-36">
        <h2 className="text-3xl text-center">My Career Projects</h2>
        <ShwedagonProject />
        <KitchenDisplayProject />
        <TayProject />
        <FootballMasterProject />
      </section>
      {/* Career Section */}

      {/* Portfolio Section */}
      <section className="space-y-10 md:space-y-28 mb-24 md:mb-36">
        <h2 className="text-3xl text-center">My Personal Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center place-items-center">
          {portfolioData.map((portfolio, index) =>
            index === 4 ? (
              <div
                className="w-full flex items-center justify-center md:col-span-2 max-w-xl md:max-w-sm lg:max-w-md"
                key={portfolio.title}
              >
                <PortfolioCard
                  title={portfolio.title}
                  image={portfolio.image}
                  description={portfolio.description}
                  tagNames={portfolio.tagNames}
                  widthFlag
                />
              </div>
            ) : (
              <PortfolioCard
                key={portfolio.title}
                title={portfolio.title}
                image={portfolio.image}
                description={portfolio.description}
                tagNames={portfolio.tagNames}
              />
            )
          )}
        </div>
      </section>
      {/* Portfolio Section */}
    </main>
  );
}
