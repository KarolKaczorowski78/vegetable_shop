import emailjs from 'emailjs-com';
import { FormEvent } from 'react';

export const sendEmail = (e: FormEvent<HTMLFormElement>): Promise<boolean> => 
  emailjs.sendForm(
    process.env.REACT_APP_SERVICE_ID as string,
    process.env.REACT_APP_TEMPLATE_ID as string,
    e.target as HTMLFormElement,
    process.env.REACT_APP_USER_ID as string,
  ).then(() => {
    return true;
  }).catch(() => {
    return false;
  })
