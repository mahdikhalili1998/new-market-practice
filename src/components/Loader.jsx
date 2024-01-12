import React from "react";
import { BallTriangle } from "react-loader-spinner";

function Loader() {
  return (
    <>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="red"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </>
  );
}

export default Loader;
