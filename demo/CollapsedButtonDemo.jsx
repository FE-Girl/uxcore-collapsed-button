/**
 * CollapsedButton Component Demo for uxcore
 * @author FE-Girl
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

const React = require('react');
const CollapsedButton = require('../src');

const { Item } = CollapsedButton;

const handleClick = (value) => {
  console.log('click', value);
};

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div style={{ marginTop: '100px', marginLeft: '100px' }}>
        <h2>链接形态</h2>
        <CollapsedButton maxLength={2}>
          <Item onClick={() => { handleClick(1); }}>
            按钮一
          </Item>
          <Item onClick={() => { handleClick(2); }}>
            按钮二
          </Item>
          <Item onClick={() => { handleClick(3); }}>
            按钮三
          </Item>
        </CollapsedButton>
        <h2>按钮形态</h2>
        <CollapsedButton type="button" maxLength={2}>
          <Item onClick={() => { handleClick(1); }}>
            按钮卡视角设计费一
          </Item>
          <Item onClick={() => { handleClick(2); }}>
            按钮撒打发二
          </Item>
          <Item onClick={() => { handleClick(3); }}>
            按钮三
          </Item>
        </CollapsedButton>
      </div>
    );
  }
}

module.exports = Demo;
