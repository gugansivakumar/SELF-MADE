import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = () => {
  const navigate = useNavigate();

  const onImageRemovebgPreview101Click = useCallback(() => {
    navigate("/frame-17");
  }, [navigate]);

  return (
    <div className={styles.frameDiv}>
      <img
        className={styles.imageRemovebgPreview41}
        alt=""
        src="../imageremovebgpreview-4-1@2x.png"
      />
      <div className={styles.noItemsSelected}>No Items Selected</div>
      <img
        className={styles.imageRemovebgPreview101}
        alt=""
        src="../imageremovebgpreview-10-1@2x.png"
        onClick={onImageRemovebgPreview101Click}
      />
    </div>
  );
};

export default FrameComponent5;
