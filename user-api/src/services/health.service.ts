type HealthStatus={
    status:string
}

export const getHealthStatus = ():HealthStatus=>{

    return {status:"ok"}
    
}