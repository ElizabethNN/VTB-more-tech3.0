import * as React from "react";
import SearchInput from "../SearchInput/SearchInput";

function CreateData() {
    return (
        <div>
            <SearchInput text={"Введите название фичи"}/>
            <SearchInput text={"Введите правило"}/>
        </div>
    );
}

export default CreateData;
