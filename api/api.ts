type ApiResponse<T> = {
  success: boolean
  data: T
  message: string
}

type User = {
  id: number
  name: string
}

const userResponse: ApiResponse<User> = {
  success: true,
  data: {
    id: 1,
    name: "Yash",
  },
  message: "User fetched"
}

async function getUser():Promise<ApiResponse<User>>{
    return {
        success:true,
        data:{
            id:1,
            name:"Yash"
        },
        message:"data fetched successfully"
    }
}

async function main(){
    const res=await getUser()

    console.log(res.data.name.toUpperCase())
    console.log(res.data)
}


export{}