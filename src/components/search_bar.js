import React from 'react'

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
        this.onInputChange=this.onInoutChange.bind(this);

    }
    onInoutChange(event){
        this.setState({term:event.target.value});
        this.props.onSearchTermChange(event.target.value);
    }
  render() {
    return (
      <div className="search-bar">
        <input value={this.state.term}
        onChange={this.onInputChange}/>
      </div>
    );
  }
}
