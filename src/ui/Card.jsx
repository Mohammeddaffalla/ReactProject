
function Card({ title, description, image, children }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {children && <div className="card-extra">{children}</div>}
      </div>
    </div>
  );
}

export default Card;