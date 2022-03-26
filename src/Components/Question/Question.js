import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <div>
                <h4>1. How React works</h4>
                <p> <b>Ans.</b> Simply React is a javascript framework/library.React is an open Source component-based front end library responsible only for the view layer of the application. React implements a virtual DOM that is basically a DOM tree representation in JavaScript.React can easily defines the logical structure of documents. React elements are easy and cheap to create.</p>
                <h4>2. Difference between Props and State.</h4>
                <p><b>Ans.</b>Pops are immutable but State is observable.
                    State can only be used in Class Components in the other hand Props have no such limitation.
                    Props are set by the parent component but Sate is genarally updated by event handller</p>
            </div>

        </div>
    );
};

export default Question;