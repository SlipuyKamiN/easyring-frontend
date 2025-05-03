import { Link } from "react-router-dom";

export const MainInfo = () => {
  return (
    <form>
      <ul>
        <li>
          <label htmlFor="size">Select size:</label>
          <ul>
            <li>
              <label htmlFor="S">S</label>
              <input type="radio" name="size" id="S" />
            </li>
            <li>
              <label htmlFor="M">M</label>
              <input type="radio" name="size" id="M" />
            </li>
            <li>
              <label htmlFor="L">L</label>
              <input type="radio" name="size" id="L" />
            </li>
          </ul>
        </li>
        <li>
          <label htmlFor="description">Provide description:</label>
          <input type="text" placeholder="short description" />
        </li>
        <li>
          <label htmlFor="photo">Add photo:</label>
          <input type="image" src="photo" alt="photo" />
        </li>
      </ul>
      <ul>
        <li>
          <Link>{"=>"}</Link>
        </li>
      </ul>
    </form>
  );
};
