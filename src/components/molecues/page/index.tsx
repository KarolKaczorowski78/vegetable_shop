import React, { FC, ReactNode, useEffect, Fragment } from 'react';

const Page: FC<{ children: ReactNode }> = ({ children }) => {
  
  useEffect(() => { window.scrollTo(0,0) }, []);

  return (
    <Fragment>
      { children }
    </Fragment>
  )
}

export default Page;