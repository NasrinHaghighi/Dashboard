import React, {useEffect, useState} from 'react'
import {Box, Info, Title, Subtit} from './style'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


  

function Target({percentage, month}) {
    
    const [animatedPercentage, setAnimatedPercentage] = useState(0);
  
    useEffect(() => {
      const animationInterval = setInterval(() => {
        setAnimatedPercentage(prevPercentage => {
          const step = 5; // Adjust the step as needed
          const nextPercentage = prevPercentage + step;
          return nextPercentage > percentage ? percentage : nextPercentage;
        });
      }, 300); // Adjust the interval duration as needed
  
      if (animatedPercentage >= percentage) {
        clearInterval(animationInterval);
      }
  
      return () => {
        clearInterval(animationInterval);
      };
    }, [percentage, animatedPercentage]);
const textcolor=month ? '#f9f3f3': '#050505ed'

  return (
    <Box month={month ? 'month' : ''}>
        <Info>
            <Title>{month ? 'Monthly' : 'Weekly'} Target</Title>
            <Subtit>{percentage} % Achived</Subtit>
        </Info>

    <div style={{ width: '80px' }}>
        <CircularProgressbar
          value={animatedPercentage}
          text={`${animatedPercentage}%`}
          styles={buildStyles({
            pathColor: `rgba(230,145,65, ${animatedPercentage / 100})`,
            textColor: textcolor,
            trailColor: '#fdfbfb',
            textSize: '16px',
          })}
        />
      </div>
    </Box>
  )
}

export default Target
