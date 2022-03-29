import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HomePage />
    </>
  );
}
export default App;
