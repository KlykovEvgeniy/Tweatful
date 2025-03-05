import HeaderBottom from 'components/Header/HeaderBottom/HeaderBottom';
import '../../styles/features.css';
import Player from 'components/Player/Player';
import Modern from 'components/Modern/Modern';
import Slider from 'reuse/Slider/Slider';
import Approach from 'components/Approach/Approach';
import ClosingHeadline from 'components/Main/ClosingHeadline/ClosingHeadline';
export default function Features() {
  return (
    <main>
      <HeaderBottom color="white" />
      <Player />
      <Modern />
      <Slider />
      <Approach />
      <ClosingHeadline color='white'/>
    </main>
  );
}
