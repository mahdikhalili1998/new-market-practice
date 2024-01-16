import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InfoContext, detailProduct } from "../context/DataContext";
import Swiper from "../components/Swiper";

function DetailPage() {
  const { id } = useParams();
  const result = detailProduct(+id);


  return (
    <div>
      <Swiper result={result} />
    </div>
  );
}

export default DetailPage;
