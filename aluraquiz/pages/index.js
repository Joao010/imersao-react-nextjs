import {useState} from 'react';
import db from '../db.json';
import Head from 'next/head'
import {useRouter} from 'next/router'

// components
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import GitHubCorner from '../src/components/GitHubCorner'
import Input from '../src/components/Input'
import Button from '../src/components/Button'

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

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
            <form onSubmit={((ev) => {
              ev.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');
            })}>
              <Input
              name='nomeDoUsuario'
              value={name}
              setValue={(ev) => setName(ev)}
              placeholder='Diz aí seu nome'
              />

              <Button type='submit' disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
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
