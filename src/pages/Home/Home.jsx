import Container from 'components/Container/Container';
import '../../styles/main.css';
import HeaderBottom from 'components/Header/HeaderBottom/HeaderBottom';
import Headline from 'components/Main/HomeHeadline/Headline';
import Benefits from 'components/Main/Benefits/Benefits';
import Slider from '../../reuse/Slider/Slider';
import Process from 'components/Main/Process/Process';
import ClosingHeadline from 'components/Main/ClosingHeadline/ClosingHeadline';

export default function Home() {
  return (
    <main>
      <HeaderBottom />
      <Headline />
      <Benefits />
      <Slider />
      <Process />
      <ClosingHeadline />
    </main>
  );
}
