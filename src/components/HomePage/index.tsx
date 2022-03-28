import { FormEvent, useState } from "react";
import { Container, InputsContainer } from "./styles";

export function HomePage() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  function calcular(event: FormEvent) {
    event.preventDefault();
    console.log(peso, altura);
  }

  return (
    <Container>
      <h2>Calcule seu IMC</h2>
      <InputsContainer>
        <input
          type="number"
          placeholder="Digite seu peso"
          required
          value={peso}
          onChange={(event) => setPeso(Number(event.target.value))}
        />
        <input
          type="number"
          placeholder="Digite sua altura"
          required
          value={altura}
          onChange={(event) => setAltura(Number(event.target.value))}
        />
      </InputsContainer>
      <button type="submit" onClick={calcular}>
        CALCULAR
      </button>
    </Container>
  );
}
