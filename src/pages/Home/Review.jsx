

const Review = ({rev}) => {
    const {name, review, user_image_url} = rev;
    return (
        <div className="carousel-item w-[600px] bg-blue-300 rounded-box">
            <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="opacity-90 rounded-box" />
            <h2>{name}</h2>
            <p>{review}</p>
        </div>
    );
};

export default Review;