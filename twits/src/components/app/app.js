import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

import styled from "styled-components";

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                2,
                "dadsa",
                {label:"Going to learn React", important: true, like: false, id: "fdafsdsfsdfgsd"},
                {label:"That is so good", important: false, like: false, id: "fdafsdsfsd"},
                {label:"I need a break...", important: false, like: false, id: "fdasgfdsd"}
            ],
            term: '',
            filter: 'all'
        }
    }
    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex((el) => el.id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            like: false,
            id: this.passwordGen()
        }

        const {data} = this.state;

        while(data.findIndex((el) => el.id === newItem.id) !== -1){
            newItem.id = this.passwordGen();
        }

        console.log(newItem.id)
        this.setState(({data}) => {
            const newArr = [...data, newItem]

            return {
                data: newArr
            }
        })
    }

    passwordGen = () => {
        const passwordLength = ~~(Math.random() * 2 + 4);
            const digits = '0123456789abcdefghijklmnopqrstuvwxyzQWERTYUIOPASDFGHJKLZXCVBNM';
        let password = '';
        while (password.length <= passwordLength) {
            password += digits[~~(Math.random() * digits.length)];
        }
        return password;
    }

    onToggleImportant = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex((el) => el.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data : newArr
            }
        })
    }

    onToggleLiked = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex((el) => el.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data : newArr
            }
        })
    }

     isEmpty = (obj) => {
        for(let key in obj)
        {
            return true;
        }
        return false;
    }

    searchPost(items, term) {
        if (term.length === 0 ) {
            return items
        }
        return items.filter((el) => {
            return el.label.indexOf(term) !== -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }


    filterPost = (items, filter) => {
        switch (filter) {
            case "like":
                return items.filter(item => item.like);
            case "important":
                return items.filter(item => item.important);
        }
        return items
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;

        const liked = data.filter(item => item.like).length;
        const allPosts = data.filter((item) => typeof item === 'object' && this.isEmpty(item))

        const visiblePosts = this.filterPost(this.searchPost(allPosts, term), filter)

        return (
            <AppBlock>
                    <AppHeader
                liked={liked}
                allPosts={allPosts.length}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}/>
                <PostAddForm
                onAdd={this.addItem}/>
            </AppBlock>
        )
    }
}

