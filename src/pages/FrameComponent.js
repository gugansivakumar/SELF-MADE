import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onImageRemovebgPreview82Click = useCallback(() => {
    navigate("/frame-17");
  }, [navigate]);

  return (
    <div className={styles.frameDiv}>
      <img className={styles.image6Icon} alt="" src="../image-6@2x.png" />
      <div className={styles.rectangleDiv} />
      <i className={styles.jeansI}>Jeans</i>
      <img className={styles.image7Icon} alt="" src="../image-7@2x.png" />
      <div className={styles.rectangleDiv1} />
      <i className={styles.shirts}>
        <p className={styles.shirtsP}>Shirts</p>
      </i>
      <img className={styles.image8Icon} alt="" src="../image-8@2x.png" />
      <img className={styles.rectangleIcon} alt="" src="../rectangle-7.svg" />
      <i className={styles.tShirts}>T-shirts</i>
      <img className={styles.image9Icon} alt="" src="../image-9@2x.png" />
      <div className={styles.rectangleDiv2} />
      <i className={styles.innerWears}>
        <p className={styles.shirtsP}>Inner wears</p>
      </i>
      <img className={styles.image10Icon} alt="" src="../image-10@2x.png" />
      <div className={styles.rectangleDiv3} />
      <i className={styles.footWearsI}>Foot wears</i>
      <img className={styles.image11Icon} alt="" src="../image-11@2x.png" />
      <div className={styles.rectangleDiv4} />
      <i className={styles.shortsI}>Shorts</i>
      <div className={styles.menSWear}>Men ‘s Wear</div>
      <img
        className={styles.imageRemovebgPreview82}
        alt=""
        src="../imageremovebgpreview-8-2@2x.png"
        onClick={onImageRemovebgPreview82Click}
      />
    </div>
  );
};

export default FrameComponent;
