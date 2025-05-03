import { Link } from "react-router-dom";

export const Recipient = () => {
  return (
    <form>
      <h3>Recipient's info:</h3>
      <ul>
        <li>
          <label htmlFor="">
            Phone number:
            <input type="text" />
          </label>
        </li>
        <li>
          <label htmlFor="">
            Name, Surname:
            <input type="text" />
          </label>
        </li>
        <li>
          <label htmlFor="">
            Full address:
            <input type="text" />
          </label>
        </li>
        <li>
          <label htmlFor="">
            Comment:
            <input type="text" placeholder="doorbell/company/entrance" />
          </label>
        </li>
      </ul>
      <ul>
        <li>
          <Link>{"<="}</Link>
        </li>
        <li>
          <Link>{"=>"}</Link>
        </li>
      </ul>
    </form>
  );
};
