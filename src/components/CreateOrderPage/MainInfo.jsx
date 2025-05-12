import { Link } from "react-router-dom";
import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import { FormWrapper } from "./CreateOrderPage.styled";
import { SizeButton, SizeButtonsList } from "./MainInfo.styled";
import { TbBoxAlignBottomRight, TbBoxAlignBottom } from "react-icons/tb";
import { BsBox } from "react-icons/bs";

export const MainInfo = () => {
  return (
    <Section>
      <Container>
        <FormWrapper>
          <ul>
            <li>
              <label htmlFor="size">Select size:</label>
              <SizeButtonsList>
                <li>
                  <SizeButton htmlFor="S">
                    <input type="radio" name="size" id="S" />

                    <span>
                      <TbBoxAlignBottomRight size={36} />S
                    </span>
                  </SizeButton>
                </li>
                <li>
                  <SizeButton htmlFor="M">
                    <input type="radio" name="size" id="M" />
                    <span>
                      <TbBoxAlignBottom size={36} />M
                    </span>
                  </SizeButton>
                </li>
                <li>
                  <SizeButton htmlFor="L">
                    <input type="radio" name="size" id="L" />
                    <span>
                      <BsBox size={36} />L
                    </span>
                  </SizeButton>
                </li>
              </SizeButtonsList>
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
        </FormWrapper>
      </Container>
    </Section>
  );
};
