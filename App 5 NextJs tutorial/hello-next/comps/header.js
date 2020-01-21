import Link from 'next/link';

    const style = {
        marginRight: '30px',
        color: 'blue',
        fontFamily: 'Arial',
        fontSize: '14pt',
        textDecoration: 'none',
        padding: '10px',
        backgroundColor: 'aliceblue'
    }

const Header = function(){

    return(
        <div style={{float:'right'}}>
            <Link href="/randomQuote">
                <a style={style}>Random Quote</a>
            </Link>
            <Link href="/">
                <a style={style}>Home</a>
            </Link>
            <Link href="/about">
                <a style={style}>About</a>
            </Link>
        </div>
    );
}

export default Header;