import { useQuery } from "@tanstack/react-query";

const Services = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: () =>
      fetch("http://localhost:5000/services").then((res) => res.json()),
  });

  if (isLoading) return <p>Loading</p>;
  console.log(data);
  return <div></div>;
};

export default Services;
