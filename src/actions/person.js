import axios from "axios";

const apiUrl = "https://api.github.com/users/krisnafirdaus";

export const fetchGithubData = () => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_GITHUB_PENDING",
    });

    return axios
      .get(apiUrl)
      .then((response) => {
        dispatch({
          type: "FETCH_GITHUB_SUCCESS",
          data: response.data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};
