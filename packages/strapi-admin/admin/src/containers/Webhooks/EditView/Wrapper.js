/**
 *
 * Wrapper
 *
 */

import styled from 'styled-components';

const Wrapper = styled.div`
  > div:first-of-type {
    left: 24rem;
  }
  .header-title {
    h1 {
      text-transform: none;
    }
  }
  .header-title + div {
    button: first-of-type {
      position: relative;
      margin-right: 30px;
      overflow: initial;
      &::after {
        content: '-';
        position: absolute;
        top: 5px;
        right: -20px;
        width: 1px;
        height: 20px;
        background-color: #e9eaeb;
        color: transparent;
      }
      span svg {
        margin-top: -2px;
      }
    }
  }
  .form-wrapper {
    padding-top: 4px;
  }
  .form-card {
    margin-bottom: 30px;
    padding: 21px 25px 0px 25px;
    background-color: #ffffff;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 #e3e9f3;
  }
  .row {
    > div {
      position: relative;
      z-index: 0;
      margin-bottom: 4px;
      &:nth-of-type(3) {
        z-index: 1;
      }
      &:nth-of-type(4) {
        margin-bottom: 0;
      }
    }
  }
`;

export default Wrapper;
