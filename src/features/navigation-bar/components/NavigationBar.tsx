const NavigationBar = () => {
 return (
  <div className="mt-10 flex items-center justify-center">
   <nav className="*:font-500 inset-shadow-lg bg-gray-neutral-400 mx-10 flex justify-between rounded-sm py-4 *:px-7 *:hover:underline">
    <a className="" href="/about">
     About
    </a>
    <a className="" href="/apply">
     Apply
    </a>
    <a className="" href="/live">
     Live
    </a>
    <a className="" href="/contact">
     Contact
    </a>
   </nav>
  </div>
 );
};

export default NavigationBar;
