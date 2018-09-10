import React from 'react';
const styles = {
  cls1: {
    fill: '#353535',
    stroke: 'rgba(112,112,112,0)',
  },

  cls2: {
    stroke: 'none',
  },

  cls3: {
    fill: 'none',
  },

  size: {
    width: '12px',
    height: '24px',
    margin: 'auto',
  }

}

export default () => ( 
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 56" style={styles.size}>
    <g id="Symbol_20_1" data-name="Symbol 20 – 1" transform="translate(-144 -8)">
      <g id="Rectangle_203" data-name="Rectangle 203" style={styles.cls1} transform="translate(144 8)">
        <rect style={styles.cls2} width="16" height="56"/>
        <rect style={styles.cls3} x="0.5" y="0.5" width="15" height="55"/>
      </g>
      <g id="Rectangle_204" data-name="Rectangle 204" style={styles.cls1} transform="translate(176 8)">
        <rect style={styles.cls2} width="16" height="56"/>
        <rect style={styles.cls3} x="0.5" y="0.5" width="15" height="55"/>
      </g>
    </g>
  </svg>
)