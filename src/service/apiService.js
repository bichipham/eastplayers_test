export const fetchAPI = async ({ url, payload }) => {
  const fullUrl = `${process.env.NEXT_PUBLIC_API_DOMAIN}${url}`;
  const headers = {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  };

  const requestData = {
    body: payload?.method == 'POST' ? JSON.stringify(payload?.data) : undefined,
    method: payload?.method,
    headers: headers
  };
  try {
    const res = await fetch(fullUrl, requestData);
    if (!res.ok || res.status == 404) {
      throw new Error("API Request not ok status = ", res.status);
    } else {
      const data = await res?.json();
      console.log(
        "[DEBUG] API Request= %s ; RequestData= %s ; Response= %s",
        fullUrl,
        JSON.stringify(requestData),
        JSON.stringify(data)
      );
      if (data?.result_code == "FAILURE") {
        throw new Error("API Request FAILURE");
      } else return data;
    }
  } catch (e) {
    console.log(
      "[ERROR] API Request for url= %s ; RequestData= %s ; Error= %s",
      fullUrl,
      JSON.stringify(requestData),
      e
    );
    return {};
  }
};
