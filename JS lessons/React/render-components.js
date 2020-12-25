class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years:26,
            nationality: "uk"
        }
        //1 this.nextYear = this.nextYear.bind(this);
        //2 this.nextYear = () => {
        //     this.setState(state => ({
        //         years: ++state.years
        //     }))
        // }
    }

    nextYear = () => {
        // this.state.years++ неправильно
        this.setState(state => ({
            years: ++state.years
        }))
    }

    //1 nextYear() {
    //     // this.state.years++ неправильно
    //     this.setState(state => ({
    //         years: ++state.years
    //     }))
    // }
    render() {
        const {name, surname, link} = this.props
        const {years} = this.state
        return (
            <>
                <button onClick={this.nextYear}>++</button>
                <h1>My name is {name}, surname - {surname}, years - {years}</h1>
                <a href={link}>My profile</a>
            </>
        )
    }
}


const All = () => {
    return(
        <>
            <WhoAmI name="John" surname="Bob" link="facebook.com"/>,
            <WhoAmI name="Dima" surname="Bob" link="facebook.com"/>,
            <WhoAmI name="Ivan" surname="Bob" link="facebook.com"/>,
        </>
    )
}