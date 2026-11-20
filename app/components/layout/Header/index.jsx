function Header() {
    return (
        <>
        <header className="bg-white shadow-md">
            <div className="container flex justify-between items-center h-[80px] mx-auto">
                <span className="text-2xl font-bold text-gray-800">Ecom</span>
                <nav>
                    <ul className="flex space-x-4 font-medium">
                        <li><a href="/" className="text-gray-600 hover:text-gray-800">Home</a></li>
                        <li><a href="/categories" className="text-gray-600 hover:text-gray-800">Categories</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
    )
}

export default Header;