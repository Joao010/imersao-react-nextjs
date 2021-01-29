import db from '../db.json';

// components
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head'

export default function Home() {
  return(
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Alura Quiz - Modelo Base</title>
      </Head>

      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The legend of zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <input placeholder='Diz aí seu nome'/>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl='https://github.com/Joao010'/>
    </QuizBackground>
  );
}
