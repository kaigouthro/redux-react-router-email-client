import React from 'react';
import { NavMenu } from '../components/NavMenu';
import { fetchAndSelectBox } from '../actionCreators';

export const Nav = (props, { store }) => {
  const state = store.getState();
  const unread = state.unread;
  const onBoxClick = (box) => {
    store.dispatch(fetchAndSelectBox(box));
  };
  const items = [{
    name: 'Inbox',
    onClick: (e) => {
      e.preventDefault();
      store.dispatch(fetchAndSelectBox('inbox'));
    },
    childClassName: 'email-count',
    children: unread
  }, {
    name: 'Important'
  }, {
    name: 'Sent',
    onClick: (e) => {
      e.preventDefault();
      store.dispatch(fetchAndSelectBox('sent'));
    }
  }, {
    name: 'Drafts'
  }, {
    name: 'Trash'
  }];
  const labels = [{
    name: 'Personal',
    className: 'email-label-personal'
  }, {
    name: 'Work',
    className: 'email-label-work'
  }, {
    name: 'Travel',
    className: 'email-label-travel'
  }];
  return (
    <div className="pure-u id-nav">
      <a href="#nav" className="nav-menu-button">Menu</a>
      <div className="nav-inner">
        <button id="compose-button" className="pure-button primary-button" href="#">Compose</button>
        <div className="pure-menu pure-menu-open">
          <NavMenu items={items} labels={labels} /> 
        </div>
      </div>
    </div>
  );
};
Nav.contextTypes = {
  store: React.PropTypes.object
};