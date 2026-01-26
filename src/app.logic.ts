import type { Types } from "./types";
const logic={
    addRecord(
        records:Types["FormData"][],
        record:Types["FormData"]
    ):Types["FormData"][]{
        return [...records,record];
    },
    updateRecord(
        records:Types["FormData"][],
        index:number,
        record:Types["FormData"]

    ):Types["FormData"][]{
        return records.map((r,i)=>(i===index?record:r));
    },
    deleteRecord(
        records:Types["FormData"][],
        index:number
    ):Types["FormData"][]{
        return records.filter((_,i)=>i!==index);
    }
}
export default logic;