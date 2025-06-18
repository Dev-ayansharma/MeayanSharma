'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface ButtonProps {
  link: string;
  text?: string;
  width?: string;
  height?: string;
  Icon?: IconType;
  targett?: string;
   // Optional icon
}

const Button = ({ link, text = '', width = '20px', height = '10px', Icon ,targett=''}: ButtonProps) => {
  return (
    <StyledWrapper $width={width} $height={height}>
      <button>
        <Link href={link}
        target={targett} >
          <span className="button-content">
            {Icon && <Icon className="icon" />}
            {text}
          </span>
        </Link>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ $width: string; $height: string }>`
  button {
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    cursor: pointer;
    color: #fff;
    font-size: 12px;
    border-radius: 1rem;
    border: none;
    position: relative;
    background: #0f0f0f;
    transition: transform 0.2s ease;
  }

  .button-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .icon {
    font-size: 16px;
  }

  button::after {
    content: '';
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      circle at 50% 50%,
      rgba(168, 85, 247, 0.6),   /* light purple */
      rgba(126, 34, 206, 0.6)    /* rich purple */
    );
    filter: blur(18px);
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
  }

  button:hover {
    transform: scale(1.05);
  }

  button:active {
    transform: scale(0.9) rotate(3deg);
    background: radial-gradient(
      circle at 50% 50%,
      rgba(168, 85, 247, 1),
      rgba(126, 34, 206, 1)
    );
    transition: 0.5s;
  }
`;





export default Button;

