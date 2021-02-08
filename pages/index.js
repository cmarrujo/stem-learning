import Head from 'next/head'
import Board from '../components/Board/Board';
import Header from '../components/Header/Header';
import Row from '../components/Row/Row';
import Card from '../components/Card/Card';

export default function Home() {
  return (
    <div>
      <Head>
        <title>STEM - Learning</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Board>
          <Row>
            <Card title="Science" icon="science" />
            <Card title="Technology" icon="technology" />
          </Row>
          <Row>
            <Card title="Engineering" icon="engineering" />
            <Card title="Math" icon="math" />
          </Row>
        </Board>
      </main>
    </div>
  )
}