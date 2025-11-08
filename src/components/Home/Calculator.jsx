import { useForm } from "react-hook-form";
import { SizeButtons } from "../Common/SizeButtons";
import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import { SectionTitle } from "./Steps.styled";

export const Calculator = () => {
  const { register } = useForm({
    mode: "onChange",
    defaultValues: {
      size: "S",
    },
  });

  return (
    <Section>
      <Container>
        <SectionTitle>How much it costs</SectionTitle>
        <ul>
          <li>
            <SizeButtons register={register} />
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Container>
    </Section>
  );
};
