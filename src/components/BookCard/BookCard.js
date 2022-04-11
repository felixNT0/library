import styles from "./BookCard.module.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function BookCard(props) {
  const { title, author, id } = props;
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.root}>
        <img
          src="https://macmillan-dam.captureweb.co.uk/cdn/macmillan/previews/439664/d2600cec4c0f09bf8e6187a83a066343/0/14665546cf5662d409143d004ffc0c54/131898933.jpg"
          className={styles.book_image}
          alt=""
        />
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.author_wrapper}>
          <img
            className={styles.author_thumb}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTglCWa5kuVgNTrXD2NxCFZ82apQ-8UhJMVFg&usqp=CAU"
            alt=""
          />
          <p className="card__title">{author}</p>
        </div>
        <div>
          <h4
            onClick={() => {
              navigate("/book/" + id);
            }}
          >
            Book Details
          </h4>
         
        </div>
      </div>
    </div>
  );
}
