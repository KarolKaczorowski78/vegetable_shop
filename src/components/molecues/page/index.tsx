import { chown } from 'fs';
import React, { FC, ReactNode, useEffect } from 'react';

const Page: FC<{ children: ReactNode }> = ({ children }) => {
  
  useEffect(() => { window.scrollTo(0,0) }, []);

  return (
    <>
      { children }
    </>
  )
}

export default Page;