export type ReceivedProps = Record<string, never>;

const useAppRoutes = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useAppRoutes>;

export default useAppRoutes;
