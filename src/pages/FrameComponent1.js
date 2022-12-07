import { useCallback, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onImage4ButtonClick = useCallback(() => {
    navigate("/frame-4");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/frame-6");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/frame-7");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.frameDiv}>
      <div className={styles.materialSymbolssearchDiv} />
      <Button
        className={styles.image4Button}
        sx={{ width: 324 }}
        variant="outlined"
        color="primary"
        onClick={onImage4ButtonClick}
      >
        Button
      </Button>
      <form className={styles.groupForm} data-animate-on-scroll>
        <div className={styles.rectangleDiv} />
        <img
          className={styles.imageRemovebgPreview21}
          alt=""
          src="../imageremovebgpreview-2-1@2x.png"
        />
        <div className={styles.frameDiv1}>
          <div className={styles.frameDiv2}>
            <div className={styles.groupDiv}>
              <div className={styles.groupDiv}>
                <div
                  className={styles.frameDiv4}
                  onClick={onFrameContainerClick}
                >
                  <img
                    className={styles.image1Icon}
                    alt=""
                    src="../image-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.frameIcon} alt="" src="../frame-6.svg" />
        <img className={styles.image5Icon} alt="" src="../image-5@2x.png" />
        <div className={styles.sELFMADESPORTSWEAR}>
          <p className={styles.sELFMADESPORTSWEAR1}>SELFMADE SPORTS WEAR</p>
        </div>
        <div className={styles.boostYourTrainingWithSelfm}>
          {`Boost your training with Selfmade super poly pique sports wear  for both men and women      `}
          <span className={styles.span}>{` `}</span>
        </div>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-1.svg"
          onClick={onRectangle1Click}
        />
        <button
          className={styles.rectangleButton}
          onClick={onRectangleButtonClick}
        />
        <div className={styles.menDiv}>Men</div>
        <div className={styles.womenDiv}>Women</div>
      </form>
      <div className={styles.rectangleDiv1} />
      <img className={styles.vectorIcon} alt="" src="../vector.svg" />
      <div className={styles.searchDiv}>Search............</div>
    </div>
  );
};

export default FrameComponent1;
