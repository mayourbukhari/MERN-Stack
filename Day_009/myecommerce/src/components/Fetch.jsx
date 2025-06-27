import React, { useEffect } from "react";

export default function Fetch() {
  const [data, setData] = React.useState(null);

  async function fetchData() {
    const response = await fetch("http://localhost:3001/");
    const data = await response.json();
    setData(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return <div>{data}</div>;
}
