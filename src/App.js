

import './App.css';
import Greet from './components/greet'
import Message from './components/Message';
import Welcome  from './components/welcome';
import Counter from './components/counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/Stylesheets';
import Form from './components/Form';
function App() {
  return (
    <div className="App">
      {/* <h1>Hello World from this app</h1>
      <div>WTF this is not loding</div>
      <div>Ok I am going now Bye</div>
      <Greet name = "Parziwal" role = "Initiator">
        <p>This is children props</p>
         <p>Hellllllo</p>
    </Greet>
    <Greet name = "Daito" role = "Controller"/>
      <Greet name = "Rage" role = "Duelist"/>
      <Welcome name = "Victor"/>
      <Welcome name = "Sara"/>
      <Welcome name = "Default"/>
      
      <Counter /> */}
      {/* <FunctionClick />
      <ClassClick />
      <Message /> */}
      {/* <ParentComponent/> to see the working of props as a function */}
      {/* <UserGreeting /> */}
      {/* <NameList/> // to see list rendering in ReactJS */}
      {/* <StyleSheet/> // to practice CSS inside JS */}
      <Form></Form> // To practice Forms in React
    </div>
  );
}

export default App;
