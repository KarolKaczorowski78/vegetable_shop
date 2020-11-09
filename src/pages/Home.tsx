import React from 'react';
import Page from '../components/molecues/page';
import Header from '../components/organisms/header';
import About from '../components/organisms/aboutSection';
import Contact from '../components/organisms/contactSection';

export default function Home() {


  return (
    <Page>
      <Header />
      <About />
      <Contact />
    </Page>
  )
}
