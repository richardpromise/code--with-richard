import { createContext, ReactNode, useContext, useState } from "react";

interface contextProps {
  header: any;
  setheader: React.Dispatch<any>;
}
const HeaderContext = createContext<contextProps | undefined>(undefined);

export const HeaderContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}: any) => {
  const [header, setheader] = useState<string>("");

  return (
    <HeaderContext.Provider value={{ header, setheader }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (!context)
    throw new Error(
      "useHeaderContext must be used within a HeaderContextProvider"
    );
  return context;
};
