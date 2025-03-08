import Container from 'components/Container/Container';
import TeammatesCard from 'reuse/TeammatesCard/TeammatesCard';

export default function Teammates() {
  const role = 'Digital Artist';

  return (
    <section className="teammates">
      <Container>
        <h2 className="teammates-title">Meet Our Teammates</h2>
        <div className="teammates-container">
          <TeammatesCard title="Samuel Willson" role={role} />
          <TeammatesCard title="Angelina Hellhop" role={role} />
          <TeammatesCard title="Kyle Generale" role={role} />
          <TeammatesCard title="Joey Taylor" role={role} />
          <TeammatesCard title="Samuel Willson" role={role} />
          <TeammatesCard title="Angelina Hellhop" role={role} />
          <TeammatesCard title="Kyle Generale" role={role} />
          <TeammatesCard title="Joey Taylor" role={role} />
        </div>
      </Container>
    </section>
  );
}
