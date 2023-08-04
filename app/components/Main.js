import React from "react";

import Image from "next/image";
import ShwedagonProject from "./main/career/ShwedagonProject";
import KitchenDisplayProject from "./main/career/KitchenDisplayProject";
import TayProject from "./main/career/TayProject";
import FootballMasterProject from "./main/career/FootballMasterProject";
// import EcommerceAdmin from "../../public/portfolio/ecommerce-admin.png";
import EcommerceConsumer from "../../public/portfolio/ecommerce.gif";
import EcommerceConsumer2 from "../../public/portfolio/ecommerce2.gif";
import EmployeePoll from "../../public/portfolio/employee-poll.png";
import CharityProject from "../../public/portfolio/charity.gif";
import InfotainmentProject from "../../public/portfolio/infotainment.png";
import TestImage from "../../public/portfolio/web3.png";
import PortfolioCard from "./common/PortfolioCard";

export default function Main() {
  return (
    <main>
      {/* Career Section */}
      <section className="space-y-10 md:space-y-20 mb-24 md:mb-28">
        <h2 className="text-3xl text-center mb-2">My Career Projects</h2>
        <ShwedagonProject />
        <KitchenDisplayProject />
        <TayProject />
        {/* <FootballMasterProject /> */}
      </section>
      {/* Career Section */}

      {/* Portfolio Section */}
      <section className="space-y-10 md:space-y-20 mb-24 md:mb-28">
        <h2 className="text-3xl text-center">My Personal Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
          <PortfolioCard
            title="Ecommerce Admin Dashboard"
            image={EcommerceConsumer2}
          />
          <PortfolioCard title="Ecommerce Website" image={EcommerceConsumer} />
          <PortfolioCard title="Charity Website" image={CharityProject} />
          <PortfolioCard title="Employee Poll" image={EmployeePoll} />
          <div className="flex items-center justify-center col-span-2 border">
            <div className="relative w-1/3">
              <Image
                // fill
                alt="Ecommerce Admin Dashboard"
                src={InfotainmentProject}
                className="rounded-3xl "
              />
            </div>
            {/* <PortfolioCard title="Infotainment" image={TestImage} /> */}
          </div>
        </div>
      </section>
      {/* Portfolio Section */}
    </main>
  );
}
