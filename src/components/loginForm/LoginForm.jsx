import React, { useEffect } from "react";
import styles from "./loginForm.module.css";
import illustration from "../assets/illustration.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cleanErrorState, cleanStatusState, loginUser } from "../../store/userSlice";

const LoginForm = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { loading, status, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanErrorState());
    dispatch(cleanStatusState());
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
  }

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
          <h2>{error}</h2>
          <div className={styles.form}>
            <div className={styles.form__main_title}>
              <p>Вэлком бэк!</p>
            </div>
            <form className={styles.form__registraition} action="">
              <input
                className={styles.form__input}
                type="text"
                placeholder="Введи логин"
                onChange={(e) => setUser({
                  ...user,
                  username: e.target.value,
                })}
              />
              <input
                className={styles.form__input}
                type="text"
                placeholder="Введи пароль"
                onChange={(e) => setUser({
                  ...user,
                  password: e.target.value,
                })}
              />
              <button onClick={handleLogin} className={styles.form__button}>Войти</button>
            </form>
            <div className={styles.form__bottom_text}>
              <p>У меня еще нет аккаунта</p>
            </div>
          </div>
        </div>
    </>
  );
};

export default LoginForm;
