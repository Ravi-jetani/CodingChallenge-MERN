import React from "react";
import { useParams } from "react-router-dom";

function Hello() {
  const { name, location } = useParams();
  return (
    <p>
      {`Hello ${name} from ${location}!`}
    </p>
  );
}

export default Hello;
