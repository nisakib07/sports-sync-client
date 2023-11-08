import { useQuery } from "@tanstack/react-query";

const useServices = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["services"],
    queryFn: () =>
      fetch("https://assignmentb8-11-server.vercel.app/services").then((res) =>
        res.json()
      ),
  });
  return { data, isLoading, refetch };
};

export default useServices;
