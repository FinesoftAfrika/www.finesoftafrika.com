import React from "react";
import HeadlineWithFocus from '../components/HeadlineWithFocus';
import Helmet from 'react-helmet';

import ToolBoxListContainer from '../containers/ToolBoxListContainer';

export default () => (
  <div className="c-content-box">
    <Helmet title="Our Stack" />  

    <HeadlineWithFocus><span>These are pieces of </span>our toolbox</HeadlineWithFocus>
    <ToolBoxListContainer />
   
  </div>
);