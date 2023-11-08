import { useState, Dispatch, SetStateAction } from "react";

type ToggleReturnType = [boolean, Dispatch<SetStateAction<boolean>>];

export default function useToggle(defaultValue: boolean): ToggleReturnType {
  const [value, setValue] = useState<boolean>(defaultValue);

  const toggleValue: Dispatch<SetStateAction<boolean>> = (value) => {
    setValue((prevValue: boolean) =>
      typeof value === "boolean" ? value : !prevValue
    );
  };

  return [value, toggleValue];
}