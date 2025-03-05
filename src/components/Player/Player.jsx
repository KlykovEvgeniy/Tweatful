import Container from 'components/Container/Container';
import PlayerLeft from './PlayerLeft/PlayerLeft';
import PlayerVideo from './PlayerVideo/PlayerVideo';

export default function Player() {
  return (
    <section className="player">
      <Container>
        <PlayerLeft />
        <PlayerVideo />
      </Container>
    </section>
  );
}
