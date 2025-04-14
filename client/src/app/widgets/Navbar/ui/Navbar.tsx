export default function Navbar(): JSX.Element {
  return (
    <div>
      <div className=" w-1/5 h-8">
        <form className="group relative">
          <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
          </svg>
          <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Search anything"/>
        </form>
      </div> 
      <div className="w-5 h-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="w-6 h-6">
          <path fill="#231f20" d="M23.83,20l-1.73-.7A3.22,3.22,0,0,1,21.05,17c0-2.29-.05-6.22-.05-6.37V8.92A7.76,7.76,0,0,0,13.43,1H11.57A7.76,7.76,0,0,0,4,8.92v1.73C4,10.8,4,14.73,4,17a3.19,3.19,0,0,1-1.06,2.31L1.17,20a.49.49,0,0,0-.31.55.5.5,0,0,0,.49.41H8.07c.31,1.69,2.17,3,4.43,3s4.12-1.31,4.43-3h6.72a.5.5,0,0,0,.49-.41A.49.49,0,0,0,23.83,20ZM12.5,23a3.43,3.43,0,0,1-3.43-2h6.86A3.43,3.43,0,0,1,12.5,23ZM3.66,20A4.21,4.21,0,0,0,5,17c0-2.31,0-6.24,0-6.39V8.92A6.76,6.76,0,0,1,11.57,2h1.86A6.76,6.76,0,0,1,20,8.92v1.73c0,.15,0,4.08.05,6.39a4.18,4.18,0,0,0,1.3,3Z"/>
        </svg>
      </div>
    </div>
  );
}