import React from 'react';

class SearchBar extends React.Component{

    state = {term: ''};

    /* preventing form submission & sending what user typed to the parent component */
    onFormSubmit = (e) =>{
        e.preventDefault();
        this.props.userSubmit(this.state.term);
    }
    
    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image search</label>
                        <input type="text" value={this.state.term
                        } onChange={e => this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;