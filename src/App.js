import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Sidebar2 from './components/Sidebar2';
import Hotel from './components/Hotel';

function App() {
  const [checkedItems, setCheckedItems] = useState({});
  const [checkedProperty, setCheckedProperty] = useState({});
  const [checkedFacility, setCheckedFacility] = useState({});

  const handleChange = event => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    });
    };

  const handlerChange = event => {
    setCheckedProperty ({
    ...checkedProperty,
      [event.target.name]: event.target.checked
    });
  };

  const handleOnChange = event => {
    setCheckedFacility ({
    ...checkedFacility,
      [event.target.name]: event.target.checked
    });
  };
  return (
    <div className="App">
      <Navbar />
      <div className="margin">
      <Sidebar />
      <div className="leftBorder"> 
        <Sidebar2 handleChange={handleChange} checkedItems={checkedItems} 
        handlerChange={handlerChange} checkedProperty={checkedProperty}
        handleOnChange={handleOnChange} checkedFacility={checkedFacility}
        />
        </div>
        <Hotel checkedItems={checkedItems}
        checkedProperty={checkedProperty} 
        checkedFacility={checkedFacility}
        />
      </div>
    </div>
  );
}

export default App;
