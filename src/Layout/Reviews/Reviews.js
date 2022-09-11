import React from "react";
import styles from "./Reviews.module.css";
import Testimonial from "./Testimonial";

const Reviews = () => {
  return (
    <div className={styles["main-container"]} id="reviews">
      <h1 className={styles.title}>What our customers have to say about us</h1>
      <div className={styles["review-container"]}>
        <Testimonial
          name="Bradley"
          review=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus maxime sunt eos quos itaque repellat sapiente, cumque voluptates ratione corrupti quisquam. Sit quam neque blanditiis accusantium illum et eos ab?"
        />
        <Testimonial
          name="Shannon"
          review=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus maxime sunt eos quos itaque repellat sapiente, cumque voluptates ratione corrupti quisquam. Sit quam neque blanditiis accusantium illum et eos ab?"
        />
        <Testimonial
          name="Cameron"
          review=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus maxime sunt eos quos itaque repellat sapiente, cumque voluptates ratione corrupti quisquam. Sit quam neque blanditiis accusantium illum et eos ab?"
        />
        <Testimonial
          name="Daniel"
          review=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus maxime sunt eos quos itaque repellat sapiente, cumque voluptates ratione corrupti quisquam. Sit quam neque blanditiis accusantium illum et eos ab?"
        />
      </div>
    </div>
  );
};

export default Reviews;
