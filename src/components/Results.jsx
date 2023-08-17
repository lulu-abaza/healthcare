

const Results = () => {
  return <section className='container results-section'>
    <h2 className="blue results-title">Our results in numbers</h2>
      <div className="results-numbers">
        <div className="results-number">
        <div className="results-number-unit">
          <span className="blue">99</span><span className="light-blue">%</span></div>
          <p>Customer satisfaction</p>
      </div>
      <div className="results-number">
      <div className="results-number-unit">
        <span className="blue">15</span><span className="light-blue">k</span></div>
        <p>Online Patients</p>
      </div>
      <div className="results-number">
      <div className="results-number-unit">
        <span className="blue">12</span><span className="light-blue">k</span></div>
        <p>Patients Recovered</p>
      </div>
      <div className="results-number">
      <div className="results-number-unit">
        <span className="blue">240</span><span className="light-blue">%</span></div>
        <p>Company growth</p>
      </div>
      </div>
  </section>
};

export default Results;
