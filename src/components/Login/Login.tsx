const Login = () => {

  const handleClick = () => console.log(`you clicked me!`);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-4 h-160 w-lg bg-white rounded-lg shadow-2xl">
        <div className="text-center text-[28px] font-semibold py-6">
          Welcome Back!
        </div>
        <div className="flex flex-col items-center mx-10 py-6">
          <label className="w-full text-left text-[12px] text-slate-500 mb-1">Username</label>
          <input type="text" className="w-full rounded-lg border-primary-background bg-primary-background focus:ring-primary-background focus:border-primary-background inset-shadow-md" />
        </div>
        <div className="flex flex-col items-center mx-10 py-6">
          <label className="w-full text-left text-[12px] text-slate-500 mb-1">Password</label>
          <input type="password" className="w-full rounded-lg border-primary-background bg-primary-background focus:ring-primary-background focus:border-primary-background inset-shadow-md" />
        </div>
        <div className={`flex mx-9 py-6 justify-between`}>
          <div>
            <label className={`inline-flex items-center`}>
              <input type="checkbox" className={`rounded-full mx-2 text-gray-neutral-800 focus:ring-gray-neutral-800`} />
              <span className={`select-none`}>Remember Me</span>
            </label>
          </div>
          <div>
            <a href="#" className="font-bold">Forgot your Password</a>
          </div>
        </div>
        <div className="mx-10 py-6">
          <button onClick={() => handleClick()} className="bg-gray-neutral-500 w-full h-10.5 rounded-lg font-bold shadow-md">LOG IN</button>
        </div>
        <div className="text-center tracking-tighter pt-15 text-[12px] font-bold">
          <p className="text-gray-neutral-400">ELV © 2026</p>
        </div>
      </div>
    </div>
  )
}

export default Login;