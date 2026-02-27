const UserForm = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center w-lg h-120 bg-white rounded-lg shadow-2xl">
        <h1 className={`pt-15 text-2xl`}>Welcome Back!</h1>
        <div className={`pt-15`}>
          <label>Username</label><br />
          <input className={`bg-inputForm shadow-3xl rounded-sm w-sm h-10`} type={`text`}></input>
        </div>
        <div className={``}>
          <label>Password</label><br />
          <input className={`bg-inputForm shadow-3xl rounded-sm w-sm h-10`} type={`password`}></input>
        </div>
        <div className={`flex mx-16 pt-10 justify-between`}>
          <div>
            <label className={`inline-flex items-center`}>
              <input type="checkbox" className={`rounded-full mx-2 text-pink-400 focus:ring-pink-400`} />
              <span className={`select-none`}>Remember Me</span>
            </label>
          </div>
          <div>
            <p className={`font-bold`}>Forgot your Password</p>
          </div>
        </div>
        <div>
          <button className={`bg-pink-400 mt-4 w-sm h-10 rounded-sm text-inputForm font-bold`}> LOG IN </button>
        </div>
      </div>
    </div>
  )
}

export default UserForm;