import React from 'react';
import { render } from 'react-dom';
import {
  ExampleStatelessComponent,
  ExampleStatelessValueComponent,
  Input,
  Button
} from './sfc';

render(
  <div>
    <ExampleStatelessComponent />
    <ExampleStatelessValueComponent value="donaldpipowitch" />
    <Input type="number" />
    <Button>Test</Button>
  </div>,
  document.getElementById('app')
);
