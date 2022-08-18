export default function GithubReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_GITHUB_SUCCESS":
      return action.data;
    case "FETCH_GITHUB_PENDING":
      return action;
    default:
      return state;
  }
}
