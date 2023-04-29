import { useState } from 'react';
import './App.css';
import { person } from './data';

function App() {
  const [data, setData] = useState(person);
  function changeData(){
    setData([]);
  }
  return (
    <div className="App">
      <h1>{data.length} Birthday Reminder</h1>
      {
        data.map(Data => {
          const {name,dob,img,age,id} = Data;
          return (
            <div className="birthday-data" key={id}>
              <img src={img} alt="" />
              <section className="text-data">
                <h3>Name: {name}</h3>
                <p>Age: {age}</p>
                <p>DOB: {dob}</p>
              </section>
            </div>
          )
        })
      }
      <button type='submit' onClick={()=>changeData()}>Clear All</button>
    </div>
  );
}

export default App;
