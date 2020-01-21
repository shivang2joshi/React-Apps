import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class SquareClassComponent extends React.Component {
    //doesnt need a constructor or state here

    render() {
        return (
            //arrow function is neccessory here
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

//Square as a function Component
function Square(props) {

    return (
        <button className={"square" + (props.highlighted ? props.highlighted : "")} onClick={() => props.onClick()} >
            {props.value}
        </button>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

class Board extends React.Component {

    // Lifting the component up by removing state here and pasting it to parent component
    // with an extended feature "History".

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         squares: Array(9).fill(null),
    //         nextTurn: 'X'
    //     }
    // };

    renderSquare(i) {
        return <Square key={i} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            history: [
                { squares: Array(9).fill(null) }
            ],
            nextTurn: 'X'
        }
    };


    handleClick(i) {
        const history = this.state.history;
        const current = history[history.length-1];
        let newSquares = current.squares.slice(/* [start,end) */);    //makes a copy and returns a new object

        if (current.squares[i] || calculateWinner(current.squares))
            return;

        let turn = (this.state.nextTurn == 'X' ? 'O' : 'X');

        newSquares[i] = this.state.nextTurn;    //current
        this.setState({
            history: history.concat([{ squares: newSquares }]), //concat will create another copy and return
            nextTurn: turn, //updated
        });
    }

    jumpTo(i){
        //just change the damn history!
        this.setState({
            history: this.state.history.slice(0,i+1),
            nextTurn: i%2 == 0 ? 'X' : 'O'
        });
    }

    highlightSquares(squares){


    }

    render() {
        const history = this.state.history;
        const current = history[history.length - 1];
        const winner = calculateWinner(current.squares);
        let status;

        if (winner){
            status = "WINNER : " + winner;
            // this.highlightSquares(squares);
        }
        else
            status = this.state.nextTurn + " will play.";

        const moves = history.map(
            (arrayelement, index) => {
                const move = index ? "Go to move " + index : "Start Over";
                return (
                    <li key={index} >
                        <button onClick = {() => this.jumpTo(index)} > { move }</button>
                    </li>
                );
            }
        );

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
