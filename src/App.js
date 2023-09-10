import { useState } from "react";
import person from "./images/icon-person.svg"
import dollar from "./images/icon-dollar.svg"


function App() {
  const [bill, setBill] = useState("");
  const [custom, setCustom] = useState("");
  const [numOfPeople, setNumOfPeople] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0); // Store selected tip percentage
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0); // Store calculated tip amount
  const [totalAmountPerPerson, setTotalAmountPerPerson] = useState(0); // Store calculated total amount

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill) {
      return
    }

    if (!numOfPeople || numOfPeople <= 0) {
      return
    }

    const billAmount = parseFloat(bill);
    const numOfPersons = parseFloat(numOfPeople);

    // Calculate tip amount and total amount
    const selectedTipPercentage = custom ? parseFloat(custom) : tipPercentage;
    const tipAmount = (billAmount * selectedTipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;

    // Calculate tip amount per person and total amount per person
    const tipAmountPerPerson = tipAmount / numOfPersons;
    const totalAmountPerPerson = totalAmount / numOfPersons;

    // Set the calculated values in state
    setTipAmountPerPerson(tipAmountPerPerson);
    setTotalAmountPerPerson(totalAmountPerPerson);

  }

  function handleTipPercent(e) {
    const selectedTipPercentage = parseFloat(e.target.getAttribute("value"));
    setTipPercentage(selectedTipPercentage);
  }

  function handleReset() {
    setBill("")
    setNumOfPeople("")

    setTipAmountPerPerson(0)
    setTotalAmountPerPerson(0)

    setCustom("")
    setTipPercentage(0)
  }

  return (
    <main className="App ">
      <Header />

      <section className="app-section">
        <TipCalculator
          bill={bill}
          onAddBill={setBill}
          custom={custom}
          onAddCustom={setCustom}
          numOfPeople={numOfPeople}
          onAddPeople={setNumOfPeople}
          onAddSubmit={handleSubmit}
          onAddPercentage={handleTipPercent}
          selectedTipPercentage={tipPercentage} // Pass the selected tip percentage
        />

        <Output
          tipAmountPerPerson={tipAmountPerPerson}
          totalAmountPerPerson={totalAmountPerPerson}
          onReset={handleReset}
        />
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

function TipCalculator({
  bill,
  onAddBill,
  custom,
  onAddCustom,
  numOfPeople,
  onAddPeople,
  onAddSubmit,
  onAddPercentage,
  selectedTipPercentage,
}) {
  return (
    <form onSubmit={onAddSubmit}>
      <input type="submit" style={{ display: "none" }} />
      <label>Bill</label>
      <div className="dollar">
        <input
          type="number"
          className="grey-input"
          value={bill}
          placeholder="0"
          onChange={(e) => onAddBill(e.target.value)}
        />
        <img src={dollar} alt="dollar" className="input" />
      </div>
      <label>Select Tip %</label>
      <div className="tips-container">
        <p
          value={5}
          className={`tip-input ${selectedTipPercentage === 5 ? "selected" : ""}`}
          onClick={onAddPercentage}
        >
          5%
        </p>
        <p
          value={10}
          className={`tip-input ${selectedTipPercentage === 10 ? "selected" : ""}`}
          onClick={onAddPercentage}
        >
          10%
        </p>
        <p
          value={15}
          className={`tip-input ${selectedTipPercentage === 15 ? "selected" : ""}`}
          onClick={onAddPercentage}
        >
          15%
        </p>
        <p
          value={25}
          className={`tip-input ${selectedTipPercentage === 25 ? "selected" : ""}`}
          onClick={onAddPercentage}
        >
          25%
        </p>
        <p
          value={50}
          className={`tip-input ${selectedTipPercentage === 50 ? "selected" : ""}`}
          onClick={onAddPercentage}
        >
          50%
        </p>
        <input
          type="number"
          placeholder="Custom"
          className="tip-input-custom"
          value={custom}
          onChange={(e) => onAddCustom(e.target.value)}
        />
      </div>
      <div className="count">
        <label>Number of People</label>
        <label className={`error-msg ${numOfPeople === "0" ? "" : "error"}`}>Can't be Zero</label>
      </div>
      <div className="person">
        <input
          type="number"
          placeholder="0"
          className={`grey-input ${numOfPeople === "0" ? "show" : ""}`}
          value={numOfPeople}
          onChange={(e) => onAddPeople(e.target.value)}
        />
        <img src={person} alt="person" className="input" />
      </div>
    </form>
  );
}

function Output({ tipAmountPerPerson, totalAmountPerPerson, onReset }) {

  return (
    <div className="output-container">
      <article className="tip-amount">
        <p>
          Tip Amount <br />
          <span>/ person</span>
        </p>
        <h3>${tipAmountPerPerson.toFixed(2)}</h3>
      </article>

      <article className="total">
        <p>
          Total <br />
          <span>/ person</span>
        </p>
        <h3>${totalAmountPerPerson.toFixed(2)}</h3>
      </article>

      <button className="reset" onClick={onReset} disabled={totalAmountPerPerson === 0 && tipAmountPerPerson === 0} >
        RESET
      </button>
    </div>
  );
}

export default App;
