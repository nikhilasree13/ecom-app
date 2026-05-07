
export default function Checkout(){
    const order= () => {
        alert("Order placed")
    };
    return(
        <div className="checkout">
            <h1>checkout</h1>
            <lable>
                <input 
                type="checkbox"
                /> Amount paid
            </lable>
            <br />
            <button onClick={order}>Place order</button>
        </div>
    )
}