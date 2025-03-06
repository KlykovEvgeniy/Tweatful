import SecondHeaderTop from 'components/SecondHeaderTop/SecondHeaderTop';
import Count from 'components/Count/Count';
import '../../styles/pricing.css';
import Slider from 'reuse/Slider/Slider';
import ClosingHeadline from 'components/Main/ClosingHeadline/ClosingHeadline';

export default function Pricing() {
  return (
    <main>
      <SecondHeaderTop
        title="We have created a big library of illustrations with custom style and action types."
        text="“E-commerce Illustration Pack collects different ways to do quick shopping, pay in a second, and get all those stuff you need. There are smart delivery and polite service in the scenes. Each of them is realized in cold and warm colors with”"
        color="#E7EBFC"
      />
      <Count />
      <Slider />
      <ClosingHeadline bk='#E7EBFC' padding='100px 0'/>
    </main>
  );
}
