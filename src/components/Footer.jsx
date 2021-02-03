import React from "react";

function Footer() {
    var year = new Date().getFullYear();
    return (
        <footer>
            Copyright &copy; {year}
        </footer>
    );
}

export default Footer;