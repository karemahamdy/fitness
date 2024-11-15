import FooterLink from '../component/FooterLink';
import Social from "../component/Social";
import ContctUs from './ContctUs';
import Createdby from './Createdby';
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <footer className="container text-gray-300" id="contact">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Social />
          <FooterLink />
          <ContctUs />
          <Newsletter />
        </div>
      </div>

      <Createdby />

    </footer>
  );
};

export default Footer;