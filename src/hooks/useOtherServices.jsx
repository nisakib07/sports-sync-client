import { useQuery } from "@tanstack/react-query";

const useOtherServices = (email) => {
  const { data, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: () =>
      fetch(`http://localhost:5000/userService?email=${email}`).then((res) =>
        res.json()
      ),
  });
  return { data, isLoading };
};

export default useOtherServices;
