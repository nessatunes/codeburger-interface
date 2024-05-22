import Select from 'react-select'
import styled from 'styled-components'

export const Container = styled.div`
  background: #efffff;
  min-height: 100vh;
`
export const ProductsImg = styled.img`
  width: 60px;
  border-radius: 5px;
`
export const ReactSelectStyle = styled(Select)`
  width: 250px;
`
export const Menu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 20px 0;
`
export const LinkMenu = styled.a`
  color: #323d5d;
  cursor: pointer;
  font-weight: ${(props) => (props.isActiveStatus ? 'bold' : '400')};
  border-bottom: ${(props) =>
    props.isActiveStatus ? '2px solid #9758A6' : 'none'};
  padding-bottom: 5px;
`
