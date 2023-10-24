import { FC } from "react";
import { Outlet } from "react-router-dom";
import usePublicRoute, { Props, ReceivedProps } from "./hook";

const PrivateRouteLayout: FC<Props> = () => {
  return <Outlet />;
};

const PublicRoute: FC<ReceivedProps> = (props) => (
  <PrivateRouteLayout {...usePublicRoute(props)} />
);

export default PublicRoute;
