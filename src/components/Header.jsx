import React from "react";

const Header = () => {
	return (
		<header className="w-full z-10 flex items-center justify-between px-8 py-4 shadow-md bg-dark-blue">
    <div className="flex items-center justify-between w-full">
        <span><img src="logo-2.png" className="w-25 h-10" alt="" /></span>
        <nav className="flex flex-col sm:flex-row sm:justify-between">
            <ul className="flex flex-col sm:flex-row gap-8 justify-between">
                <li><a href="/" className="text-lg hover:text-light-teal text-off-white">Home</a></li>
                <li><a href="/books" className="text-lg hover:text-light-teal text-off-white">Books</a></li>
                <li><a href="/videos" className="text-lg hover:text-light-teal text-off-white">Videos</a></li>
                <li><a href="/articles" className="text-lg hover:text-light-teal text-off-white">Articles</a></li>
            </ul>
        </nav>
    </div>
</header>
	);
};

export default Header;
