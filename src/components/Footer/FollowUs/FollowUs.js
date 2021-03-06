import React from "react";

import facebookWhite from "../../../utils/icons/facebook_white.svg";
import youtubeWhite from "../../../utils/icons/youtube_white.svg";
import linkedinWhite from "../../../utils/icons/linkedin_white.svg";
import instagramWhite from "../../../utils/icons/instagram_white.svg";
import questionMark from "../../../utils/icons/question.svg";

import styles from "./FollowUs.module.css";
import { Form } from "./Form/Form";

export const FollowUs = () => {
  return (
    <div className={styles.followUsContainer}>
      <h4 className={styles.typesHeading}>Follow us:</h4>

      <div className={styles.socialsWrapper}>
        <div className={styles.socialsBlock}>
          <div>
            <img src={facebookWhite} alt="facebook_icon" />
          </div>

          <p>Facebook</p>
        </div>

        <div className={styles.socialsBlock}>
          <div>
            <img src={youtubeWhite} alt="youtube_icon" />
          </div>

          <p>Youtube</p>
        </div>

        <div className={styles.socialsBlock}>
          <div>
            <img src={linkedinWhite} alt="linkedin_icon" />
          </div>

          <p>LinkedIn</p>
        </div>

        <div className={styles.socialsBlock}>
          <div>
            <img src={instagramWhite} alt="instagram_icon" />
          </div>

          <p>Instagram</p>
        </div>
      </div>

      <div className={styles.subscribeBlock}>
        <div className={styles.subscribeIntro}>
          <p>Subscribe to new objects</p>

          <div className={styles.tooltip}>
            <img src={questionMark} alt="question_mark" />
            <span className={styles.tooltipText}>Subscribe for newsletter</span>
          </div>
        </div>

        <Form />
      </div>
    </div>
  );
};
