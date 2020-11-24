import React from 'react';
import styled from 'styled-components';
import Div from '../components/atoms/div/div';
import Form from '../components/molecues/form';
import Page from '../components/molecues/page';
import H1 from '../components/atoms/h1/h1';
import Span from '../components/atoms/span/span';
import P from '../components/atoms/p/p';
import EBreakpoints from '../__types__/EBreakpoints';

const Wrapper = styled(Div)`
  width: 100%;
  height: auto;
  min-height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  @media (max-width: ${EBreakpoints.MOBILE_BIG}) {
    padding-top: 50px;
  }
`;

export default function SendingOrder() {


  return (
    <Wrapper>
    <Page>
      <H1 style={{ width: '100%' }}>Składanie zamówień</H1>
      <Span style={{ width: '100%' }}>
        <P style={{ maxWidth: '50ch', margin: '0 auto' }}>
        Dokładamy wszelkich środków ostrożności zgodnie z zaleceniami sanepidu odnośnie ochrony osobistej. Minimalna kwota dostawy to 30 zł dodatkowo 5 zł koszt dowozu.
        <br/>
        Od 60 zł dostawa całkowicie za darmo!
        </P>
      </Span>
      <Form />
      {/* <ShoppingSummary /> */}
    </Page>
    </Wrapper>
  )
}
