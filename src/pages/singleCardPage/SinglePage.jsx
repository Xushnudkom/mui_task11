import { Rating, Typography } from "@mui/material";
import axios from "axios";
import "./SinglePage.css"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImFontSize } from "react-icons/im";
import { BoltRounded } from "@mui/icons-material";

const SinglePage = () => {
  const { cardId } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${cardId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [cardId]);

  console.log(product);

  return (
    <>
      {!loading ? (
        <div>
          <img src={product?.image} alt="image" width={250} className="single-imgs"/>
          <div className="single_info">
            <Typography sx={{fontWeight : 700, fontSize : 20}} component={"h1"}>{product?.title}</Typography>
            <p className="pr_cat">{product?.category}</p>
            <p className="pr_des">{product?.description}</p>
            <p className="pr_price">${product?.price}</p>
            <Rating
              value={Math.round(product?.rating?.rate)}
              size="large"
              readOnly
            />
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default SinglePage;
