function headerNav(){
    document.write(`
    <div id="logo">
        <a href=./home.html target="_self"><h1>JS's Blog</h1></a>
    </div>
    <div id="headNavBar">
        <img id="navMenu" src="img/bar.png" alt="bar">
        <ul id="headerNav">
            <li class="nav"><a href=./login.html target="_self">LOGIN</a></li>
            <li class="nav"><a href=./contact.html target="_self">CONTACT</a></li>
            <li class="nav"><a href=./posts.html target="_self">POSTS</a></li>
            <li class="nav"><a href=./about.html target="_self">ABOUT</a></li>
            <li class="nav"><a href=./home.html target="_self">HOME</a></li>
        </ul>
        <ul id="navMenuList">
            <li class="navList"><a href=./home.html target="_self">HOME</a></li>
            <li class="navList"><a href=./about.html target="_self">ABOUT</a></li>
            <li class="navList"><a href=./posts.html target="_self">POSTS</a></li>
            <li class="navList"><a href=./contact.html target="_self">CONTACT</a></li>
            <li class="navList"><a href=./login.html target="_self">LOGIN</a></li>
        </ul>
    </div>
`);
}