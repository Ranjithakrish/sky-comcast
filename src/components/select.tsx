import { SelectInput } from "@/sylesheets/styles";
import React from "react";

export default function SelectDetail({ setSearchCateogry }: { setSearchCateogry: any }) {
    return (
        <SelectInput onChange={(e: any) => setSearchCateogry(e.target.value)}>
            <option value="option">Choose an Option</option>
            <option value="cateogry">Cateogry</option>
            <option value="artist">Artist</option>
        </SelectInput>
    );
}
