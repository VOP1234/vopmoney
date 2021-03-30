import logoImf from '../../assets/logo.svg'

import { Container, Content } from './styles'


export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImf} alt="vop money" />
        <button type="button">
          Nova transação
      </button>
      </Content>
    </Container>

  )
}