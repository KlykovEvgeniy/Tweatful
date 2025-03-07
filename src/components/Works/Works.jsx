import Container from 'components/Container/Container';
import WorksItem from 'reuse/WorksItem/WorksItem';
import create from '../../img/create.svg';
import addContent from '../../img/add-content.svg';
import publish from '../../img/launch.svg';

export default function Works() {
  return (
    <section className="works">
      <Container>
        <h2 className="works-title">How it works</h2>
        <div className="works-container">
          <WorksItem img={create} title="Create your site" text="Create an account to get started." />
          <WorksItem img={addContent} title="Add Contents" text="Add contents and pages to your site." />
          <WorksItem img={publish} title="Publish" text="Now publish to make your site live!" />
        </div>
      </Container>
    </section>
  );
}
