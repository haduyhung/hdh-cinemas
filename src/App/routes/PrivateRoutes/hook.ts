import { useLocation } from "react-router-dom";

export type ReceivedProps = Record<string, any>;

const usePrivateRoute = (props: ReceivedProps) => {
  const location = useLocation();

  return {
    ...props,
    location,
  };
};

export type Props = ReturnType<typeof usePrivateRoute>;

export default usePrivateRoute;
