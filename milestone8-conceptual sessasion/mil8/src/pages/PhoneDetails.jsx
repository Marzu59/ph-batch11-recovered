import React, { useContext } from "react";
import { useParams } from "react-router";
import { useLoaderData } from "react-router";
import Button from "../components/button";
import { IoMdCart } from "react-icons/io";
import { MdBookmarkAdd } from "react-icons/md";
import { addcart, addfavorite, getCarts, getFavorites } from "../utils";
import { cartContext } from "../providers/contexts";

const PhoneDetails = () => {
  const { setCart } = useContext(cartContext);

  const dataa = useLoaderData();
  const prams = useParams();
  const { md } = prams;

  const foundPhoneData = dataa.find((phone) => phone.id === parseInt(md));
  //    console.log(foundPhoneData)

  const {
    camera_info,
    storage,
    description,
    price,
    image,
    model,
    name,
    brand,
    id,
  } = foundPhoneData;

  //  console.log(getFavorites())

  const handleFavorite = () => {
    addfavorite(foundPhoneData);
  };

  const handleCart = () => {
    addcart(foundPhoneData);

    setCart(getCarts());
  };

  return (
    <div className="w-full md:px-12 lg:px-18">
      <img
        className="mx-auto w-full md:w-auto mb-8 mt-4"
        src={image}
        alt="Shoes"
      />

      <div className="flex justify-between ">
        <h1>

          

          {" "}

          

          {name} brand:{brand}{" "}
        </h1>

        <div className="flex gap-3">
          <Button onClick={handleFavorite} label={<MdBookmarkAdd />} />
          <Button onClick={handleCart} label={<IoMdCart />} />
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
