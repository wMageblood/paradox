const Login = () => {
  const handleClick = () => console.log(`you clicked me!`);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-160 w-lg rounded-lg bg-white p-4 shadow-2xl">
        <div className="py-6 text-center text-[28px] font-semibold">
          Welcome Back!
        </div>
        <div className="mx-10 flex flex-col items-center py-6">
          <label className="mb-1 w-full text-left text-[12px] text-slate-500">
            Username
          </label>
          <input
            type="text"
            className="border-primary-background bg-primary-background focus:ring-primary-background focus:border-primary-background inset-shadow-md w-full rounded-lg"
          />
        </div>
        <div className="mx-10 flex flex-col items-center py-6">
          <label className="mb-1 w-full text-left text-[12px] text-slate-500">
            Password
          </label>
          <input
            type="password"
            className="border-primary-background bg-primary-background focus:ring-primary-background focus:border-primary-background inset-shadow-md w-full rounded-lg"
          />
        </div>
        <div className={`mx-9 flex justify-between py-6`}>
          <div>
            <label className={`inline-flex items-center`}>
              <input
                type="checkbox"
                className={`text-gray-neutral-800 focus:ring-gray-neutral-800 mx-2 rounded-full`}
              />
              <span className={`select-none`}>Remember Me</span>
            </label>
          </div>
          <div>
            <a href="#" className="font-bold">
              Forgot your Password
            </a>
          </div>
        </div>
        <div className="mx-10 py-6">
          <button
            onClick={() => handleClick()}
            className="bg-gray-neutral-500 h-10.5 w-full rounded-lg font-bold shadow-md"
          >
            LOG IN
          </button>
        </div>
        <div className="pt-15 text-center text-[12px] font-bold tracking-tighter">
          <p className="text-gray-neutral-400">ELV © 2026</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
