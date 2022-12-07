import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = () => {
  const navigate = useNavigate();

  const onImageRemovebgPreview83Click = useCallback(() => {
    navigate("/frame-17");
  }, [navigate]);

  return (
    <div className={styles.frameDiv}>
      <img
        className={styles.productsST4811Icon}
        alt=""
        src="../productsst481-1@2x.png"
      />
      <img
        className={styles.productST1316290259355271Icon}
        alt=""
        src="../productst131629025935527-1@2x.png"
      />
      <img className={styles.image18Icon} alt="" src="../image-18@2x.png" />
      <img
        className={styles.productSHP2116249689634231Icon}
        alt=""
        src="../productshp211624968963423-1@2x.png"
      />
      <div className={styles.sportsWearsDiv}>Sports Wear’s</div>
      <img
        className={styles.productsJOGP2111Icon}
        alt=""
        src="../productsjogp211-1@2x.png"
      />
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleDiv1} />
      <div className={styles.rectangleDiv2} />
      <div className={styles.tshirtsDiv}>tshirts</div>
      <div className={styles.joggersDiv}>joggers</div>
      <div className={styles.shortsDiv}>shorts</div>
      <img
        className={styles.productsJOGP10111Icon}
        alt=""
        src="../productsjogp1011-1@2x.png"
      />
      <img
        className={styles.imageRemovebgPreview83}
        alt=""
        src="../imageremovebgpreview-8-3@2x.png"
        onClick={onImageRemovebgPreview83Click}
      />
    </div>
  );
};

export default FrameComponent3;
