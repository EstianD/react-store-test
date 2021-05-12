import Localbase from "localbase";

let db = new Localbase("shopping-app");
db.config.debug = false;

export async function getCart() {
  console.log("LOADING CART...");
  try {
    const cartRes = await db.collection("cart").get();
    console.log("RES: ", cartRes);

    if (cartRes) {
      console.log("CART RES: ", cartRes);
      return cartRes;
    }
  } catch (err) {
    console.log("GET CAR ERROR: ", err);
  }
}

export async function addToCart(product) {
  /* 
      {
         id: 1,
         product: "some product",
         price: "R2000",
         quantity: 1
      }
   */

  console.log("FUNCTION: ", product);
  //  Create product
  const productSchema = {
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.img,
  };

  try {
    const addProductRes = await db.collection("cart").add(productSchema);
    if (addProductRes.success) return true;
    return false;
  } catch (err) {
    console.log("ADD PRODUCT ERROR: ", err);
  }
}

export async function removeFromCart(index) {
  // console.log("DB INDEX: ", index);

  const cartRes = await db.collection("cart").get();
  const updatedCart = cartRes.filter((item, i) => {
    return i !== index;
  });
  console.log("ENTIRE CART: ", cartRes);

  // Update collection
  const updatedCartRes = await db.collection("cart").set(updatedCart);
  console.log("UPDATED CART: ", updatedCartRes);

  if (updatedCartRes.success) return updatedCartRes.data;
  return [];
}

export async function clearCart() {
  try {
    const cartRes = await db.collection("cart").set([]);
    if (cartRes.success) return cartRes.data;
    return [];
  } catch (err) {
    console.log("CLEAR CART ERROR: ", err);
  }
}
