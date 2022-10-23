import React, {FC} from 'react';
import MainHeader from "../../components/MainHeader/MainHeader";
import MainBody from "../../components/MainBody/MainBody";
import MainFooter from "../../components/MainFooter/MainFooter";

const Main: FC = () => {
    return (
        <div>
            <MainHeader/>
            <MainBody/>
            <MainFooter/>
        </div>
    );
};

export default Main;