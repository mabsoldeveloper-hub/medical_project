const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

type ApiResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
  errors?: unknown;
};

export type UserProfile = {
  _id: string;
  name: string;
  email: string;
  role: "patient" | "doctor" | "admin";
  isActive: boolean;
  phone?: string | null;
  dateOfBirth?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

type AuthPayload = {
  user: UserProfile;
  accessToken: string;
};

async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const result = (await response.json()) as ApiResponse<T>;

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Something went wrong.");
  }

  return result;
}

export function signupUser(payload: {
  name: string;
  email: string;
  password: string;
  role?: "patient" | "doctor" | "admin";
}) {
  return request<AuthPayload>("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function loginUser(payload: { email: string; password: string }) {
  return request<AuthPayload>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function getCurrentUser() {
  return request<{ user: UserProfile }>("/api/auth/me", {
    method: "GET",
    headers: getAuthHeaders(),
  });
}

export function updateCurrentUser(payload: {
  name: string;
  phone?: string;
  dateOfBirth?: string;
}) {
  return request<{ user: UserProfile }>("/api/auth/me", {
    method: "PATCH",
    headers: getAuthHeaders(),
    body: JSON.stringify(payload),
  });
}

export function logoutUser() {
  return request<null>("/api/auth/logout", {
    method: "POST",
    headers: getAuthHeaders(),
  });
}

export function saveAuthSession(auth: AuthPayload) {
  localStorage.setItem("accessToken", auth.accessToken);
  localStorage.setItem("user", JSON.stringify(auth.user));
  window.dispatchEvent(new Event("authChanged"));
}

export function getStoredUser(): UserProfile | null {
  const user = localStorage.getItem("user");

  if (!user) {
    return null;
  }

  try {
    return JSON.parse(user) as UserProfile;
  } catch {
    return null;
  }
}

export function getAccessToken() {
  return localStorage.getItem("accessToken");
}

export function clearAuthSession() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
  window.dispatchEvent(new Event("authChanged"));
}

export function updateStoredUser(user: UserProfile) {
  localStorage.setItem("user", JSON.stringify(user));
  window.dispatchEvent(new Event("authChanged"));
}

function getAuthHeaders(): Record<string, string> {
  const token = getAccessToken();

  return token ? { Authorization: `Bearer ${token}` } : {};
}
