import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000/api/v1',
    timeout:30000
  })

  //拦截器设置
  /* instance.interceptors.request.use(config=>{

  }) */
  instance.interceptors.response.use(res=>{
    return res.data
  },
  err=>{
    console.log(err)
  })

  return instance(config)
}
