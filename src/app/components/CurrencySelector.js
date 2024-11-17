"use client";

// Function to map cryptocurrency symbols to corresponding image file names
const getImageName = (symbol) => {
  const imageNames = {
    "BTC-USD": "btc.png",
    "ETH-USD": "eth.png",
    "XRP-USD": "xrp.png",
    "BNB-USD": "bnb.png",
    "SOL-USD": "sol.png",
    "DOGE-USD": "doge.png",
    "LTC-USD": "ltc.png",
  };
  return imageNames[symbol] || "default.png";
};

// Rendering Currency Selector
const CurrencySelector = ({ selectedCurrency, onCurrencyChange }) => {
  const currencies = ["BTC-USD", "ETH-USD", "XRP-USD", "BNB-USD", "SOL-USD", "DOGE-USD", "LTC-USD"];

  return (
    <div className="flex flex-wrap justify-center space-x-2 space-y-2 mb-4">

      {/* Iterate over the list of currencies and create a button for each */}
      {currencies.map((currency) => (
        <button
          style={{
            padding: "10px 20px",
            margin: "5px",
            border: "2px solid",
            borderColor: selectedCurrency === currency ? "blue" : "gray",
            backgroundColor: selectedCurrency === currency ? "blue" : "white",
            color: selectedCurrency === currency ? "white" : "black",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "bold",
            transition: "all 0.3s ease",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            display: "flex",         
            alignItems: "center",  
            gap: "10px",           
            justifyContent: "flex-start", 
          }}
          key={currency} // Unique key for each button 
          onClick={() => onCurrencyChange(currency)} // Call parent function on button click
          variant={selectedCurrency === currency ? "default" : "outline"}
        >
          {/* Render the currency image */}
          <img
            src={`/${getImageName(currency)}`}
            alt={currency}
            style={{
              width: "20px",  // Adjust size as needed
              height: "20px",  // Adjust size as needed
              objectFit: "contain",  // Keeps the image in proportion
            }}
          />
          {currency}
        </button>
      ))}
    </div>
  );
};

export default CurrencySelector;