import Navbar from "./Navbar";
import Form from "./Form";
import { ThemeProvider } from "./contexts/ThemeContext";
import PageContent from "./PageContent";

function App() {
  return (
    <>
      <ThemeProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </ThemeProvider>
    </>
  );
}

export default App;
