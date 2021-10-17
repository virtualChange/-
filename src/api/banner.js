import request from "./request";
export  async function getBanners() {
    const res = await request.get('/api/banner')
    return res
}

// getBanners().then(res=>{console.log(res)})