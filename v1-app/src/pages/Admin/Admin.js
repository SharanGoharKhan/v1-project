import React from 'react'
import Header from '../../UI/Header/Header'
import ItemInputForm from '../../components/Admin/ItemInputForm/ItemInputForm'
import ItemList from '../../components/Admin/ItemList/ItemList'

class Admin extends React.Component { 
    render() {
        return (
            <div className='container--customer'>
                <div className='content'>
                    <Header title='Admin Interface' />
                    <main>
                        <ItemInputForm  />
                        <ItemList
                        />
                    </main>
                </div>
            </div>
        )
    }
}

export default Admin;