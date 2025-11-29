
const FoodItem = ({ id }) => {
  // console.log("FoodItem props", id);
  return (
    <div className="border border-gray-300 p-2 m-2">
      <h3>Food Item - {id}</h3>
    </div>
  );
};

export default FoodItem;
