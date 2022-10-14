import drivers from ".";

export default function createApiAuthMiddle({ dispatch, getState }) {
  return (next) => (action) => {
    const authToken = "example";
    drivers.changeHeaders({
      authorization: authToken ? `Bearer ${authToken}` : "",
    });
    return next(action);
  };
}
