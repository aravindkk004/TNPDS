import React from "react";

const ShopDetails = () => {
  return (
    <div className="p-5">
      <h2 className="text-center font-extrabold text-3xl mb-8">Shop Details</h2>
      <div className="flex items-center my-2">
        <h2>Shop ID:</h2>
        <p> A91938</p>
      </div>
      <div className="flex items-center my-2">
        <h2>Shop Address:</h2>
        <p>Thiruparankundram, Madurai-01</p>
      </div>
      <div className="flex items-center my-2">
        <h2>Shop Incharge:</h2>
        <p>Ajay Baskar B</p>
      </div>
      <div className="flex items-center my-2">
        <h2>Incharge Contact:</h2>
        <p>8807942711</p>
      </div>
      <div>
        <h2>Total Stocks:</h2>
        <div className="flex items-center mt-2">
          <div className="border-1 border-black rounded-md p-3 mr-2">
            <p className="text-center font-bold">Rice</p>
            <p>Available: 100KG</p>
            <p>Dispatch: 50KG</p>
            <p>Required: 60KG</p>
          </div>
          <div className="border-1 border-black rounded-md p-3 mr-2">
            <p className="text-center font-bold">Sugar</p>
            <p>Available: 80KG</p>
            <p>Dispatch: 30KG</p>
            <p>Required: 90KG</p>
          </div>
          <div className="border-1 border-black rounded-md p-3 mr-2">
            <p className="text-center font-bold">Daal</p>
            <p>Available: 120KG</p>
            <p>Dispatch: 80KG</p>
            <p>Required: 30KG</p>
          </div>
          <div className="border-1 border-black rounded-md p-3 mr-2">
            <p className="text-center font-bold">Wheat</p>
            <p>Available: 50KG</p>
            <p>Dispatch: 20KG</p>
            <p>Required: 80KG</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
