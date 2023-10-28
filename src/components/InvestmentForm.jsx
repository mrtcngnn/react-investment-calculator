export default function InvestmentForm(props) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={props.userInput.initialInvestment}
            onChange={(event) =>
              props.onChange("initialInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Arrival Investment</label>
          <input
            type="number"
            value={props.userInput.arrivalInvestment}
            onChange={(event) =>
              props.onChange("arrivalInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={props.userInput.expectedReturn}
            onChange={(event) =>
              props.onChange("expectedReturn", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={props.userInput.duration}
            onChange={(event) => props.onChange("duration", event.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
