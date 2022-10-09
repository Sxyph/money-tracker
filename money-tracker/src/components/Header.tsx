import React from "react";
import Link from "./Link";

const Header = () => {
    return (
        <div className="ui menu">
            <Link href='/' className='item'>
                Home
            </Link>
            <Link href='/data' className='item'>
                Data
            </Link>
        </div>
    );
};

export default Header;