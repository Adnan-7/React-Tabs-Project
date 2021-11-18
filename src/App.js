import React, { useState, useEffect } from 'react';
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [isloading, setIsloading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsloading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isloading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    );
  }

  const { id, title, dates, duties, company } = jobs[value];
  return (
    <section className='section'>
      <div className='title'>
        <h1>experience</h1>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        {/* btn container */}
        {/* job info */}
        <article className='job-info'>
          <h2>{title}</h2>
        </article>
      </div>
    </section>
  );
}

export default App;
