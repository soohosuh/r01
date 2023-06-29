import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Kiosk from "./components/Kiosk3";
import Todo from "./components/todo";
import TodoInput from "./components/todo/TodoInput";
import TodoList from "./components/todo/TodoList";
import ZCounter from "./components/zcounter";
import SampleLayout from "./layout/SampleLayout";
import TemplatePage from "./layout/TemplatePage";

function App() {
  return (
    <div>
      {/* <TemplatePage>
        <div className="text-6xl text-red-800">Logo Header</div>
        <Zkiosk></Zkiosk>
      
      </TemplatePage> */}
      <Todo></Todo>
      
      
    </div>
  );
}

export default App;