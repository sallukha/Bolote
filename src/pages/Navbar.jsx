const Navbar = () => {

    return (

        <div className="mx-auto flex items-center justify-between py-4 px-6">
            <div className="text-2xl font-bold text-gray-800">
                <h1>Bolote</h1>
            </div>
            <nav className="flex items-center mx-[600px]">
                <ul className="flex gap-16 mr-8 ">
                    <li className="text-black-600  cursor-pointer ">Home</li>
                    <li className="text-black-600  cursor-pointer ">Product</li>
                    <li className="text-black-600  cursor-pointer">Pricing</li>
                </ul>

            </nav>
        </div>

    );
}

export default Navbar;
