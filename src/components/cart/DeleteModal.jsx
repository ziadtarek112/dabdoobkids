import { Box, Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addToCart, getCart, removeFromCart } from "../../utils/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Redux/store";
import { useEffect, useState } from "react";

export default function DeleteModal({
  open,
  setOpen,
  ProductId,
  variantId,
  setCartChanged,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   console.log(ProductId , "pidididididid");
  const cart = useSelector((state) => state.cart.value);
  const [carts, setCarts] = useState([]);
  console.log(cart, "cart212313212123123123132123");
  useEffect(() => {
    const fetchCart = async () => {
      const cart = await getCart();
      setCarts(cart);
    };
    fetchCart();
  }, [cart]);
  const handleDeleteFromCart = async () => {
    let cartsFormBack= carts.map((item) =>({ product: item?.product?.id,
      count: item.count,
      variant: item?.variant?.id,}))
      
      let NewCarts = cartsFormBack?.filter((itemCart) => +itemCart?.product != +ProductId);
      console.log("NewCarts=================",carts,cart,NewCarts);
    
    // addToCart([...NewCarts]);

    dispatch(cartActions.remove(ProductId));

    setOpen(false);
    setCartChanged(true);
  };
  return (
    <Modal open={open}>
      <Box sx={style}>
        <img
          src="/delete-product.svg"
          style={{ width: "400px", height: "300px" }}
          alt=""
        />
        <h2 style={{ textAlign: "center" }}>Remove Product From Cart</h2>
        <div
          style={{
            display: "flex",
            gap: "32px",
            justifyContent: "center",
            marginTop: "16px",
          }}
        >
          <button
            style={{
              backgroundColor: "var(--error)",
              color: "white",
              border: "none",
              padding: "12px 32px",
              fontWeight: "400",
              fontSize: "18px",
              borderRadius: "10px",
              cursor: "pointer",
              flex: "1",
            }}
            onClick={handleDeleteFromCart}
          >
            Remove
          </button>
          <button
            style={{
              backgroundColor: "white",
              border: "1px solid var(--errie-black)",

              padding: "12px 32px",
              fontWeight: "400",
              fontSize: "18px",
              borderRadius: "10px",
              cursor: "pointer",
              flex: "1",
            }}
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </button>
        </div>
      </Box>
    </Modal>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  borderRadius: "10px",

  p: 4,
};
