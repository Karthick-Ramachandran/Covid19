import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [output, setData] = useState([]);
  useEffect(() => {
    data();
  }, []);

  const data = () => {
    axios.get("https://api.covid19india.org/data.json").then(data => {
      setData(data.data.statewise);
    });
  };
  return (
    <div>
      <div className="bg-primary p-3 text-white text-center">COVID19-INDIA</div>
      <div className="container">
        <div className="row justify-content-center">
          {output.map(c => (
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-xs-12 mt-4 mb-4"
              key={c.state}
            >
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">{c.state}</h4>
                  <div className="card-text text-muted">
                    Active Cases: {c.active}
                  </div>
                  <p className="text-danger card-text">Deaths: {c.deaths}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
