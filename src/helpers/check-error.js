const checkError=(user,consent)=>{
    const errObj={}
    if(!user.name){
        errObj.name="Field is required"
    }
    if(!user.userName){
        errObj.userName="Field is required"
    }
    if(!user.email){
        errObj.email="Field is required"
    }
    if(!user.mobile){
        errObj.mobile="Field is required"
    }
    if(!consent){
        errObj.consent="Check this box if you want to proceed"
    }
    return errObj
}

export default checkError