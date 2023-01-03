function pay() {
    return (
        <>
    <section>
    <Navbar/>
    </section>
        <form className="signupForm" onSubmit={handleSubmit}>
            <h1>Payment page</h1>
            <br/>
            <label className="USER" for="cardHoldersName">Card Holde's Name</label>
            <br/>
            <input className="word" value={cardHoldersName} />
            <br/>
            <br/>
            <label className="USER" for="cardNumber">Card Number</label>
            <br/>
            <input className="word" value={cardNumber} />
            <br/>
            <br/>
            <label className="USER" for="expairationDate">Expairation Date</label>
            <br/>
            <input className="word" value={expairationDate} />
            <br/>
            <br/>
            <label className="USER" for="cvc">CVC</label>
            <br/>
            <input className="word" value={cvc} />
            <br/>
            <br/>
            <br/>
            <button className="signup" type="submit"> BUY </button>
        </form>
        </>
    )
}

export default pay;