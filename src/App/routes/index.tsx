import React, { FC, memo } from "react";
import useAppRoutes, { ReceivedProps } from "./hook";

const AppRoutesLayout: FC = () => {
  return <></>;
};

const AppRoutes: FC<ReceivedProps> = (props) => (
  <AppRoutesLayout {...useAppRoutes(props)} />
);

export default memo(AppRoutes);
