import {
  SizeButton,
  SizeButtonsList,
  SizeDescription,
  SizeInput,
  SizeText,
} from "./SizeButtons.styled";

import { sizes } from "~/data/parcelSizes";

export const SizeButtons = ({ register }) => {
  return (
    <SizeButtonsList>
      {sizes.map(({ value, weight, icon }) => {
        const Icon = icon;

        return (
          <li key={value}>
            <SizeButton>
              <SizeInput
                type="radio"
                name="size"
                value={value}
                {...register("size")}
              />
              <SizeText>
                <Icon size={36} />
                {value}
              </SizeText>
              <SizeDescription>{weight}kg</SizeDescription>
            </SizeButton>
          </li>
        );
      })}
    </SizeButtonsList>
  );
};
