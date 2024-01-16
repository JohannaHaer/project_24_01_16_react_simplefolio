
import './App.css'
import Button from './components/button/Button'
import H2 from './components/h2/H2'
import Nav from './components/nav/Nav'
import ProjectSections from './components/projectSections/ProjectSections'
import SkillDivs from './components/skillDivs/SkillDivs'

function App() {
  

  return (
    <>
      <Nav/>
      <main>
        <h1 className=''>Hi, I am John Smith</h1>
        <h3>A Front End Developer</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut veritatis laboriosam doloribus illum magni recusandae aspernatur sunt consequuntur ullam, reprehenderit dolores fuga minima, accusamus odit deleniti eligendi tempore quos odio.
        Qui quasi nisi commodi suscipit dolorum explicabo accusantium autem!</p>
        <Button
        title = {"resume"}
        />
        <H2
        h2 = {"Projects"}
        />
        <ProjectSections
        title = {"Project1"}
        text = {"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut veritatis laboriosam doloribus illum magni."}
        description = {"JavaScript React Sass"}
        />
        <ProjectSections
        title = {"Project2"}
        text = {"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut veritatis laboriosam doloribus illum magni."}
        description = {"JavaScript React Sass"}
        />
        <ProjectSections
        title = {"Project3"}
        text = {"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut veritatis laboriosam doloribus illum magni."}
        description = {"JavaScript React Sass"}
        />
        <H2
        h2 = {"Skills"}
        />
        <SkillDivs/>
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
