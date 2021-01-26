import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID IbcL3jEJCAfhXEIxT5C0c54Uxyfu7HTmm5g__pNvZPM"
  }
});