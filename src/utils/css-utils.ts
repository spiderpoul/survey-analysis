import { css } from 'styled-components';

export const sizes = {
  phone: 599,
  tablet: 768,
  desktop: 1200,
  hd: 1800,
};

// export const media = Object.keys(sizes).reduce((accumulator, label: any) => {
//   const emSize = sizes[label] / 16;

//   accumulator[label] = (...args) => css`
//     @media (min-width: ${emSize}em) {
//       ${css(...args)};
//     }
//   `;

//   return accumulator;
// }, {});