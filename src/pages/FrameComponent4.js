import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = () => {
  const navigate = useNavigate();

  const onImageRemovebgPreview83Click = useCallback(() => {
    navigate("/frame-17");
  }, [navigate]);

  return (
    <div className={styles.frameDiv}>
      <div className={styles.rectangleDiv} />
      <img
        className={styles.productsSTW3411Icon}
        alt=""
        src="../productsstw341-1@2x.png"
      />
      <img className={styles.image19Icon} alt="" src="../image-19@2x.png" />
      <img
        className={styles.productsSTW0811Icon}
        alt=""
        src="../productsstw081-1@2x.png"
      />
      <div className={styles.sportsWearsDiv}>Sports Wear’s</div>
      <img className={styles.image21Icon} alt="" src="../image-21@2x.png" />
      <img
        className={styles.productsWHST11711Icon}
        alt=""
        src="../productswhst1171-1@2x.png"
      />
      <img
        className={styles.productsWHST11811Icon}
        alt=""
        src="../productswhst1181-1@2x.png"
      />
      <img
        className={styles.productsFSH0211Icon}
        alt=""
        src="../productsfsh021-1@2x.png"
      />
      <img className={styles.rectangleIcon} alt="" src="../rectangle-8.svg" />
      <div className={styles.trackDiv}>Track</div>
      <div className={styles.tshirtsDiv}>Tshirts</div>
      <div className={styles.hoodiesDiv}>Hoodies</div>
      <img
        className={styles.imageRemovebgPreview83}
        alt=""
        src="../imageremovebgpreview-8-3@2x.png"
        onClick={onImageRemovebgPreview83Click}
      />
    </div>
  );
};

export default FrameComponent4;
