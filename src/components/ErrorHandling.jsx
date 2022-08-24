export const ErrorHandling = ({ error }) => {
  //custom errors
  if (error.status) {
    return (
      <p>
        Status: {error.status} <br></br> {error.msg}
      </p>
    );
  }

  //axios errors
  return (
    <p>
      Status:{error.response.status} <br></br> {error.response.data.msg}
    </p>
  );
};
