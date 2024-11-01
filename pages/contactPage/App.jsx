import ButtonGradient from "./assets/svg/ButtonGradient";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactForm from './components/ContactForm'
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <ContactForm />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;