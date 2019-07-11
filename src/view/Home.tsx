import React, { ReactNode, MouseEvent } from 'react';
import { RouteComponentProps } from 'react-router';

interface HomeProps extends RouteComponentProps {

}

const Home = (props: HomeProps) => {
  console.log(props);
  return (
      <>
      </>
  );
}

export default Home;