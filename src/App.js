function App() {
  return (
    <main className="App">
      <Header />
      <section className="app-section">
        <TipCalculator />
        <Output />
      </section>
    </main>
  );
}
function Header() {
  return (
    <h1>
      SPLI <br />
      TTER
    </h1>
  );
}

function TipCalculator() {
  return (
    <form>
      {/* bill input */}
      <label>Bill</label>
      <input type="text" className="grey-input" />
      <label>Select Tip %</label>
      <div className="tips-container">
        <button value={5} className="tip-input">
          5%
        </button>
        <button value={10} className="tip-input">
          10%
        </button>
        <button value={15} className="tip-input">
          15%
        </button>
        <button value={25} className="tip-input">
          25%
        </button>
        <button value={50} className="tip-input">
          50%
        </button>
        {/* <input type="text" value={10 + "%"} className="tip-input" />
        <input type="text" value={15 + "%"} className="tip-input" />
        <input type="text" value={25 + "%"} className="tip-input" />
        <input type="text" value={50 + "%"} className="tip-input" /> */}
        <input type="text" placeholder="Custom" className="tip-input-custom" />
      </div>
      {/* Number of people paying */}
      <label>Number of People</label>
      <input type="text" className="grey-input" />
    </form>
  );
}

function Output() {
  return (
    <div className="output-container">
      <article className="tip-amount">
        <p>
          Tip Amount <br />
          <span>/ person</span>
        </p>
        <h3>$0.00</h3>
      </article>

      <article className="total">
        <p>
          Total <br />
          <span>/ person</span>
        </p>
        <h3>$0.00</h3>
      </article>

      <button className="reset" disabled>
        RESET
      </button>
    </div>
  );
}
export default App;
