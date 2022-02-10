import './App.css';
import Funcomp from './FunComp';
import Classcomp from './ClassComp';
import Conditionalrender from './Conditionalrender'
import Propscomp from './Props';
import Statecomp from './State';
import EventHandlersFunc from './EventHandlersFunc';
import EventHandlersComp from './EventHandlersComp';
import ListRendering from './ListRendering';
import Listandkeys from './Listandkeys';
import Lifecycle from './Lifecycle';

function App() {

  const languages =['Angular', 'React', 'vue']
  const subject = 'React'
  const numbers = [1, 2, 3, 4, 5]


  return (
    <div className="App">

      <Funcomp name="Preeti" surname="Haloli"></Funcomp>
      <Classcomp data="React is JS libraray"></Classcomp>
      <Propscomp language={languages[0]}></Propscomp>
      <Propscomp language={languages[1]}></Propscomp>
      <Propscomp language={languages[2]}></Propscomp>
      <Propscomp library={subject}></Propscomp>
      <Statecomp />
      <Conditionalrender />
      <EventHandlersFunc/> 
      <EventHandlersComp/>
      <ListRendering/>

      <Listandkeys numbers={numbers} />
      {/* <Lifecycle /> */}



     
    </div>
  );
}

export default App;
