import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "2c007a0ae62f46718856922bb6c9c3a7";
const redirectUri = "http://localhost:3004";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

//save token as permanent header
export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;