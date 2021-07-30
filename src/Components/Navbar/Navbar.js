import React from 'react'

function Navar() {
    return (
        <div>
            <header>
                <div className="netflixLogo">
                    <a id="logo" href="#home">
                        <img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true" alt="Logo" />
                    </a>
                </div>
                <nav className="main-nav">
                    <a href="/">Home</a>
                    <a href="/">TV Shows</a>
                    <a href="/">Movies</a>
                    <a href="/">Originals</a>
                    <a href="/">Recently Added</a>
                </nav>
                <nav className="sub-nav">
                    <a href="/"><i className="fas fa-search sub-nav-logo"></i></a>
                    <a href="/"><i className="fas fa-bell sub-nav-logo"></i></a>
                    <a href="/">Account</a>
                </nav>
            </header>
        </div>
    )
}

export default Navar
