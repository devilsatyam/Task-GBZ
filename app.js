class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchTerm: ''
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/data')
            .then(response => response.json())
            .then(data => this.setState({ data }))
            .catch(error => console.error('Error fetching data:', error));
    }

    handleSearch = (event) => {
        this.setState({ searchTerm: event.target.value });
    }

    render() {
        const filteredData = this.state.data.filter(item =>
            item.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        );

        return (
            <div>
                <h2>Data from Backend</h2>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.state.searchTerm}
                    onChange={this.handleSearch}
                    className="form-control mb-3"
                />
                <ul className="list-group">
                    {filteredData.map(item => (
                        <li key={item.id} className="list-group-item">{item.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
