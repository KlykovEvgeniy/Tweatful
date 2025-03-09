import NavigationRoutes from 'services/Routes/Routes';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { ScrollToTop } from '../reuse/ScrollOnTop/ScrollOnTop';

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <NavigationRoutes />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
