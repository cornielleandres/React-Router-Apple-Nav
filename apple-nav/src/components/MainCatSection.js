// React
import React from 'react';

// Styles
import './MainCatSection.css';

class MainCatSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mainCat: ''
        };
    }

    componentDidMount() {
        this.setState({ 
            mainCat: this.props.match.params.mainCat
        });
    }

    componentDidUpdate() {
        if (this.state.mainCat !== this.props.match.params.mainCat) {
            this.setState({ 
                mainCat: this.props.match.params.mainCat
            });
        }
    }

    render() {
        return(
            <div className = 'main-cat-section'>
                <h2>Welcome to the { this.state.mainCat } section. Click on a { this.state.mainCat } product.</h2>
            </div>
        );
    }
}

export default MainCatSection;
