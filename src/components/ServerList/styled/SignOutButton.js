import React from 'react';
import styled from 'styled-components';
import SignOutIcon from 'react-icons/lib/go/sign-out';

const StyledIcon = styled(SignOutIcon)`
  height: auto;
  padding-left: .5rem;
  transform: rotateY(180deg);
  width: 1.5rem;
`;

const StyledContainer = styled.div`
  transition: color .3s;
  &:hover,
  &:focus {
    color: ${props => props.theme.inputTextColorActive};
    cursor: pointer;
  }
`;

const SignOutButton = props => (
  <StyledContainer {...props}>
    <StyledIcon />
    Logout
  </StyledContainer>
);

export default SignOutButton;
