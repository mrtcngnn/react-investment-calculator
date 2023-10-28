import headerLogo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <div id="header">
      <img src={headerLogo} alt="headerLogo"></img>
      <h1>React Investment Calculator</h1>
    </div>
  );
}
