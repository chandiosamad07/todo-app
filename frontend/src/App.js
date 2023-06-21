import ToDO from "./components/ToDO";

function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>ToDo APP</h1>
      

      <div className="top">
         <input type="text" placeholder="Add ToDos...."></input>
     
      <div className="add">Add</div>
      </div>

      <div className="list">
        <ToDO/>
      </div>
      </div>
    </div>
  );
}

export default App;
