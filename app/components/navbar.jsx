export function Navbar() {
    return (
        <nav className="bg-amber-700 text-white p-4 flex justify-between items-center">
        <h3>My React Sandbox</h3>
            <ul className="flex space-x-4">
                <li className="hover:text-purple-300 hover:underline"><a href="/">Home</a></li>
                <li className="hover:text-purple-300 hover:underline"><a href="/about">About</a></li>
                <li className="hover:text-purple-300 hover:underline"><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}