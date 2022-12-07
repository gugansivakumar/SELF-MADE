import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent9.module.css";

const FrameComponent9 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/frame-17");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  return (
    <div className={styles.frameDiv}>
      <img
        className={styles.screenshot202211252124041Icon}
        alt=""
        src="../screenshot-20221125-212404-1@2x.png"
      />
      <img
        className={styles.screenshot202211252129551Icon}
        alt=""
        src="../screenshot-20221125-212955-1@2x.png"
      />
      <div className={styles.signUpDiv}>
        <p className={styles.signUp}>Sign up</p>
      </div>
      <div className={styles.userNameDiv}>
        <p className={styles.signUp}>User Name</p>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleDiv1} />
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
      <div className={styles.groupDiv} onClick={onGroupContainerClick}>
        <div className={styles.rectangleDiv4} />
      </div>
      <div className={styles.eMailDiv}>E-mail</div>
      <div className={styles.signInDiv}>Sign in</div>
      <img className={styles.lineIcon} alt="" src="../line-1.svg" />
      <div className={styles.frameDiv1} onClick={onFrameContainer3Click}>
        <div className={styles.frameDiv2}>
          <div className={styles.frameDiv2}>
            <div className={styles.frameDiv2}>
              <img
                className={styles.imageRemovebgPreview81}
                alt=""
                src="../imageremovebgpreview-8-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.phoneDiv}>Phone</div>
      <div className={styles.createPasswordDiv}>Create Password</div>
      <div className={styles.createPasswordDiv}>Create Password</div>
      <div className={styles.createPasswordDiv}>Create Password</div>
    </div>
  );
};

export default FrameComponent9;
