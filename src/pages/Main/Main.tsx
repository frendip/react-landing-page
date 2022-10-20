import React, {FC} from 'react';
import MainHeader from "../../components/MainHeader/MainHeader";
import MainBody from "../../components/MainBody/MainBody";

const Main: FC = () => {
    return (
        <div>
            <MainHeader/>
            <MainBody/>
        </div>
    );
};

export default Main;