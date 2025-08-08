import About from "@/modules/about/About";
import ContactPage from "@/modules/contact/contact-page";
import HomePage from "@/modules/home/home-page";
import NavbarPage from "@/modules/navbar/navbar-page";
import WorkPage from "@/modules/work/work-page";


export default function Home() {
  return (
  <>
      <NavbarPage />
      <main>
        <section id="home">
          <HomePage />
        </section>
        <hr />
        <section id="project">
          <WorkPage />
        </section>
        <hr />
        <section id="about">
          <About />
        </section>
        <hr />
        {/* <section id="experience">
          <WorkPage />
        </section>
        <hr /> */}
        <section id="contact">
          <ContactPage />
        </section>
      </main>
  </>
  );
}
