const Shimmer = () => {
    // console.log("Shimmer Rendered");
    return (
        <div className="restaurant-list">
            {Array(10)
            .fill("").map((e, index) => (
                <div className="shimmer-card" key={index}></div>
            ))}
        </div>
    )
};

export default Shimmer;