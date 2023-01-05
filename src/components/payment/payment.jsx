import Navbar from "../navbar";
function pay() {
    return (
        <>
    <section>
    <Navbar/>
    </section>
        <form className="signupForm" onSubmit="handleSubmit">
            <h1>Payment page</h1>
            <br/>
            <label className="USER" for="cardHoldersName">Card Holde's Name</label>
            <br/>
            <input className="word" placeholder="cardHoldersName" />
            <br/>
            <br/>
            <label className="USER" for="cardNumber">Card Number</label>
            <br/>
            <input className="word" placeholder="cardNumber" />
            <br/>
            <br/>
            <label className="USER" for="expairationDate">Expairation Date</label>
            <br/>
            <input className="word" placeholder="expairationDate" />
            <br/>
            <br/>
            <label className="USER" for="cvc">CVC</label>
            <br/>
            <input className="word" placeholder="cvc" />
            <br/>
            <br/>
            <br/>
            <button className="signup" type="submit"> BUY </button>
        </form>
        </>
    )
}

export default pay;