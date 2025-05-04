import image from '../assets/news.jpeg'
const NewsItem = ({title, description, src, url}) => {
    return (
        <div className="card bg-dark text-light mb-3 my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src ? src : image} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "cover" }} />

  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"News Just Happened."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
    );
};

export default NewsItem;