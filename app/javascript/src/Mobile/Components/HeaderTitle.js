import React from 'react'
import { Steps, AutoCenter } from 'antd-mobile'

const HeaderTitle = ({step, FormTitles}) => {
  const { Step } = Steps

  const StepDisplay = (step, FormTitles) => {
    return (
      <Steps current={step}>
        {
          FormTitles.map((title, index) => {
            return (<Step title={'Step ' + (index + 1)} key={title} style={{ fontFamily: "'Varela Round', sans-serif", }}/>)
          })
        }
      </Steps>
    );
  };

  return (
    <div style={{ backgroundColor: "#277d31", position: 'fixed', zIndex: 1, width: '100%', }}>
      <AutoCenter style={{ color: "#ffffff", fontSize:"20px", paddingTop:"16px", fontFamily: "'Roboto', sans-serif", }}>
        { FormTitles[step] }
      </AutoCenter>
      { StepDisplay(step, FormTitles) }
    </div>
  );
};

export default HeaderTitle;
