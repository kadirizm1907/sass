import cardStyle from "../scss/card.module.scss";


const Card = ({ data }) => {
  console.log(data);
  return (
    <div className={cardStyle.main}>
      {data.map(({id, name, job, comment, img}) => (
        <div key={id} className={cardStyle.card}>
          <h1>{name}</h1>
          <h2>{job}</h2>
          <img className={cardStyle.image} src={img} alt="images" />
          <h3>{comment}</h3>
        </div>
      ))}
    </div>
  );
};

export default Card;
