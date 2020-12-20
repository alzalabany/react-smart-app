import t from 'prop-types';
import React, { FC, HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <Container data-testid="button">
      {children || `the snozzberries taste like snozzberries`}
    </Container>
  );
};

Button.propTypes = {
  children: t.node,
};

Button.defaultProps = {
  children: null,
};

const Container = styled.button`
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;
