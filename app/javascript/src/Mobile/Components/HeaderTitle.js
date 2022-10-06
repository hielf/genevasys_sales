import React from 'react'
import { Steps, AutoCenter } from 'antd-mobile'

const HeaderTitle = ({step, FormTitles}) => {
  const { Step } = Steps

  const StepDisplay = (step, FormTitles) => {
    return (
      <Steps current={step}>
        {
          FormTitles.map((title, index) => {
            return (<Step title={'Step ' + (index + 1)} key={title} style={{}}/>)
          })
        }
      </Steps>
    );
  };

  return (
    <div style={{ backgroundColor: "#90BA75", position: 'fixed', zIndex: 1, width: '100%', }}>
      <AutoCenter style={{ color: "#ffffff", fontSize:"16px", paddingTop:"8px", fontWeight: "bold", }}>
        { FormTitles[step] }
      </AutoCenter>
      { StepDisplay(step, FormTitles) }
    </div>
  );
};

export default HeaderTitle;
