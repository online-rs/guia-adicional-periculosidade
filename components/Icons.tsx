
import React from 'react';

export const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

export const ChevronLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>
);

export const ExclamationTriangleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
);

export const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.36 21.86 12.04 21.86C17.5 21.86 21.95 17.41 21.95 11.91C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.04 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.71 20.28 11.91C20.28 16.47 16.65 20.1 12.04 20.1C10.56 20.1 9.14 19.7 7.89 19L7.23 18.61L4.62 19.39L5.4 16.86L5.03 16.19C4.24 14.86 3.8 13.41 3.8 11.91C3.8 7.35 7.43 3.67 12.04 3.67M9.13 7.59C8.89 7.59 8.66 7.66 8.49 7.83C8.31 8 7.97 8.34 7.97 8.99C7.97 9.64 8.5 10.29 8.62 10.46C8.74 10.64 9.92 12.53 11.85 13.31C13.78 14.08 14.15 13.96 14.54 13.92C14.94 13.88 15.93 13.34 16.12 12.79C16.31 12.24 16.31 11.79 16.25 11.68C16.19 11.56 15.97 11.45 15.72 11.33C15.47 11.21 14.28 10.65 14.04 10.56C13.8 10.47 13.64 10.42 13.48 10.67C13.31 10.91 12.89 11.41 12.75 11.56C12.6 11.72 12.46 11.74 12.21 11.62C11.96 11.5 11.09 11.21 10.06 10.31C9.23 9.59 8.64 8.71 8.53 8.5C8.41 8.28 8.53 8.16 8.65 8.04C8.76 7.92 8.89 7.74 9.02 7.59C9.14 7.45 9.19 7.33 9.13 7.16C9.07 7 8.76 6.24 8.62 5.94C8.47 5.64 8.32 5.69 8.18 5.68L8.18 5.68Z"></path>
    </svg>
);
