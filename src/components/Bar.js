import React, { useState } from 'react';

import styles from '../modules/Bar.module.css';
import styled from 'styled-components';
import Button from './Main/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faX, faBars } from '@fortawesome/free-solid-svg-icons';

const ButtonBar = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: 850px;
    z-index: 999;
    display: ${(props) => (props.userToggled ? 'flex' : 'none')};
`;

const Bar = () => {
    const [userToggled, setUserToggled] = useState(true);

    function click() {
        setUserToggled(!userToggled);
    }

    return (
        <div>
            <ButtonBar userToggled={!userToggled}>
                <Button />
            </ButtonBar>
            {userToggled ? (
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={click}
                    className={styles.bars}
                />
            ) : (
                <FontAwesomeIcon
                    icon={faX}
                    onClick={click}
                    className={styles.bars}
                />
            )}
        </div>
    );
};

export default Bar;
