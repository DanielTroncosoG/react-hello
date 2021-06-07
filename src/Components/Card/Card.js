import "./Card.css";

function card({ title, text, textboton, url }) {
  return (
    <div className="card ">
      <img class="card-img-top  mx-auto" src={url} alt="Card image cap"></img>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{text}</p>
        <a class="btn btn-primary">{textboton}</a>
      </div>
    </div>
  );
}

export default card;
