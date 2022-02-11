import './App.css';
import Funcomp from './Basic/FunComp';
import Classcomp from './Basic/ClassComp';
import Conditionalrender from './Basic/Conditionalrender'
import Propscomp from './Basic/Props';
import Statecomp from './Basic/State';
import EventHandlersFunc from './Basic/EventHandlersFunc';
import EventHandlersComp from './Basic/EventHandlersComp';
import ListRendering from './Basic/ListRendering';
import Listandkeys from './Basic/Listandkeys';
import Lifecycle from './Basic/Lifecycle';
import Counter from './hooks/Usestate';
import UseStateWithPrevState from './hooks/UseStateWithPrevState';
import UseStateWithObj from './hooks/UseStateWithObj';
import UseStateWithArray from './hooks/UseStateWithArray';
import UseEffect from './hooks/UseEffect';
import UseEffectConditinally from './hooks/UseEffectConditinally';
import UseEffectCleanup from './hooks/UseEffectCleanup';
import UseRef from './hooks/UseRef';
import UseRefAsGenericContainer from './hooks/UseRefAsGenericContainer';
import UseMemo from './hooks/UseMemo';
import UseCallback from './hooks/UseCallback';

function App() {

  const languages =['Angular', 'React', 'vue']
  const subject = 'React'
  const numbers = [1, 2, 3, 4, 5]

  return (
    <div className="App">

{/* basic concepts */}
      {/* <Funcomp name="Preeti" surname="Haloli"></Funcomp>
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
      <Lifecycle /> */}


{/* hooks */}
      {/* <Counter /> */}
      {/* <UseStateWithPrevState /> */}
      {/* <UseStateWithObj /> */}
      {/* <UseStateWithArray /> */}
      {/* <UseEffect /> */}
      {/* <UseEffectConditinally/> */}
      {/* <UseEffectCleanup /> */}
      {/* <UseRef/> */}
      {/* <UseRefAsGenericContainer /> */}
      <UseMemo/>
      <UseCallback></UseCallback>
     
    </div>
  );
}

export default App;
