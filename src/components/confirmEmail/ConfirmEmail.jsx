import React, { useState } from "react";
import styles from "../loginForm/loginForm.module.css";
import illustration from "../assets/illustration.png";
import { checkUserEmail } from "../../store/userSlice";
import { useDispatch } from "react-redux";

const ConfirmEmail = () => {
  const [code, setCode] = useState("");

  const dispatch = useDispatch();

  const checkUserCode = (e) => {
    e.preventDefault();
    dispatch(checkUserEmail(code));
  };
  return (
    <>
      <div className={styles.main}>
        <div className={styles.image}>
          <div className={styles.image__top}>
            <img src={illustration} alt="" />
          </div>
          <div className={styles.image__bottom}>
            <p className={styles.image__lorby}>Lorby</p>
            <p className={styles.image__text}>Твой личный репетитор</p>
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.form__main_title}>
            <p>Вэлком бэк!</p>
          </div>
          <form className={styles.form__registraition} action="">
            <input
              className={styles.form__input}
              type="text"
              placeholder="Введи четырехзначный код"
              onChange={(e) => setCode(e.target.value)}
            />
            <button onClick={checkUserCode} className={styles.form__button}>
              Подтвердить
            </button>
          </form>
          <div className={styles.form__bottom_text}>
            <p>У меня еще нет аккаунта</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmEmail;
