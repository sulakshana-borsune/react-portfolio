import React from 'react'
import Navbar from '../../Components/Navbar'
import PortfolioCard from '../../Components/PortfolioCard'
import { Container } from 'reactstrap'

const Portfolio = () => {

    const state = {
        parseSuperchargers: {
            title: 'parseSuperchargers',
            subtitle: 'Eco-friendly App',
            description: 'An app built for Electric car owners. Ease of mind while using parseSupercharger.',
            link: 'https://sulakshana.borsune.github.io/parseSuperchargers/'
        },
        eFlow: {
            title: 'Budget Tracker',
            subtitle: 'Budget calculation',
            description: "Calculate Taxes",
            link: 'https://tranquil-shore-65867.herokuapp.com/'
        },
        googleBooks: {
            title: 'MyRecipeBox',
            subtitle: 'Recipes creator',
            description: "New recipes can be added and saved in your own account",
            link: 'https://rocky-castle-73145.herokuapp.com/'
        }
    }

    return (
        <>
            <Navbar />
            <Container className="d-flex justify-content-center flex-wrap">
                <PortfolioCard
                    title={state.parseSuperchargers.title}
                    subtitle={state.parseSuperchargers.subtitle}
                    description={state.parseSuperchargers.description}
                    link={state.parseSuperchargers.link}
                />
                <PortfolioCard
                    title={state.eFlow.title}
                    subtitle={state.eFlow.subtitle}
                    description={state.eFlow.description}
                    link={state.eFlow.link}
                />
                <PortfolioCard
                    title={state.googleBooks.title}
                    subtitle={state.googleBooks.subtitle}
                    description={state.googleBooks.description}
                    link={state.googleBooks.link}
                />
            </Container>
        </>
    )
}

export default Portfolio
