export const fetchData = async (url) => {
    const consumerKey = "ck_a1e4ae5b9439d01d81141ba653402d78cb5b47d5";
    const consumerSecret = "cs_863715ec9ba8d30432b3669b6766f4cb81b2a919";
    const keys = `consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`
    
    const response = await fetch(url+keys);
    if(response.ok) return await response.json();
    throw new Error(`${response.status} ${response.statusText}`);
}
