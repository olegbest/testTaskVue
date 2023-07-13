import httpClient from "@/api/httpClient";

export function getAllStops() {
    return httpClient.get('/stops');
}