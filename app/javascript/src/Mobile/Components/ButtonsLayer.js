import React from 'react';
import { Grid } from 'antd-mobile';
import NextButton from './NextButton'
import PrevButton from './PreviousButton'

const ButtonsLayer = (step, setStep, formData, setFormData, FormTitles) => {

  const NextButtonClick = (step, setStep, formData, setFormData, FormTitles) => {
    return <NextButton step={step} setStep={setStep} FormTitles={FormTitles} formData={formData} setFormData={setFormData} />;
  };

  const PrevButtonClick = (step, setStep, formData, setFormData, FormTitles) => {
    return <PrevButton step={step} setStep={setStep} FormTitles={FormTitles} />;
  };

  return (
    <div style={ {position: 'fixed', bottom: '24px', width: '100%', marginRight: 'auto', marginLeft: 'auto', backgroundColor: 'beige', } }>
      <div style={ {position: 'fixed', bottom: '24px', width: '90%', marginRight: 'auto', marginLeft: 'auto', } }>
        <Grid columns={3} gap={8}>
          <Grid.Item>
            { PrevButtonClick(step, setStep, formData, setFormData, FormTitles) }
          </Grid.Item>
          <Grid.Item span={2}>
            { NextButtonClick(step, setStep, formData, setFormData, FormTitles) }
          </Grid.Item>
        </Grid>
      </div>
    </div>
  );
};

export default ButtonsLayer;
