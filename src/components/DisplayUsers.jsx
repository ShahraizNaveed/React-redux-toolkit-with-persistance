import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import { MdDeleteForever } from 'react-icons/md'
import { removeUser } from '../store/slices/UserSlice';

const DisplayUsers = () => {
    const data = useSelector((state) => state.users)
    const dispatch = useDispatch();

    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }

    return (
        <Wrapper>
            <div className='left-align'>
                {
                    data.map((user, id) => {
                        return (
                            <>
                                <div className='display'>
                                    <li key={id}>
                                        {user}
                                    </li>
                                    <button className='btn-delete' onClick={() => deleteUser(id)}>
                                        <MdDeleteForever className='delete-icon' />
                                    </button>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
.display {
    display: flex;
    justify-content: space-between;
}

.display .left-align{
    text-align: left;
}

.btn-delete {
    border: none;
    background: transparent;
}

`

export default DisplayUsers