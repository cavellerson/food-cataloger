class App extends React.Component {
    state = {
        foodName: "",
        foodImage: "",
        foodCountry: "",
        foodDescription: "",
        foods: []
    }

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

    componentDidMount = () => {
        axios.get('/foods').then((response) => {
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


    render = () => {
        return (
            <div>
                <h2>Create Food Post</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="foodName" onChange={this.handleChange} value={this.state.foodName}/>
                    <br/>
                    <label htmlFor="image">Image: </label>
                    <input type="text" id="foodImage" onChange={this.handleChange} value={this.state.foodImage}/>
                    <br/>
                    <label htmlFor="foodCountry">Species: </label>
                    <input type="text" id="foodCountry" onChange={this.handleChange} value={this.state.foodCountry}/>
                    <br/>
                    <label htmlFor="foodDescription">Available for Adoption: </label>
                    <input type="text" id="foodDescription" onChange={this.handleChange} value={this.state.foodDescription}/>
                    <br/>
                    <input type="submit" value="Create food"/>
                </form>
                <h2>Edit Me</h2>
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
                                <button value={food._id} onClick={this.deleteFood}>Dislike</button>
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
                                    <input type="submit" value="Update Food" />
                                  </form>
                                  </details>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

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

    componentDidMount = () => {
        axios.get('/foods').then((response) => {
            this.setState({
                foods: response.data,
            })
        })
    }

    updateAnimal = (event) => {
        event.preventDefault();
        const id = event.target.id
        axios.put('/animals/' + id, this.state).then((response) => {
            this.set({
                foods: response.data,
                foodName: "",
                foodImage: "",
                foodCountry: "",
                foodDescription: ""})
        })
    }


    render = () => {
        return (
            <div>
                <h1>Create Food</h1>

            </div>

        )
    }


}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)
