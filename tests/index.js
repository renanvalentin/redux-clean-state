import React from 'react';

import sinon from 'sinon';
import {expect} from 'chai';

import sd from 'skin-deep';

import ComposeClearAppState from '../src/index.js';

describe('(Components/Composes) ComposeClearAppState', () => {
  describe('Rendering', () => {
    it('Should render the component passed to ComposeClearAppState', () => {
      const Component = ComposeClearAppState(
        <div></div>
      );

      const tree = sd.shallowRender(<Component />);
      const vdom = tree.getRenderOutput();

      expect(vdom.type.type).to.be.equal('div');
    });
  });

  describe('Dispatch action', () => {
    it('it should dispatch and action on componentWillUnmount', () => {
      const componentToBeRendered = (
        <div />
      );

      const action = 'RESET_STATE';

      const Component = ComposeClearAppState(componentToBeRendered, action);

      const tree = sd.shallowRender(<Component />);
      const mountedInstance = tree.getMountedInstance();

      const dispatchSpy = sinon.spy();

      mountedInstance.context = {
        store: {
          dispatch: dispatchSpy
        }
      };

      mountedInstance.componentWillUnmount();
      expect(dispatchSpy).to.have.been.calledWith({type: action});
    });
  });
});

