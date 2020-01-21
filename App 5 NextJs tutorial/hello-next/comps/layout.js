import Header from './header';

const Style = {
    margin: '20px',
    marginRight: 'auto',
    border: '1px solid black',
    padding: '20px'
}

const Layout = (props)=>{

    return (
        <div style={Style}>
            <Header/>
            {props.children}
        </div>
    );
}

export default Layout;