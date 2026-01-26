import { element } from "../utils/dom.js";
import appState from "../app.state.js";
import { renderApp } from "./App.js";
import storage from "../app.storage.js";
import Modal from "./Modal.js";
//import Modal from "./Modal.js";

function createCell(
    row:HTMLTableRowElement,
    text:string
):void{
    const td=element("td");
    td.textContent=text;
    row.appendChild(td);
}
//deleteBtn
export function Table():HTMLElement{
    const tableDiv=element("div");
    tableDiv.className="table-section";

    const heading=element("di");
    heading.className="table-heading";
    heading.textContent="Submitted Reviews";
    tableDiv.appendChild(heading);

    const container=element("div");
    container.className="table-container";
    tableDiv.appendChild(container);

    const table=element("table") as HTMLTableElement;
    table.id="recordsTable";
    container.appendChild(table);

    const thead=element("thead");
    const headerRow=element("tr");

    const headers=[
        "Product Name",
        "Product SKU",
        "Purchase Date",
        "Overall Rating",
        "Quality Rating",
        "Value for money Rating",
        "Delivery Rating",
        "Customer service Rating",
        "Review Title",
        "Detailed Review",
        "Review Type",
        "Product Tags",
        "Recommend Product",
        "Would Buy Again",
        "Make Review Public",
        "Agree to Terms",
        "Actions"
    ];
    headers.forEach(text=>{
        const th=element("th");
        th.textContent=text;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead)

    const tbody=element("tbody");

    appState.state.records.forEach((record,index)=>{
        const row=element("tr") as HTMLTableRowElement;

        createCell(row,record.name);
        createCell(row,record.sku);
        createCell(row,record.date);
        createCell(row,"★".repeat(record.ratings.overall));
        createCell(row,"★".repeat(record.ratings.quality));
        createCell(row,"★".repeat(record.ratings.value));
        createCell(row,"★".repeat(record.ratings.delivery));
        createCell(row,"★".repeat(record.ratings.service));
        createCell(row,record.title);
        createCell(row,record.detail);
        createCell(row,record.reviewType);
        createCell(row,record.tags.join(", "));
        createCell(row,record.recommend);
        createCell(row,record.wouldBuyAgain?"Yes":"No")
        createCell(row,record.makeReviewPublic?"Yes":"No")
        createCell(row,record.agreeToTerms?"Yes":"No") 
        const actionId=element("td");
        const editBtn=element("button") as HTMLButtonElement;
        editBtn.textContent="Edit";
        editBtn.addEventListener("click",()=>{
            appState.editRecord(index);
            renderApp();
        });
        const deleteBtn=element("button") as HTMLButtonElement;
        deleteBtn.textContent="Deletet";
        deleteBtn.addEventListener("click",()=>{
            Modal.show("Are you sure you want to delete this record?",()=>{
                appState.deleteRecord(index);
                storage.save();
                Modal.show("Record Deleted successfully")
                renderApp();

            })
            
           
        });
        actionId.appendChild(editBtn);
        actionId.appendChild(deleteBtn);
        row.appendChild(actionId);
        tbody.appendChild(row);

    })
    table.appendChild(tbody)
    container.appendChild(table)
    tableDiv.appendChild(container);
    return tableDiv;
}