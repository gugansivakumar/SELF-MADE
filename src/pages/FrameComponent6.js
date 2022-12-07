import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent6.module.css";

const FrameComponent6 = () => {
  const navigate = useNavigate();

  const onImage4Click = useCallback(() => {
    navigate("/frame-4");
  }, [navigate]);

  const onImageRemovebgPreview41Click = useCallback(() => {
    navigate("/frame-5");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/frame-6");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/frame-7");
  }, [navigate]);

  return (
    <div className={styles.frameDiv}>
      <img
        className={styles.image4Icon}
        alt=""
        src="../image-4@2x.png"
        onClick={onImage4Click}
      />
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
        <img
          className={styles.imageRemovebgPreview21}
          alt=""
          src="../imageremovebgpreview-2-12@2x.png"
        />
        <div className={styles.frameDiv1}>
          <div className={styles.frameDiv2}>
            <div className={styles.groupDiv1}>
              <div className={styles.groupDiv1} />
            </div>
          </div>
        </div>
        <img
          className={styles.imageRemovebgPreview41}
          alt=""
          src="../imageremovebgpreview-4-11@2x.png"
          onClick={onImageRemovebgPreview41Click}
        />
        <img className={styles.frameIcon} alt="" src="../frame-62.svg" />
        <img
          className={styles.imageRemovebgPreview31}
          alt=""
          src="../imageremovebgpreview-3-1@2x.png"
        />
        <div className={styles.sELFMADESPORTSWEAR}>
          <p className={styles.sELFMADESPORTSWEAR1}>SELFMADE SPORTS WEAR</p>
        </div>
        <div className={styles.boostYourTrainingWithSelfm}>
          {`Boost your training with Selfmade super poly pique sports wear      `}
          <span className={styles.span}>{` `}</span>
        </div>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-12.svg"
          onClick={onRectangle1Click}
        />
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-2.svg"
          onClick={onRectangle2Click}
        />
        <div className={styles.menDiv}>Men</div>
        <div className={styles.womenDiv}>Women</div>
      </div>
      <div className={styles.forBothMenAndWomen}>for both men and women</div>
      <img className={styles.image6Icon} alt="" src="../image-61@2x.png" />
    </div>
  );
};

export default FrameComponent6;
