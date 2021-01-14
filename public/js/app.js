class App extends React.Component {
    state = {
        foodName: "",
        foodImage: "",
        foodCountry: "",
        foodDescription: "",
        foods: []
    }
 // TESTING TO MAKE SURE THIS WORKS
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/foods', this.state).then((response) => {
            this.setState({foods:response.data, foodName:"", foodImage:"",foodCountry:"",foodDescription:""})
        })
    }



    deleteFood = (event) => {
        axios.delete('/foods/' + event.target.value).then((response) => {
            this.setState({
                foods: response.data,
            })
        })
    }



    updateFood = (event) => {
        event.preventDefault();
        const id = event.target.id
        axios.put('/foods/' + id, this.state).then((response) => {
            this.set({
                foods: response.data,
                foodName: "",
                foodImage: "",
                foodCountry: "",
                foodDescription: ""})
        })
    }

    componentDidMount = () => {
        axios.get('/foods').then((response) => {
            this.setState({
                foods: response.data,
            })
        })
    }


    render = () => {
        return (
            <div>
                <div className="create-box">
                <h2>Create Food Post</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="foodName" onChange={this.handleChange} value={this.state.foodName}/>
                    <br/>
                    <label htmlFor="image">Image: </label>
                    <input type="text" id="foodImage" onChange={this.handleChange} value={this.state.foodImage}/>
                    <br/>
                    <label htmlFor="foodCountry">Country: </label>
                    <input type="text" id="foodCountry" onChange={this.handleChange} value={this.state.foodCountry}/>
                    <br/>
                    <label htmlFor="foodDescription">Description: </label>
                    <input type="text" id="foodDescription" onChange={this.handleChange} value={this.state.foodDescription}/>
                    <br/>
                    <input type="submit" className="btn btn-outline-primary" value="Create food"/>
                </form>
                </div>
                <ul>

                    {this.state.foods.map((food,index) => {
                        return (
                            <li key={index}>
                                Name: {food.foodName}
                                <br/>
                                {food.foodCountry}
                                <br/>
                                Description {food.foodDescription}
                                <br/>
                                <img src={food.foodImage} alt={food.foodName}/>
                                <br/>
                                <button className="btn btn-outline-danger" value={food._id} onClick={this.deleteFood}>Dislike</button>
                                <details>
                                  <summary>Edit this Food Post</summary>
                                  <form id={food._id} onSubmit={this.updateFood}>
                                    <label htmlFor="foodName">Name</label>
                                    <br/>
                                    <input type="text" id="foodName" onChange={this.handleChange} />
                                    <br/>
                                    <label htmlFor="foodImage">Image</label>
                                    <br/>
                                    <input
                                      type="text"
                                      id="foodImage"
                                      onChange={this.handleChange}/>
                                    <br/>
                                    <label htmlFor="foodCountry">Country:</label>
                                    <br/>
                                    <input
                                      type="text"
                                      id="foodCountry"
                                      onChange={this.handleChange}/>
                                    <br/>
                                    <label htmlFor="foodDescription">Description</label>
                                    <br/>
                                    <input
                                      type="text"
                                      id="foodDescription"
                                      onChange={this.handleChange}/>
                                    <br />
                                    <input className="btn btn-outline-warning" type="submit" value="Update Food" />
                                  </form>
                                  </details>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)
