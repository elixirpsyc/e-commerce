import Header from "./header";
import Footer from "./footer";

function App() {
  return (
    <section className="relative flex flex-col min-h-[100dvh] bg-[#f6f6f6]">
      <Header />
      <main className="grow" />
      <Footer />
    </section>
  );
}

export default App;
