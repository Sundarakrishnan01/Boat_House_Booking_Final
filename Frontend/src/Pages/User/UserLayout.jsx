import propTypes from 'prop-types'
import Navbar from '../../Components/Navbar'
import '../../assets/css/home.css'
import Footer from '../../Components/Footer'
const UserLayout = ({children}) => {
    return (
        // <div className="image-bg" style={{width: "100%", marginTop: "0%"}}>
        <div>
            
            <header style={{position: 'sticky', top: 0, zIndex: 2}}>
                <Navbar/>
            </header>
            <main>
                {children}
            </main>
            <footer style={{width: '100%'}}>
                {/* <h1>Footer</h1> */}
                {/* <Footer/> */}
            </footer>
        </div>
    )
}

UserLayout.propTypes = {
    children : propTypes.node.isRequired
}

export default UserLayout