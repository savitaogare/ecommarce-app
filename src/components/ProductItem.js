import "../css/Productitem.css";
import { useDispatch } from "react-redux";
import { removeProduct } from "../reducer/productSlice";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
const ProductItem = (props) => {
  // console.log("props", props);
  const { product } = props;

  const dispatch = useDispatch();
  const removeHandler = (Id) => {
    console.log("remove", Id);
    dispatch(removeProduct(Id));
    toast.success("Remove Product ");
  };

  return (
    <div className="product-container">
      {product.map(
        (item) => (
          (
            <div className="cart-container" key={item.id}>
              <div>
                {/* title */}
                <div className="cart-heading">
                  <h5> {item.title}</h5>
                </div>
                <div className="cart-img">
                  {/* img */}
                  <img src={item.img} alt="Imge" />
                </div>
                <div className="description-container">
                  {/* decscrition */}
                  <p>{item.descrition}</p>
                </div>
                <div className="cart-value">
                  {/* price and rating */}
                  <p>Price :{item.price}</p>
                  <p>Rating :{item.rating}</p> 
                </div>
                <div className="btns">
                  {/* romove button */}
                  <button onClick={() => removeHandler(item.id)} className="remove">Remove</button>
                  <Link to={`/edit/${item.id}`}>
                    {/* edit button */}
                    <button className="editbtn">Edit</button>
                  </Link>
                </div>
              </div>
            </div>
          )
        )
      )}
      <Toaster />
    </div>
  );
};
export default ProductItem;