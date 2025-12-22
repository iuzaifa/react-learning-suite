


const ProfileCardProps =  ({name, email})=> {

    return (
        <>
            <h2 className={`text-xl`}>Name: {name}</h2>
            <h2 className={`text-xl`}>Email: {email}</h2>

        </>
    )
}

export default ProfileCardProps;