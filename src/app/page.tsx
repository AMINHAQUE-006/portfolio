import ContactPage from "@/modules/contact/contact-page";
import HomePage from "@/modules/home/home-page";
import NavbarPage from "@/modules/navbar/navbar-page";
import WorkPage from "@/modules/work/work-page";


export default function Home() {
  return (
  <div>
      <NavbarPage />
      <HomePage />
      <hr />
      <WorkPage />
      <hr />
      <ContactPage />
  </div>
  );
}
