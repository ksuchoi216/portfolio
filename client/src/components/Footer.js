import React from 'react'
import styled from 'styled-components';

export default function Footer() {
  return (
  <footer class="container-fluid mt-auto bg-4 text-center">
    <p class="fs-6">Bootstrap Theme Made By</p>
  </footer>
  )
}

const CustomizedFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: #2f2f2f;
  color: #ffffff;
`;

