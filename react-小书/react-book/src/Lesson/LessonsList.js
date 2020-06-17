import React, { Component } from 'react'; 

class Lesson extends Component {
    state = {}
    handleOnClickLesson(lesson, index) {
        console.log(index  + '-' + lesson.title);
    }
    render() {
        const { lesson, index} = this.props;   
        return (
            <div onClick={this.handleOnClickLesson.bind(this, lesson, index)}>
                <h1>{lesson.title}</h1>
                <p>{lesson.description}</p>
            </div>
        );
    }
}

class LessonsList extends Component {
    state = {}
    render() {
        const { lessons } = this.props;
        return (
            <div>
                {lessons.map((lesson, index) => <Lesson key={index} lesson={lesson} index={index}/>)}
            </div>
        );
    }
}

export default LessonsList;