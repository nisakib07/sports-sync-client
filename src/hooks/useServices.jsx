import { useQuery } from "@tanstack/react-query";

const useServices = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: () =>
      fetch("http://localhost:5000/services").then((res) => res.json()),
  });
  return { data, isLoading };
};

export default useServices;
