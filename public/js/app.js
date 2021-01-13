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
