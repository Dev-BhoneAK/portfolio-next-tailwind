import React from "react";

import Image from "next/image";
import ShwedagonProject from "./career/ShwedagonProject";
import KitchenDisplayProject from "./career/KitchenDisplayProject";
import TayProject from "./career/TayProject";
import FootballMasterProject from "./career/FootballMasterProject";
import EcommerceAdmin from "../../public/portfolio/ecommerce-admin.png";
import EcommerceConsumer from "../../public/portfolio/ecommerce.gif";
import EmployeePoll from "../../public/portfolio/employee-poll.png";
import CharityProject from "../../public/portfolio/charity.gif";
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
            image={EcommerceAdmin}
          />
          <PortfolioCard title="Ecommerce Website" image={EcommerceConsumer} />
          <PortfolioCard title="Charity Website" image={CharityProject} />
          <PortfolioCard title="Employee Poll" image={EmployeePoll} />
        </div>
      </section>
      {/* Portfolio Section */}
    </main>
  );
}
