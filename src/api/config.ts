const BASE_URL: string = `http://127.0.0.1:8000`;

export const endpoints_basic: Record<string, string> = {
    problems: `${BASE_URL}/api/problems/`,
    users: `${BASE_URL}/api/users/`,
    roles: `${BASE_URL}/api/roles/`,
    statuses: `${BASE_URL}/api/statuses/`,
};

export const endpoints_current: Record<string, (id: number) => string> = {
    problem: (id: number): string => `${endpoints_basic.problems}${id}/`,
    user: (id: number): string => `${endpoints_basic.users}${id}/`,
    role: (id: number): string => `${endpoints_basic.roles}${id}/`,
    status: (id: number): string => `${endpoints_basic.statuses}${id}/`,
};

export const endpoints_auth: Record<string, string> = {
    login: `${BASE_URL}/api/auth/login`,
    logout: `${BASE_URL}/api/auth/logout`,
    refresh: `${BASE_URL}/api/auth/refresh`,
    me: `${BASE_URL}/api/auth/me`,
};