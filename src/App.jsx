
import './App.css'
import Button from './components/button/Button'
import H2 from './components/h2/H2'
import Nav from './components/nav/Nav'

function App() {
  

  return (
    <>
    
      <header>
      <Nav/>

      </header>
      <main>
        <h1>Hi, I am John Smith</h1>
        <h3>A Front End Developer</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut veritatis laboriosam doloribus illum magni recusandae aspernatur sunt consequuntur ullam, reprehenderit dolores fuga minima, accusamus odit deleniti eligendi tempore quos odio.
        Qui quasi nisi commodi suscipit dolorum explicabo accusantium autem!</p>
        <Button
        title = {"resume"}
        />
        <H2
        h2 = {"Projects"}
        id = {"projects"}
        />
        <H2
        h2 = {"Skills"}
        />
        <H2
        h2 = {"Contact"}
        />
        <Button
        title = {"email me"}
        />
      </main>
      <footer>
        <p>Created by John Smith</p>
      </footer>
    </>
  )
}

export default App
