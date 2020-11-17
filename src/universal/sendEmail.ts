import emailjs from 'emailjs-com';
import { FormEvent } from 'react';

export const sendEmail = (e: FormEvent<HTMLFormElement>) => {
  debugger;
  emailjs.sendForm(
    process.env.REACT_APP_SERVICE_ID as string,
    process.env.REACT_APP_TEMPLATE_ID as string,
    e.target as HTMLFormElement,
    process.env.REACT_APP_USER_ID as string
  ).then(result => {
    console.log(result);
  }, (err => {
    console.log(err);
  }))
}