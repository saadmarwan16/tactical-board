import { useEffect, useState } from "react";
import { useSearchStore } from "@/app/store";

export const useDebounce = (value: string, delay: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const { onDebouncedQueryChange } = useSearchStore();

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value);
      onDebouncedQueryChange(value);
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [value, delay, onDebouncedQueryChange]);

  return debouncedValue;
};
