import * as R from 'react';
import * as React from 'react';

class Component1 extends React.Component {}
class Component2 extends React.PureComponent {}
class Component3 extends React.PureComponents {}
class Component4 extends R.PureComponent {}

{
  const React = {};
  class Component5 extends React.PureComponent {}

  const R = {};
  class Component6 extends R.PureComponent {}
}

