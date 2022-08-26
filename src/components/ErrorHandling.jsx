import styles from "../modules/ErrorHandling.module.css";
const { errorImg, errorWrapper } = styles;
export const ErrorHandling = ({ error }) => {
  let status = null;
  let msg = null;
  if (error.status) {
    status = error.status;
    msg = error.msg;
  } else {
    status = error.response.status;
    msg = error.response.data.msg;
  }

  return (
    <section className={errorWrapper}>
      <p>
        Status: {status} <br></br> {msg}
      </p>
      <img className={errorImg} src={`https://http.cat/${status}`} alt="" />
    </section>
  );
};
