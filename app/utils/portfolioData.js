import EmployeePoll from "../../public/portfolio/employee-poll.png";
import CharityProject from "../../public/portfolio/charity.gif";
import InfotainmentProject from "../../public/portfolio/infotainment.png";
import EcommerceClient from "../../public/portfolio/ecommerce-client.gif";
import EcommerceAdmin from "../../public/portfolio/ecommerce-admin.png";

const portfolioData = [
  {
    title: "Ecommerce Admin Dashboard",
    image: EcommerceAdmin,
    description: "Admin Dashboard For Ecommerce Website",
    tagNames: ["react", "node", "docker", "aws"],
  },
  {
    title: "Ecommerce Client",
    image: EcommerceClient,
    description: "Ecommerce Website for Clients",
    tagNames: ["react", "node", "docker", "aws"],
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
    title: "Infotainment Web App",
    image: InfotainmentProject,
    description:
      "Collection of information and entertainment presentation with Mobile First UI",
    tagNames: ["react", "node", "material-ui", "aws"],
  },
];

export default portfolioData;
