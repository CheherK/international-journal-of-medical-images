import "./home.styles.scss";
import journalcover from "../../assests/journal-cover.png";
import Button from "../../components/button/button.component";

const Home = () => (
   <section className="landing-page">
      <div className="container">
         <div className="introduction">
            <p>
               The International Journal of Medical Images is a peer-reviewed journal
               dedicated to the latest advancements in medical imaging technology and
               techniques. It publishes high-quality research articles, review
               papers, and case studies to promote the development of innovative
               imaging methods that can improve patient diagnosis and treatment
               outcomes.
            </p>
            <Button text="Subscribe" />
         </div>
         <img src={journalcover} alt="journal cover" />
      </div>
   </section>
);

export default Home;
