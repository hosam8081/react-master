import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [info, setInfo] = useState(data)
  return <main>
    <div className='container'>
      <h3>Questions And Answers About Login</h3>
      <section>
        {info.map(item => <SingleQuestion {...item}/>)}
      </section>
    </div>
  </main>;
}

export default App;
