import React from 'react';
import AltContainer from 'alt-container';
import alt from '../../libs/alt';
import setup from './setup';

setup(alt);

/*************************************************
  AltContainer enables connecting the data of the
  application at component level with "connect"
 *************************************************/

export default ({children}) =>
  <AltContainer flux={alt}>
    {children}
  </AltContainer>
