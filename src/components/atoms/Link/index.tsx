import React from 'react';
import styled from 'styled-components';
import {
  Link as OriginLink,
  LinkProps as OriginLinkProps,
} from 'react-router-dom';

export type LinkProps = OriginLinkProps;

const StyledLink = styled(OriginLink)`
  color: ${({ theme }) => theme.palette.typography};
`;

const Link = (props: LinkProps) => {
  const { to = '/', children, download, target, style, className, id } = props;
  if (/http/.test(to.toString())) {
    return (
      <a
        href={to.toString()}
        download={download}
        target={target}
        style={style}
        className={className}
        id={id}
      >
        {children}
      </a>
    );
  }
  return (
    <StyledLink
      to={to}
      download={download}
      target={target}
      style={style}
      className={className}
      id={id}
    >
      {children}
    </StyledLink>
  );
};
export default Link;
