import { FormEvent, useState } from "react";
import { Container, InputsContainer } from "./styles";
import toast, { Toaster } from "react-hot-toast";

export function HomePage() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState(0);
  const notify = () => toast("");

  function calcular(event: FormEvent) {
    event.preventDefault();
    const imc = peso / (altura * altura);

    if (imc < 18.5) {
      toast("MAGREZA!", { icon: "🤚", duration: 5000 });
    } else if (imc >= 18.5 && imc <= 24.9) {
      toast.success("NORMAL!", { duration: 5000 });
    } else if (imc >= 25 && imc <= 29.9) {
      toast("SOBREPRESO!", { icon: "🤚", duration: 5000 });
    } else if (imc >= 30 && imc <= 39.9) {
      toast.error("OBESIDADE!", { duration: 5000 });
    } else if (imc >= 40) {
      toast.error("OBESIDADE GRAVE!", { duration: 5000 });
    } else {
      return null;
    }
    setImc(imc);
    setPeso(0);
    setAltura(0);
  }

  return (
    <Container>
      <h2>Calcule seu IMC!</h2>
      <InputsContainer>
        <label>Altura:</label>
        <input
          type="number"
          placeholder="Digite sua altura"
          required
          value={altura}
          onChange={(event) => setAltura(Number(event.target.value))}
        />
        <label>Peso:</label>
        <input
          type="number"
          placeholder="Digite seu peso"
          required
          value={peso}
          onChange={(event) => setPeso(Number(event.target.value))}
        />
      </InputsContainer>
      <button type="submit" onClick={calcular}>
        CALCULAR
      </button>
      <Toaster />
      <p id="res">
        Seu IMC é de: <strong>{imc.toFixed(2)}</strong>
      </p>
    </Container>
  );
}
