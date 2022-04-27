import { useEffect } from "react";

const useOnClickOutside = (ref: any, callback: Function) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target)) callback();
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [callback, ref]);
};

export default useOnClickOutside;
