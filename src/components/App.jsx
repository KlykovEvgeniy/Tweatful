import NavigationRoutes from 'services/Routes/Routes';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <NavigationRoutes />
      <Footer />
    </div>
  );
}
