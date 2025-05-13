import { Link } from "react-router-dom";
import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import { FormWrapper } from "./CreateOrderPage.styled";
import {
  SizeButton,
  SizeButtonsList,
  SizeDescription,
  SizeInput,
  SizeText,
} from "./MainInfo.styled";
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
                    <SizeInput type="radio" name="size" id="S" />
                    <SizeText>
                      <TbBoxAlignBottomRight size={36} />S
                    </SizeText>
                    <SizeDescription>2kg</SizeDescription>
                  </SizeButton>
                </li>
                <li>
                  <SizeButton htmlFor="M">
                    <SizeInput type="radio" name="size" id="M" />
                    <SizeText>
                      <TbBoxAlignBottom size={36} />M
                    </SizeText>
                    <SizeDescription>10kg</SizeDescription>
                  </SizeButton>
                </li>
                <li>
                  <SizeButton htmlFor="L">
                    <SizeInput type="radio" name="size" id="L" />
                    <SizeText>
                      <BsBox size={36} />L
                    </SizeText>
                    <SizeDescription>30kg</SizeDescription>
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
