import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
  width: 300px;
  top: 0;
  left: 0;

  hr {
    margin: 100px 15px;
  }
`
export const ItemContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background: ${(props) => (props.isActive ? '#565656' : 'none')};
  border-radius: 2px;
  margin: 10px;
  padding-left: 20px;

  .icon {
    color: #ffffff;
  }
`
export const ListLink = styled(Link)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  text-decoration: none;
  margin-left: 8px;
`
