import React from 'react';
import  './styles.css'
class Home extends React.Component {

    constructor(props) {
        super(props)
        this.handleAdmin = this.handleAdmin.bind(this);
        this.handleCustomer = this.handleCustomer.bind(this);
    }

    handleAdmin(){
        this.props.history.push({pathname:'/admin'})
    }
    handleCustomer(){
        this.props.history.push({pathname:'/customer'})
    }

    render() {
        return (
            <div className='container'>
                <h3>Are you Admin or Customer</h3>
                <div>
                    <button type="button" onClick={this.handleAdmin} className="btn btn-primary wdth200">Admin</button>
                    <button type="button" onClick={this.handleCustomer} className="btn btn-warning wdth200">Customer</button>
                </div>
            </div>
        )
    }
}

export default Home;