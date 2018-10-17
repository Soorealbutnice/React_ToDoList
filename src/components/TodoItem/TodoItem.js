import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind('styles');

class TodoItem extends Component {
    render(){
        const {done, children, onToggle, onRemove} = this.props;
        //비구조화 할당 문법으로 props 안에 있는 값들의 레퍼런스를 만들어 줌.
        //props를 사용할 때마다 this.props를 붙이지 않고 생략해 사용할 수 있다.

        return (
            <div className={cx('todo-item')} onClick={onToggle}>
                <input className={cx('tick')} type="checkbox" checked={done} readOnly/>
                <div className={cx('text', {done})}>{children}</div>
                <div className={cx('delete')} onClick={(e) => {
                    onRemove();
                    e.stopPropagation();
                    }
                }>[지우기]</div>
            </div>
        );
    }
}

export default TodoItem;