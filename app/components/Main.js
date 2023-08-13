import ShwedagonProject from "./main/career/ShwedagonProject";
import KitchenDisplayProject from "./main/career/KitchenDisplayProject";
import TayProject from "./main/career/TayProject";
import FootballMasterProject from "./main/career/FootballMasterProject";

import portfolioData from "../utils/portfolioData";
import PortfolioCard from "./common/PortfolioCard";
import EcommerceClient from "../../public/portfolio/ecommerce-client.gif";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
          {portfolioData.map((portfolio, index) =>
            index === 4 ? (
              <div
                className="flex items-center justify-center md:col-span-2"
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
          {/* <OldPortfolioCard
            title="Ecommerce Admin Dashboard"
            image={EcommerceClient}
          /> */}
          {/* <PortfolioCard title="Ecommerce Website" image={EcommerceConsumer} />
          <PortfolioCard title="Charity Website" image={CharityProject} />
          <PortfolioCard title="Employee Poll" image={EmployeePoll} />
          <PortfolioCard2 /> */}
          {/* <Image
            alt="Ecommerce Admin Dashboard"
            src={Web6}
            className="rounded-3xl"
          /> */}
          {/* <img
            src="/public/portfolio/web6.png"
            alt="Ecommerce Admin Dashboard"
          /> */}
        </div>
      </section>
      {/* Portfolio Section */}
    </main>
  );
}
