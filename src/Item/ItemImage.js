import "./ItemImage.css";

const randColor = () => {
    const r = Math.floor(Math.random() * 128) + 100;
    const g = Math.floor(Math.random() * 128) + 100;
    const b = Math.floor(Math.random() * 128) + 100;
    return `rgb(${r},${g},${b})`;
}

const ItemImage = ({ image_url, name="" }) => {
    const backgroundColor = randColor();
    return (
        <div style={{ backgroundColor }} >
            <img src={image_url} alt={name} className="ItemImage-image"/>
        </div>
    )    
};

export default ItemImage
