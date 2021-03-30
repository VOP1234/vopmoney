import { Summary } from "../Summary";
import { TransactionTable } from "../TransacrionsTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  )
}