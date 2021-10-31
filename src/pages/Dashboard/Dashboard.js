import React from 'react'
import Card from '../../components/Card/Card'

const APPS = [
    {
        id: '1',
        img: '',
        title: 'Weather App',
        description: 'App for weather based on location.'
    },
    {
        id: '2',
        img: '',
        title: 'Weather App',
        description: 'App for weather based on location.'
    },
    {
        id: '3',
        img: '',
        title: 'Weather App',
        description: 'App for weather based on location.'
    }
]

const Dashboard = (props) => {
    return (
        <section className="Dashboard">
            <h2>Welcome to the multi use app.</h2>
            <h3>Please choose 1 of the options below</h3>

            <section className="Dashboard__Apps">
                {
                    APPS.map(app => {
                            return (
                                <Card
                                    key={app.id}
                                    img={app.img}
                                    title={app.title}
                                    description={app.description}
                                />
                            )
                        }
                    )
                }
            </section>
        </section>
    )
}

export default Dashboard
