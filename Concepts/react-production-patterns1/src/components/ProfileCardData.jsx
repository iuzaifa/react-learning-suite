

const ProfileCardData = ({data})=> {
    return (
       <div className="max-w-6xl mx-auto flex flex-wrap gap-4 items-center justify-around ">
           {data.map((item, i ) => (
               <div key={i} className="profile-card border border-slate-100 shadow-xs p-3 w-1/4 rounded-sm">
                   <div className="text-xl font-semibold text-slate-800 border-b pb-2 border-slate-400">User Details </div>
                   <div className="p-2 flex items-center gap-3">
                       <strong className={`text-slate-700 pb-0 mb-0`} >Name:</strong>
                       <p>{item.name}</p>
                   </div>
                   <div className="px-2 flex items-center gap-x-1">
                       <strong className={`text-slate-700 pb-0 mb-0`}>Email:</strong>
                       <p>{item.email}</p>
                   </div>
                   <div className="px-2 flex items-center gap-x-1">
                       <strong className={`text-slate-700 pb-0 mb-0`}>Phone:</strong>
                       <p>{item.phone}</p>
                   </div>
                   <div className="px-2 flex items-center gap-x-1">
                       <strong className={`text-slate-700 pb-0 mb-0`}>Address:</strong>
                       <p>{item.address}</p>
                   </div>
                   <button className={`py-2 px-3 mt-4 mx-auto w-full bg-blue-600 text-white font-semibold text-sm`}>View</button>
               </div>
           ))}
       </div>
    )
}

export default ProfileCardData;