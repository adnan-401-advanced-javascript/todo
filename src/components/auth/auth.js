import React, { useContext, useEffect, useCallback } from 'react';

import { AuthContext } from './context';
import Login from "./Login";
import Signup from "./Signup";

import { If, Then, Else } from 'react-if';

const Auth = (props) => {

    const context = useContext(AuthContext);

    const checkCanContinue = useCallback(() => {
        if(context.loggedIn){
            context.setOkToContinue(true);
        }
    },[context])


    useEffect(() => {
        checkCanContinue();
    }, [checkCanContinue]);

    return (
      <If condition={context.loggedIn}>
        <Then> {/* if loggedIn */}
          <If condition={context.okToContinue}>
            <Then>
            <button onClick={() => context.logout()}>logout</button>
            {props.children}
            </Then>
            <Else>
              <p>Forbidden!</p>
            </Else>
          </If>
        </Then>
        <Else> {/* if not loggedIn */ }
          <If condition={context.switchToSignup}>
          <Then>
            <Signup/>
          </Then>
          <Else>
            <Login/>
          </Else>
          </If>
        </Else>
      </If>
    );

};

export default Auth;
