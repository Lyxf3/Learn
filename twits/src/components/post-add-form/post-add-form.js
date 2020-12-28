import React, {Component} from 'react'

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    OnSubmit = (e) => {
        e.preventDefault();
        if(this.state.text){
            this.props.onAdd(this.state.text)
            this.setState({
                text : ''
            })
        }
    }

    render() {
        return (
            <form
                className="bottom-panel d-flex"
                onSubmit={this.OnSubmit}>
                <input
                    type="text"
                    placeholder="О чём вы думаете сейчас"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Добавить
                </button>
            </form>
        )
    }
}

