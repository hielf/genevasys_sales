import React from 'react';
import { FloatingBubble } from 'antd-mobile';
import { PhoneFill } from 'antd-mobile-icons'

const Bubble = () => {
  const onClick = () => {

  }

  return (
    <a href="tel:7787863838">
      <FloatingBubble
        axis='lock'
        style={{
          '--initial-position-bottom': '112px',
          '--initial-position-right': '24px',
          '--edge-distance': '24px',
        }}
      >
        <PhoneFill fontSize={32} />
      </FloatingBubble>
    </a>
  )
};

export default Bubble;
