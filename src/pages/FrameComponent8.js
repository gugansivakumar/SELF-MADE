import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent8.module.css";

const FrameComponent8 = () => {
  const navigate = useNavigate();

  const onImageRemovebgPreview83Click = useCallback(() => {
    navigate("/frame-17");
  }, [navigate]);

  return (
    <div className={styles.frameDiv}>
      <img className={styles.image12Icon} alt="" src="../image-121@2x.png" />
      <img className={styles.image13Icon} alt="" src="../image-131@2x.png" />
      <img className={styles.image14Icon} alt="" src="../image-14@2x.png" />
      <img className={styles.image15Icon} alt="" src="../image-15@2x.png" />
      <img className={styles.image16Icon} alt="" src="../image-16@2x.png" />
      <img className={styles.image17Icon} alt="" src="../image-17@2x.png" />
      <img className={styles.rectangleIcon} alt="" src="../rectangle-81.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleDiv1} />
      <div className={styles.kURTADiv}>KURTA</div>
      <div className={styles.nIGHTWEARDiv}>NIGHT WEAR</div>
      <img className={styles.rectangleIcon1} alt="" src="../rectangle-9.svg" />
      <div className={styles.fOOTWEARDiv}>FOOTWEAR</div>
      <div className={styles.tSHIRTSDiv}>TSHIRTS</div>
      <img className={styles.rectangleIcon2} alt="" src="../rectangle-9.svg" />
      <div className={styles.cOORDSDiv}>COORDS</div>
      <img className={styles.rectangleIcon3} alt="" src="../rectangle-9.svg" />
      <div className={styles.kURTIDiv}>KURTI</div>
      <div className={styles.womensWearDiv}>
        <p className={styles.womensWearP}>Women’s Wear</p>
      </div>
      <img
        className={styles.imageRemovebgPreview83}
        alt=""
        src="../imageremovebgpreview-8-3@2x.png"
        onClick={onImageRemovebgPreview83Click}
      />
    </div>
  );
};

export default FrameComponent8;
