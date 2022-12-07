import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent10.module.css";

const FrameComponent10 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/frame-17");
  }, [navigate]);

  const onOrCreateNewClick = useCallback(() => {
    navigate("/frame-18");
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
      <div className={styles.loginToYourExistingAccount}>
        <p className={styles.loginToYour}>Login to your existing account</p>
      </div>
      <div className={styles.userIDDiv}>
        <p className={styles.loginToYour}>User ID</p>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleDiv1} />
      <div className={styles.groupDiv} onClick={onGroupContainerClick}>
        <div className={styles.rectangleDiv2} />
      </div>
      <div className={styles.passwordDiv}>
        <p className={styles.loginToYour}>Password</p>
      </div>
      <div className={styles.lOGINDiv}>LOGIN</div>
      <img className={styles.lineIcon} alt="" src="../line-1.svg" />
      <div
        className={styles.orCreateNewAccount}
        onClick={onOrCreateNewClick}
      >{`Or Create New Account `}</div>
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
    </div>
  );
};

export default FrameComponent10;
