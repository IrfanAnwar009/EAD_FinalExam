import React, { useEffect, useState } from 'react';

const TrafficLightSimulator = () => {
  const [activeLight, setActiveLight] = useState('red');

  useEffect(() => {
    const cycle = ['red', 'yellow', 'green'];
    let index = 0;

    const interval = setInterval(() => {
      setActiveLight(cycle[index]);
      index = (index + 1) % cycle.length;
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  const getLightStyle = (color) => ({
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    margin: '50px auto',
    backgroundColor: activeLight === color ? color : 'silver',     
    transition: 'background-color 0.5s, box-shadow 0.5s',
  });

  const containerStyle = {
    width: '100px',
    padding: '30px',
    backgroundColor: 'gray',
    borderRadius: '20px',
    margin: '40px ',
    display: 'flex',
    flexDirection: 'column',
  };

  const headingStyle = {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Times New Roman',
    fontSize: '35px',
  };

  const wrapperStyle = {
    backgroundColor: 'black',
    height: '100',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={wrapperStyle}>
      <h2 style={headingStyle}>Trafficc Lights Simulator</h2>
      <div style={containerStyle}>
        <div style={getLightStyle('red')}></div>
        <div style={getLightStyle('yellow')}></div>
        <div style={getLightStyle('green')}></div>
      </div>
    </div>
  );
};

export default TrafficLightSimulator;
