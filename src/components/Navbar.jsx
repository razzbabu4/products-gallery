import useProduct from "../hooks/useProduct";

const Navbar = () => {
    const { setSearchQuery } = useProduct()
    return (
        <nav className="max-w-screen-xl mx-auto">
            <div className="navbar p-4 bg-stone-950/30 flex justify-between items-center rounded-b-lg">
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl text-white hidden md:flex">Product Gallery</a>
                    <a className="btn btn-ghost text-2xl text-white md:hidden">PG</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="p-2 rounded-md border border-gray-600"
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
