import SecondHeaderTop from 'components/SecondHeaderTop/SecondHeaderTop';
import '../../styles/about.css';
import Solution from 'components/Solution/Solution';
import Benefits from 'components/Main/Benefits/Benefits';
import ClosingHeadline from 'components/Main/ClosingHeadline/ClosingHeadline';
import SliderBig from 'components/SliderBig/SliderBig';
import Customers from 'components/Customers/Customers';
import Teammates from 'components/Teammates/Teammates';

export default function About() {
  return (
    <main>
      <SecondHeaderTop
        title="This headline is the gist of the Your whole Website That can Either Make Or Break"
        text="“E-commerce shipping Pack collects different ways to do quick shopping, pay in a second, and get all those stuff you need. There are smart delivery and polite service in the scenes. Each of them is realized in cold and warm colors with"
        color="#052825"
        textColor="white"
      />
      <Solution />
      <Benefits />
      <SliderBig />
      <Customers />
      <Teammates />
      <ClosingHeadline bk="#E7EBFC" padding="100px 0" />
    </main>
  );
}
