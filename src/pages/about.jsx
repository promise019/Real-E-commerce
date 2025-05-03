import Header from "../layout/Header";

export default function About() {
    return(
        <>
            <Header/>
            <div className="p-2 mt-[25%] absolute md:mt-[10%] md:p-10 lg:mt-[6%]">
                <h1 className="text-2xl font-bold">About Us</h1>
                <br />

                <p>
                    Welcome to idea — your trusted destination for quality, value, and convenience.
                </p>

                <br />

                <p>
                    At ideal commerce, we carefully curate a wide selection of categories like fashion, home goods, electronics, beauty products, etc.,
                    ensuring every item meets our high standards of quality, style, and function.
                    <br />
                    Whether you're shopping for the everyday essentials or looking for something unique, our collection is designed to delight and deliver.
                </p>

                <br />

                <h2 className="text-lg font-bold">Our mission is simple: </h2>
                <p>
                    To bring you the best products, at the best prices, with service you can rely on.
                </p>

                <br />

                <h2 className="text-lg font-bold">Why Shop With Us?</h2>
                <p>
                    <b>Quality You Can Trust: </b>
                     We handpick our products for durability and design.
                </p>

                <br />

                <p>
                    <b>Customer-First Service: </b>
                     Our support team is here to help, before and after your purchase.
                </p>

                <br />

                <p>
                    <b>Fast, Reliable Shipping: </b>
                     Your time is valuable—our logistics team works to deliver your order promptly and securely.
                </p>

                <br />

                <p>
                    <b>Secure Shopping: </b>
                    Our site uses advanced encryption and trusted payment gateways to keep your data safe.
                </p>

                <br />

                <p>
                    We’re proud to serve customers across the world and are always evolving to meet your needs. 
                    Whether you're a first-time visitor or a long-time customer, thank you for being a part of our journey.
                </p>

                <br />

                <p>
                    <b>Happy shopping,</b> <br />
                    <i>The ideal Commerce Team</i>
                </p>
            </div>
        </>
    )
}