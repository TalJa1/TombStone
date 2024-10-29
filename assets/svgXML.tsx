/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

// style import
import {SvgXml} from 'react-native-svg';

export const test = (w?: any, h?: any, color?: any) => {
  const xml = ``;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const editIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9445 14.1875L9.94446 10.1875M13.9445 14.1875L8.946 19.1859C8.28735 19.8446 7.48784 20.3646 6.56993 20.5229C5.64311 20.6828 4.49294 20.736 3.94444 20.1875C3.39595 19.639 3.44915 18.4888 3.609 17.562C3.76731 16.6441 4.28735 15.8446 4.946 15.1859L9.94446 10.1875M13.9445 14.1875C13.9445 14.1875 16.9444 11.1875 14.9444 9.1875C12.9444 7.1875 9.94446 10.1875 9.94446 10.1875M3.5 12C3.5 5.5 5.5 3.5 12 3.5C18.5 3.5 20.5 5.5 20.5 12C20.5 18.5 18.5 20.5 12 20.5" stroke="#91A895" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const readmoreNextIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 17L15 12L10 7" stroke=${
    color ?? '#001A72'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const filterIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 4V10M19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14M19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14M19 14V20M12 4V16M12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16ZM5 8V20M5 8C6.10457 8 7 7.10457 7 6C7 4.89543 6.10457 4 5 4C3.89543 4 3 4.89543 3 6C3 7.10457 3.89543 8 5 8Z" stroke=${
    color ?? '#EEF2EE'
  } stroke-width="1.5" stroke-linecap="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const thunderIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.2258 4.6857C16.3571 4.35726 16.1152 4 15.7615 4H9.86041C9.64519 4 9.45413 4.13771 9.38607 4.34189L6.7194 12.3419C6.61148 12.6657 6.85246 13 7.19374 13H9.85964C10.1849 13 10.4236 13.3057 10.3447 13.6213L8.93784 19.2487C8.81485 19.7407 9.41789 20.0821 9.77647 19.7236L18.6465 10.8536C18.9615 10.5386 18.7384 10 18.2929 10H14.8385C14.4848 10 14.2429 9.64274 14.3743 9.31431L16.2258 4.6857Z" stroke="#FFEDED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const sandClockIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 20.25V17.1056C7.5 16.7107 7.61688 16.3247 7.8359 15.9962L9.7604 13.1094C10.2083 12.4376 10.2083 11.5624 9.7604 10.8906L7.8359 8.00385C7.61688 7.67531 7.5 7.2893 7.5 6.89445V3.75M7.5 20.25C6.25 20.125 5.5 20 5.5 20M7.5 20.25C8.75 20.375 10.5 20.5 12.5 20.5C14.5 20.5 16.25 20.375 17.5 20.25M7.5 3.75C6.25 3.875 5.5 4 5.5 4M7.5 3.75C8.75 3.625 10.5 3.5 12.5 3.5C14.5 3.5 16.25 3.625 17.5 3.75M17.5 20.25V17.1056C17.5 16.7107 17.3831 16.3247 17.1641 15.9962L15.2396 13.1094C14.7917 12.4376 14.7917 11.5624 15.2396 10.8906L17.1641 8.00385C17.3831 7.67531 17.5 7.2893 17.5 6.89445V3.75M17.5 20.25C18.75 20.125 19.5 20 19.5 20M17.5 3.75C18.75 3.875 19.5 4 19.5 4" stroke="#E5E5E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const questionIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.00024 14.25V14.2425M9.00021 12C9.00021 8.625 12.0002 9.375 12.0002 6.75C12.0002 5.09315 10.6571 3.75 9.00021 3.75C7.60233 3.75 6.42776 4.70608 6.09473 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const locationIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.54423 13.7385C11.2343 12.3668 13.3337 10.0952 13.3337 7.33333C13.3337 4.38781 10.9458 2 8.00033 2C5.05481 2 2.66699 4.38781 2.66699 7.33333C2.66699 10.0952 4.76638 12.3668 7.45642 13.7385C7.79818 13.9127 8.20247 13.9127 8.54423 13.7385Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0003 7.33333C10.0003 8.4379 9.10489 9.33333 8.00033 9.33333C6.89576 9.33333 6.00033 8.4379 6.00033 7.33333C6.00033 6.22876 6.89576 5.33333 8.00033 5.33333C9.10489 5.33333 10.0003 6.22876 10.0003 7.33333Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const communityUpdateIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13V13.01M20 7V10.5M6.5 21.0001H17.5C18.8807 21.0001 20 19.8808 20 18.5001C20 14.4194 14 14.5001 12 14.5001C10 14.5001 4 14.4194 4 18.5001C4 19.8808 5.11929 21.0001 6.5 21.0001ZM16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#1B45A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const searchingRequestIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 13H13M9 17H15M15 4.27928V3H9V4.27928M15 4.27928V6H9V4.27928M15 4.27928C18.3745 5.0462 19.5 7.5037 19.5 13C19.5 19.8824 17.7353 22 12 22C6.26471 22 4.5 19.8824 4.5 13C4.5 7.5037 5.62549 5.0462 9 4.27928" stroke="#EEF2EE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const loveIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0Z" fill="url(#paint0_linear_171_2711)"/>
<path d="M10.473 4C8.275 4 8 5.824 8 5.824C8 5.824 7.726 4 5.528 4C3.414 4 2.798 6.222 3.056 7.41C3.736 10.55 8 12.75 8 12.75C8 12.75 12.265 10.55 12.945 7.41C13.202 6.222 12.585 4 10.473 4Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_171_2711" x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6680"/>
<stop offset="1" stop-color="#E61739"/>
</linearGradient>
</defs>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const postStatusIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="16" height="16" fill="url(#pattern0_171_2694)"/>
<defs>
<pattern id="pattern0_171_2694" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_171_2694" transform="scale(0.0625)"/>
</pattern>
<image id="image0_171_2694" width="16" height="16" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAATlBMVEVHcEzgTGDgTGDpWm7gTGDgTGDgTGDgTGDza3/gTGD////qXHD0dIf1fo/+9vfnWGz95Of70df4rLf82t/yaX31h5fhTmLoWm73maf4o6/st7TFAAAACHRSTlMAYLD3IPAwoMDpyIkAAABtSURBVHjaVYzZFsIwCETHVmJAsnX3/3/UxnTB+wAz9xyA69+G3oH8j+3TNoFbKLltPoSKBCOiNPQUIdea5/skVBHMj0FilMGIsaiW0Qi9BoMmb5gIjjjtaV24Qg7AY79K3RM37NMLFub/js72L+LnB7p/CBsUAAAAAElFTkSuQmCC"/>
</defs>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const worldIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 6C10.5 8.48528 8.48528 10.5 6 10.5M10.5 6C10.5 3.51472 8.48528 1.5 6 1.5M10.5 6H1.5M6 10.5C3.51472 10.5 1.5 8.48528 1.5 6M6 10.5C6 10.5 8 9 8 6C8 3 6 1.5 6 1.5M6 10.5C6 10.5 4 9 4 6C4 3 6 1.5 6 1.5M1.5 6C1.5 3.51472 3.51472 1.5 6 1.5" stroke="#868686"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const shareIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.37672 20.2125C4.31086 20.2129 4.24539 20.2023 4.18297 20.1813C4.05244 20.1389 3.93949 20.0547 3.86155 19.9418C3.78361 19.8288 3.74502 19.6934 3.75172 19.5563C3.75172 19.4625 4.39547 10.3875 13.4955 9.67503V6.41253C13.4954 6.28828 13.5323 6.16681 13.6016 6.06364C13.6708 5.96047 13.7692 5.88029 13.8843 5.83333C13.9993 5.78638 14.1258 5.77478 14.2474 5.80002C14.3691 5.82526 14.4805 5.88619 14.5673 5.97504L20.7361 12.275C20.8506 12.3919 20.9148 12.5489 20.9148 12.7125C20.9148 12.8761 20.8506 13.0332 20.7361 13.15L14.5673 19.45C14.4805 19.5389 14.3691 19.5998 14.2474 19.6251C14.1258 19.6503 13.9993 19.6387 13.8843 19.5917C13.7692 19.5448 13.6708 19.4646 13.6016 19.3614C13.5323 19.2583 13.4954 19.1368 13.4955 19.0125V15.8125C7.42047 16.0438 4.92985 19.875 4.90485 19.9219C4.84846 20.011 4.77048 20.0843 4.67814 20.1351C4.5858 20.1859 4.48212 20.2126 4.37672 20.2125ZM14.7455 7.94378V10.2594C14.7456 10.4214 14.6827 10.5772 14.5702 10.6938C14.4577 10.8104 14.3043 10.8787 14.1423 10.8844C8.25485 11.1 6.1486 15.0219 5.39235 17.5438C6.95485 16.1938 9.73922 14.5438 14.083 14.5438H14.1111C14.2769 14.5438 14.4358 14.6096 14.553 14.7268C14.6703 14.8441 14.7361 15.003 14.7361 15.1688V17.4844L19.4236 12.7157L14.7455 7.94378Z" fill="#868686"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const commentIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_171_2324" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="2" width="20" height="21">
<rect x="0.303711" y="2.88086" width="19.6964" height="19.6964" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_171_2324)">
<path d="M1.94531 20.9359V6.16358C1.94531 5.71221 2.10617 5.32567 2.42787 5.00396C2.74903 4.6828 3.1353 4.52222 3.58668 4.52222H16.7176C17.169 4.52222 17.5555 4.6828 17.8772 5.00396C18.1984 5.32567 18.359 5.71221 18.359 6.16358V16.0118C18.359 16.4632 18.1984 16.8497 17.8772 17.1714C17.5555 17.4926 17.169 17.6531 16.7176 17.6531H5.22805L1.94531 20.9359ZM3.58668 16.9761L4.55098 16.0118H16.7176V6.16358H3.58668V16.9761Z" fill="#868686"/>
</g>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const likeIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.1323 12.23C21.4102 12.435 21.666 12.6383 21.666 13.3533C21.666 14.07 21.3044 14.36 20.9176 14.5617C21.0757 14.8338 21.1262 15.1606 21.0581 15.4717C20.9365 16.045 20.4392 16.49 19.9971 16.6217C20.1881 16.945 20.2481 17.2633 20.0208 17.655C19.7286 18.1467 19.4744 18.3333 18.3502 18.3333H13.7713C12.2113 18.3333 11.4029 17.4233 11.4029 16.6667V12.775C11.4029 10.725 13.7192 8.98333 13.7192 7.55833L13.5518 5.78333C13.5439 5.675 13.5644 5.41 13.6434 5.33333C13.7697 5.20167 14.1186 5 14.646 5C14.9902 5 15.2192 5.06833 15.4892 5.205C16.4065 5.66667 16.645 6.835 16.645 7.775C16.645 8.22667 15.9913 9.58 15.9029 10.0483C15.9029 10.0483 17.2718 9.72833 18.8697 9.71667C20.545 9.70667 21.6313 10.0333 21.6313 11.12C21.6313 11.555 21.2855 11.9917 21.1323 12.23ZM7.61338 11.6667H8.87654C9.1278 11.6667 9.36877 11.772 9.54643 11.9596C9.7241 12.1471 9.82391 12.4015 9.82391 12.6667V19C9.82391 19.2652 9.7241 19.5196 9.54643 19.7071C9.36877 19.8946 9.1278 20 8.87654 20H7.61338C7.36213 20 7.12116 19.8946 6.94349 19.7071C6.76583 19.5196 6.66602 19.2652 6.66602 19V12.6667C6.66602 12.4015 6.76583 12.1471 6.94349 11.9596C7.12116 11.772 7.36213 11.6667 7.61338 11.6667Z" fill=${
    color ?? '#129BF7'
  }/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const listIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.6665 11.3333L9.99984 8.00001L6.6665 4.66667" stroke=${
    color ?? '#547958'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const textInputIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9445 14.1875L9.94446 10.1875M13.9445 14.1875L8.946 19.1859C8.28735 19.8446 7.48784 20.3646 6.56993 20.5229C5.64311 20.6828 4.49294 20.736 3.94444 20.1875C3.39595 19.639 3.44915 18.4888 3.609 17.562C3.76731 16.6441 4.28735 15.8446 4.946 15.1859L9.94446 10.1875M13.9445 14.1875C13.9445 14.1875 16.9444 11.1875 14.9444 9.1875C12.9444 7.1875 9.94446 10.1875 9.94446 10.1875M3.5 12C3.5 5.5 5.5 3.5 12 3.5C18.5 3.5 20.5 5.5 20.5 12C20.5 18.5 18.5 20.5 12 20.5" stroke="#969696" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const cancelIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M63.8332 16.6667L17.1665 63.3334M17.1666 16.6667L63.8333 63.3334" stroke=${
    color ?? '#EBEBEB'
  } stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const checkIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M66.6665 23.3333L30 59.9999L13.333 43.3333" stroke=${
    color ?? '#343434'
  } stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const cameraIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.75 21.6666C35.75 17.2222 34.9167 13.3333 34.0833 12.7778C33.5492 12.4217 30.9614 12.0656 27.4167 11.8558C25.4305 11.7383 29.0833 8.33331 20.75 8.33331C12.4167 8.33331 16.0695 11.7383 14.0833 11.8558C10.5386 12.0656 7.95075 12.4217 7.41667 12.7778C6.58333 13.3333 5.75 17.2222 5.75 21.6666C5.75 26.1111 6.58333 30 7.41667 30.5555C8.25 31.1111 14.0833 31.6666 20.75 31.6666C27.4167 31.6666 33.25 31.1111 34.0833 30.5555C34.9167 30 35.75 26.1111 35.75 21.6666Z" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.75 26.6666C23.5114 26.6666 25.75 24.4281 25.75 21.6666C25.75 18.9052 23.5114 16.6666 20.75 16.6666C17.9886 16.6666 15.75 18.9052 15.75 21.6666C15.75 24.4281 17.9886 26.6666 20.75 26.6666Z" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const arrowBackIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.07 5.93L4 12L10.07 18.07" stroke=${
    color ?? '#547958'
  } stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 12H4.16998" stroke=${
    color ?? '#547958'
  } stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const arrowNextIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.93 5.93L21 12L14.93 18.07" stroke=${
    color ?? '#547958'
  } stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 12H20.83" stroke=${
    color ?? '#547958'
  } stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const dropdownIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 9L12 17L20 9" stroke=${
    color ?? '#547958'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const backIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 4L7 12L15 20" stroke=${
    color ?? '#547958'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const readMoreIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 17L15 12L10 7" stroke=${
    color ?? '#001A72'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const bellIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 17.5V18.5C9 20.1569 10.3431 21 12 21C13.6569 21 15 20.1569 15 18.5V17.5M5.99999 8.5C5.99999 5.18629 8.68628 3.5 12 3.5C15.3137 3.5 18 5.18629 18 8.5C18 10.4392 18.705 12.6133 19.4316 14.3389C20.0348 15.7717 19.0222 17.5 17.4676 17.5H6.53237C4.97778 17.5 3.96518 15.7717 4.56842 14.3389C5.29493 12.6133 5.99999 10.4392 5.99999 8.5Z" stroke=${
    color ?? '#ECF3A3'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const nextIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5 12.5L4.5 12.5M20.5 12.5L14.5 18.5M20.5 12.5L14.5 6.5" stroke=${
    color ?? '#ECF3A3'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const homeIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.02 2.84001L3.63 7.04001C2.73 7.74001 2 9.23001 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29001 21.19 7.74001 20.2 7.05001L14.02 2.72001C12.62 1.74001 10.37 1.79001 9.02 2.84001Z" stroke="#91A895" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17.99V14.99V17.99Z" fill="#91A895"/>
<path d="M12 17.99V14.99" stroke="#91A895" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const searchIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 20L15.8033 15.8033M18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C14.6421 18 18 14.6421 18 10.5Z" stroke=${
    color ?? '#91A895'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const plusIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12H20M12 4V20" stroke=${
    color ?? '#ECF3A3'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const mapIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5L5.63246 3.87749C4.33739 3.4458 3 4.40974 3 5.77485V17.5585C3 18.4193 3.55086 19.1836 4.36754 19.4558L9 21M9 5L15 3M9 5V21M15 3L19.6325 4.54415C20.4491 4.81638 21 5.58066 21 6.44152V18.2251C21 19.5903 19.6626 20.5542 18.3675 20.1225L15 19M15 3V19M15 19L9 21" stroke="#91A895" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const communityIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14C21.2091 14 23 16 23 17.5C23 18.3284 22.3284 19 21.5 19H21M17 11C18.6569 11 20 9.65685 20 8C20 6.34315 18.6569 5 17 5M5 14C2.79086 14 1 16 1 17.5C1 18.3284 1.67157 19 2.5 19H3M7 11C5.34315 11 4 9.65685 4 8C4 6.34315 5.34315 5 7 5M16.5 19H7.5C6.67157 19 6 18.3284 6 17.5C6 15 9 14 12 14C15 14 18 15 18 17.5C18 18.3284 17.3284 19 16.5 19ZM15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z" stroke="#91A895" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const homeFilledIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.04 6.82L14.28 2.79C12.71 1.69 10.3 1.75 8.78999 2.92L3.77999 6.83C2.77999 7.61 1.98999 9.21 1.98999 10.47V17.37C1.98999 19.92 4.05999 22 6.60999 22H17.39C19.94 22 22.01 19.93 22.01 17.38V10.6C22.01 9.25 21.14 7.59 20.04 6.82ZM12.75 18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18Z" fill=${
    color ?? '#547958'
  }/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const searchFilledIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" fill="#547958"/>
<path d="M20 20L15.8033 15.8033M18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C14.6421 18 18 14.6421 18 10.5Z" stroke="#547958" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const mapFilledIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3L9 5V21L3 19V3Z" fill="#547958"/>
<path d="M21 5L15 3V19L21 21V5Z" fill="#547958"/>
<path d="M15 3V19M15 3L9 5M15 3L21 5V21L15 19M15 19L9 21M9 5V21M9 5L3 3V19L9 21" stroke="#547958" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const communityFilledIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14C21.2091 14 23 16 23 17.5C23 18.3284 22.3284 19 21.5 19H21M17 11C18.6569 11 20 9.65685 20 8C20 6.34315 18.6569 5 17 5M5 14C2.79086 14 1 16 1 17.5C1 18.3284 1.67157 19 2.5 19H3M7 11C5.34315 11 4 9.65685 4 8C4 6.34315 5.34315 5 7 5M16.5 19H7.5C6.67157 19 6 18.3284 6 17.5C6 15 9 14 12 14C15 14 18 15 18 17.5C18 18.3284 17.3284 19 16.5 19ZM15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z" stroke="#547958" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};
