import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();

  useEffect(() => {
    console.log(params.productId);
  }, [params.productId]);

  return (
    <div className="task">
      Product {params.productId}
    </div>
  )
};

export default Product;
