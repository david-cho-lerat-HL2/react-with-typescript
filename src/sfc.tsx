import React, { SFC, HTMLAttributes } from 'react';

export const ExampleStatelessComponent: SFC<void> = () => <p>Hello world!</p>;

interface ExampleStatelessValueProps {
  value: string;
}
export const ExampleStatelessValueComponent: SFC<ExampleStatelessValueProps> = ({ value }) => <p>Hello {value}!</p>;

export const Input: SFC<HTMLAttributes<HTMLInputElement>> = (props) => <input type="text" {...props}/>;

interface ButtonsProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * This will allways be `type="button"`. In the future we will have standalone
   * `<Submit />` and `<Reset />` components for other cases.
   */
  type?: 'button';
}
export const Button: SFC<ButtonsProps> = (props) => <button {...props} type="button"/>;
