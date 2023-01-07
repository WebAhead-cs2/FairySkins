import Navbar from "../navbar";
function Items() {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <form className="signupForm" onSubmit="handleSubmit">
        <h1>Adding items to the categoty</h1>
        <br />
        <label className="img" for="ADD_IMAGE">
          Add item's image
        </label>
        <br />
        <input className="word" placeholder="ADD_IMAGE" />
        <br />
        <br />
        <label className="USER" for="item_name">
          Add item name
        </label>
        <br />
        <input className="word" placeholder="item_name" />
        <br />
        <br />
        <label className="USER" for="price">
          Add price
        </label>
        <br />
        <input className="word" placeholder="price" />
        <br />
        <br />
        <label className="USER" for="category">
          Category
        </label>
        <br />
        <input className="word" placeholder="category" />
        <br />
        <br />
        <br />
        <button className="signup" type="submit">
          {" "}
          ADD ITEM
        </button>
      </form>
    </>
  );
}

export default Items;
