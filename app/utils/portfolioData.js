import EmployeePoll from "../../public/portfolio/employee-poll.png";
import CharityProject from "../../public/portfolio/charity.gif";
import InfotainmentProject from "../../public/portfolio/infotainment.png";
import TestImage from "../../public/portfolio/web3.png";
import EcommerceClient from "../../public/portfolio/ecommerce-client.gif";
// import EcommerceAdmin from "../../public/portfolio/ecommerce-admin.png";

const portfolioData = [
  {
    title: "Ecommerce Admin Dashboard",
    image: EcommerceClient,
    description: "Admin Dashboard For Ecommerce Website",
    tagNames: ["react", "node", "bootstrap", "docker", "aws"],
  },
  {
    title: "Ecommerce Client",
    image: EcommerceClient,
    description: "Ecommerce Website for Clients",
    tagNames: ["react", "node", "bootstrap", "docker", "aws"],
  },
  {
    title: "Charity & Fundraising",
    image: CharityProject,
    description: "Fundraising website for Endangered Species",
    tagNames: ["react", "node", "bootstrap", "aws"],
  },
  {
    title: "Employee Poll",
    image: EmployeePoll,
    description: "Making polls for company's employee",
    tagNames: ["react", "firebase", "scss", "aws"],
  },
  {
    title: "Mobile First Infotainment Web App",
    image: InfotainmentProject,
    description: "Presented a collection of information and entertainment",
    tagNames: ["react", "node", "material-ui", "aws"],
  },
];

export default portfolioData;
