import React from "react";

const PredictionResult = ({ result }) => {
  return (
    <div className="prediction-result">
      <h3>Prediction Result</h3>
      <p className="black-text">{result}</p>
    </div>
  );
};

export default PredictionResult;
