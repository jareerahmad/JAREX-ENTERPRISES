
const API_URL = import.meta.env.VITE_API_URL;

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const apiRequest = async (endpoint, options = {}, retries = 3) => {
    let lastError;

    for (let attempt = 0; attempt <= retries; attempt++) {
        try {
            const response = await fetch(`${API_URL}${endpoint}`, {
                headers: {
                    "Content-Type": "application/json",
                    ...(options.headers || {}),
                },
                ...options,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Something went wrong."
                );
            }

            return data;
        } catch (error) {
            lastError = error;

            if (attempt < retries) {
                const delay = 1500 * (attempt + 1);

                console.log(
                    `API request failed. Retrying in ${delay / 1000
                    } seconds...`
                );

                await sleep(delay);
            }
        }
    }

    throw lastError;
};

export const registerUser = async (userData) => {
    return apiRequest("/auth/register", {
        method: "POST",
        body: JSON.stringify(userData),
    });
};

export const loginUser = async (credentials) => {
    return apiRequest("/auth/login", {
        method: "POST",
        body: JSON.stringify(credentials),
    });
};

export default apiRequest;