import {Fragment} from 'react';
import MainHeader from './main-header.js';

function Layout (props) {
  return <Fragment>
    <MainHeader></MainHeader>
    <main>
      {props.children}
    </main>
  </Fragment>
};

export default Layout;